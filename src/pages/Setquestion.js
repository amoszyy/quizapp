import React from 'react'
import { useState } from 'react'

const Setquestion = () => {
  const [question, setquestion] = useState("")
  const [optionA, setoptionA] = useState("")
  const [optionB, setoptionB] = useState("")
  const [optionC, setoptionC] = useState("")
  const [optionD, setoptionD] = useState("")
  const [correctanswer, setcorrectanswer] = useState("")
  const setTest = ()=>{
    // let questionDetails = {question, }

  }
  return (
    <>
    <div className='bg-dark setquestion'>
    <div className='container-fluid'>
        <div className='col-md-3 mx-auto bg-light pb-5'>
        <textarea  name="" id="" cols="30" rows="10" placeholder='enter your question here...'></textarea>
        <input type="text" className='form-control my-2' placeholder='option A' onChange={(e)=>setoptionA(e.target.value)}/>
        <input type="text" className='form-control my-2' placeholder='option B'  onChange={(e)=>setoptionB(e.target.value)}/>
        <input type="text" className='form-control my-2' placeholder='option C'  onChange={(e)=>setoptionC(e.target.value)}/>
        <input type="text" className='form-control my-2' placeholder='option D'  onChange={(e)=>setoptionD(e.target.value)}/>
        <input type="text" className='form-control my-2' placeholder='correct answer' />
        <button className='btn btn-success my-2'>set question</button>
           

        </div>
        
    </div>
    </div>
   


    </>
  )
}

export default Setquestion;