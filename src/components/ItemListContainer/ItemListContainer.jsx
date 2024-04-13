import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../asyncMock";

export default function ItemListContainer({ greeting }) {
  const { id, category } = useParams();

  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

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
      {/* <ItemList products={products} /> */}
      <div>
        <div>
          <section>
            <h1>Productos {category ? `de ${category}` : ""}</h1>
            <h2 className="text-center">{greeting}</h2>
          </section>
          <section>
            {filteredProducts.map((product) => (
              <article key={product.id}>
                <h4>{product.title}</h4>
                <img src={product.image} alt={product.title} />
                <p> $ {product.price}</p>
                <button onClick={() => handleClick(product.id)}>
                  Ver detalles
                </button>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
