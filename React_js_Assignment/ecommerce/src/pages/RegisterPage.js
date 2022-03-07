import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Loader from '../components/Loader';
import { toast } from 'react-toastify';


const RegisterPage = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [cpassword , setCpassword] = useState('');
  const [loading , setLoading] = useState('');
  const auth = getAuth();

const register=async()=>{
  try {
    setLoading(true)
    const result = await createUserWithEmailAndPassword( auth, email, password)
    console.log(result)
    setLoading(false)
    toast.success("Registered")
  } catch (error) {
    console.log(error)
    toast.error("Registration failed")
    setLoading(false)
  }
};

  return (
    <form>
   

        <h2>Register</h2>

           <hr/>
           <div className='register-parent'>
             {loading && (<Loader/>)}
      <div className='register-top'>

      </div>
     <div className='row justify-content-center'>
       <div className='col-md-4'>
         <div className='register-form'>
           <input type="text" className='form-control' placeholder='email'  onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
           <input type="password" className='form-control' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
           <input type="password" className='form-control' placeholder='confirm password' value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>

           <button className='my-3' onClick={register}>Register</button>
           </div>

</div>

</div>
</div>
           <hr/>

           <Link to='/login'>Click here to Login</Link>

        
    </form>
  )
}

export default RegisterPage
