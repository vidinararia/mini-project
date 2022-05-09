import React from "react";
import pic1 from "../assests/turbine.jpg";
import NavbarComponent from "../components/Navbar/NavbarComponent";
import KategoriComponent from "../components/Kategori/KategoriComponent";

function Home() {
  return (
    <>
      <NavbarComponent />
      <div class="container mt-2">
        <h3>
          <strong>Project</strong>
        </h3>
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                src={pic1}
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="220"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Turbine</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <h6 className="card-title">Rp 300.000 telah terkumpul</h6>
                <small class="text-muted">20 hari tersisa</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KategoriComponent />
    </>
  );
}

export default Home;
