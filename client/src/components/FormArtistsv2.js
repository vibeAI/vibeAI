import React, { useState } from 'react'
import { toast } from "react-toastify";
import SpotifyArtist from './SpotifyArtist'
import "../styles/home.css"
import "../assets/wrong.svg"
import "../assets/check.svg"
import user from "../services/userService"
import axios from 'axios';


const SignUp = () => {
    const [text, setText] = useState("")
    const [gender, setGender] = useState("")
    const [ages, setAges] = useState("")
    const [musicGenre, setMusicGenre] = useState("")
    const [hobbie, setHobbie] = useState("")
    const [language, setLanguage] = useState("")
    const[opcion1, setOpcion1] = useState("")
    const[opcion2, setOpcion2] = useState("")
    const[opcion3, setOpcion3] = useState("")

    const [recomendacion1, setRecomendacion1] = useState("")
    const [recomendacion2, setRecomendacion2] = useState("")
    const [recomendacion3, setRecomendacion3] = useState("")

    const newRequest = {
        text: text,
        gender: gender,
        ages: ages,
        music: musicGenre,
        hobbie: hobbie,
        language: language,
    }

    const logData = {
        recomendacion1: recomendacion1,
        recomendacion2: recomendacion2,
        recomendacion3: recomendacion3,
        opcion1: opcion1,
        opcion2:  opcion2,
        opcion3: opcion3,

    }

    const handleForm = async (e) => {
        e.preventDefault()

        let resultado = []

        let busqueda = axios.post('http://musicrec-env.eba-tvtntc4p.us-east-1.elasticbeanstalk.com/recomendaciones', {
            text: text,
            gender: gender,
            ages: ages,
            music: musicGenre,
            hobbie: hobbie,
            language: language,
        })
        .then(function (response) {
        console.log(response.data);
        resultado = response.data
        })
        .catch(function (error) {
        console.log(error);
        });

        busqueda && console.log(resultado)


        // const handleState = async (result) => {

        // setRecomendacion1(response.data[0])
        // setRecomendacion2(response.data[1])
        // setRecomendacion3(response.data[2])
        // }
    }

    const handleRecommendation = async (e) => {

        fetch(`http://www.localhost:3000/user/add-recommendation/${user.getCurrentUser().email}`,

            fetch(`http://musicrec-env.eba-tvtntc4p.us-east-1.elasticbeanstalk.com/bbdd`,

                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        _id: user.getCurrentUser()._id,
                        username: user.getCurrentUser().username,
                        email: user.getCurrentUser().email,
                        sexo: user.getCurrentUser().gender,
                        ocupacion: user.getCurrentUser().occupation,
                        data: logData
                    }),
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                }))
        window.location.reload()
    }

    return (
        <>
            <div className='login-wrapper'>
                <h1 className='rec-title'>Type two bands or artists:</h1>

                <form className='recForm'>
                    <div className='inputArtist'>
                        <label>Text:</label><input type="text" name="text" className="input" placeholder="Less is more" onChange={(e) => setText(e.currentTarget.value)}></input>
                        <label>Gender:</label><input type="text" name="text" className="input" placeholder="Less is more" onChange={(e) => setGender(e.currentTarget.value)}></input>
                        <label>Age:</label><input type="text" name="text" className="input" placeholder="Less is more" onChange={(e) => setAges(e.currentTarget.value)}></input>
                        <label>Music Genre:</label><input type="text" name="text" className="input" placeholder="Less is more" onChange={(e) => setMusicGenre(e.currentTarget.value)}></input>
                        <label>Hobbie:</label><input type="text" name="text" className="input" placeholder="Less is more" onChange={(e) => setHobbie(e.currentTarget.value)}></input>
                        <label>Language:</label><input type="text" name="text" className="input" placeholder="Less is more" onChange={(e) => setLanguage(e.currentTarget.value)}></input>

                    </div>

                    <button className='mixUpBtn' onClick={(e) => handleForm(e)}>
                        <span className="TxtEffect">Mix up</span>
                    </button>
                </form>
            </div >

            {recomendacion3 !== "" && <SpotifyArtist artist={recomendacion1} artist2={recomendacion2} artist3={recomendacion3} />}

            <fieldset>
                <legend>Please select your preferred contact method:</legend>
                <div>
                <input type="radio" id="opcion1" name="contact" value="opcion1" />
                <label>1</label>

                <input type="radio" id="contactChoice2" name="contact" value="opcion2" />
                <label>2</label>

                <input type="radio" id="contactChoice3" name="contact" value="opcion3" />
                <label>3</label>
                </div>

                <div>
                <button type="submit">Submit</button>
                </div>
            </fieldset>

        </>
    );
}

export default SignUp;