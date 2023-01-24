import apiClient from "../spotifyAuth/spotify";
import { useEffect, useState } from "react";



export default function SpotifyArtist() {

    const [uri, setUri] = useState("");


      useEffect(() => {
        apiClient.get("extremoduro").then((response) => {
          setUri(response.data.artist.uri);
        });

      }, []);


    return (
        <>
            <div>
                <h1>{uri}</h1>
            </div>
        </>
    )

}
