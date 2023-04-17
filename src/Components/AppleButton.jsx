import React from 'react'
import {AiFillApple} from "react-icons/ai"

function AppleButton() {
  return (
    <div>
    <button class="flex items-center justify-evenly gap-2 rounded-xl text-xs bg-white py-2 px-8 font-normal text-btn "><AiFillApple/>Sign in with Google</button>
    </div>
  )
}

export default AppleButton;
