import apiClient from "../spotifyAuth/spotify";
import { useEffect, useState } from "react";
import Spotify from "react-spotify-embed";
import "../assets/check.svg"
import "./styles/spotifyArtist_styles.css"
import "../assets/wrong.svg"



export default function SpotifyArtist(props) {


    const [uri, setUri] = useState("");
    const [uri2, setUri2] = useState("");
    const [uri3, setUri3] = useState("");
    const [muestra, setMuestra] = useState("");


    useEffect(() => {
        const getData = async () => {

            await apiClient.get(`/search?query=${props.artist}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`).then((response) => {
                const uri = response.data.artists.items[0].uri.split(":")
                setUri(uri[2])
            });
            await apiClient.get(`/search?query=${props.artist2}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`).then((response) => {
                const uri = response.data.artists.items[0].uri.split(":")
                setUri2(uri[2])
            });
            await apiClient.get(`/search?query=${props.artist3}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`).then((response) => {
                const uri = response.data.artists.items[0].uri.split(":")
                setUri3(uri[2])
                if(response){
                    // setMuestra("flex")
                }
            });
        }

        getData()
    }, []);



    const sendInformation = (data) => {

    //     fetch("", {
    //         method: "POST",
    //         body: JSON.stringify(data)
    // })
    // .then(function(res){ console.log(res) })
    // .catch(function(res){ console.log(res) })
    // window.location.reload()
}

return (
    <>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Spotify link={`https://open.spotify.com/artist/${uri}?si=4472348a63dd4f83`} />
            <Spotify link={`https://open.spotify.com/artist/${uri2}?si=4472348a63dd4f83`} />
            <Spotify link={`https://open.spotify.com/artist/${uri3}?si=4472348a63dd4f83`} />
        </div>
        <div className="likeordislike" style={{display: {muestra}}}>
            <button className="like" onClick={sendInformation(true)} style={{display: "hidden"}}>

                <svg height="24" width="24" xmlns={"../assets/check.svg"} viewBox="0 0 512 512"><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
            </button>
            <button className="dislike" onClick={sendInformation(false)} style={{display: "hidden"}}>
                <svg height="24" width="24" xmlns={"../assets/wrong.svg"} viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg>
            </button>
        </div>
    </>
)
}