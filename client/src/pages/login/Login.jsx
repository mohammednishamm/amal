import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import axios from "axios";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [input, setInput]=useState({
    username:"",
    password:""
  })
 const [err,setErr]=useState(null)
  const navigate=useNavigate()
 
  const handleChange=(e)=>{
   setInput(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  console.log(input);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(input);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          {err && err}
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
