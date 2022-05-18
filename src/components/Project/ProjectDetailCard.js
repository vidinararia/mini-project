import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { UPDATE_PROJECT_BY_PK } from "../../graphQL/Mutation";
import Loadingsvg from "../../assests/Loadingsvg";

function ProjectDetailCard({ detail }) {
  const {
    judul,
    rincian,
    imageurl,
    bataswaktu,
    kategori,
    goal,
    raised,
    tujuan,
    id,
  } = detail.project_by_pk;

  const [total, setTotal] = useState(0);
  const [totalRaised, setTotalRaised] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [updateRaised, { data, loading }] = useMutation(UPDATE_PROJECT_BY_PK);
  const [dataDonasi, setDataDonasi] = useState(0);
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const onChange = (e) => {
    setDataDonasi(parseInt(e.target.value));
  };

  const handleClick1 = (e) => {
    e.preventDefault();
    setClick(click + 1);
    if (click === 1) {
      return alert("You clicked the button!");
    } else {
      setTotalRaised(total + dataDonasi);
      updateRaised({
        variables: {
          id: id,
          raised: totalRaised,
        },
      });
      setClick(0);
    }
  };

  useEffect(() => {
    if (raised !== null) {
      setTotal(raised);
    }
  }, [raised]);

  if (loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <Loadingsvg />
      </div>
    );
  }

  console.log(data);

  return (
    <div>
      <div className="row">
        <img
          src={imageurl}
          className="img-fluid d-block"
          width="100%"
          height="250"
          alt="bottomtext"
        />
        <h2>
          <strong>{judul}</strong>
        </h2>
        <small>{kategori}</small>
        <h4>Goal: Rp {goal}</h4>
        <h4>Raised: Rp {total} </h4>
        <h5>Batas waktu: {bataswaktu}</h5>
        <h5>Tujuan: {tujuan}</h5>
        <h5>Rincian Informasi</h5>
        <p>{rincian}</p>
      </div>

      <button
        className="btn btn-primary"
        type="button"
        onClick={() => handleClick()}
      >
        Donasikan
      </button>
      {toggle && (
        <>
          <div onClick={() => handleClick()}></div>

          <h3>Masukkan Nominal Donasi</h3>
          <form>
            <div className="mb-3">
              <label
                htmlFor="InputDana"
                className="form-label"
                datatype="currency"
              >
                Nominal Donasi
              </label>
              <input
                type="number"
                min="0"
                className="form-control"
                id="InputDana"
                placeholder="Rp 10.000"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleClick1}
            >
              Donasi
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ProjectDetailCard;
