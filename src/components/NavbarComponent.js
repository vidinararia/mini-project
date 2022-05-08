import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  let navigate = useNavigate();

  const goToLogin = () => {
    navigate("Login");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link to="/" class="navbar-brand">
            <strong>Pot of Funding</strong>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/Galang" class="nav-link active">
                  Galang Dana
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/Riwayat" class="nav-link active">
                  Riwayat Donasi
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="" onClick={goToLogin}>
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavbarComponent;
