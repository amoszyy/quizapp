import React from 'react'
import Signup from './pages/Signup';
import Login from './pages/Login'
import {Routes,Route,Navigate} from "react-router-dom"

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/signup"  element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  
    </>
  )
}

export default App;
