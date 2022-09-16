import React from 'react'
import quizbg from "../images/takequiz.jpg"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Takequiz = () => {
  useEffect(() => {
    getquestions()
    
  
    
  }, [])
  const [questionsarray, setquestionsarray] = useState([])
  const getquestions = ()=>{
    let endpointQ =  "http://localhost:5007/user/getquestions"
    let tofind = 2
    let token = localStorage.token
    let details = {tofind, token}
    axios.post(endpointQ, details).then((result)=>{
      console.log(result)
      console.log(result.data.result)
      let questionarray = result.data.result
      console.log(questionarray)
      let filteredquestionarray = questionarray.filter((quest)=>tofind==2)
      console.log(filteredquestionarray)
      setquestionsarray(filteredquestionarray)
      console.log(questionsarray)
      

    })

    const checkAnswer = ()=>{
      
    }


  } 
  return (
    <>
    <div className='bgquiz'>
        <div className='container bg-light innerquiz'>
          {
            questionsarray.map((quest, index)=>(
              <>
              <h2></h2>
              <b className='text-dark text-center'>{index + 1}.{quest.question}</b><br />
             a: <input type="button"  className='btn btn-info' value={quest.optionA}/><br />
             b: <input type="button"  className='btn btn-info my-2' value={quest.optionB}/><br />
             c : <input type="button" className='btn btn-info my-2' value={quest.optionC}/><br />
             d : <input type="button" className='btn btn-info my-2' value={quest.optionD}/><br />

             
              </>
            ))
          }
         
            

        </div>

    </div>

    

    </>
  )
}

export default Takequiz;