import React, { useEffect, useState } from "react";
import { getProducts } from "./services/productService";
import "./styles.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);
  console.log(pages);

  const handlePagination = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage != pages
    ) {
      setPages(selectedPage);
    }
  };

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.warn(err));
  }, []);

  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePrev = () => {
    handlePagination(pages - 1);
  };

  const handleNext = () => {
    handlePagination(pages + 1);
  };

  return (
    <div className="container">
      <div className="product-list">
        {products
          .slice((pages - 1) * productsPerPage, pages * productsPerPage)
          .map((product) => (
            <div className="product-item" key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
                height={200}
                width={200}
              />
              <p>{product.title}</p>
            </div>
          ))}
      </div>
      <div className="pagination">
        <span onClick={handlePrev}>◀️</span>
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            onClick={() => handlePagination(i + 1)}
            className="page__no"
            key={i}
          >
            {i + 1}
          </span>
        ))}
        <span onClick={handleNext}>▶️</span>
      </div>
    </div>
  );
};

export default App;
