import React from 'react'
import {AiOutlinePieChart,AiFillSchedule,AiOutlineSetting} from 'react-icons/ai'
import {BsFillTagsFill} from 'react-icons/bs'
import {FaRegUserCircle} from 'react-icons/fa'

const Dashborad = () => {
  return (
    <div class="grid md:grid-cols-5 sm:grid-cols-3 h-screen w-screen p-10">
        <div class="flex flex-col  text-white rounded-3xl bg-black sm:col-span-1  md:col-span-2 lg:col-span-1 h-full w-full">
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
        <div class="centered rounded-xl bg-WhiteSmoke sm:col-span-2 md:col-span-3 lg:col-span-4 h-full w-full">
            <h1>Div2</h1>
        </div>
    </div>
  )
}

export default Dashborad;

