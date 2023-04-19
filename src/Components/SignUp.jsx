import '../CSS/basic.css' 
import GoogleBtn from './GoogleButton';
import Applebtn from './AppleButton'
import { useEffect, useState } from 'react';

function SignUp(){
const [email,setemail]=useState('');
const [password,setpassword]=useState('');

useEffect(()=>{
    console.log(password);
    console.log(email);
},)

    return(
        <>
        <div class="grid  md:grid-cols-3 md:grid-rows-1 h-screen w-screen sm:grid-rows-2  ">

            {/* LeftSection*/}

            <div class=" bg-black h-full w-full font-bold text-white centered font-Montserrat text-7xl ">
                Board.
            </div>



            {/* RightSection */}

            <div class=" bg-Whitesmoke  md:col-span-2 h-full w-full centered">
                <div class="flex flex-col p-2">

                    {/* Heading text */}

                    <div class=" flex flex-col p-2">
                    <h1 class="font-Montserrat font-bold text-4xl">Sign In</h1>
                    <p class="font-Lato font-normal m-1">Sign in to your account</p>
                    </div>

                    {/* Signup Button */}
                    
                    <div class="flex justify-around gap-6 mt-6 ">
                        <GoogleBtn/>
                        <Applebtn/>
                    </div>
                    
                    {/*Form div */}

                    <div class="flex flex-col m-6 bg-white rounded-xl">
                        <div class="flex flex-col px-7 py-7">
                            <label  class="font-Lato font-normal  text-base">Email address</label>
                            <input placeholder='Email' class="bg-Whitesmoke mt-2.5 py-2.5 px-3.5 rounded-xl" onChange={e=>setemail(e.target.value)}></input>
                        </div>
                        <div class="flex flex-col px-7">
                            <label  class="font-Lato font-normal  text-base">Password</label>
                            <input type='password' placeholder="•••••••••" class=" bg-DarkWhiteSmoke mt-2.5 py-2.5 px-3.5 rounded-xl " onChange={e=>setpassword(e.target.value)}></input>
                        </div>
                        <div class="flex flex-col px-7 my-5">
                            <a href=''  class="font-Lato font-normal  text-base text-link">Forget password?</a>
                        </div>
                        <button class="bg-black text-white font-Montserrat font-bold text-base py-2 rounded-xl mx-7 mb-7">Sign In</button>
                    </div>

                    {/* Para */}
                    <p class="centered font-Lato font-normal text-btn">Dont have account?<a href='' class="text-link mx-1">Register here</a></p>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default SignUp;