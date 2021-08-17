import React from "react";

import Image from "next/image";
import ShoppingCart from "../shoppingCart";

const Header = () => {
  return (
    <div id="header">
      <span>React</span>
      <Image src="/icons/Geotag.png" width={13} height={18} />
      <text>Александровск</text>
      <input></input>
      <ShoppingCart />
      <Image src="/img/avatar.png" width={45} height={45} className="avatar" />
    </div>
  );
};

export default Header;
