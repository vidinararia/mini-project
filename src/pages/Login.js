import React from "react";
import { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Loadingsvg from "../assests/Loadingsvg";
import { GET_USER_LOGIN } from "../graphQL/Query";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [getTodo, { data, loading, error }] = useLazyQuery(GET_USER_LOGIN);
  let navigate = useNavigate();

  useEffect(() => {
    if (data?.user.length === 1) {
      console.log("data", data);
      return navigate("/");
    }
  });

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const Submit = () => {
    getTodo({ variables: { _eq: username, _eq1: password } });
  };

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
      <h1>Login</h1>
      <form>
        <div className="mb-3">
          <label for="exampleInputUser" className="form-label">
            Username
          </label>
          <input
            type="user"
            className="form-control"
            id="exampleInputUser"
            aria-describedby="userHelp"
            onChange={handleChangeUser}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChangePassword}
          />
          {data && (
            <label className="form-label">username atau password salah</label>
          )}
        </div>
        <button type="submit" className="btn btn-primary" onClick={Submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
