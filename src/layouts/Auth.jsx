import React from "react";
import { Outlet } from "react-router-dom";

import "./../assets/style/style_custom.css";
import icnGambar from "./../assets/image/Illustrasi Login.png";

const Auth = () => {
  return (
    <>
      <div className="container_auth">
        <div className="left">
          <Outlet />
        </div>
        <div className="right">
          <img src={icnGambar} alt="" />
        </div>
      </div>
    </>
  );
};

export default Auth;
