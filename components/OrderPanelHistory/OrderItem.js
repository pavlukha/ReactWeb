import React from "react";

const OrderComponent = ({ orderName, imageUrl, price, description }) => (
  <div className="historyItem">
    <img src={"https://test2.sionic.ru/" + imageUrl} />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>{orderName}</h2>
      <p>{description}</p>
    </div>
    <span>{price} ₽</span>
  </div>
);

export default OrderComponent;
