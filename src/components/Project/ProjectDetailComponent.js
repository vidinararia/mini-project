import { useLazyQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PROJECT_BY_ID } from "../../graphQL/Query";
import Loadingsvg from "../../assests/Loadingsvg";

function ProjectDetailComponent() {
  const params = useParams();
  const { data, loading, error } = useLazyQuery(GET_PROJECT_BY_ID);

  if (error) {
    console.log(error);
    return null;
  }

  if (loading) {
    return (
      <div class="position-absolute top-50 start-50 translate-middle">
        <Loadingsvg />
      </div>
    );
  }

  return (
    <div className="container mt-2">
      <img src="" alt="image">
        Project
      </img>
    </div>
  );
}

export default ProjectDetailComponent;
