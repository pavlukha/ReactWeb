import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { toggleProduct } from "../../orm/actions/index";

const ProductComponent = ({ category_id, id, description, name }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://test2.sionic.ru/api/ProductImages?filter={"product_id":${id}}`
      )
      .then((res) => {
        setImageUrl(res.data[0].image_url);
      });
    axios
      .get(
        `https://test2.sionic.ru/api/ProductVariations?filter={"product_id":${id}}`
      )
      .then((res) => {
        setPrice(res.data[0].price);
      });
  });

  return (
    <div className="productItem">
      <img src={"https://test2.sionic.ru/" + imageUrl}></img>
      <span>{name}</span>
      <textarea className="textarea" value={description} rows={5} readOnly />
      <h1>от {price} ₽</h1>
      <h2>
        <s>450 500 ₽</s> -10%
      </h2>
      <button
        onClick={() =>
          dispatch(toggleProduct(id, category_id, name, description, price))
        }
      >
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductComponent;
