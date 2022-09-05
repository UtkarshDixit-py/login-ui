import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const ForgotPassword = () => {
  return (
    <>
      <NavBar text="Log In" />

      <div class="h-screen py-20 px-3">
        <div class="container  mx-auto">
          <div class="max-w-sm mx-auto md:max-w-lg">
            <div class="w-full">
              <div class="bg-white h-78 py-3 rounded text-center border shadow-md ">
                <h1 class="text-2xl font-bold">Need help with your account?</h1>
                <div class="flex flex-col mt-4">
                  <span className="text-slate-600">
                    Enter the email address associated with your account <br />{" "}
                    and we will send you a link to reset your password.
                  </span>
                </div>

                <form
                  action=""
                  class="flex flex-col max-w-md mx-auto mt-8 mb-0 space-y-4  w-full"
                >
                  <div>
                    <div class="relative">
                      <input
                        type="email"
                        class="w-13 p-4 pr-12 text-sm border border-gray-300 rounded-lg w-full"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div></div>

                  <div class="flex flex-col items-center justify-between">
                    <Link
                      to="/loggedin"
                      class="w-full px-5 py-3 text-center m-3 ml-3 text-sm font-medium text-white bg-primary rounded-lg"
                    >
                      Send Link
                    </Link>
                  </div>
                </form>
                <span className="font-extrabold text-gray-900">
                  Forgot your email?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
