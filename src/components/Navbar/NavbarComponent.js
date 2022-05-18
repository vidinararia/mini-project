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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <strong>Pot of Funding</strong>
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Auth.isAuthenticated() && (
                <li className="nav-item">
                  <Link to="/Galang" className="nav-link active">
                    Galang Dana
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {Auth.isAuthenticated() ? (
                <>
                  {!loading && (
                    <li className="nav-item">
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
                  <li className="nav-item">
                    <Link to="/Login" className="nav-link active">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/SignUp" className="nav-link active">
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
