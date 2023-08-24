import React from "react";

// image
import icnDompet from "./../assets/image/Logo.png";
import { Link } from "react-router-dom";

const ElementNavbar = () => {
  return (
    <nav
      class="navbar navbar_custom"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start is-flex is-align-items-center">
          <img className="logo" src={icnDompet} alt="" />
          <p className=" is-size-5 ml-2  has-text-weight-bold ">SIMS PPOB</p>
        </div>

        <div class="navbar-end">
          <Link class="navbar-item  " to="/dashboard/topup">
            <p className=" is-size-6 ml-2  has-text-weight-bold "> Topup</p>
          </Link>
          <Link class="navbar-item  " to="/dashboard/transaksi">
            <p className=" is-size-6 ml-2  has-text-weight-bold ">
              Transaction
            </p>
          </Link>
          <Link class="navbar-item  " to="/dashboard/akun">
            <p className=" is-size-6 ml-2  has-text-weight-bold "> Akun</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ElementNavbar;
