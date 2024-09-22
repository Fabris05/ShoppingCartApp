// Convertimos los datos de la sesion a un objeto de JS
// ' || [] ' si la session está vacia, se muestra un ojbeto vacío

import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/ItemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    useEffect(() => {
        // La sessión solo almacena datos String, es por ello que usamos 'JSON.stringify(carItems)'
        sessionStorage.setItem('cart', JSON.stringify(cartItems));

    },[cartItems])

    // Agregamos productos al carro de compras
    const handlerAddProductCart = (product) =>{

        // buscamos y validamos con el metodo find que el id no se encuentre
        const hasItem = cartItems.find( (item) => item.product.id === product.id );

        if(hasItem){
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );
        }else{
            dispatch(
                {
                    type: AddProductCart,
                    payload: product,
                }
            );
        }
    }

    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,
            }
        );
    }

    // Devolvemos el objeto cartItem, y sus métodos
    return{
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
}