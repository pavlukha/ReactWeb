import React, { useState } from "react";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShoppingCart = () => {
  const [shopCount, setShopCount] = useState(17);
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingCart} width={25} height={25} />
      <div className="cartCounter">{shopCount}</div>
    </div>
  );
};

export default ShoppingCart;
