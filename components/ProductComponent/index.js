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
    <div>
      <img src={"https://test2.sionic.ru/" + imageUrl}></img>
      <span>{name}</span>
      <p>{description}</p>
    </div>
  );
};

export default ProductComponent;
