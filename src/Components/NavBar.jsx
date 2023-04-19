import React from 'react'
import {FiBell} from 'react-icons/fi'
import {CiSearch} from 'react-icons/ci'
import {FaUserCircle} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div class="flex flex-col  w-full  rounded-lg ">
        
        <div class=" ">

            <div class="flex sm:justify-center md:justify-start">
            <h1 class="font-Montserrat font-bold text-2xl left-0 col-span-1 ">DashBoard</h1>
            </div>


            <div class="flex sm:justify-center md:justify-end">

                <div  class=" flex items-center ">
                <div class="flex  items-center text-WhiteSmoke ">
                    <input type='search' placeholder='Search....' class="rounded-2xl pl-6 py-1"></input>
                    <button><CiSearch/></button>
                </div>
                <FiBell class="ml-7"/>
                <FaUserCircle class="ml-5"/>
                </div>

            </div>
    
        </div>
      
    </div>
  )
}

export default NavBar
