import React from "react";
import Layout from "../../components/Layout";

const Order = () => {
  return (
    <Layout>
      <span
        style={{
          fontSize: 20,
          fontWeight: 700,
          color: "#2D2D2F",
        }}
      >
        Доставка
      </span>
      <div className="order-container">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>Когда доставить?</span>
          <div>
            <input placeholder="Выберите дату" />
            <input placeholder="Выберите время" />
          </div>
          <span>Куда доставить?</span>
          <div>
            <img src="/icons/address.png" />
            <input />
          </div>
          <span>Имя</span>
          <input />
          <span>Телефон</span>
          <input />
        </div>
        <div className="rightColumn">
          <div className="infoBox">
            <span>Стоимость товаров:</span>
            <span>Стоимость доставки:</span>
            <span>Итого:</span>
          </div>
          <div className="orderBtn">Сделать заказ</div>
        </div>
      </div>
    </Layout>
  );
};

export default Order;
