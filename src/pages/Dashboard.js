import React from 'react'
import Navbar from '../components/Navbar';
import {Routes,Route,Navigate} from "react-router-dom"
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-5 bg-light contain'>
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