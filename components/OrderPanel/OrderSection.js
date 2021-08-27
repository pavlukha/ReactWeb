import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import OrderComponent from "./OrderItem";

const OrderSection = ({ order }) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <div
      style={{ marginBottom: 25, border: "1px solid #aec2ea" }}
      className={isPressed ? "panel" : ""}
    >
      <div>
        <span>ORDERS</span>
        <FontAwesomeIcon
          icon={faSortDown}
          onClick={() => setIsPressed(!isPressed)}
        />
      </div>
      {Object.keys(order.orders).map((key, ind) => (
        <OrderComponent
          key={ind}
          category_id={order.orders[key].category_id}
          id={order.orders[key].id}
          description={order.orders[key].description}
          orderName={order.orders[key].name}
          name={order.name}
          address={order.address}
          selectedDate={order.selectedDate}
          selectedTime={order.selectedTime}
        />
      ))}
    </div>
  );
};

export default OrderSection;
