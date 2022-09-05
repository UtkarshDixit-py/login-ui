import React from 'react'

import wLogoP1 from "../assets/wLogoP1.png"
import wLogoP2 from "../assets/wLogoP2.png"
import OverpayW from "../assets/OverpayW.png"

const NavBar = ({text}) => {
  return (


  <div
    class="flex flex-row-reverse justify-between  bg-darkBg h-16 px-4 w-screen  max-w-screen"
  >
        <div className="flex flex-row absolute top-4 left-6">
        <div>
        <img src={wLogoP1} className="z-30 "/>
        <img src={wLogoP2} className="absolute top-3 left-0 z-30" />
        </div>
        <div>
        <img src={OverpayW} />
        </div>
        </div>
        <div>
        <button className="px-5 py-2 w-28 font-medium text-white mt-3 mx-10 bg-blue-600 rounded-lg">{text}</button>
        </div>
  </div>



  )
}

export default NavBar