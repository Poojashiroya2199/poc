import React, { useState } from "react";
import Pool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const authenticate = async (Username, Password) => {
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess:", data);
          resolve(data);
        },
        onFailure: (err) => {
          console.log("OnFailure:", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data);
        },
      });
    });
  };
  const handleLogin = async () => {
    await authenticate(data.email, data.password)
      .then((data) => console.log("logged in!", data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>User Details</h1>
      <div className="wrapper">
        <label>Email</label>
        <input
          type="email"
          value={data.email}
          onInput={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          value={data.password}
          onInput={(e) => setData({ ...data, password: e.target.value })}
        />
        <button onClick={handleLogin}>Login</button>
        <a href="/signup">Don't have an account? Sign Up</a>
      </div>
    </div>
  );
};

export default Login;
