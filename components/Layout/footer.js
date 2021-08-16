import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer">
      <div className="social">
        <span>React</span>
        <div style={{ marginRight: 30 }}>
          <h6>Присоединяйтесь к нам</h6>
          <div>
            <button className="socialIcon">
              <Image
                src="/icons/Facebook.png"
                alt="Join us on Facebook"
                width={28}
                height={28}
              />
            </button>
            <button className="socialIcon">
              <Image
                className="socialIcon"
                src="/icons/Vk.png"
                alt="Picture of the author"
                width={28}
                height={28}
              />
            </button>
            <button className="socialIcon">
              <Image
                className="socialIcon"
                src="/icons/Inst.png"
                alt="Picture of the author"
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
        <div>
          <h6>Устанавливайте приложение</h6>
          <div>
            <button className="socialIcon">
              <Image
                className="socialIcon"
                src="/icons/GooglePlay.png"
                alt="Join us on Facebook"
                width={100}
                height={30}
              />
            </button>
            <button className="socialIcon">
              <Image
                className="socialIcon"
                src="/icons/AppStore.png"
                alt="Picture of the author"
                width={100}
                height={30}
              />
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <ul>
          <a href="#">
            <li>© Sionic</li>
          </a>
          <a href="#">
            <li>Правовая информация</li>
          </a>
          <a href="#">
            <li>Политика конфиденциальности</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
