import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          emailId: emailId,
          password: password,
          firstName: firstName,
          lastName: lastName
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      navigate("/profile"); //once data arrived; navigate
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  };


  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId: emailId,
          password: password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      navigate("/"); //once data arrived; navigate
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  };

  return (
    <>
    <div className="flex justify-center m-16 p-6">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        {!isLoginForm && (
          <>
            <label className="label">First Name</label>
            <input
              type="text"
              value={firstName}
              className="input"
              placeholder=""
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label className="label">Last Name</label>
            <input
              type="text"
              value={lastName}
              className="input"
              placeholder=""
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}

        <label className="label">Email</label>
        <input
          type="email"
          value={emailId}
          className="input"
          placeholder=""
          onChange={(e) => setEmailId(e.target.value)}
        />

        <label className="label">Password</label>
        <input
          type=""
          value={password}
          className="input"
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="text-red-700">{error}</p>

        <button onClick={isLoginForm ? handleLogin : handleSignUp} 
        className="btn btn-neutral mt-4">
          {isLoginForm ? "Login" : "Sign Up"}
        </button>

        <p className="text-blue-900 text-bold text-sm cursor-pointer hover:underline" 
        onClick={() => setIsLoginForm((value) => !value)}>{isLoginForm ? "New user? Sign up now." : "Go to login"}</p>

      </fieldset>
    </div></>
  );
};

export default Login;
