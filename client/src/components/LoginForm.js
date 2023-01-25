import Form from "../components/Form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import AuthConsumer from "../hooks/useAuth";
import user from "../services/userService";


import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [, dispatch] = AuthConsumer();
  const navigate = useNavigate();

  const schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  const handleSubmit = async (account) => {

    try {
      await user.login(account);
      console.log(account)
      toast.info("Login successful")
      dispatch({ type: "login" });
      navigate(0);
    } catch (err) {
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <Form
      inputs={[
        { name: "email", label: "Email address:  ", type: "text"},
        { name: "password", label: "Password:  ", type: "password" },
      ]}
      onSubmit={handleSubmit}
      header="LOGIN"
      submitLabel="Login"
      validSchema={schema}
    />
  );
};

export default LoginForm;
