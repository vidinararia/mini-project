import React from "react";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import Loadingsvg from "../../assests/Loadingsvg";
import { GET_USER_LOGIN } from "../../graphQL/Query";
import { Auth } from "../../utils/Auth";
import swal from "sweetalert2";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const [getUser, { loading, error }] = useLazyQuery(GET_USER_LOGIN, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (data?.user.length === 1) {
        Auth.setLogin(data.user[0]);
        return navigate("/");
      } else {
        swal.fire({
          title: "Error",
          text: "username atau password salah",
          icon: "error",
        });
      }
    },
  });

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const Submit = () => {
    getUser({ variables: { _eq: username, _eq1: password } });
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
          <label htmlFor="exampleInputUser" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUser"
            onChange={handleChangeUser}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChangePassword}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={Submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginComponent;
