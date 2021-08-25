import React from "react";
import { connect } from "react-redux";
import Link from "next/link";

import { productListSelector } from "../orm/selectors";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCart = ({ products }) => (
  <Link href="/cart">
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingCart} width={25} height={25} />
      <div className="cartCounter">{products.length}</div>
    </div>
  </Link>
);

function mapStateToProps(state) {
  return {
    products: productListSelector(state),
  };
}

export default connect(mapStateToProps)(ShoppingCart);
