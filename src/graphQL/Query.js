import { gql } from "@apollo/client";

export const GET_USER_LOGIN = gql`
  query MyQuery($_eq: String, $_eq1: String) {
    user(where: { username: { _eq: $_eq }, password: { _eq: $_eq1 } }) {
      id
      username
      email
      password
      id_galangdana
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query MyQuery($id: Int!) {
    user_by_pk(id: $id) {
      id
      email
      username
      id_galangdana
    }
  }
`;

export const GET_PROJECT = gql`
  query MyQuery {
    project(order_by: { id: desc }) {
      kategori {
        kategori
      }
      id
      id_kategori
      imageurl
      judul
      rincian
      goal
      tujuan
      batas_waktu
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query MyQuery($id: Int!) {
    project_by_pk(id: $id) {
      id
      goal
      id_kategori
      imageurl
      judul
      rincian
      tujuan
      raised
      batas_waktu
    }
  }
`;
