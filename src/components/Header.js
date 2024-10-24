import React, { useCallback, useContext, useState } from "react";
import { AppContext } from "../context/AppContext";



function Header(props) {
  const { formShow, setFormShow } = useContext(AppContext)

  console.log("form show....", formShow)

  return (

    <header>
      <a href="#">
        <img src="../images/logo.png" width="150" alt="" />
      </a>


      <button
        // onClick={logout}
        onClick={() => {
          setFormShow(!formShow)
        }}
      >
        {!formShow ? <><i className="bi bi-plus-circle"></i> Add</> : <> <i className="bi bi-x-circle"></i> {"Close"}</>}
      </button>
    </header>
  );
}

export default Header;
