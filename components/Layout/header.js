import React from "react";
import Image from "next/image";
import Link from "next/link";

import ShoppingCart from "../shoppingCart";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <div id="header">
    <Link href="/">
      <span>React</span>
    </Link>
    <Image src="/icons/Geotag.png" width={13} height={18} />
    <text>Александровск</text>
    <div
      style={{
        display: "flex",
        position: "relative",
        width: 700,
      }}
    >
      <input
        placeholder="Поиск бренда, товара, категории..."
        style={{
          padding: 20,
          color: "#727280",
          fontWeight: 400,
          fontSize: 16,
          outline: "none",
        }}
      />
      <button
        style={{
          position: "absolute",
          right: 200,
          width: 94,
          height: 50,
          borderRadius: 41,
          borderWidth: 0,
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
    <ShoppingCart />
    <Image src="/img/avatar.png" width={45} height={45} className="avatar" />
  </div>
);

export default Header;
