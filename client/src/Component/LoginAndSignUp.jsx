import React from "react";
import {
  FaGoogle,
  FaApple,
  FaFacebookF,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";
const LoginAndSignUp = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user to backend
      const res = await axios.post(
        "http://localhost:5000/api/users/google-login",
        {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          uid: user.uid,
        }
      );
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error("❌ Google sign-in error:", error.message);
    }
  };

  const providers = [
    { name: signInWithGoogle, icon: <FaGoogle size={24} /> },
    { name: "Apple", icon: <FaApple size={24} /> },
    { name: "Facebook", icon: <FaFacebookF size={24} /> },
    { name: "Email", icon: <FaEnvelope size={24} /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md relative">
        <Link
          to="/"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          aria-label="Close"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FaTimes size={20} />
        </Link>
        <h2 className="text-center font-bold p-4 ">Login or Sign up</h2>
        <div>
          <div className="p-4 border-t-1 border-gray-200">
            <p>Welcome to StayFinder</p>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-700"
                htmlFor="countryCode"
              >
                Country Code
              </label>
              <select
                id="countryCode"
                name="countryCode"
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue="+91"
              >
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+86">+86 (China)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+92">+92 (Pakistan)</option>
              </select>
              <label
                className="block mt-4 mb-2 text-sm font-medium text-gray-700"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10,15}"
                required
              />
              <div className="flex items-center mt-4">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#FF5A5F] text-white px-6 py-2 rounded-lg w-full mt-4 font-semibold hover:bg-[#e0484d] transition"
                onClick={() =>
                  alert("Login or Sign Up functionality not implemented yet.")
                }
              >
                Continue
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <span className="text-gray-500 text-sm">or</span>
            </div>
            <div className="flex gap-2 justify-center items-center mt-4">
              {providers.map((provider, idx) => (
                <button
                  key={idx}
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  onClick={
                    provider
                      ? signInWithGoogle
                      : () =>
                          alert(`${provider.name} sign-in not implemented yet.`)
                  }
                >
                  <span className="flex items-center gap-2">
                    {provider.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignUp;
