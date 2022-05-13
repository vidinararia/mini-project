import React from "react";
import { Link } from "react-router-dom";
import logHome from "../../assests/logo/home.png";
import logFilm from "../../assests/logo/clapperboard.png";
import logTravel from "../../assests/logo/luggage.png";
import logPhone from "../../assests/logo/smartphone-call.png";

function Kategori() {
  return (
    <div>
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
                    <Link to="">
                      <img
                        src={logHome}
                        style={{ width: "50%" }}
                        alt="logoH"
                      ></img>
                    </Link>
                    <h6 className="mt-2">Home</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-4">
              <div className="menu-categories">
                <div className="card shadow-sm">
                  <div className="mt-2">
                    <Link to="">
                      <img
                        src={logFilm}
                        style={{ width: "50%" }}
                        alt="logoF"
                      ></img>
                    </Link>
                    <h6 className="mt-2">Film</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-4">
              <div className="menu-categories">
                <div className="card shadow-sm">
                  <div className="mt-2">
                    <Link to="">
                      <img
                        src={logTravel}
                        style={{ width: "50%" }}
                        alt="logoT"
                      ></img>
                    </Link>
                    <h6 className="mt-2">Travel</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-4">
              <div className="menu-categories">
                <div className="card shadow-sm">
                  <div className="mt-2">
                    <Link to="">
                      <img
                        src={logPhone}
                        style={{ width: "50%" }}
                        alt="logoP"
                      ></img>
                    </Link>
                    <h6 className="mt-2">Phone</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kategori;
