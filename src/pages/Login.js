import React from 'react'
import { useFormik } from 'formik'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'


const Login = () => {
  let formik = useFormik({
    initialValues:{
      email:"",
      password:""

  },
  onSubmit:(values)=>{
      console.log(values)

  },
    validationSchema:yup.object({
      firstname:yup.string().required("This firstname field is needed").min(5, "Must be greater than 5 fucker"),
      lastname:yup.string().required("This lastname field is required").min(5, "must be more than 5"),
      email:yup.string().required("invalid email").email("invalid email address"),
      password:yup.string().matches(/^[\w]{5,}$/, "must be exactly 5 characters")

  })


  })
  let endpointL = "http://localhost:5007/user/login" 
  let navigate = useNavigate()
  const login = ()=>{
    
    let email = formik.values.email
    let password = formik.values.password
    let loginDetails = {email, password}
    axios.post(endpointL, loginDetails).then((result)=>{
      console.log(result.data.user._id)
      let loggedInuser = result.data;
      console.log(loggedInuser)
      localStorage.token = loggedInuser.user._id      
      if(result.data.status)
      navigate("/dashboard")
    
  })

  }
  return (
    <>
      <div className='container-fluid main'>
        <div className='row'>
        <div className='col-md-6 col-12 shadow bgleft'>
           
            
           </div>
           <div className='col-md-6 col-12  bg-light'>
               <div className='container right'>
                   <div className='col-md-8 mx-auto pt-5'>
                   <h1 className='text-center'>login</h1>
                   <form action="" onSubmit={formik.handleSubmit}>
                   <input type="text" className='form-control my-2' placeholder='email' onChange={formik.handleChange} name="email" onBlur={formik.handleBlur}/>
                    {formik.touched.email &&<div className='text-danger'>{formik.errors.email}</div>}
                    <input type="text" className='form-control my-2' placeholder='password' onChange={formik.handleChange} name="password" onBlur={formik.handleBlur}/>
                    {formik.touched.password &&<div className='text-danger'>{formik.errors.password}</div>}
              
             
                   <div className='col-md-12 col-8 mx-auto'>
                   <button className='btn btn-dark btn-outline-white w-100 h-100 ' type='submit'>signup</button><br />
                   <button className='btn btn-success btn-outline-dark col-md-12 col-12 my-2 mx-auto' type='submit' onClick={login}>login</button>
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