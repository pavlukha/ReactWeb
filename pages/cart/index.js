import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import Link from "next/link";

import Layout from "../../components/Layout/index";
import ProductCounter from "../../components/productCounter";

import { deleteAllProduct, deleteProduct, getCounter } from "../../orm/actions";
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
  }, [products]);

  const cartList = products.map((product) => {
    const discount = product.price + product.price * 0.1;

    return (
      <div className="cart-item">
        <img src={"https://test2.sionic.ru/" + product.imageUrl} />
        <span>{product.name}</span>
        <ProductCounter />
        <div className="priceBox">
          <span className="priceTitle">от {product.price} ₽</span>
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
            dispatch(deleteProduct(product.id));
          }}
        />
      </div>
    );
  });

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
            <img
              className="logo"
              src={"https://test2.sionic.ru/" + products[0].imageUrl}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span className="totalPriceTitle">Стоимость корзины:</span>
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
                // onClick={() => dispatch(getCounter(counter))}
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
  // console.log("STATE: ", state.orm);
  return {
    products: productListSelector(state),
    // counter: state.orm,
  };
}
export default connect(mapStateToProps)(Cart);
