import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { useNavigate } from 'react-router-dom';

function LoginPage(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();

  const login = async () => {

      try {
        setLoading(true);
        debugger;
        const result = await signInWithEmailAndPassword(auth,email, password);
        console.log("result",result);
        const user = {
          id: result.user.uid,
          }
        localStorage.setItem('currentUser', JSON.stringify(result))
        setLoading(false);
        if (result.user.email !== "") {
          // navigate('/');
          toast.success("Logged in");
        }
        else {
          alert('invalid username or password')
        }

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
        {loading && (<Loader />)}
        <div className='login-top'>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-4'>
            <div className='login-form'>
              <hr />
              <input type="text" className='form-control' placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
              <input type="text" className='form-control' placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
              <button className='my-3' onClick={login}>Login</button>
              <Link to='/register' >Click here to register</Link>
            </div>
           
          </div>
        </div>

      </div>
    </form>

  )
}

export default LoginPage;

