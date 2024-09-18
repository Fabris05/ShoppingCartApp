import { products } from "../data/products"

export const getProducts = () => {
    return products;
}

export const calculateTotal = (items) => {
    // reduce permite iterar y sumar los totales de los items que se agregan
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity
        , 0);
}