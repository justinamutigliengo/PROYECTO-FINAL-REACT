import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProduct } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function ItemDetailContainer() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const docRef = doc(db, "products", id);
    getDoc(docRef).then((resp) => {
      setProduct({ ...resp.data(), id: resp.id });
    });
    // setProduct(getProduct(id));
  }, [id]);

  return (
    <>
      <div>{product && <ItemDetail product={product} />}</div>
    </>
  );
}
