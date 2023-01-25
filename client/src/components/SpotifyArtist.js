import apiClient from "../spotifyAuth/spotify";
import { useEffect, useState } from "react";
import Spotify from "react-spotify-embed";



export default function SpotifyArtist() {

    const [uri, setUri] = useState("");
    const [artist, setArtist] = useState("");


    useEffect(() => {
        apiClient.get(`?q=${artist}&type=artist`).then((response) => {

            const uri = response.data.artists.items[0].uri.split(":")
            setUri(uri[2])

        });


    }, [artist]);

    function handleArtistChange(e) {
        setArtist("extremoduro");

    }


    return (
        <>
            <div>
                <button onClick={(e) => {
                    handleArtistChange(e)

                }
                }>BOTON</button>
            </div>
            <div>
                <Spotify link={`https://open.spotify.com/artist/${uri}?si=4472348a63dd4f83`} />
                <Spotify link="https://open.spotify.com/artist/7hJcb9fa4alzcOq3EaNPoG?si=4472348a63dd4f83" />
                <Spotify link="https://open.spotify.com/artist/5Y30WvST5ZHhQeemywiT9B?si=4472348a63dd4f83" />
            </div>
        </>
    )

}
