import { gql } from "@apollo/client";

export const GetTodoListUser = gql`
  query MyQuery($_eq: String, $_eq1: String) {
    user(where: { username: { _eq: $_eq }, password: { _eq: $_eq1 } }) {
      id
      username
      password
    }
  }
`;
