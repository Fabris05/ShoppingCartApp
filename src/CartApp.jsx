import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";

export const CartApp = () => {

    const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();

    return (
        <>
            <div className= 'container my-4'>
                <h1>CartApp</h1>
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
