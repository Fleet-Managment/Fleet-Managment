import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import pictures from "../images/aa.png";

const Login = () => {
  const [selectedUser, setSelectedUser] = useState("user");

  const AdminLogin = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
      Email: "",
      Password: "",
    });
    const { Email, Password } = inputValue;

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
          "http://localhost:4000/adminlogin",
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
        Email: "",
        Password: "",
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form className="loginForm" onSubmit={handleSubmit}>
              <h1 className="login">Admin Login</h1>
              <br />
              <div className="mb-3">
                <input
                  type="email"
                  name="Email"
                  value={Email}
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="Password"
                  value={Password}
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>
              <span className="anchor">
                Don't have an account? <Link to={"/signup"}>Signup</Link>
              </span>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
            <ToastContainer />
          </div>
          <div className="col-lg-6">
            <img src={pictures} alt="not available" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }

  const UserLogin = () => {
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
          "http://localhost:4000/userlogin",
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/dash");
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
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form className="loginForm" onSubmit={handleSubmit}>
              <h1 className="login">User Login</h1>
              <br />
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>
              <span className="anchor">
                Don't have an account? <Link to={"/signup"}>Signup</Link>
              </span>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
            <ToastContainer />
          </div>
          <div className="col-lg-6">
            <img src={pictures} alt="not available" className="img-fluid" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center my-4">
        <button
          className={`btn ${
            selectedUser === "user" ? "btn-primary" : "btn-secondary"
          } mx-2`}
          onClick={() => setSelectedUser("user")}
        >
          User
        </button>
        <button
          className={`btn ${
            selectedUser === "admin" ? "btn-primary" : "btn-secondary"
          } mx-2`}
          onClick={() => setSelectedUser("admin")}
        >
          Admin
        </button>
      </div>
      {selectedUser === "user" ? <UserLogin /> : <AdminLogin />}
    </div>
  );
};

export default Login;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "./login.css"
// import pictures from "../images/lib_books.jpg"

// const Login = () => {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = inputValue;
  
  
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

  

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });
//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-left",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:4000/adminlogin",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );
//       console.log(data);
//       const { success, message } = data;
//       if (success) {
//         handleSuccess(message);
//         setTimeout(() => {
//           navigate("/");
//         }, 1000);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setInputValue({
//       ...inputValue,
//       email: "",
//       password: "",
//     });
//   };

//   return ( 
//     <>
//     <body class="body" style={{backgroundColor:"#f3e0e2"}}>
//     <div class="container1" id="container">
//       <div class="form-container log-in-container">
//         <form  class="loginForm" onSubmit={handleSubmit}>
//           <h1 class="login">Login</h1>
//           <br></br>
//        <div>
        
//          <input
//           type="email"
//           name="email"
//           value={email}
//           placeholder="Enter your email"
//           onChange={handleOnChange}
//         />
        
//           </div>
//           <br></br>
//           <div>
//           <input
//           type="password"
//           name="password"
//           value={password}
//           placeholder="Enter your password"
//           onChange={handleOnChange}
//         />
      
        
//         </div>
//           <span  class="anchor">
//              Dont have an account? <Link to={"/signup"}>Signup</Link>
//             </span>
//           <button type="submit" class="logIn">Log In</button>
          
//         </form>
//         <ToastContainer />
//       </div>
//       <div class="overlay-container">
//         <div class="overlay">
//           <div class="overlay-panel overlay-right">
//             <img src={pictures} alt=" not available"></img>
//           </div>
//         </div>
//       </div>
//     </div>
   
//   </body>
//   </>
  
  
//    );
// };

// export default Login;
