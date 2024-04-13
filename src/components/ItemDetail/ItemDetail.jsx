import { useContext, useState } from "react";
// import ItemCount from "./ItemCount"
// import { CartContext } from "../context/CartContext";

export default function ItemDetail({ item }) {
  // const { carrito, agregarAlCarrito } = useContext(CartContext);
  //   const { carrito, setCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.image} alt={item.title} />
        <div>
          <h3 className="titulo">{item.title}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoría: {item.category}</p>
          <p className="precio">${item.price}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
}
