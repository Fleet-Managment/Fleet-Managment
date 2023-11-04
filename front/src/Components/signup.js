import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import {  useNavigate } from "react-router-dom";
import './signup.css';

function App() {
  const [selectedUser, setSelectedUser] = useState('driver');
  const [uformData, setuFormData] = useState({
    name: '',
    phone: '',
    licence: '',
    password: '',
    email: '',
    image: '',
    // Add more fields as needed
  });
  const { name,phone,licence,password,email} = uformData;


  const [aformData, setaFormData] = useState({
    Name: '',
    Phone: '',
    Email: '',
    Password: ''
    // Add more fields as needed
  });

  const { Name,Phone,Email,Password} = aformData;

  const navigate = useNavigate();

  const handleUserChange = (userType) => {
    setSelectedUser(userType);
  };



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setuFormData({
          ...uformData,
          image: reader.result, // Store the base64 encoded image
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleuInputChange = (e) => {
    const { name, value } = e.target;
    setuFormData({ ...uformData, [name]: value });
  };
  const handleaInputChange = (e) => {
    const { name, value } = e.target;
    setaFormData({ ...aformData, [name]: value });
  };

  const handleURegistration = () => {
    const uregistrationData = {
      userType: selectedUser,
      ...uformData,
    };

    axios
      .post('http://localhost:4000/usersignup', uregistrationData) // Adjust the URL to match your backend's endpoint
      .then((response) => {
        console.log('Registration successful');
        alert("registeration sucessful");
        setTimeout(() => {
          navigate("/dash");
        }, 1000);
        // Handle success, e.g., navigate to a success page
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        alert(error)
        // Handle failure, e.g., display an error message
      });
  };

  const handleARegistration = () => {
    const aregistrationData = {
      userType: selectedUser,
      ...aformData,
    };

    axios
      .post('http://localhost:4000/adminsignup', aregistrationData) // Adjust the URL to match your backend's endpoint
      .then((response) => {
        console.log('Registration successful');
        alert("registeration sucessful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
        // Handle success, e.g., navigate to a success page
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        alert(error)
        // Handle failure, e.g., display an error message
      });
  };

  return (
    <div className="registration-container">
      <div className="user-options">
        <button
          className={selectedUser === 'driver' ? 'selected' : ''}
          onClick={() => handleUserChange('driver')}
        >
          Driver
        </button>
        <button
          className={selectedUser === 'controller' ? 'selected' : ''}
          onClick={() => handleUserChange('controller')}
        >
          Controller
        </button>
      </div>
      {selectedUser === 'driver' ? (
        <div className="registration-form">
          <h2>Driver Registration</h2>
          <form>
            {/* Driver registration form fields */}
            <div>
              <input
                type="text"
                name="name"
                value={name}
                placeholder=" Name"
                onChange={handleuInputChange}
                required
              />
            </div>
          
            <div>
              <input
                type="text"
                name="phone"
                value={phone}
                placeholder="Enter Number"
                onChange={handleuInputChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="licence"
                value={licence}
                placeholder="Licence Number"
                onChange={handleuInputChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Enter Email"
                onChange={handleuInputChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter Password"
                onChange={handleuInputChange}
                required
              />
            </div>
            <div>
            
            <label style={{ color: "black" }}>
                      Add Profile Photo
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="image"
                      placeholder='.jpeg file'
                      onChange={handleImageChange}
                      
                      accept="image/*"
                    ></input>
                  </div>

          
            {/* Additional driver-specific fields */}
          </form>
          <button onClick={handleURegistration}>Register as Driver</button>
        </div>
      ) : (
        <div className="registration-form">
          <h2>Controller Registration</h2>
          <form>
            {/* Controller registration form fields */}
            <div>
              <input
                type="text"
                name="Name"
                value={Name}
                placeholder="Enter Name"
                onChange={handleaInputChange}
                required
              />
            </div>
        
            <div>
              <input
                type="number"
                name="Phone"
                value={Phone}
                placeholder="Enter Phone Number"
                onChange={handleaInputChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="Email"
                value={Email}
                placeholder="Enter Email"
                
                onChange={handleaInputChange}
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="Password"
                value={Password}
                placeholder="Enter Password"
                onChange={handleaInputChange}
                required
              />
            </div>
            {/* Additional controller-specific fields */}
          </form>
          <button onClick={handleARegistration}>Register as Controller</button>
        </div>
      )}
    </div>
  );
}

export default App;




