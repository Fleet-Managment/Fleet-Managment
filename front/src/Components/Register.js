import React, { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './register.css';

const Register = () => {

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;
 

  // to get the inputs it will bw stored as a object
  const handleOnChange = (e) => {
    const {id, value } = e.target;
    setInputValue({
      ...inputValue,
      [id]: value,
    });
  };


  const handleError = (err) =>{
    toast.error(err, {
      position: "bottom-left",
    });
  };
  const handleSuccess = (msg) =>{
    toast.success(msg, {
      position: "bottom-right",
    });
  };


    



  // to send data to the serever
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
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
      username: "",
    });
  };


  

  return (
    <body className="register-body">
      <br></br>
      
      <div className="container vh-100 d-flex justify-content-center align-items-center ">
      <div className="register-form p-4 register-box">
        <h2 className="mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleOnChange}
              required
            />
          </div>
         <center>
         <button type="submit" className="btn register-button btn-primary">Register</button>
         <br></br>
          <span>
          Already have an account? <a href="/login" className="register-link">Login</a>
        </span>
        </center>
        </form>
       <ToastContainer/>
      </div>
    </div>
    </body>
  );
}
 
export default Register;