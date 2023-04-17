import React from 'react'
import {FcGoogle} from "react-icons/fc";

function GoogleButton() {
  return (
    <div>
        <button class="flex items-center justify-evenly gap-2 rounded-xl text-xs bg-white py-2 px-8 font-normal text-btn "><FcGoogle/>Sign in with Google</button>
    </div>
  )
}

export default GoogleButton;
