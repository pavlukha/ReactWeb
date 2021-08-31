import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import Link from "next/link";

import Layout from "../../components/Layout/index";
import ProductCartItem from "../../components/productCartItem";

import { deleteAllProduct } from "../../orm/actions";
import { productListSelector } from "../../orm/selectors";

const Cart = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    let newTotalPrice = 0;
    if (products.length !== 0) {
      for (let i = 0; i <= products.length - 1; i++) {
        newTotalPrice = newTotalPrice + products[i].price * products[i].counter;
      }
    }
    setTotalPrice(newTotalPrice);
  }, [products]);

  const cartList = products.map((product) => {
    const discount = product.price + product.price * 0.1;
    return (
      <ProductCartItem
        id={product.id}
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        discount={discount}
        counter={product.counter}
      />
    );
  });

  return (
    <Layout>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1>Корзина</h1>
        <span
          className="clearCartBtn"
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
          <div className="cartUpbar">
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
              <button className="cartBtn">Оформить</button>
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
