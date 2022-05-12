import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { INSERT_USER_SIGNUP } from "../../graphQL/Mutation";
import Loadingsvg from "../../assests/Loadingsvg";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

function SignUpComponent() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const [insertUser, { loading: loadingUser }] = useMutation(
    INSERT_USER_SIGNUP,
    {
      onCompleted: () => {
        swal.fire(
          "Berhasil Sign Up",
          "Silakan login dengan username dan password yang telah dibuat",
          "success"
        );
        return navigate("/");
      },
      onError: () => {
        swal.fire("Error", "username atau email sudah terdaftar", "error");
      },
    }
  );

  if (loadingUser) {
    return (
      <div class="position-absolute top-50 start-50 translate-middle">
        <Loadingsvg />
      </div>
    );
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    insertUser({
      variables: { object: { username, email, password } },
    });
    setData({ username: "", email: "", password: "" });
  };

  return (
    <div className="container mt-2">
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="InputUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="InputUsername"
            name="username"
            value={data.username}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="InputEmail"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="InputPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="InputPassword"
            name="password"
            value={data.password}
            onChange={handleChange}
            required
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpComponent;
