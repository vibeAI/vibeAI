import apiClient from "../spotifyAuth/spotify";
import { useEffect, useState } from "react";
import Spotify from "react-spotify-embed";

export default function SpotifyArtist() {

    const [uri, setUri] = useState("");
    const [artist, setArtist] = useState("");

    //ESPERANDO A ENDPOINT

    // useEffect(() => {
    //     fetch("").then((response) => {
    //         const artist = response.data.name
    //         setArtist(artist)

    //     });


    // }, []);

    useEffect(() => {
        apiClient.get(`?query=${artist}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`).then((response) => {

            const uri = response.data.artists.items[0].uri.split(":")
            setUri(uri[2])
        });
    }, [artist]);

    function handleArtistChange(e) {
        setArtist("michaeljackson");

    }

    return (
        <>
            <div>
                <button onClick={(e) => {
                    handleArtistChange(e)
                }
                }>BOTON</button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Spotify link={`https://open.spotify.com/artist/${uri}?si=4472348a63dd4f83`} />
                <Spotify link={`https://open.spotify.com/artist/${uri}?si=4472348a63dd4f83`} />
                <Spotify link={`https://open.spotify.com/artist/${uri}?si=4472348a63dd4f83`} />
            </div>
        </>
    )
}
