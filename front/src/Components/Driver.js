import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsFillGearFill,
} from "react-icons/bs";
import { FaTruckFast } from "react-icons/fa6";

function Driver() {
  const [fdata, setFData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtereduser, setFiltereduser] = useState(fdata);
  const navigate = useNavigate();


  const Logout = () => {
   
    navigate("/login");
  };
 
 
  const numberOfObjects = fdata.length;


  

  useEffect(() => {
    const filtered = fdata.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.licence.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltereduser(filtered);
  }, [fdata, searchQuery]);

  useEffect(() => {
    Axios.get("http://localhost:4000/user").then((res) => {
      setFData(res.data);
    })
    .catch((error) => {
      alert(error);
      console.error("Error :", error);
    });
  }, []);

  const handleDelete = (userId) => {
    Axios.delete(`http://localhost:4000/user/${userId}`)
      .then((res) => {
        setFData(fdata.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        alert(error);
        console.error("Error deleting user:", error);
      });
  };

  return (
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
              <a href="/" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsGrid1X2Fill className="icon" />
                  <span className="sidebar-text">Dashboard</span>
                </div>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="driver" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsFillArchiveFill className="icon" />
                  <span className="sidebar-text">Drivers</span>
                </div>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="vechile" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsFillGrid3X3GapFill className="icon" />
                  <span className="sidebar-text">Vehicles</span>
                </div>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="schedule" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsPeopleFill className="icon" />
                  <span className="sidebar-text">Schedule</span>
                </div>
              </a>
            </li>
            {/* <li className="sidebar-list-item">
              <a href="alerts" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsListCheck className="icon" />
                  <span className="sidebar-text">Alerts</span>
                </div>
              </a>
            </li>
            <li className="sidebar-list-item">
              <a href="settings" className="text-decoration-none text-white">
                <div className="sidebar-item">
                  <BsFillGearFill className="icon" />
                  <span className="sidebar-text">Settings</span>
                </div>
              </a>
            </li> */}
            <li className="sidebar-list-item">
              
                <div className="sidebar-item">
                 
                 
                    <button class="btn btn-outline-success" onClick={Logout}>Logout</button>
                  
                </div>
             
            </li>
          </ul>
        </aside>

        <main className="col-md-10">
          <div className="myblogs-container p-4">
            <div className="animated-search-container">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search by Name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control animated-search-input"
                />
                <div className="input-group-prepend">
                  <span className="input-group-text animated-search-icon">
                    <FaSearch />
                  </span>
                </div>
              </div>
            </div>
            <h3 className="text-center text-light mt-4 mb-3" style={{ fontWeight: "bold", fontSize: "34px" }}>
              Available Drivers :{numberOfObjects}
            </h3>
            <div className="row">
  <div className="col-md-12">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Licence</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filtereduser.map((user) => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.licence}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


          </div>
        </main>
      </div>
    </div>
  );
}

export default Driver;
