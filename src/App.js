import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="App">
      <h1>Pagination Application</h1>
      {/* Get  products on frontend*/}
      {products.map((product) => (
        <p key={product.id}>{product.title}</p> // Display each product's title
      ))}
    </div>
  );
}
