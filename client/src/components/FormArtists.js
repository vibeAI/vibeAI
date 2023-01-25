import React, { useState } from 'react'
import user from "../services/userService"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

// import "../styles/styles.css"
import "../styles/home.css"

const SignUp = () => {
    const [artist1, setArtist1] = useState("")
    const [artist2, setArtist2] = useState("")
    const [range, setRange] = useState("")
    const navigate = useNavigate();

    let account = {
        artist1: artist1,
        artist2: artist2,
        range: range
    }

    const handleForm = async (e) => {
        e.preventDefault()

        // password === password2 ? await user.register(account).then(navigate("/login")) : toast.warning("Passwords has to be the same!")
    }

    return (
        <>
            <div className='login-wrapper'>
                <h1 className='rec-title'>Try introducing two bands or artist</h1>

                <form className='recForm'>
                    <div className='inputArtist'>
                        <input type="text" name="text" className="input" placeholder="Artist/Band 1" onChange={(e) => setArtist1(e.currentTarget.value)}></input>

                        <input type="text" name="text" className="input" placeholder="Artist/Band 2" onChange={(e) => setArtist2(e.currentTarget.value)}></input>
                    </div>

                    <label style={{ color: "white" }}>Similarity</label>
                    <input type="range" id="points" name="points" min="50" max="100" style={{ width: "150px" }} onChange={(e) => setRange(e.currentTarget.value)}></input>

                    <button className='mixupButton' onClick={(e) => handleForm(e)}>
                        <span className="TxtEffect">Mix up</span>
                    </button>
                </form>
            </div >
        </>
    );
}

export default SignUp;