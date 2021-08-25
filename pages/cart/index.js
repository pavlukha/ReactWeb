import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import Link from "next/link";

import Layout from "../../components/Layout/index";
import ProductCounter from "../../components/productCounter";

import { deleteAllProduct, deleteProduct } from "../../orm/actions";
import { productListSelector } from "../../orm/selectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let newTotalPrice = 0;
    if (products.length !== 0) {
      for (let i = 0; i <= products.length - 1; i++) {
        newTotalPrice = newTotalPrice + products[i].price;
      }
    }
    setTotalPrice(newTotalPrice);
  }, []);

  const decreaseTotal = (price) => {
    let decreasedTotal = totalPrice - price;
    setTotalPrice(decreasedTotal);
  };

  const cartList = products.map((product) => (
    <div className="cart-item">
      <img src="/img/productImg.png" />
      <span>{product.name}</span>
      <ProductCounter />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#2D2D2F" }}>
          от {product.price} ₽
        </span>
        <span style={{ fontSize: 14, fontWeight: 400, color: "#8D8D8E" }}>
          <s>450 500 ₽</s>
        </span>
      </div>
      <FontAwesomeIcon
        icon={faTrashAlt}
        width={25}
        height={25}
        style={{ color: "#AEC2EA", cursor: "pointer" }}
        onClick={() => {
          decreaseTotal(product.price);
          dispatch(deleteProduct(product.id));
        }}
      />
    </div>
  ));

  return (
    <Layout>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Корзина</h1>
        <span
          style={{
            marginLeft: 30,
            color: "#FF2D87",
            fontSize: 16,
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={() => {
            setTotalPrice(0);
            dispatch(deleteAllProduct(products));
          }}
        >
          Очистить корзину
        </span>
        {totalPrice}
      </div>
      <div className="cart-container">
        {products.length === 0 ? null : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: 100,
              padding: 25,
              border: "1px solid #AEC2EA",
              borderRadius: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Стоимость корзины:</span>
              <span>{totalPrice} ₽ </span>
            </div>
            <Link href="/order">
              <button
                style={{
                  maxWidth: 214,
                  height: 50,
                  width: "100%",
                  borderWidth: 0,
                  borderRadius: 20,
                  color: "#fff",
                  backgroundColor: "#2967FF",
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Оформить
              </button>
            </Link>
            <img src="/img/orderLogo.png" />
          </div>
        )}
        {products.length === 0 ? <p>Корзина пуста</p> : cartList}
      </div>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    products: productListSelector(state),
  };
}
export default connect(mapStateToProps)(Cart);
