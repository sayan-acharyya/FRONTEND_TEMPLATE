import React, { useEffect, useState } from "react";
import logo from "../assets/black-logo.png";
import logo_with_title from "../assets/logo-with-title.png";
import { Link, Navigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { otpVerification, resetAuthSlice } from "../store/slices/authSlice";
import { toast } from "react-toastify";
const OTP = () => {
  const { email } = useParams();
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  const { loading, error, message, user, isAuthenticated } = useSelector(
    (state) => state.auth);

  const handleOtpVerification = (e) => {
    e.preventDefault();
    dispatch(otpVerification(email, otp))

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
        <Link to="/register" className="border-2 border-black rounded-3xl font-bold py-2 w-52 text-end px-4 fixed
        top-10 -left-28 hover:bg-black hover:text-white transition duration-300">
          Back</Link>
        <div className="max-w-sm w-full">
          <div className="flex justify-center mb-12">
            <div className="rounded-full flex items-center justify-center">
              <img src={logo} alt="logo" className="h-24 w-auto" />
            </div>
          </div>
          <h1 className="text-4xl font-medium text-center mb-12 overflow-hidden">Check your Mailbox</h1>
          <p className="text-gray-800 text-center mb-12">Please enter the otp to proceed</p>
          <form onSubmit={handleOtpVerification}>
            <div className="mb-4">
              <input
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-3 border border-black rounded-md focus:outline-none"
              />
            </div>
            <button
              className="border-2 mt-5 border-black w-full font-semibold bg-black text-white py-1.5 rounded-lg hover:bg-white hover:text-black transition "
              type="submit">
              VERIFY 
            </button>
          </form>
        </div>
      </div>
      {/* right side */}
      <div className="hidden w-full md:w-1/2 bg-black text-white md:flex flex-col items-center justify-center p-8 rounded-tl-[80px] rounded-bl-[80px] ">
        <div className="text-center h-[400px]">
          <div className="flex justify-center mb-12">
            <img src={logo_with_title} alt="logo"  className="mb-12 h-44 w-auto"/>
          </div>
          <p className="text-gray-300 mb-12">New to our platform? Sign up now.</p>
          <Link to={"/register"} className="border-2 mt-5 px-8  border-white w-full font-semibold bg-black text-white py-1.5 rounded-lg hover:bg-white hover:text-black transition ">Sign up</Link>
        </div>
      </div>
    </div>
  </>;
};

export default OTP;
