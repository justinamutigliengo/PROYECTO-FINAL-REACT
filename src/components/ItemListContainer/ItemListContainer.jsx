import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
// import { getProducts } from "../../asyncMock";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  const { id, category } = useParams();

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const productosRef = collection(db, "products");

    const q = category
      ? query(productosRef, where("category", "==", category))
      : productosRef;

    getDocs(q).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });

    // getProducts().then((data) => {
    //   setProducts(data);
    //   if (category) {
    //     setFilteredProducts(
    //       data.filter((product) => product.category === category)
    //     );
    //   } else {
    //     setFilteredProducts(data);
    //   }
    // });
  }, [category]);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div>
        <section>
          <h1>Productos {category ? `de ${category}` : ""}</h1>
          <h2 className="text-center">{greeting}</h2>
        </section>
        <ItemList products={products} handleClick={handleClick} />
      </div>
    </>
  );
}
