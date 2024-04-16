import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../asyncMock";

export default function ItemListContainer({ greeting }) {
  const { id, category } = useParams();

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);



  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      if (category) {
        setFilteredProducts(
          data.filter((product) => product.category === category)
        );
      } else {
        setFilteredProducts(data);
      }
    });
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
        <ItemList products={filteredProducts} handleClick={handleClick} />
      </div>
    </>
  );
}
