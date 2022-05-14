import { useQuery } from "@apollo/client";
import React from "react";
import Loadingsvg from "../../assests/Loadingsvg";
import { useParams } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import ProjectDetailCard from "./ProjectDetailCard";
import { GET_PROJECT_BY_ID } from "../../graphQL/Query";

function ProjectDetailComponent() {
  let params = useParams();
  const { id } = params;

  const { data, loading, error } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id },
  });

  if (isNaN(id)) {
    return <NotFound />;
  }

  if (error) {
    console.log(error);
    return null;
  }

  if (loading) {
    <div class="position-absolute top-50 start-50 translate-middle">
      <Loadingsvg />
    </div>;
  }

  console.log(data);

  // if (!data.project_by_pk) {
  //   return <NotFound />;
  // }

  return (
    <div className="container mt-3">
      <ProjectDetailCard data={data} />
    </div>
  );
}

export default ProjectDetailComponent;
