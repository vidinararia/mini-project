import React from "react";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import ProjectComponent from "../components/Project/ProjectComponent";
import KategoriComponent from "../components/Kategori/KategoriComponent";

function Home() {
  return (
    <>
      <NavbarComponent />
      <ProjectComponent />
      <KategoriComponent />
    </>
  );
}

export default Home;
