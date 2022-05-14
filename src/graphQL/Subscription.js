import { gql } from "@apollo/client";

export const GET_PROJECT_BY_ID_SUBSCRIPTION = gql`
  subscription MySubscription($id: Int!) {
    project_by_pk(id: $id) {
      bataswaktu
      goal
      id
      id_user
      imageurl
      judul
      kategori
      raised
      rincian
      tujuan
    }
  }
`;
