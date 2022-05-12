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

export const GET_GALANG_DANA = gql`
  query MyQuery {
    penggalang_dana(order_by: { id: desc }) {
      id
      kategori {
        kategori
      }
      judul
      target_dana
      rincian
      tujuan
      imageurl
      batas_waktu
    }
  }
`;
