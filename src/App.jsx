import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { useState } from "react"; */
// import CartContext from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  // const [carrito, setCarrito] = useState([]);

  return (
    <>
      {/* <CartContext.Provider value={(carrito, setCarrito)}> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting="Productos" />}
          />
          {/* <Route exact path="/category:id" element={<ItemListContainer />} /> */}
          {/* <Route
            exact
            path="product/:prodId"
            element={<ItemDetailContainer />}
          /> */}

          {/* <Route exact path="product/:id" element={<ItemDetailContainer />} /> */}
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route
            exact
            path="/products/:category"
            element={<ItemListContainer />}
          />

          <Route exact path="product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      {/* </CartContext.Provider> */}
    </>
  );
}

export default App;
