import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const otpPage = () => {
  return (
    <div>
      <NavBar text="Log In" />

      <div class="h-screen py-20 px-3">
        <div class="container  mx-auto">
          <div class="max-w-sm mx-auto md:max-w-lg">
            <div class="w-full">
              <div class="bg-white h-72 py-3 rounded text-center border shadow-md ">
                <h1 class="text-2xl font-bold">Verify your Email</h1>
                <div class="flex flex-col mt-4">
                  <span className="text-slate-600">
                    We have sent code to your email
                  </span>
                  <span class="font-bold">alesiaka******@mail.com</span>
                </div>

                <div
                  id="otp"
                  class="flex flex-row justify-center text-center px-2 mt-5"
                >
                  <input
                    class="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="first"
                    maxlength="1"
                  />
                  <input
                    class="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="second"
                    maxlength="1"
                  />
                  <input
                    class="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="third"
                    maxlength="1"
                  />
                  <input
                    class="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="fourth"
                    maxlength="1"
                  />
                  <input
                    class="m-2 border h-10 w-10 text-center form-control rounded"
                    type="text"
                    id="fifth"
                    maxlength="1"
                  />
                </div>

                <div className="m-5">
                  <Link
                    to="/"
                    className="px-5 text-center py-3  text-sm font-medium text-white bg-primary rounded-lg"
                  >
                    Sign in
                  </Link>
                </div>

                <p className="text-slate-600">
                  Resend code in{" "}
                  <span className="font-extrabold text-gray-900">59:00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default otpPage;
