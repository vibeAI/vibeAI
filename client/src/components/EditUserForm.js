import React, { useState } from 'react'
import { toast } from 'react-toastify'
import user from "../services/userService"

import "../styles/profile.css"

const EditUserForm = () => {
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPassword2, setNewPassword2] = useState("")

    const handleForm = async (e) => {
        e.preventDefault()

        console.log(user.getCurrentUser().email)
        console.log(user.getCurrentUser().username)
        console.log(user.getCurrentUser())
    }

    return (
        <>
            <h1>Hello {user.getCurrentUser().username}</h1>

            <h1>Recent recommendations:</h1>

            <form className='inputbox loginForm'>
                <div className="inputbox">
                    <input autoComplete='true' type="text" id="username" name="username" onChange={(e) => setNewUsername(e.currentTarget.value)} />
                    <span>Username</span>
                    <i></i>
                </div>

                <div className="inputbox">
                    <input autoComplete='true' type="email" id="email" name="email" onChange={(e) => setNewEmail(e.currentTarget.value)} />
                    <span>Email</span>
                    <i></i>
                </div>

                <div className="inputbox">
                    <input autoComplete='true' type="password" id="password" name="password" onChange={(e) => setNewPassword(e.currentTarget.value)} />
                    <span>Password</span>
                    <i></i>
                </div>

                <div className="inputbox">
                    <input autoComplete='true' type="password" id="password2" name="password" onChange={(e) => setNewPassword2(e.currentTarget.value)} />
                    <span>Repeat password</span>
                    <i></i>
                </div>

                <button type="submit" onClick={(e) => handleForm(e)}>
                    Edit user
                </button>
            </form>
        </>
    );
};

export default EditUserForm;