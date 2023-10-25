import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./Components/Schedule";
import Home from "./Components/Home";
import Login from "./Components/Login";

import Signup from "./Components/signup";
import NoPage from "./Components/Nopage";
import Service from "./Components/services";
import Dash from "./Components/Dash";
import UpdateBook from "./Components/update";

import Driver from "./Components/Driver";
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
            
            
            <Route path="/update/:id" element={<UpdateBook />} />
            
          
      </Routes>
    </BrowserRouter>

  
    </>
  )
}
export default App;