import LoginForm from "./LoginForm";
import SignUp from "./SignUp";


import "./styles/FormLogin_styles.css"

const Login = () => {
    return (
        <>
        <div className="formLogin">
           
            <h2>Aceso de Usuarios</h2>
            <LoginForm />
        </div>
        </>
    );  
};

export default Login