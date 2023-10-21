import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./login.css"
import pictures from "../images/aa.png"

const Login = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  
  
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return ( 
    <>
    <body class="body" style={{backgroundColor:"#f3e0e2"}}>
    <div class="container1" id="container">
      <div class="form-container log-in-container">
        <form  class="loginForm" onSubmit={handleSubmit}>
          <h1 class="login">Login</h1>
          <br></br>
       <div>
        
         <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleOnChange}
        />
        
          </div>
          <br></br>
          <div>
          <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={handleOnChange}
        />
      
        
        </div>
          <span  class="anchor">
             Dont have an account? <Link to={"/register"}>Signup</Link>
            </span>
          <button type="submit" class="logIn">Log In</button>
          
        </form>
        <ToastContainer />
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <img src={pictures} alt=" not available"></img>
          </div>
        </div>
      </div>
    </div>
   
  </body>
  </>
  
  
   );
};

export default Login;
