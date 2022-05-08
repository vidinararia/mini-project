import React from "react";
import pic from "../Assests/Medyka-border-crossing.jpg";
import pic1 from "../Assests/turbine.jpg";
import logHome from "../Assests/logo/home.png";
import logFilm from "../Assests/logo/clapperboard.png";
import logTravel from "../Assests/logo/luggage.png";
import logPhone from "../Assests/logo/smartphone-call.png";

function Home() {
  return (
    <>
      <div class="container mt-2">
        <h3>
          <strong>Project</strong>
        </h3>
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                src={pic}
                class="bd-placeholder-img card-img-top"
                width="100%"
                height="220"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Refugge</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <h6 className="card-title">Rp 100.000 telah terkumpul</h6>
                <small class="text-muted">20 hari tersisa</small>
              </div>
            </div>
          </div>
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

      <div className="container mt-4 text-center">
        <div className="row py-lg-4">
          <div className="col-lg-6 col-md-8 mx-auto row">
            <h3>
              <strong>Kategori yang tertarik?</strong>
            </h3>
            <p className="text">
              Jelajahi kategori Projek yang sedang dikerjakan.
            </p>
            <div className="col-md-3 col-sm-4 col-4">
              <div className="menu-categories">
                <div className="card shadow-sm">
                  <div className="mt-2">
                    <a href="#">
                      <img src={logHome} style={{ width: "40%" }}></img>
                    </a>
                    <h6 className="mt-2">Home</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-4">
              <div className="menu-categories">
                <div className="card shadow-sm">
                  <div className="mt-2">
                    <a href="#">
                      <img src={logFilm} style={{ width: "40%" }}></img>
                    </a>
                    <h6 className="mt-2">Film</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-4">
              <div className="menu-categories">
                <div className="card shadow-sm">
                  <div className="mt-2">
                    <a href="#">
                      <img src={logTravel} style={{ width: "40%" }}></img>
                    </a>
                    <h6 className="mt-2">Travel</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-4">
              <div className="menu-categories">
                <div className="card shadow-sm">
                  <div className="mt-2">
                    <a href="#">
                      <img src={logPhone} style={{ width: "40%" }}></img>
                    </a>
                    <h6 className="mt-2">Phone</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
