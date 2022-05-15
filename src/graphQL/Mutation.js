import { gql } from "@apollo/client";

export const INSERT_USER_SIGNUP = gql`
  mutation MyMutation($object: user_insert_input!) {
    insert_user_one(object: $object) {
      id
    }
  }
`;

export const INSERT_PROJECT = gql`
  mutation MyMutation($object: project_insert_input = {}) {
    insert_project_one(object: $object) {
      id
    }
  }
`;
