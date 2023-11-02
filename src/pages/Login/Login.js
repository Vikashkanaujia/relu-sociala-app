import '../Login/Login.css'
import React, { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../../Firebase"
const Login = () => {
    const navigate = useNavigate();
    const [error ,setError] = useState("")
    const [form, setForm] = useState({
        email:"",password:""
    });
    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

   const handleSubmission = (e) => {
    e.preventDefault()
    if(!form.email || !form.password){
        setError("Fill all fields")
        return;
    }
    setError("");
    signInWithEmailAndPassword(auth , form.email ,form.password)
    .then( async(res)=>{
        
        navigate('/account')
    })
    .catch((err)=>setError(err.message))
    }
   


    return (
        <div className='login-Body'>

            
                <div className='form-section'>
                    <div className='login-form'>
                        <form onSubmit={handleSubmission}>
                            <h2>Login</h2>
                            <label htmlFor='email'>Email</label><br />
                            <input type='email' name='email' onChange={handleForm} placeholder='Enter your email' />
                            <br />
                            <label>Password</label><br />
                            <input type='password' name='password' onChange={handleForm} placeholder='Enter your password' />
                            <br />
                            <b className='error'>{error}</b>
                            <div className='btn'>
                                <button type='submit'>Login</button>
                            </div>
                            <p>Create an Account{" "}
                            <span><Link style={{textDecoration:'none' }} to="/signup">SignUp</Link></span></p>

                        </form>
                    </div>

                </div>

        </div>
    )
}

export default Login