import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponents from "../components/Navbar/NavbarComponent";

function Galang() {
  let navigate = useNavigate();

  const goToForm = () => {
    navigate("NewProject");
  };

  return (
    <div>
      <NavbarComponents />
      <div className="container mt-2">
        <h3>
          <strong>Buat Penggalangan Dana</strong>
        </h3>
        <div>
          <button type="button" className="btn btn-primary" onClick={goToForm}>
            Buat Galang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Galang;
