import React from 'react'
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
>>>>>>> 96c0fa0843ce9b6f2446c028bfa8a3d6723933c9

import "../styles/styles.css"

const LandingPage = () => {
    return (
        <>
<<<<<<< HEAD
            <h1 className='title'>The </h1>
            <p className='text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <button className='button'>Start Now</button>
=======
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
>>>>>>> 96c0fa0843ce9b6f2446c028bfa8a3d6723933c9
        </>
    );
};

export default LandingPage;