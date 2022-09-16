import React from 'react'
import Navbar from '../components/Navbar';
import {Routes,Route,Navigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Dashboard = () => {
    const [firstname, setfirstname] = useState("")
    useEffect(() => {
        getuserdeets()
  
    }, [])
    
    const getuserdeets = ()=>{
        let detailsPoint = "http://localhost:5007/user/dashboard"
        let token = localStorage.token
        let sendBack = {token}
        axios.post(detailsPoint, sendBack).then((result)=>{
            console.log(result.data.message)
      
            console.log(result)
            console.log(result.data.result.firstnames)
            setfirstname(result.data.result.firstnames)

        })

    }
  return (
    <>
    <Navbar/>
    <div className='pt-5 bg-light contain'>
    <h1 className='text-center'>welcome {firstname}</h1>
    <div className='container-fluid bg-light '>
        {/* <div className='col-md-8 '> */}
            <div className='row contains'>
               
            <Link to={"/takequiz"} style={{color:"black", textDecoration:"none"}} className='take bg-danger shadow col-md-2 col-3 mx-1 pt-2 '>
                <div className=' '>
                    <h5 className='text-center'>take quiz</h5>


                </div>
                </Link>
               
              
               <Link to={"/setquestion"} style={{color:"black", textDecoration:"none"}} className='take bg-info shadow col-md-2 col-3 mx-1  pt-2'>
                <div className=' '>
                    <h5 className='text-center'>create quiz</h5>


                </div>
                </Link>
                <Link to={"/setquestion"} style={{color:"black", textDecoration:"none"}}className='take bg-success shadow col-md-2 col-3 mx-1  pt-2'>
                <div className=' '>
                    <h5 className='text-center'>student</h5>


                </div>
                </Link>
               
                
                
                
               
                
            
              
               
            </div>

        {/* </div> */}

    </div>
    </div>
   


    </>
  )
}

export default Dashboard;