import React from "react";

function ProjectDetailCard({ data }) {
  const { judul, rincian, imageurl, bataswaktu, kategori, goal } =
    data.project_by_pk;

  return (
    <div className="col">
      <img src={imageurl} alt="bottomtext"></img>
      <h2>
        <strong>{judul}</strong>
      </h2>
      <small>{kategori}</small>
      <h4>Goal: Rp {goal}</h4>
      <h5>Batas waktu: {bataswaktu}</h5>
      <h5>Rincian Informasi</h5>
      <p>{rincian}</p>
    </div>
  );
}

export default ProjectDetailCard;
