import React from "react";
import { useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useRef } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const nameValue = isSignInForm ? "" : name.current?.value;
    const message = checkValidData(
      nameValue,
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen">
      {/* Background Gradient covering the whole Login component */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-0"></div>

      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/242447b0-bdfd-4235-8288-58d84366f0dc/US-en-20240827-TRIFECTA-perspective_WEB_d7dc1add-9eaf-4d94-88f4-2e2cf381a362_large.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Header Component */}
      <Header />

      {/* Form Section */}
      <form
        onSubmit={handleFormSubmit}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black/85 text-white rounded-md z-20"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-gray-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-gray-800"
        />
        <p className="text-red-500 py-2">{errorMessage}</p>
        <button
          className="p-2 my-2 bg-[#e50914] w-full rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix? Sign Up Now."
            : "Already A User? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
