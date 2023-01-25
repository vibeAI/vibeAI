import React, {useState} from 'react'
import user from "../services/userService";
import AuthConsumer from "../hooks/useAuth";
import {Link, useNavigate} from 'react-router-dom'

import "../styles/login.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [, dispatch] = AuthConsumer();
    const navigate = useNavigate()

    const [auth] = AuthConsumer()

        let account = {
            email : email,
            password: password
        }

    const handleForm = async (e) => {
        e.preventDefault()
     
        const { isAdmin } = await user.login(account);

        dispatch({ type: isAdmin ? "admin" : "login" });
    }
    
    return (

        auth.isAuth ? navigate('/home') : 
        <>
            <div className='login-wrapper'>
                <h2 className='login-title'>Log in into your account.</h2>
                
                <form className='inputbox'>   
                    <label>Email:</label> <input autoComplete='true' type="email" id="email" name="email" onChange={(e) => setEmail(e.currentTarget.value)}/>
                    <label>Password:</label> <input autoComplete='true' type="password" id="password" name="password" onChange={(e) => setPassword(e.currentTarget.value)}/>
                    <button className="cssbuttons-io-button" onClick={(e) => handleForm(e)}> Login</button>
                </form>
            </div>
            <div className='registro-link-wrapper'>
                <h2>You do not have an account?<Link to={`/signup`} className='registro-link'> Sign up here.</Link></h2>
            </div>
    
        </>
    )
}


export default Login

