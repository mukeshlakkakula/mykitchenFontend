import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const urlOF = "http://localhost:5000/api/loginuser";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,

        password: credentials.password,
      }),
    };
    const response = await fetch(urlOF, options);
    console.log(response);
    const data = await response.json();
    if (!data.success) {
      alert("Enter Valid Credentials");
    }

    console.log(data);
    if (data.success) {
      navigate("/");
    }
  };

  const setCredentialsOf = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div className="container p-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={setCredentialsOf}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={setCredentialsOf}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
        <Link to="/createuser">
          <button type="button" className="btn btn-danger m-3">
            I'm a new user
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
