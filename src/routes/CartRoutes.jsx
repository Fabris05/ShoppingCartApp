import { Navigate, Route, Routes } from "react-router-dom";
import { CatalogView } from "../components/CatalogView";
import { CartView } from "../components/CartView";

export const CartRoutes = ({cartItems, handlerAddProductCart, handlerDeleteProductCart}) => {
    return (
        <>
            <Routes>
                <Route
                    path="catalog"
                    element={<CatalogView handler={handlerAddProductCart} />}
                />
                <Route
                    path="cart"
                    element={
                        //El signo ? verifica que aemas sea distinto de null
                        cartItems?.length <= 0 ? (
                            <div className="alert alert-warning">
                                No hay productos en el carrito
                            </div>
                        ) : (
                            // Si la lista cardItems es mayor que 0 se mostrará el div del carro
                            <div className="my-4 w-50">
                                <CartView
                                    items={cartItems}
                                    handlerDetele={handlerDeleteProductCart}
                                />
                            </div>
                        )
                    }
                />
                <Route path="/" element={<Navigate to={"/catalog"} />} />
            </Routes>
        </>
    );
};
