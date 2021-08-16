import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductComponent from "../components/ProductComponent";

const Home = () => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("https://test2.sionic.ru/api/Categories/").then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://test2.sionic.ru/api/Products?range=[0,15]")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const showCategory = (category) => {
    axios
      .get(
        `https://test2.sionic.ru/api/Products?range=[0,15]&filter={"category_id":${category}}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  };

  return (
    <div>
      <div>
        <h1>Categoties From Server:</h1>
        {categories !== null &&
          categories.map((category, ind) => (
            <span onClick={() => showCategory(category.id)} key={ind}>
              {category.name}
            </span>
          ))}
      </div>

      {products !== null &&
        products.map((product, ind) => (
          <ProductComponent
            category_id={product.category_id}
            id={product.id}
            description={product.description}
            name={product.name}
          />
        ))}
    </div>
  );
};

export default Home;
