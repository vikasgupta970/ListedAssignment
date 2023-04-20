import React, { useEffect } from 'react'
import {AiOutlinePieChart,AiFillSchedule,AiOutlineSetting} from 'react-icons/ai'
import {BsFillTagsFill} from 'react-icons/bs'
import {FaRegUserCircle} from 'react-icons/fa'
import NavBar from './NavBar'
import Card from './Card'
import Piechart from './Piechart'
import Graph from './Graph'

const Dashborad = () => {   
  return (
    <div class="grid md:grid-cols-5 sm:grid-cols-3 h-screen w-screen p-10 ">
        <div class="flex flex-col  text-white rounded-3xl bg-black sm:col-span-1  md:col-span-2 lg:col-span-1 h-full w-full pb-5">
            <div class=" px-12 py-14 font-bold text-white  font-Montserrat text-3xl max-w-72 ">
                    Board.
            </div>
            <div class=" flex flex-col mx-12 ">
                <div class="flex justify-start md:gap-5 items-center">
                    <AiOutlinePieChart class="md:shrink-0"/><a href=''>Dashboard</a>
                </div>
                <div class="flex justify-start md:gap-5 items-center mt-10">
                    <BsFillTagsFill class="md:shrink-0"/><a href=''>Transaction</a>
                </div>
                <div class="flex justify-start md:gap-5 items-center mt-10">
                    <AiFillSchedule class="md:shrink-0"/><a href=''>Schedules</a>
                </div>
                <div class="flex justify-start md:gap-5 items-center mt-10">
                    <FaRegUserCircle class="md:shrink-0"/><a href=''>Users</a>
                </div>
                <div class="flex justify-start md:gap-5 items-center mt-10">
                    <AiOutlineSetting class="md:shrink-0"/><a href=''>Settings</a>
                </div>
            </div>

        </div>
        <div class="flex rounded-xl flex-col px-14 sm:col-span-2 md:col-span-3 lg:col-span-4 h-full w-full">
        <NavBar/>
        <Card/>
        <Graph/>
        <div class="grid  object-contain lg:grid-cols-2 pl-14 mt-10">
            <div class=" object-contain ">
                <Piechart/>
            </div>
            <div class="flex flex-col px-10 ml-10 py-8  rounded-3xl" >
                <h1 class="font-Montserrat font-bold text-lg">Todays Schedule</h1>
                <div class="flex flex-col gap-4 rounded-3xl mt-7">
                    <div class="flex flex-col gap-4  bg-green-300">
                        <div class="flex flex-col justify-start bg-white ml-2 pl-3.5 gap-1 font-Lato">
                           <h1 class=" text-grey">Meeting with suppliers from Kuta Bali</h1>
                           <h1 class="font-normal text-lightgrey text-xs">14.00-15.00</h1>
                           <h1 class="font-normal text-lightgrey text-xs">at Sunset Road, Kuta, Bali </h1>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4  bg-blue-300">    
                        <div class="flex flex-col justify-start bg-white ml-2 pl-3.5 gap-1 font-Lato">
                           <h1 class=" text-grey">Meeting with suppliers from Kuta Bali</h1>
                           <h1 class="font-normal text-lightgrey text-xs">14.00-15.00</h1>
                           <h1 class="font-normal text-lightgrey text-xs">at Sunset Road, Kuta, Bali </h1>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Dashborad;

