function ProjectCardComponent({ project }) {
  const { judul, imageurl, target_dana, rincian } = project;

  return (
    <div className="col-1">
      <div class="card shadow-sm" style={{ width: "18rem;" }}>
        <img src={imageurl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{judul}</h5>
          <h6 className="card-title">{target_dana}</h6>
          <p class="card-text">{rincian}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardComponent;
