import React, { useEffect, useState } from "react";

import axios from "axios";

const ProductComponent = ({ category_id, id, description, name }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://test2.sionic.ru/api/ProductImages?filter={"product_id":${id}}`
      )
      .then((res) => {
        setImageUrl(res.data[0].image_url);
      });
  });

  return (
    <div className="productItem">
      <img src={"https://test2.sionic.ru/" + imageUrl}></img>
      <span>{name}</span>
      <textarea value={description} rows={5} readOnly className="textarea" />
      <h1>от 350 000 ₽</h1>
      <h2>
        <s>450 500 ₽</s> -10%
      </h2>
      <button>Добавить в корзину</button>
    </div>
  );
};

export default ProductComponent;
