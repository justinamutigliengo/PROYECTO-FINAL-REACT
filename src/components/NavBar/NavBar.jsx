import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to={"/"} className="navbar-brand">
              <h1>OLIVIA</h1>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page">
                    <Link to={"/products"}>Productos</Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page">
                    <Link to={"/products/tops"}>Tops</Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page">
                    <Link to={"/products/pantalones"}>Pantalones</Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page">
                    <Link to={"/products/sweaters"}>Sweaters</Link>
                  </button>
                </li>
              </ul>
            </div>
            <li>
              <CartWidget />
            </li>
          </div>
        </nav>
      </header>
    </>
  );
}
