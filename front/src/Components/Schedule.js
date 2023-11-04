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


const Schedule = () => {

  const navigate = useNavigate();
  

  const Logout = () => {
   
    navigate("/login");
  };

  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  // State for additional form fields
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    time: '',
    
  });


  // State to store the data fetched from the backend
  const [driver, setdriver] = useState([]);
  const [vechile, setvechile] = useState([]);

  // Fetch data for the dropdowns from the backend
  useEffect(() => {
    // Fetch data for the first dropdown
    Axios.get('http://localhost:4000/vechile')
      .then((response) => {
        setdriver(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data for dropdown 1:', error);
      });

    // Fetch data for the second dropdown
    Axios.get('http://localhost:4000/user')
      .then((response) => {
        setvechile(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data for dropdown 2:', error);
      });
  }, []);

  // Event handler for dropdown selection change
  const handleDropdown1Change = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleDropdown2Change = (e) => {
    setSelectedOption2(e.target.value);
  };

  // Event handler for form field change
  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send selected data to the backend along with additional form fields
    const dataToSend = {
      driver: selectedOption2,
      vechile: selectedOption1,
      ...formData,
    };

    Axios.post('http://localhost:4000/addschedule', dataToSend)
      .then((response) => {
        alert("Sheduled successfully");
        // Handle success
        console.log('Data sent successfully:', response.data);
        setSelectedOption1('');
        setSelectedOption2('');
        setFormData({
          from: '',
          to: '',
          time: '',
        });
      })
      .catch((error) => {
        // Handle error
        console.error('Error sending data:', error);
        // alert("Sheduled successfully");
      });
  };


 



 


   
     


      




    const [fdata, setFData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filtereduser, setFiltereduser] = useState(fdata);

    
  
    useEffect(() => {
      const filtered = fdata.filter(
        (Schedule) =>
         Schedule.driver.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      setFiltereduser(filtered);
    }, [fdata, searchQuery]);
  
    useEffect(() => {
      Axios.get("http://localhost:4000/schedule").then((res) => {
        setFData(res.data);
      });
    }, []);
  
    const handleDelete = (ScheduleId) => {
      Axios.delete(`http://localhost:4000/schedule/${ScheduleId}`)
        .then((res) => {
          setFData(fdata.filter((Schedule) => Schedule._id !== ScheduleId));
        })
        .catch((error) => {
          alert(error);
          console.error("Error deleting vechile:", error);
        });
    };
  
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
                  placeholder="Search by place"
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
            <div className="position-relative">
            <button className="btn btn-primary position-absolute top-0 end-0 m-4"  data-bs-toggle="modal" data-bs-target="#exampleModal">Schedule</button>
            </div>



            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Schedule</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>


        <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="from" class="form-label">
      From
    </label>
    <input
      type="text"
      className="form-control"
      id="from"
      placeholder="Enter the starting place"
      value={formData.from}
          onChange={handleFieldChange}
      required
    ></input>
  </div>
  <div class="mb-3">
    <label for="to" class="form-label">
      To
    </label>
    <input
      type="text"
      className="form-control"
      id="to"
      placeholder="Enter the destination place"
      value={formData.to}
          onChange={handleFieldChange}
      required
    ></input>
  </div>
  <div class="mb-3">
    <label for="time" class="form-label">
      Time
    </label>
    <input
      type="text"
      className="form-control"
      id="time"
      placeholder="Enter timings eg (start - end)"
      value={formData.time}
      onChange={handleFieldChange}
      required
    ></input>
  </div>
  <div class="mb-3">
    
  </div>
  <div class="mb-3">
  <label htmlFor="dropdown2"  class="form-label">Driver</label>
        <select
          id="dropdown2"
          className="form-select"
          value={selectedOption2}
          onChange={handleDropdown2Change}
        >
          <option value="">Select an option</option>
          {vechile.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <label htmlFor="dropdown1"  class="form-label">vechile</label>
        <select
          id="dropdown1"
          className="form-select"
          value={selectedOption1}
          onChange={handleDropdown1Change}
        >
          <option value="">Select an option</option>
          {driver.map((option) => (
            <option key={option.id} value={option.plate}>
               {option.plate}
            </option>
          ))}
        </select>
  </div>
  
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
      Close
    </button>
    <button type="submit" class="btn btn-primary">
      Schedule
    </button>
  </div>
</form>


    
   </div> 
      </div>
      
    </div>
  </div>
</div>










            <h3 className="text-center text-light mt-4 mb-3" style={{ fontWeight: "bold", fontSize: "34px" }}>
              Scheduled
            </h3>
            <div className="container">
  <table className="table">
    <thead>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Time</th>
        <th>Vehicle</th>
        <th>Driver</th>
        
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {filtereduser.map((Schedule) => (
        <tr key={Schedule._id}>
          <td>{Schedule.from}</td>
          <td>{Schedule.to}</td>
          <td>{Schedule.time}</td>
          <td>{Schedule.vechile}</td>
          <td>{Schedule.driver}</td>
          
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(Schedule._id)}
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
        </main>
      </div>
    </div>

        </>

     );
}
 
export default Schedule;