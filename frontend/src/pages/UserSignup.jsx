import React, { useState } from "react";
import { link } from "../lib/link";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


    const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${link}/user/api/signup`, {
        username,
        email,
        password,
      });
      setSuccess("Signup successful!");

      setError("");
      // Reset form fields if needed
      setUsername("");
      setEmail("");
      setPassword("");
      navigate('/')
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
    <div className="container mx-auto">
      <h1 className="text-center">Signup To the Website</h1>
      <form onSubmit={handleSubmit} className="form-control mx-auto w-full max-w-xs">
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
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
        <button type="submit" className="btn mt-2">Signup</button>
      </form>
    </div>
  );
};


export default UserSignup;
