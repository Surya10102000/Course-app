import React, { useState } from "react";
import { link } from "../lib/link";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${link}/user/api/login`, {
        email,
        password,
      });
      setSuccess("Login successful!");

      setError("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred during signup.");
      }
      setSuccess("");
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center">Login To the Website</h1>
        

        <form
          onSubmit={handleSubmit}
          className="form-control mx-auto w-full max-w-xs"
        >
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {error && <div className="text-red-500">{error}</div>}
          {success && <div className="text-green-500">{success}</div>}
          <button className="btn mt-2">Login</button>
        </form>
      </div>
    </>
  );
};

export default UserLogin;
