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

        if (grupo1 === "" || grupo2 === "") 
        { toast.warning("Both imputs are required")
         return
        }
        
        

        fetch(`http://musicrec-env.eba-tvtntc4p.us-east-1.elasticbeanstalk.com/recomendaciones`, 
        
        {method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "grupo1": grupo1,
            "grupo2": grupo2,
        }),
        })
        .then((response) => console.log(response.json()))
        
        .then((response) => {
            console.log(response)
            setRecomendacion1(response.split(",")[0])
            setRecomendacion2(response.split(",")[1])
            setRecomendacion3(response.split(",")[2])
        })
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
                        <label style={{ color: "white", lineHeight: "fit-content"}}>Similarity</label>
                        <input type="range" id="points" name="points" min="50" max="100" style={{ width: "150px" }} onChange={(e) => setRange(e.currentTarget.value)}></input>
                    </div>
                    <button className='mixupButton' onClick={(e) => handleForm(e)}>
                        <span className="TxtEffect">Mix up</span>
                    </button>
                </form>
            </div >
            {recomendacion3 !== "" && <SpotifyArtist artist={recomendacion1}  artist2={recomendacion2} artist3={recomendacion3}/>}
            

        </>
    );
}

export default SignUp;