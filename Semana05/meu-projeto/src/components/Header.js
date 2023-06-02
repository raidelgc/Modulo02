import GoogleApps from "../imagens/GoogleApps.png";
import signInLogo from "../imagens/signIn.png";
import "../styles/Header.css";

import React from "react";

function Header() {
  return (
    <div className="Header">
      <ul className="Menu">
        <li>
            <a href="https://mail.google.com">Gmail</a>
        </li>
        <li>
            <a href="https://www.google.com.br/imghp?hl=pt-BR&ogbl">Imagens</a>
        </li>
        <li>
            <img className="Menu-icon" src={GoogleApps} alt="menu" />
        </li>
        <li>
            <img className="Menu-icon" src={signInLogo} alt="profile" />
        </li>
      </ul>

    </div>
  );
}

export default Header;