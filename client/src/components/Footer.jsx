import React from "react";
import Logo from "../images/logo2.png";

const Footer = () => {
  return (
    <footer>
      <span>
        <img src={Logo} alt="logo" />
        <br />
        Powered with React JS
        <br />
        <b>bs5Projects</b>
      </span>
    </footer>
  );
};

export default Footer;