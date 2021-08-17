import React from "react";

import Image from "next/image";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <Image src="/img/banner.png" width={300} height={140} />
      <div style={{ height: 8 }}></div>
      <Image src="/img/banners.png" width={300} height={544} />
    </div>
  );
};

export default Sidebar;
