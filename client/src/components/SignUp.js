import React, { useState } from 'react'
import user from "../services/userService"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

import "../styles/styles.css"
import "../styles/login.css"

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const navigate = useNavigate();

    let account = {
        username: username,
        email: email,
        password: password
    }

    const handleForm = async (e) => {
        e.preventDefault()

        password === password2 ? await user.register(account).then(navigate("/login")) : toast.warning("Passwords has to be the same!")

        // password === password2? await user.register(account).then(toast.info("Account created")).then(navigate("/login")) : toast.info("Passwords must match")
    }

    return (
        <>
            <div className='login-wrapper'>
                <h1 className='login-title'>Start your music experience</h1>

                <form className='login-form'>
                    <div className="inputbox">
                        <input type="text" id="username" name="username" onChange={(e) => setUsername(e.currentTarget.value)} />
                        <span>Username</span>
                        <i></i>
                    </div>

                    <div className="inputbox">
                        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.currentTarget.value)} />
                        <span>Email</span>
                        <i></i>
                    </div>

                    <div className="inputbox">
                        <input type="password" id="password" name="password" onChange={(e) => setPassword(e.currentTarget.value)} />
                        <span>Password</span>
                        <i></i>
                    </div>

                    <div className="inputbox">
                        <input type="password" id="password2" name="password2" onChange={(e) => setPassword2(e.currentTarget.value)} />
                        <span>Repeat password</span>
                        <i></i>
                    </div>

                    <button id="buttonRegister" className='sendButton' onClick={(e) => handleForm(e)}> Register
{/* 
                        <div className="icon">
                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                        </div> */}
                    </button>
                </form>
            </div>
        </>
    );
}

export default SignUp;