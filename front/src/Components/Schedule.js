import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
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

    const [inputValue, setInputValue] = useState({
        place: "",
        time: "",
        vechile: "",
        driver: "",
        contact:"",
        
      });

      const { place,time,vechile,driver,contact } = inputValue;


      const handleOnChange = (e) => {
        const {id, value } = e.target;
        setInputValue({
          ...inputValue,
          [id]: value,
        });
      };


      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const { data } = await Axios.post(
            "http://localhost:4000/addschedule",
            {
              ...inputValue,
            },
            { withCredentials: true   }
          );
          const { success, message } = data;
          if (success) {
            alert("Scheduled Successfully !!!")
           
          } else {
            
            alert(message)
          }
        } catch (error) {
          console.log(error);
        }
        setInputValue({
          ...inputValue,
        place: "",
        time: "",
        vechile: "",
        driver: "",
        contact:"",
          
          
        });
      };





    const [fdata, setFData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filtereduser, setFiltereduser] = useState(fdata);

    
  
    useEffect(() => {
      const filtered = fdata.filter(
        (Schedule) =>
         Schedule.place.toLowerCase().includes(searchQuery.toLowerCase()) 
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


        <form  onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Place
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="place"
                       placeholder="Enter the places eg(place1 - place2)"
                       value={place}
                       onChange={handleOnChange}
                       required
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Time
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="time"
                        placeholder="Enter timings eg(start - end)"
                        value={time}
                        onChange={handleOnChange}
                        required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                     Vechile
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="vechile"
                       placeholder="Enter the vechile number"
                       value={vechile}
                       onChange={handleOnChange}
                       required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Driver
                    </label>
                    <input
                     type="text"
                     className="form-control"
                     id="driver"
                     placeholder="Enter Driver name"
                     value={driver}
                     onChange={handleOnChange}
                     required
                    ></input>
                   
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Contact
                    </label>
                    <input
                     type="Number"
                     className="form-control"
                     id="contact"
                     placeholder="Enter Driver phone number"
                     value={contact}
                     onChange={handleOnChange}
                     required
                    ></input>
                   
                  </div>
                  

                
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Schedule</button>
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
        <th>Place</th>
        <th>Time</th>
        <th>Vehicle</th>
        <th>Driver</th>
        <th>Contact</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {filtereduser.map((Schedule) => (
        <tr key={Schedule._id}>
          <td>{Schedule.place}</td>
          <td>{Schedule.time}</td>
          <td>{Schedule.vechile}</td>
          <td>{Schedule.driver}</td>
          <td>{Schedule.contact}</td>
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