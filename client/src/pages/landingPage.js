import React from 'react'
import { Link } from 'react-router-dom'

import "../styles/styles.css"

const LandingPage = () => {
    return (
        <>
            <div className='body'>
                <div className='card'>
                    <h1 className='title'>The final Music Recommendation System</h1>
                    <br></br>
                    <p className='text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>

                    <Link to="/login">
                        <button className='button'>Start Now</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default LandingPage;