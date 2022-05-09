import React, { useEffect } from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import KategoriComponent from "../components/Kategori/KategoriComponent";

function Home() {
  useEffect(() => {});
  return (
    <>
      <NavbarComponent />
      <div class="container mt-2">
        <h3>
          <strong>Project</strong>
        </h3>
      </div>
      <KategoriComponent />
    </>
  );
}

export default Home;
