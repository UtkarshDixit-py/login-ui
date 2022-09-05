import React from "react";

import dotFullSquare from "../assets/dotFullSquare.png";
import hollowSquare from "../assets/hollowSquare.png";
import solidSquare from "../assets/solidSquare.png";
import semiCircle from "../assets/semiCircle.png";
import x from "../assets/x.png";
import rect from "../assets/rect.png";
import mainCard from "../assets/mainCard.png";
import subCard1 from "../assets/subCard1.png";
import subCard2 from "../assets/subCard2.png";


const Illustration = () => {
  return (
    <div className="flex justify-center relative w-2/5 h-auto bg-primary my-5 mr-5">
      <div className="container relative top-40 h-fit w-fit">
        <img src={mainCard} className="z-0" />
        <img src={subCard1} className="absolute z-10 top-8 left-52 " />
        <img src={subCard2} className="absolute z-10 top-64 right-44" />
      </div>

      <div className="container absolute h-fit w-fit text-center bottom-28 ">
        <p className="text-m font-extrabold text-slate-100">
          Get better with money
        </p>
        <p className="text-sm text-slate-100">
          Overpay help you set saving goals, earn cash back offers, Go to
          disclaimer
          <br />
          for more details and get paychecks up to two days early. Get a $20
          bonus
          <br /> when you receive qualifying direct deposits
        </p>
      </div>

      <img src={semiCircle} className="absolute h-20 w-20 bottom-56 right-32" />
      <img src={x} className="absolute h-4 w-4 top-24 left-44" />
      <img src={x} className="absolute h-3 w-3 top-36 right-36" />
      <img src={x} className="absolute h-2 w-2 top-28 right-40" />
      <img src={solidSquare} className="absolute h-12 w-12 top-32 left-32" />
      <img src={hollowSquare} className="absolute h-12 w-12 top-36 left-36" />
      <img src={dotFullSquare} className="absolute h-16 w-16 bottom-2 left-2" />

      <div className="absolute  grid grid-cols-3 grid-rows-6  gap-y-1.5 w-9 h-24 top-2 right-1">
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <div></div>
        <div></div>
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <div></div>
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <div></div>
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
        <img src={rect} className="h-4 w-1 self-center	" />
      </div>
    </div>
  );
};

export default Illustration;
