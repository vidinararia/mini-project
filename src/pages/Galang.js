import React from "react";
import { useNavigate } from "react-router-dom";

function Galang() {
  let navigate = useNavigate();

  const goToForm = () => {
    navigate("Form");
  };

  return (
    <div className="container mt-2">
      <h3>
        <strong>Buat Penggalangan Dana</strong>
      </h3>
      <div>
        <button type="button" class="btn btn-primary" onClick={goToForm}>
          Buat Galang
        </button>
      </div>
    </div>
  );
}

export default Galang;
