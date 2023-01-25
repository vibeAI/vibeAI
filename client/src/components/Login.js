import LoginForm from "./LoginForm"
import { Link } from "react-router-dom"

import "../styles/styles.css"
import "../styles/login.css"

const Login = () => {
    return (
        <>
            <div className="formLogin">
                <h1>Log in</h1>
                <LoginForm />

                <Link to="/signup">
                    <button className='button'>Sign up</button>
                </Link>
            </div>
        </>
    );
};

export default Login