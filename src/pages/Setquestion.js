import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Setquestion = () => {
  const [question, setquestion] = useState("")
  const [optionA, setoptionA] = useState("")
  const [optionB, setoptionB] = useState("")
  const [optionC, setoptionC] = useState("")
  const [optionD, setoptionD] = useState("")
  const [correctAnswer, setcorrectAnswer] = useState("")
  
  let navigate = useNavigate()
  const setTest = ()=>{
    let endpointT = "http://localhost:5007/user/setquestion"
    let token = localStorage.token
    let tofind = 2
    let uid = Math.floor(100000 + Math.random() * 900000);

    let questionDetails = {question, optionA, optionB, optionC, optionD, correctAnswer, token, tofind, uid}
    axios.post(endpointT, questionDetails).then((result)=>{
      console.log(result)

    })


  }
  return (
    <>
    <div className='bg-dark setquestion'>
    <div className='container-fluid'>
        <div className='col-md-3 mx-auto bg-light pb-5'>
        <textarea  name="" id="" cols="30" rows="10" placeholder='enter your question here...' onChange={(e)=>setquestion(e.target.value)} className='form-control'></textarea>
        <input type="text" className='form-control my-2' placeholder='option A' onChange={(e)=>setoptionA(e.target.value)}/>
        <input type="text" className='form-control my-2' placeholder='option B'  onChange={(e)=>setoptionB(e.target.value)}/>
        <input type="text" className='form-control my-2' placeholder='option C'  onChange={(e)=>setoptionC(e.target.value)}/>
        <input type="text" className='form-control my-2' placeholder='option D'  onChange={(e)=>setoptionD(e.target.value)}/>
        <input type="text" className='form-control my-2' placeholder='correct answer' onChange={(e)=>setcorrectAnswer(e.target.value)}/>
        <button className='btn btn-success my-2' onClick={setTest}>set question</button>
        </div>
    </div>
    </div>




    </>
  )
}

export default Setquestion;