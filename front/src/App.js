import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./Components/Schedule";
import Home from "./Components/Home";
import Login from "./Components/Login";

import Signup from "./Components/signup";

import Dash from "./Components/Dash";
import Profile from "./Components/profile";
import Data from "./Components/data";
import Text from "./Components/tt";

import Driver from "./Components/Driver";

import Map from "./Components/text";
import Vechile from "./Components/Vechile";
import './App.css'

const App=()=>{


  


  return(
    
    <>










    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="driver" element={<Driver />} />
          <Route path="vechile" element={<Vechile />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="dash" element={<Dash />} />
          <Route path="map" element={<Map />} />
          <Route path="prof" element={<Profile />} />
          <Route path="data" element={<Data />} />
          <Route path="text" element={<Text />} />
            
            
           
            
          
      </Routes>
    </BrowserRouter>

  
    </>
  )
}
export default App;