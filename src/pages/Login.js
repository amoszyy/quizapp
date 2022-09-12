import React from 'react'
import { useFormik } from 'formik'

const Login = () => {
  let formik = useFormik({

  })
  return (
    <>
      <div className='container-fluid main'>
        <div className='row'>
        <div className='col-md-6 col-12 shadow bgleft'>
           
            
           </div>
           <div className='col-md-6 col-12  bg-light'>
               <div className='container right'>
                   <div className='col-md-8 mx-auto pt-5'>
                   <h1 className='text-center'>signup</h1>
                   <form action="" onSubmit={formik.handleSubmit}>
              
                   <input type="text" className='form-control my-2' placeholder='email' onChange={formik.handleChange} name="email"/>
                   <input type="text" className='form-control my-2' placeholder='password' onChange={formik.handleChange} name="password"/>
                   <div className='col-md-12 col-8 mx-auto'>
                   <button className='btn btn-dark btn-outline-white w-100 h-100 ' type='submit'>signup</button><br />
                   <button className='btn btn-success btn-outline-dark col-md-12 col-12 my-2 mx-auto' type='submit'>login</button>
                   </div>
                   </form>
                 
              
                   </div>
                 
               </div>
   
           </div>
        </div>
      
    </div>
    </>
  )
}

export default Login;