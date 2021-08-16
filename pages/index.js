import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductComponent from "../components/ProductComponent";
import Layout from "../components/Layout";

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
    <Layout>
      <h1 className="categoryTitle">Категории товаров</h1>
      <div className="categoryContainer">
        {categories !== null &&
          categories.map((category, ind) => (
            <button onClick={() => showCategory(category.id)} key={ind}>
              {category.name}
            </button>
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
    </Layout>
  );
};

export default Home;
