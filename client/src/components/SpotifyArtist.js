import apiClient from "../spotifyAuth/spotify";
import { useEffect, useState } from "react";



export default function SpotifyArtist() {

    const [uri, setUri] = useState("");
    const [artist, setArtist] = useState("");

    useEffect(() => {
        apiClient.get(`?q=extremoduro&type=artist`).then((response, error) => {
            // setUri(response.data.artist);
            console.log(response);
            if(error) throw error
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
                    }>dadsa</button>

                </div>
            </>
        )

    }
