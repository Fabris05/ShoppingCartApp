import { useNavigate } from "react-router-dom";

export const ProductCardView = ({handler, id, name, description, price}) => {
    
    const navigate = useNavigate();

    // Agregamos productos al carro de compras recibiendo el objeto como parametro de la funcion
    const onAddProduct = (product) => {
        console.log(product);
        handler(product);
        navigate('/cart');
    }
    
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-tittle">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">S/. {price}</p>
                    
                    {/* enviamos los valores del carro de compras con el botón */}
                    <button className="btn btn-primary" onClick={() => onAddProduct({id, name, description, price})}>Agregar</button>
                </div>
            </div>
        </>
    );
};
