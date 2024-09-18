import { useEffect, useState } from "react";
import { getProducts } from "../service/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({ handler }) => {

    // Asignamos el estado de los productos como un objeto
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        // Obtebemos los datos del json, solo cuando se cargue la pagina por primera vez
        setProducts(getProducts());
    }, []);

    return (
        <>
            <div className="row">
                {products.map((product) => (
                    <div className="col-4 my-2" key={product.id}>
                        <ProductCardView
                            handler = { handler }
                            id= {product.id}
                            name= {product.name}
                            description= {product.description}
                            price= {product.price}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};
