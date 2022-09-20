import React from 'react'
import quizbg from "../images/takequiz.jpg"
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Takequiz = () => {
  useEffect(() => {
    getquestions()
    
  
    
  }, [])
  // useEffect(()=>{
  //  console.log(selectedOption)
  // })


  const [questionsObj, setquestionsObj] = useState([])
  const [score, setscore] = useState(0)
  const [questions, setquestions] = useState([])
  const [questionNumber, setquestionNumber] = useState(1)
  const [finalscore, setfinalscore] = useState(0)

  const [uid, setuid] = useState("")
  const [selectedOption, setselectedOption] = useState("")

  const getquestions = ()=>{
    let endpointQ =  "http://localhost:5007/user/getquestions"
    let tofind = 2
    let token = localStorage.token
    let details = {tofind, token}
    axios.post(endpointQ, details).then((result)=>{
      let questionarray = result.data.result
      console.log(questionarray)
        setquestions(questionarray)

     
      let a = Math.floor(Math.random()*5)
      if(a >=questionarray.length){
        a = 5
      }
      
      setquestionsObj((prev)=>questionarray[a])
    
      // setuid(questionsObj.uid)
      // console.log(questionsObj.uid)
      setuid(questionarray[a].uid)
    })
  } 

  const showUID =()=>{
   
    if(selectedOption == questionsObj.correctAnswer && score<questionNumber){
      let scores = score +1
      setscore(scores)
      
     
     
    }else{
      // alert("incorrect")
      console.log(uid)
    }
    if(questionNumber>15){
      alert("maximum no of questions submit")
    } else{
      let a = Math.floor(Math.random()*5);
      setquestionsObj(questions[a])
      let number = questionNumber + 1
      setquestionNumber(number)
    }
   
  
  
  }
  const submitTest = ()=>{
    if(questionNumber<15){
      alert("complete test")

    } else{
      // alert("submitted successfully")
      let submitscore = score/questionNumber * 100;
      alert(submitscore)
      setfinalscore(submitscore)
    }
   
  }

  // const nextQuestion=()=>{
    // let a = Math.floor(Math.random()*5);
    // setquestionsObj(getquestionsarray[a])
  // }
  // const checkAnswer = ()=>{
    // console.log(questionsObj.correctAnswer)

      
    // let endpointA = "http://localhost:5007/user/checkanswer"
    // let questiondetails = {uid}
    // console.log(uid)
    // axios.post(endpointA, questiondetails).then((result)=>{
    //   console.log(result)
    // })
    
  // }
  return (
    <>
    <div className='bgquiz'>
      
        <div className='container bg-light innerquiz'>
        <div>{score}/{questionNumber}</div>
        <p>{finalscore}%</p>
          <div>
           <p>{questionNumber}: <span>{questionsObj.question}</span></p>
            a: <input type="radio" onClick={(e)=>setselectedOption(e.target.value)} name='option'  className='btn btn-info' value={questionsObj.optionA}/> <span>{questionsObj.optionA}</span><br />
            b : <input type="radio" onClick={(e)=>setselectedOption(e.target.value)} name='option'  className='btn btn-info' value={questionsObj.optionB}/><span>{questionsObj.optionB}</span><br />
            c : <input type="radio" onClick={(e)=>setselectedOption(e.target.value)} name='option'  className='btn btn-info' value={questionsObj.optionC}/><span>{questionsObj.optionC}</span><br />
            d : <input type="radio" onClick={(e)=>setselectedOption(e.target.value)} name='option'  className='btn btn-info' value={questionsObj.optionD}/><span>{questionsObj.optionD}</span><br />
          
          </div>
          
          <button className='btn btn-info shadow my-2' onClick={showUID}><i class="fa-solid fa-forward" ></i></button>
          <button className='btn btn-success shadow my-2 ' onClick={submitTest}>submit</button>
         
          

          
          
          {/* {
            questionsarray.map((quest, index)=>(
             
              <>
              <h2></h2>
              <b className='text-dark text-center'>{index + 1}.{quest.question}</b><br />
             a: <input type="radio" onClick={(e)=>setselectedOption(e.target.value)} name='option'  className='btn btn-info' value={quest.optionA}/> <span>{quest.optionA}</span><br />
             b: <input type="radio" onClick={(e)=>setselectedOption(e.target.value)} name='option'  className='btn btn-info my-2' value={quest.optionB}/> <span>{quest.optionB}</span><br />
             c : <input type="radio" onClick={(e)=>setselectedOption(e.target.value)} name='option' className='btn btn-info my-2' value={quest.optionC}/><span>{quest.optionC}</span><br />
             d : <input type="radio" onClick={(e)=>setselectedOption(e.target.value)} name='option' className='btn btn-info my-2' value={quest.optionD}/><span>{quest.optionD}</span><br /> 
             <button onClick={()=>checkAnswer(quest.uid)}>submit answer</button> 
         
              </>
            ))
          } */}
         
            

        </div>

    </div>

    

    </>
  )
}

export default Takequiz;