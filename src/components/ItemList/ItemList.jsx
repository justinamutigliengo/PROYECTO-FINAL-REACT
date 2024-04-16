export default function ItemList({ products, handleClick }) {
  return (
    <div>
      <section>
        {products.map((product) => (
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
  );
}
