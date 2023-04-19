
import { useState } from 'react';
import SignUp from './Components/SignUp';
import { Routes,Route } from 'react-router-dom';
import Card from './Components/Card';
import Dashborad from './Components/Dashborad';



function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/Dashboard' element={<Dashborad/>}></Route>
      <Route path='/card' element={<Card/>}></Route>
    </Routes>
    </>

  );
}

export default App;
