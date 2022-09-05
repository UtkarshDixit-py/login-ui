import React from "react";

import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash } from "react-icons/bs";

import logoP1 from "../assets/logoP1.png"
import logoP2 from "../assets/logoP2.png"
import Overpay from "../assets/Overpay.png"


import { Link} from "react-router-dom";


const SignIn = () => {
  return (
    <>
    <div class="flex  flex-col justify-center w-3/5 px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
      <div className="flex flex-row absolute top-10 left-6">
        <div>
        <img src={logoP2} className="z-30"/>
        <img src={logoP1} className="absolute top-3 left-0 z-30" />
        </div>
        <div>
        <img src={Overpay} />
        </div>
        
        
      </div>
      <div class=" mx-auto w-fit text-center  ">
        <h1 class="text-4xl font-extrabold">Sign in to Overpay</h1>

        <p class="mt-4 text-gray-500">Send, spend and save smarter</p>
      </div>

      <form
        action=""
        class="flex flex-col max-w-md mx-auto mt-8 mb-0 space-y-4  w-full"
      >
        <div>
          <button
            type="button"
            class="text-gray-900 text-lg  bg-gray-100 w-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-gray-100 mr-2 mb-2  justify-self-center"
          >
            <FcGoogle className="m-2" />
            <p>Sign in with Google</p>
          </button>
          <div class="relative flex py-5 items-center">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="flex-shrink mx-4 text-gray-500">or with email</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>
          <div class="relative">
            <input
              type="email"
              class="w-13 p-4 pr-12 text-sm border border-gray-300 rounded-lg w-full"
              placeholder="Username or email"
            />
          </div>
        </div>

        <div>
          
          <div class="relative">
            <input
              type="password"
              class="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg"
              placeholder="Enter password"
            />
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <BsEyeSlash />
            </span>
          </div>
          <div className="mt-3 text-end">
          <Link to="/forgotpassword" className=" text-primary font-extrabold">Forgot Password ?</Link>
          </div>
          
        </div>

        <div class="flex flex-col items-center justify-between">
          
          <Link to ="/loggedin"
          class="w-full px-5 py-3 text-center m-3 ml-3 text-sm font-medium text-white bg-primary rounded-lg">
            Sign in
          </Link>
          <p class="text-base text-black">
            Don't have an account ?
            
            <Link class="font-bold m-2" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
    </>
  );
};

export default SignIn;
