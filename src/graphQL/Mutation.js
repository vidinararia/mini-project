import { gql } from "@apollo/client";

export const INSERT_USER_SIGNUP = gql`
  mutation MyMutation($object: user_insert_input!) {
    insert_user_one(object: $object) {
      id
    }
  }
`;

export const INSERT_PENGGALANGAN_DANA = gql`
  mutation MyMutation($object: penggalang_dana_insert_input = {}) {
    insert_penggalang_dana_one(object: $object) {
      id
    }
  }
`;
