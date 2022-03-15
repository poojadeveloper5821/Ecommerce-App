import React from "react";
import Login from "./buttons/Login";
import Signup from"./buttons/Signup";
import CartBtn from "./buttons/CartBtn";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid py-2">
          <a class="navbar-brand" href="./../Components/Home">
            E-com Collection
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="./../Components/Home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./../Components/Product">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='./../Components/About'>
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='./../Components/Contact'>
                  Contact Us
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">
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
