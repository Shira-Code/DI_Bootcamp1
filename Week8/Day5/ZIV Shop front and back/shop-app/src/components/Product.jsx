import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products/${params.id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Product #: {params.id} </h2>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <p>{item.description}</p>
            <Link to="/">Countinue Shoping</Link>
          </div>
        );
      })}
    </>
  );
};
export default Product;
