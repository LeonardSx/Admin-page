import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.authToken);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex items-center justify-center h-screen lg:w-1/2">
      <div className="bg-withe px-10 py-20 rounded-3xl border-2 border-gray-200">
        <h1 className="text-3xl font-medium">Welcome!</h1>
        <div className="mt-7">
          <div>
            <label className="text-lg font-medium">Email</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="texon@example.com"
              type={"text"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-lg font-medium">Password</label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="********"
              type={"text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-5 flex justify-between">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2 font-medium text-base">
                Remember
              </label>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className="active:scale-[.98] py-3 bg-blue-500 text-lg text-black rounded-xl  font-medium"
              onClick={handleLogin}
            >
              Sing In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
