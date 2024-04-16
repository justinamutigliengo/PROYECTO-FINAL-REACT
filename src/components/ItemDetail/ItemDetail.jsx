import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";

export default function ItemDetail({ product }) {
  const { carrito, agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < product.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <h3 className="titulo">{product.title}</h3>
        <img src={product.image} alt={product.title} />
        <div>
          <p className="descripcion">{product.descripcion}</p>
          <p className="categoria">Categoría: {product.category}</p>
          <p className="precio">${product.price}</p>

          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(product, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
}
