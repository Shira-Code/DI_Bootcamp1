import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shop.css";

// const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Shop = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    all();
  }, []);

  const all = async () => {
    try {
      const res = await fetch(`${BASE_URL}/products`);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const add = async (e) => {
    e.preventDefault();

    const name = e.target.prdname.value;
    const price = e.target.prdprice.value;
    const description = e.target.prddesc.value;

    // console.log(name, price);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price,description }),
    };

    try {
      const res = await fetch(`${BASE_URL}/products`, options);
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2>My Shop</h2>
      <form onSubmit={add}>
        <input placeholder='Name' name='prdname' />
        <input placeholder='Price' name='prdprice' />
        <textarea placeholder="Description" name="prddesc"/>
        <input type='submit' />
      </form>
      {products.map((item) => {
        return (
          <div key={item.id} className='card'>
            <h2>{item.name}</h2>
            <h4>{item.price}</h4>
            <Link to={`/prd/${item.id}`}>Buy now </Link>
          </div>
        );
      })}
    </>
  );
};
export default Shop;
