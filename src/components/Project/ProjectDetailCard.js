import React from "react";

function ProjectDetailCard({ data }) {
  const { judul, rincian, imageurl, bataswaktu, kategori, goal } =
    data.project_by_pk;

  console.log(data);

  return (
    <div>
      <img src={imageurl} alt="bottomtext"></img>
      <h3>
        <strong>{judul}</strong>
      </h3>
      <small>{kategori}</small>
      <h4>{goal}</h4>
      <h5>{bataswaktu}</h5>
      <p>{rincian}</p>
    </div>
  );
}

export default ProjectDetailCard;
