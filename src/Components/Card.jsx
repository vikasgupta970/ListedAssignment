import React, { useState } from 'react'
import { useEffect } from 'react';
import {SiRelianceindustrieslimited} from 'react-icons/si'
import {BsFillPersonVcardFill} from 'react-icons/bs'

const Card = () => {

  const[Data,setData]=useState('');
  const[Data2,setData2]=useState('');

  useEffect(()=>{

    fetch('https://api.mfapi.in/mf')
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));

   
    // Fetching Sample Data of one Mutual fund Company

    fetch('https://api.postalpincode.in/pincode/110002')
    .then(response => response.json())
    .then(response => setData2(response))
    .catch(err => console.error(err));
},[])

  return (
    <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">

      <div class="grid grid-rows-2 py-5 bg-card rounded-2xl ">
        <div class="flex justify-end items-baseline  pr-6">
              <SiRelianceindustrieslimited/>
        </div>

        <div class="flex flex-col pl-6">
            <label class="font-Lato text-sm font-normal ">Total Mutual Fund</label>
            <h1 class="font-OpenSans">{
              Data.length
              }</h1>
        </div>
      </div>

      <div class="grid grid-rows-2 py-5 bg-card rounded-2xl ">
        <div class="flex justify-end items-baseline  pr-6">
              <BsFillPersonVcardFill/>
        </div>

        <div class="flex flex-col pl-6">
            <label class="font-Lato text-sm font-normal ">No. of Picode</label>
            <h1 class="font-OpenSans">{
              Data2[0].PostOffice.length
              }</h1>
        </div>
      </div>
      <div>01</div>
      <div>01</div>
    </div>
  )
}

export default Card
