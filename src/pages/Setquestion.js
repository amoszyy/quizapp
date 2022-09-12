import React from 'react'

const Setquestion = () => {
  return (
    <>
    <div className='bg-dark setquestion'>
    <div className='container-fluid'>
        <div className='col-md-3 mx-auto bg-light pb-5'>
        <textarea  name="" id="" cols="30" rows="10" placeholder='enter your question here...'></textarea>
        <input type="text" className='form-control my-2' placeholder='option A' />
        <input type="text" className='form-control my-2' placeholder='option B' />
        <input type="text" className='form-control my-2' placeholder='option C' />
        <input type="text" className='form-control my-2' placeholder='option D' />
        <button className='btn btn-success my-2'>set question</button>
           

        </div>
        
    </div>
    </div>
   


    </>
  )
}

export default Setquestion;