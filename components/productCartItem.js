import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { deleteProduct, setQuantity } from "../orm/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ProductCartItem = ({ id, imageUrl, name, price, discount, counter }) => {
  const [count, setCounter] = useState(counter);
  const [sum, countSum] = useState(price);

  const dispatch = useDispatch();

  useEffect(() => {
    const newSum = price * count;
    countSum(newSum);
    dispatch(setQuantity(count, id));
    return () => {};
  }, [count]);

  return (
    <div className="cart-item">
      <img src={"https://test2.sionic.ru/" + imageUrl} />
      <span>{name}</span>
      <div className="counter">
        <span
          style={{
            cursor: "pointer",
            color: "#AEC2EA",
          }}
          onClick={() => {
            if (count === 1) return;

            setCounter(count - 1);
          }}
        >
          -
        </span>
        <span style={{ fontSize: 16, fontWeight: 400, color: "#2D2D2F" }}>
          {count}
        </span>
        <span
          style={{
            cursor: "pointer",
            color: "#AEC2EA",
          }}
          onClick={() => {
            setCounter(count + 1);
          }}
        >
          +
        </span>
      </div>
      <div className="priceBox">
        <span className="priceTitle">от {sum} ₽</span>
        <span className="discountTitle">
          <s>{discount} ₽</s>
        </span>
      </div>
      <FontAwesomeIcon
        icon={faTrashAlt}
        width={25}
        height={25}
        className="trashIcon"
        onClick={() => {
          dispatch(deleteProduct(id));
        }}
      />
    </div>
  );
};

export default ProductCartItem;
