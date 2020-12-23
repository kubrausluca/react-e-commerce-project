import React from "react";
import "./navbar-style.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-black">
      <div class="container">
        <a href="/" class="navbar-brand">E-COMMERCE</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a href="/"class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="/products" class="nav-link">Products</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link"><i class="fas fa-shopping-cart fa-2x"></i></a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Navbar;
