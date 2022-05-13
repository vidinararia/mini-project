import { useQuery } from "@apollo/client";
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { GET_USER_BY_ID } from "../../graphQL/Query";
import { Auth } from "../../utils/Auth";

function NavbarComponent() {
  let navigate = useNavigate();

  const { loading } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: Auth.getUserId(),
    },
    skip: !Auth.isAuthenticated(),
  });

  const logoutClick = () => {
    Auth.logout(navigate);
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
              {Auth.isAuthenticated() && (
                <li class="nav-item">
                  <Link to="/Galang" class="nav-link active">
                    Galang Dana
                  </Link>
                </li>
              )}
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
              {Auth.isAuthenticated() ? (
                <>
                  {!loading && (
                    <li class="nav-item">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={logoutClick}
                      >
                        Logout
                      </button>
                    </li>
                  )}
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link to="/Login" class="nav-link active">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/SignUp" class="nav-link active">
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavbarComponent;
