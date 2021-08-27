import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductComponent from "../components/ProductComponent";
import Layout from "../components/Layout";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [range, setRange] = useState(15);
  const [loading, setLoadingState] = useState(false);

  useEffect(() => {
    axios.get("https://test2.sionic.ru/api/Categories/").then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    setLoadingState(true);
    axios
      .get(`https://test2.sionic.ru/api/Products?range=[0, ${range}]`)
      .then((res) => {
        setProducts(res.data);
        setLoadingState(false);
      });
  }, [range]);

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
        <Swiper spaceBetween={10} slidesPerView={8}>
          {categories !== null &&
            categories.map((category, ind) => (
              <SwiperSlide>
                <div>
                  <button onClick={() => showCategory(category.id)} key={ind}>
                    {category.name}
                  </button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="productContainer">
        {products !== null &&
          products.map((product, ind) => (
            <ProductComponent
              key={ind}
              category_id={product.category_id}
              id={product.id}
              description={product.description}
              name={product.name}
            />
          ))}
        <div className="btnBox">
          <button
            disabled={loading}
            onClick={() => {
              setRange(range + 16);
            }}
          >
            {loading ? "Подождите..." : "Показать больше товаров"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
