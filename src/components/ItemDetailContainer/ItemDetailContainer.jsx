import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(id));
  }, [id]);

  return (
    <>
      <div>{product && <ItemDetail product={product} />}</div>
    </>
  );
}
