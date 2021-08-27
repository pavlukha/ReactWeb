import React from "react";

const OrderComponent = ({
  orderName,
  category_id,
  id,
  description,
  name,
  address,
  selectedDate,
  selectedTime,
}) => {
  return (
    <div className="historyItem">
      {/* <img /> */}
      {/* <span>{name}</span> */}
      <span>{selectedDate}</span>
      {/* <span>{selectedTime}</span> */}
      {/* <span>{address}</span> */}
      {/* <span>{description}</span> */}
      {/* <h2>{orderName}</h2> */}
    </div>
  );
};

export default OrderComponent;
