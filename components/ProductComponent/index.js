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
    <div className="productContainer">
      <div className="productItem">
        <img src={"https://test2.sionic.ru/" + imageUrl}></img>
        <span>{name}</span>
        <p>{description}</p>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ProductComponent;
