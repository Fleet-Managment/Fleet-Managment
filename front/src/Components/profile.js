import React, { useEffect, useState } from "react";

import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsFillGearFill,
} from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";


const Dash = () => {
  const [cookies,removeCookie] = useCookies();


  const navigate = useNavigate();
  


  const Logout = () => {
    
    navigate("/login");
  };
   




    const [fdata, setFData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filtereduser, setFiltereduser] = useState(fdata);

    
    useEffect(() => {


      const verifyCookie = async () => {
        
        if (!cookies.token) {
          navigate("/login");
        }
        const { data } = await Axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        
        const { status, user } = data;
        setSearchQuery(user);
        return status
          ? console.log(`Hello ${user}`)
          : (removeCookie("token"), navigate("/login"));
      };
      verifyCookie();
    }, [cookies, navigate, removeCookie]);





    useEffect(() => {
      const filtered = fdata.filter(
        (Schedule) =>
         Schedule.name.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      setFiltereduser(filtered);
    }, [fdata, searchQuery]);
  
    useEffect(() => {
      Axios.get("http://localhost:4000/user").then((res) => {
        setFData(res.data);
      });
    }, []);
  

  
    
  
    return ( 
        <>




<div className="container-fluid">
      <div className="row">
        <aside id="sidebar" className="col-md-2 bg-dark">
          <div className="sidebar-title">
            <div className="sidebar-brand text-white">
              <FaTruckFast className="icon_header" /> FLEETOX
            </div>
          </div>
          <ul className="list-unstyled">
            <li className="sidebar-list-item">
              <a href="prof" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsGrid1X2Fill className="icon" />
                  <span className="sidebar-text">Profile</span>
                </div>
              </a>
            </li>
            
            <li className="sidebar-list-item">
              <a href="dash" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsPeopleFill className="icon" />
                  <span className="sidebar-text">Schedule</span>
                </div>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="data" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsPeopleFill className="icon" />
                  <span className="sidebar-text">Data Entry</span>
                </div>
              </a>
            </li>
            
            <li className="sidebar-list-item">
              
                <div className="sidebar-item">
                 
                 
                    <button class="btn btn-outline-success" onClick={Logout}>Logout</button>
                  
                </div>
             
            </li>
          </ul>
        </aside>



        <main className="col-md-10">
  <div className="myblogs-container p-4">
    <h3 className="text-center text-light mt-4 mb-3" style={{ fontWeight: "bold", fontSize: "34px" }}>
      User Profile
    </h3>
    <div className="d-flex justify-content-center align-items-center">
      {filtereduser.map((vechile) => (
        <div className="col-md-4 mb-4" key={vechile._id} style={{ maxWidth: "300px" }}>
          <div className="card">
            <img
              src={vechile.image}
              className="card-img-top"
              alt="User Image"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <p className="card-text">
                <strong>Name:</strong> {vechile.name}
              </p>
              <p className="card-text">
                <strong>Phone :</strong> {vechile.phone}
              </p>
              <p className="card-text">
                <strong>Licence :</strong> {vechile.licence}
              </p>
              <p className="card-text">
                <strong>Email :</strong> {vechile.email}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</main>

    

        


        

        
      </div>
    </div>



        </>

     );
}
 
export default Dash;