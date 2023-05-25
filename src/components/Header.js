import React from "react";

function Header(props) {

  function logout() {
    window.opener = null;
    window.open("", "_self");
    window.close();
  }
  return (
    <header>
      <a href="#">
        <img src="../images/logo.png" width="150" alt="" />
      </a>
      <button onClick={logout}
      >Logout</button>
    </header>
  );
}

export default Header;
