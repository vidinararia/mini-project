import React from "react";
import { useNavigate } from "react-router-dom";

function ThankYou() {
  let navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container mt-2 text-center">
        <h3>
          <strong>Terima Kasih untuk Donasinya</strong>
        </h3>
        <button type="button" className="btn btn-primary" onClick={goToHome}>
          Donasi Lagi
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
