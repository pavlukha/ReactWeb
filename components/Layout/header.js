import React from "react";

import Image from "next/image";

const Header = () => {
  return (
    <div className="banner">
      <Image src="/img/banner.png" width={300} height={140} />
    </div>
  );
};

export default Header;
