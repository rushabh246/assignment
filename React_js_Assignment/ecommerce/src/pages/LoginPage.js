import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';


const LoginPage = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loading , setLoading] = useState('');
  const auth = getAuth();

  const login =async()=>{
    try {
      setLoading(true)
      const result = await signInWithEmailAndPassword( auth, email, password);
     localStorage.setItem('currentUser' , JSON.stringify(result))
      setLoading(false);
      toast.success("Logged in");
      window.location.href='/'
    } catch (error) {
      console.log(error)
      toast.error("Login failed")
      setLoading(false)
    }
  };
 
  return (
    <form>

           <h2>Login</h2>
           <div className='login-parent'>
           {loading && (<Loader/>)}
      <div className='login-top'>

      </div>
     <div className='row justify-content-center'>
       <div className='col-md-4'>
         <div className='login-form'>

           <hr/>

           <input type="text" className='form-control' placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
           <input type="text" className='form-control' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          
           <button className='my-3' onClick={login}>Login</button>
           
         </div>

</div>

</div>


           <hr/>
           <Link to='/register' >Click here to register</Link>
           </div>
           </form>

  )
}

export default LoginPage;

