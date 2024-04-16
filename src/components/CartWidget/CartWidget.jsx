import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export default function CartWidget() {
  const { cantidadEnCarrito } = useContext(CartContext);
  return (
    <>
      <Link to="/carrito" className="ml-auto">
        <span className="cart-icon">
          <ShoppingCartIcon />
        </span>
        <span>{cantidadEnCarrito()}</span>
      </Link>
    </>
  );
}
