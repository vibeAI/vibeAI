import React, { useState } from 'react'
import { toast } from "react-toastify";
import SpotifyArtist from './SpotifyArtist'
import "../styles/home.css"


const SignUp = () => {
    const [grupo1, setGrupo1] = useState("")
    const [grupo2, setGrupo2] = useState("")
    const [range, setRange] = useState("")

    const [recomendacion1, setRecomendacion1] = useState("")
    const [recomendacion2, setRecomendacion2] = useState("")
    const [recomendacion3, setRecomendacion3] = useState("")

    const handleForm = async (e) => {
        e.preventDefault()

        if (grupo1 === "" || grupo2 === "") {
            toast.warning("Both imputs are required")
            return
        }

        const handleState = async (result) => {

            setRecomendacion1(result.recomendacion1)
            setRecomendacion2(result.recomendacion2)
            setRecomendacion3(result.recomendacion3)
        }

        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: "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",
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Replace the word resultado with artists or bands similar to ${grupo1} and ${grupo2}: {"recomendacion1": resultado, "recomendacion2": resultado, "recomendacion3": resultado}`,
            temperature: 0.1,
            max_tokens: 100,
        });
        let result = await JSON.parse(response.data.choices[0].text)
        result !== undefined && handleState(result)
    }

    return (
        <>
            <div className='login-wrapper'>
                <h1 className='rec-title'>Type two bands or artists:</h1>

                <form className='recForm'>
                    <div className='inputArtist'>
                        <input type="text" name="text" className="input" placeholder="Artist/Band 1" onChange={(e) => setGrupo1(e.currentTarget.value)}></input>

                        <input type="text" name="text" className="input" placeholder="Artist/Band 2" onChange={(e) => setGrupo2(e.currentTarget.value)}></input>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <label style={{ color: "white", lineHeight: "fit-content" }}>Similarity</label>
                        <input type="range" id="points" name="points" min="50" max="100" style={{ width: "150px" }} onChange={(e) => setRange(e.currentTarget.value)}></input>
                    </div>
                    <button className='mixupButton' onClick={(e) => handleForm(e)}>
                        <span className="TxtEffect">Mix up</span>
                    </button>
                </form>
            </div >

            {recomendacion3 !== "" && <SpotifyArtist artist={recomendacion1} artist2={recomendacion2} artist3={recomendacion3} />}


        </>
    );
}

export default SignUp;