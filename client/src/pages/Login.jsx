import React, { useEffect, useState } from "react";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, resetAuthSlice } from "../store/slices/authSlice.js";
import { toast } from "react-toastify";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { loading, error, message, user, isAuthenticated } = useSelector((state) => state.auth)


  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    dispatch(login(data));
  }

  useEffect(() => {

    if (message) {
      toast.success(message)
      dispatch(resetAuthSlice());
    }
    if (error) {
      toast.error(error);
      dispatch(resetAuthSlice());
    }
  }, [dispatch, isAuthenticated, error, loading])


  if (isAuthenticated) {
    return <Navigate to="/" />
  }


  return <>

    <div className="flex flex-col justify-center md:flex-row h-screen">
      {/* left side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white relative ">
        <div className="max-w-sm w-full">
          <div className="flex justify-center mb-12">
            <div className="rounded-full flex items-center justify-center">
              <img src={logo} alt="logo" className="h-24 w-auto" />
            </div>
          </div>
          <h1 className="text-4xl font-medium text-center mb-12 overflow-hidden">
            Welcome Back !!</h1>
          <p className="text-gray-800 text-center mb-12">
            Please enter your Credentials to login
          </p>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-3 border border-black rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 border border-black rounded-md focus:outline-none"
              />
            </div>
            <Link to={"/password/forgot"} className="font-semibold text-black mb-12">Forgot Password ?</Link>
            <div>

            </div>
            <button
              className="border-2 mt-5 border-black w-full font-semibold bg-black text-white py-1.5 rounded-lg hover:bg-white hover:text-black transition "
              type="submit">
              LOGIN
            </button>
          </form>
          <div className="block md:hidden font-semibold mt-5">
            <p>Don't have any Account?<Link to={'/register'} className="underline text-blue-700  text-sm"> Signup</Link></p>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="hidden w-full md:w-1/2 bg-black text-white md:flex flex-col items-center justify-center p-8 rounded-tl-[80px] rounded-bl-[80px] ">
        <div className="text-center h-[400px]">
          <div className="flex justify-center mb-12">
            <img src={logo_with_title} alt="logo" className="mb-12 h-44 w-auto" />
          </div>
          <p className="text-gray-300 mb-12">New to our platform? Sign up now.</p>
          <Link to={"/register"} className="  border-2 mt-5 px-8  border-white w-full font-semibold bg-black text-white py-1.5 rounded-lg hover:bg-white hover:text-black transition ">Sign up</Link>
        </div>
      </div>
    </div>
  </>;
};

export default Login;
