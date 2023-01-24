import React, { useState, useEffect } from 'react';
import "./styles/home_styles.css"
import { setClientToken } from "../spotifyAuth/spotify"
import { loginEndpoint } from "../spotifyAuth/spotify"
import "../spotifyAuth/views/login.css"
import SpotifyArtist from './SpotifyArtist';


const Home = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("spotyToken");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("spotyToken", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }

  }, []);


  return !token ? (
    <>
      <h2>ADIOS!</h2>
      <div className="login-page">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo-spotify"
          className="logo"
        />
        <a href={loginEndpoint}>
          <div className="login-btn">LOG IN</div>
        </a>
      </div>
    </>
  ) : (
    <>
      <SpotifyArtist />
    </>
  )

};

export default Home;