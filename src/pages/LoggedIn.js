import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  return (
    <>
      <NavBar text="Log Out" />
      <div class="h-screen py-20 px-3">
        <div class="container  mx-auto">
          <div class="max-w-sm mx-auto md:max-w-lg">
            <div class="w-full">
              <div class="bg-white h-78 py-3 rounded text-center border shadow-md ">
                <h1 class="text-2xl font-bold">Hi,John Doe !</h1>
                <div class="flex flex-col mt-4">
                  <span className="text-slate-600">
                    You’re logged in. Well done!
                  </span>
                </div>

                <div class="m-4">
                  <Link
                    to="/"
                    class="w-78 px-5 py-3 text-center  ml-3 text-sm font-medium text-white bg-primary rounded-lg"
                  >
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoggedIn;
