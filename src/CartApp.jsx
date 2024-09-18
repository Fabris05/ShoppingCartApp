import { useEffect, useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

// Convertimos los datos de la sesion a un objeto de JS
// ' || [] ' si la session está vacia, se muestra un ojbeto vacío

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const CartApp = () => {
    
    console.log(initialCartItems);

    const [cartItems, setCartItems] = useState(initialCartItems);

    const [theme, setTheme] = useState("bg bg-white");

    const [stateButton, setStateButton] = useState(true);

    const handlerButton = () => {
        if(stateButton){
            setTheme("bg bg-dark");
        }else{
            setTheme("bg bg-white");
        }

        setStateButton(!stateButton);
    }

    // Agregamos productos al carro de compras

    const handlerAddProductCart = (product) =>{

        // buscamos y validamos con el metodo find que el id no se encuentre
        const hasItem = cartItems.find( (item) => item.product.id === product.id );

        if(hasItem){

            // setCartItems([
            //     // Filtramos el item que ya se encuentra en el arreglo y lo quitamos para agregarlo con la cantidad actualizada
            //     ...cartItems.filter( (item) => item.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])

            setCartItems(
                cartItems.map((item) => {
                    if(item.product.id === product.id){
                        item.quantity = item.quantity + 1;
                    }
                    return item;
                })
            );

        }else{
            setCartItems([...cartItems,
                {
                    product,
                    quantity: 1,
                }
            ])
        }
    }

    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter( (item) => item.product.id !== id),
        ]);
    }

    return (
        <>
            <div className={`container ${theme} my-4`}>
                <h1>CartApp</h1>
                <button className="btn btn-primary" onClick={ () => handlerButton() }>{ stateButton ? "Claro" : "Oscuro"}</button>
                <CatalogView handler = {handlerAddProductCart} />
                {
                    //El signo ? verifica que aemas sea distinto de null

                    cartItems?.length <= 0 || (

                        // Si la lista cardItems es mayor que 0 se mostrará el div del carro

                        <div className="my-4 w-50">
                            <CartView items={cartItems} handlerDetele = { handlerDeleteProductCart }/>
                        </div>
                    )
                }
                
            </div>
        </>
    );
};
