import React from "react";
import "./Menubar.css";

const Menubar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-5 p-3 sticky-top bg-white">
      <div className="container">
        <a className="navbar-brand" href="/home">
          My Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link cart" href="/cart">
                Cart
                <sup className="translate-right ms-1 badge rounded-pill bg-danger">
                  {props.cart}
                </sup>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
