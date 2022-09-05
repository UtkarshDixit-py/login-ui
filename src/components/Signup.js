import React from "react";

import { FcGoogle } from "react-icons/fc";
import { BsEyeSlash } from "react-icons/bs";

import wLogoP1 from "../assets/wLogoP1.png";
import wLogoP2 from "../assets/wLogoP2.png";
import OverpayW from "../assets/OverpayW.png";

import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div class="flex  flex-col justify-center w-3/5 px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex flex-row absolute top-10 left-6">
          <div>
            <img src={wLogoP1} className="z-30 " />
            <img src={wLogoP2} className="absolute top-3 left-0 z-30" />
          </div>
          <div>
            <img src={OverpayW} />
          </div>
        </div>
        <div class=" mx-auto w-fit text-center  ">
          <h1 class="text-4xl font-extrabold">Sign up for an account</h1>

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
              <p>Sign Up with Google</p>
            </button>
            <div class="relative flex py-5 items-center">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="flex-shrink mx-4 text-gray-500">or with email</span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  class="w-full p-3 text-sm mb-4 border border-gray-300 rounded-lg"
                  placeholder="First Name"
                />
              </div>

              <div>
                <input
                  class="w-full p-3 text-sm border border-gray-300 rounded-lg"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <label for="email" class="sr-only">
              Email
            </label>
            <div class="relative">
              <input
                type="email"
                class="w-13 p-4 pr-12 text-sm border border-gray-300 rounded-lg w-full"
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <label for="password" class="sr-only">
              Password
            </label>
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
          </div>

          <div class="flex flex-col items-center justify-between">
            <Link
              to="/"
              class="w-full text-center px-5 py-3 m-3 ml-3 text-sm font-medium text-white bg-primary rounded-lg"
            >
              <p>Sign Up</p>
            </Link>

            <p class="text-base text-black">
              Already have an account ?
              <Link class="font-bold" to="/">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
