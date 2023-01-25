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
    const [age, setAge] = useState("")
    const [occupation, setOccupation] = useState("")
    const [gender, setGender] = useState("")

    const navigate = useNavigate();

    let account = {
        username: username,
        email: email,
        password: password,
        age: age,
        gender: gender,
        occupation: occupation
    }

    const handleForm = async (e) => {
        
        e.preventDefault()

        password === password2 ? 
            await user.register(account).then(toast.info("Registered")) 
            : toast.warning("Passwords must match!")
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
    
                    <div className="inputbox">
                        <input type="number" name="age" placeholder="Age (e.g. 25)" min="18" max="90" onChange={(e) => setAge(parseInt(e.currentTarget.value))}/>
                            <span>Age</span>
                            <i></i>
                    </div>

                    <div className='select-input'>
                    <span>Occupation</span>
                        <select name="occupation" id="occupation" onChange={(event) => setOccupation(event.currentTarget.value)}>
                            <option value ="null" disabled>Select occupation:</option>
                            <option name ="Employed" value="Employed">Employed</option>
                            <option name ="Self-employed" value="Self-employed">Self-employed</option>
                            <option name ="Unemployed" value="Unemployed">Unemployed</option>
                            <option name ="Student" value="Student">Student</option>
                            <option name ="Retired" value="Retired">Retired</option>
                            <option name ="Other" value="Other">Other</option>
                        </select>
                    </div>

                    <div className='select-input'>
                    <span>Gender</span>
                        <select name="gender" id="gender" onChange={(event) => setGender(event.currentTarget.value)}>
                            <option value ="null" disabled>Select Gender:</option>
                            <option name ="Male" value="Male">Male</option>
                            <option name ="Female" value="Female">Female</option>
                            <option name ="Non-binary" value="Non-binary">Non-binary</option>
                            <option name ="Other" value="Other">Other</option>
                        </select>
                    </div>

                    <button type="submit" id="buttonRegister" className='sendButton' onClick={(e) => handleForm(e)}> Register
                    </button>
                </form>
            </div>
        </>
    );
}

export default SignUp;