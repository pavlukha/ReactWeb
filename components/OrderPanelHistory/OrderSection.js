import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import OrderComponent from "./OrderItem";

const OrderSection = ({ order }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="historyPanel">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="/img/productImg.png" />
        <div>
          <span>Заказ от</span>
          <br />
          <span>{order.selectedDate}</span>
        </div>
        {isPressed ? (
          <div className="arrowBox">
            <span className="arrowTitle">Скрыть</span>
            <FontAwesomeIcon
              icon={faAngleUp}
              className="arrowDown"
              onClick={() => setIsPressed(!isPressed)}
            />
          </div>
        ) : (
          <div className="arrowBox">
            <span className="arrowTitle">Подробнее</span>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="arrowDown"
              onClick={() => setIsPressed(!isPressed)}
            />
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 15,
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", marginRight: 30 }}
        >
          <span className="orderTitle">Статус заказа</span>
          <span className="orderSubtitle">Оплачен/Завершён</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="orderTitle">Номер заказа</span>
          <span className="orderSubtitleBlue">#664-333</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: 30,
          }}
        >
          <span className="orderTitle">Кол-во товаров</span>
          <span className="orderSubtitle">{order.totalItems} шт</span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", marginRight: 30 }}
        >
          <span className="orderTitle">Стоимость заказа</span>
          <span className="orderSubtitle">{order.totalPrice} ₽</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className="orderTitle">Адрес доставки</span>
          <span className="orderSubtitle">{order.address}</span>
        </div>
      </div>
      {isPressed &&
        Object.keys(order.orders).map((key, ind) => (
          <OrderComponent
            key={ind}
            category_id={order.orders[key].category_id}
            id={order.orders[key].id}
            imageUrl={order.orders[key].imageUrl}
            description={order.orders[key].description}
            orderName={order.orders[key].name}
            name={order.name}
            address={order.address}
            selectedDate={order.selectedDate}
            selectedTime={order.selectedTime}
            price={order.orders[key].price}
          />
        ))}
    </div>
  );
};

export default OrderSection;
