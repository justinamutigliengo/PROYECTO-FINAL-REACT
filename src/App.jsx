import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/Carrito/Carrito";

function App() {
  return (
    <>
      <CartProvider>
        {/* {" "} */}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<ItemListContainer greeting="New Arrivals" />}
            />
            {/* <Route exact path="/category:id" element={<ItemListContainer />} /> */}
            {/* <Route
            exact
            path="product/:prodId"
            element={<ItemDetailContainer />}
          /> */}
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route
              exact
              path="/products/:category"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/product/:id"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
