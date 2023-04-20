import React, { useState } from 'react'
import { useEffect } from 'react';
import {SiRelianceindustrieslimited} from 'react-icons/si'
import {BsFillPersonVcardFill} from 'react-icons/bs'

const Card = () => {

  const[Data,setData]=useState('');
  const[Data2,setData2]=useState('[]');
  const[CoinName,setCoinName]=useState('');
  const[Rank,setRank]=useState('');
  const[Price,setPrice]=useState('');


  useEffect(()=>{

    fetch('https://api.mfapi.in/mf')
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));

   
    // Fetching Sample Data of one Mutual fund Company

//    

},[])

useEffect(()=>{
      fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR')
          .then(response => response.json())
          .then(response => setData2(response.coins))
          .catch(err => console.error(err));
      
          setCoinName(
            Data2[0].name
          )
          setRank(Data2[0].rank)
          setPrice(Math.round(Data2[0].price))
})


  return (
    <div class="grid grid-cols-2 gap-8 mt-10 lg:grid-cols-4">

    {/* Card 1 */}

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


{/* Card 2 */}


      <div class="grid grid-rows-2 py-5 bg-card2 rounded-2xl ">
        <div class="flex justify-end items-baseline  pr-6">
              <BsFillPersonVcardFill/>
        </div>

        <div class="flex flex-col pl-6">
            <label class="font-Lato text-sm font-normal ">Coin fetched</label>
            <h1 class="font-OpenSans">{
                  CoinName
              }</h1>
        </div>
      </div>

 {/* Card 3      */}


      <div class="grid grid-rows-2 py-5 bg-card3 rounded-2xl ">
        <div class="flex justify-end items-baseline  pr-6">
              <BsFillPersonVcardFill/>
        </div>

        <div class="flex flex-col pl-6">
            <label class="font-Lato text-sm font-normal ">Price Of Coin </label>
            <h1 class="font-OpenSans">{
                  Price
              }</h1>
        </div>
      </div>


{/* Card 4 */}

           <div class="grid grid-rows-2 py-5 bg-card4 rounded-2xl ">
        <div class="flex justify-end items-baseline  pr-6">
              <BsFillPersonVcardFill/>
        </div>

        <div class="flex flex-col pl-6">
            <label class="font-Lato text-sm font-normal ">Rank Of Coin </label>
            <h1 class="font-OpenSans">{
                 Rank
              }</h1>
        </div>
      </div>

    </div>
  )
}

export default Card
