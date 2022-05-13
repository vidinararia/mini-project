import { Link } from "react-router-dom";

function ProjectCardComponent({ project }) {
  const { judul, imageurl, goal, rincian, id, kategori } = project;

  return (
    <div className="col-1">
      <div class="card shadow-sm" style={{ width: "18rem;" }}>
        <Link to={"/project/" + id}>
          <img
            src={imageurl}
            class="card-img-top"
            alt="imagethumbnail"
            width="100%"
            height="160"
            preserveAspectRatio="xMidYMid slice"
          />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{judul}</h5>
          <small>{kategori.kategori}</small>
          <h6>Rp {goal}</h6>
          <p class="card-text">{rincian}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardComponent;
