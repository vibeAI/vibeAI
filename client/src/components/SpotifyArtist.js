import apiClient from "../spotifyAuth/spotify";
import { useEffect, useState } from "react";
import Spotify from "react-spotify-embed";

export default function SpotifyArtist(recomendacion1, recomendacion2, recomendacion3) {

    const [uri, setUri] = useState("");
    const [uri2, setUri2] = useState("");
    const [uri3, setUri3] = useState("");
    const [artist, setArtist] = useState("");
    const [artist2, setArtist2] = useState("");
    const [artist3, setArtist3] = useState("");

    useEffect(() => {

        setArtist(recomendacion1);
        setArtist2(recomendacion2);
        setArtist3(recomendacion3);

        apiClient.get(`?query=${artist}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`).then((response) => {
            const uri = response.data.artists.items[0].uri.split(":")
            setUri(uri[2])
        });
        apiClient.get(`?query=${artist2}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`).then((response) => {
            const uri = response.data.artists.items[0].uri.split(":")
            setUri2(uri[2])
        });
        apiClient.get(`?query=${artist3}&type=artist&locale=es-ES%2Ces%3Bq%3D0.9&offset=0&limit=20`).then((response) => {
            const uri = response.data.artists.items[0].uri.split(":")
            setUri3(uri[2])
        });

    }, [artist, artist2, artist3]);


    // function handleArtistChange(e) {
    //     setArtist("michaeljackson");
    //     setArtist2("losdelrio")
    //     setArtist3("julius")
    // }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Spotify link={`https://open.spotify.com/artist/${uri}?si=4472348a63dd4f83`} />
                <Spotify link={`https://open.spotify.com/artist/${uri2}?si=4472348a63dd4f83`} />
                <Spotify link={`https://open.spotify.com/artist/${uri3}?si=4472348a63dd4f83`} />
            </div>
        </>
    )
}