import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Loader from '../components/Loader';
import { toast } from 'react-toastify';


const RegisterPage = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [cpassword , setCpassword] = useState('');
  const [loading , setLoading] = useState('');
  const auth = getAuth();
  const navigate = useNavigate

  const register = async () => {
    if(email === "" || password === "" || cpassword === "" )
        alert('enter data')
    else{
        if (password == cpassword) {
            try{
                const result = await auth.createUserWithEmailAndPassword(email, password)
                
alert('hi')
                //resetting page
                setEmail("")
                setPassword("")
                setCpassword("")
                
                alert('User register succesfully')
                navigate('/');
            }
            catch(error){
                console.log(error)
                
            }
        }
        else{
        alert('Password doesnt match')
        }
    }
}

return (
  <form onSubmit={register}>
 

      <h2>Register</h2>

         <hr/>
         <div className='register-parent'>
           {loading && (<Loader/>)}
    <div className='register-top'>

    </div>
   <div className='row justify-content-center'>
     <div className='col-md-4'>
       <div className='register-form'>
         <input type="email" className='form-control' placeholder='email'  onChange={(e)=>{setEmail(e.target.value)}} />
         <input type="password" className='form-control' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
         <input type="password" className='form-control' placeholder='confirm password' value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>

         <button className='my-3' type=" sumbit" >Register</button>
         </div>
         <Link to='/login'>Click here to Login</Link>
</div>

</div>
</div>
        

        

      
  </form>
)

}

export default RegisterPage
