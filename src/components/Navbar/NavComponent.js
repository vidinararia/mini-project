import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavbarComponent() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link to="/" class="navbar-brand">
            <strong>Pot of Funding</strong>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavbarComponent;
