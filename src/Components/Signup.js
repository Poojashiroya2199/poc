import React, { useState } from "react";
import UserPool from "../UserPool";

const SignUp = () => {
  const [data, setData] = useState({ email: "", password: ""});
  const handleSignUp = () => {
    console.log(data);
    UserPool.signUp(data.email, data.password, [], null, (err,data) =>{
        if(err)console.log(err);
        console.log(data);
    } );
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
        <button onClick={handleSignUp}>Sign Up</button>
        <a href="/">Already have an account ? Login</a>
      </div>
    </div>
  );
};

export default SignUp;
