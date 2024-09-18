import { useEffect, useState } from "react";
import { calculateTotal } from "../service/productService";

export const CartView = ({ handlerDetele ,items }) => {
    
    const [total, setTotal] = useState(0);

    // const onChangeTotal = () => {
    //     setTotal = (total + total);
    // }

    const onDeleteProduct = (id) => {
        // console.log("Eliminando producto")
        handlerDetele(id);
    }

    useEffect(() => {

        // calculamos el total con la funcion del service
        setTotal(calculateTotal(items));

        // La sessión solo almacena datos String, es por ello que usamos 'JSON.stringify(objeto)
        sessionStorage.setItem('cart', JSON.stringify(items));
        
    },[items])
    
    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover">
                <thead className="">
                    <tr>
                        <th>Producto</th>
                        <th className="text-center">Precio</th>
                        <th className="text-center">Cantidad</th>
                        <th className="text-center">Total</th>
                        <th className="text-center">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.product.id}>
                            <td className="text-center">{ item.product.name }</td>
                            <td className="text-center">{ item.product.price }</td>
                            <td className="text-center">{ item.quantity }</td>
                            <td className="text-center">{ item.quantity * item.product.price }</td>
                            <td className="text-center"> 
                                <button 
                                className="btn btn-sm btn-danger" 
                                onClick={() => onDeleteProduct(item.product.id)}
                                >
                                    Eliminar
                                </button> 
                            </td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">
                            Total
                        </td>
                        <td colSpan="2" className="text-start fw-bold">
                            {total}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    );
};
