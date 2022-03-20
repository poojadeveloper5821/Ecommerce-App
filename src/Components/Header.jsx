import React from "react";
import Login from "./buttons/Login";
import Signup from"./buttons/Signup";
import CartBtn from "./buttons/CartBtn";

const Header=()=> {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <a className="navbar-brand" href="./../Components/Home">
            E-com Collection
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="./../Components/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./../Components/Product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='./../Components/About'>
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='./../Components/Contact'>
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <Login />
            <Signup />
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
