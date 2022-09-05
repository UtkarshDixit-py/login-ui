import React from 'react'

import SignIn from "../components/SignIn.js"
import Illustration from "../components/Illustration.js"


const SigninPage = () => {
  return (
    <div className="flex h-screen" >
        <SignIn />
        <Illustration />
    </div>
  )
}

export default SigninPage