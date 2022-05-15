import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <strong>Pot of Funding</strong>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavbarComponent;
