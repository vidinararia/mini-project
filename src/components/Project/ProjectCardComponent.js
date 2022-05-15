import { Link } from "react-router-dom";

function ProjectCardComponent({ project }) {
  const { judul, imageurl, goal, rincian, id, kategori } = project;

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to={"/project/" + id}>
          <img
            src={imageurl}
            className="card-img-top"
            alt="imagethumbnail"
            width="100%"
            height="160"
            preserveAspectRatio="xMidYMid slice"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{judul}</h5>
          <small>{kategori}</small>
          <h6>Rp {goal}</h6>
          <p className="card-text">{rincian.slice(0, 50)}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardComponent;
