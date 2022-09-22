import React from 'react'
import Navbar from '../components/Navbar';
import homeimage from "../images/homeimage.jpg"
import {Routes,Route,Navigate} from "react-router-dom"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='homebody'>
        <Navbar style={{backgroundColor:"red"}}/>
        <div className='homecontainer row '>
            <div className='hometext col-md-4'>
                <h1>Easy and intuitive online testing</h1>
                <b>amoshoot is an online platform that supports online creation and delivery of feature rich tests</b><br />
               <Link to={"/signup"}> <button className='btn btn-warning my-3 mx-1'><b>join now</b></button></Link>
                <Link to={"/login"}><button className='btn btn-primary' >Login</button></Link>
              

            </div>
            <div className='col-md-2 col-1'></div>
            <div className='homeimage col-md-3 col-4'>
                {/* <img src={homeimage} className='w-100 imagehome' alt="" /> */}

            </div>

        </div>

    </div>
    </>
  )
}

export default Home;