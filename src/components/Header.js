import React from "react";

function Header(props) {
  return (
    <header>
      <a href="#">
        <img src="../images/logo.png" width="150" alt="" />
      </a>
      <button>Logout</button>
    </header>
  );
}

export default Header;
