import React from "react";
import { Link } from "react-router-dom";

function ProjectCardComponent(props) {
  const { projectData } = props;
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-3">
      <div className="col-1">
        <Link to={`/Project/${projectData.id}`}>
          <div class="card shadow-sm" style={{ width: "18rem;" }}>
            <img src={projectData.image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"></h5>
              <p class="card-text"></p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCardComponent;
