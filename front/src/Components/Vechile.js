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


const Vechile = () => {

    const [inputValue, setInputValue] = useState({
        plate: "",
        model: "",
        fuel: "",
        color:"",
        
      });

      const { plate,model,fuel,color } = inputValue;


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
            "http://localhost:4000/addvechile",
            {
              ...inputValue,
            },
            { withCredentials: true   }
          );
          const { success, message } = data;
          if (success) {
            alert("Vechile Added Successfully !!!")
           
          } else {
            
            alert(message)
          }
        } catch (error) {
          console.log(error);
        }
        setInputValue({
          ...inputValue,
        plate: "",
        model: "",
        fuel: "",
        color:"",
          
          
        });
      };





    const [fdata, setFData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filtereduser, setFiltereduser] = useState(fdata);

    const numberOfObjects = fdata.length;
  
    useEffect(() => {
      const filtered = fdata.filter(
        (vechile) =>
          vechile.plate.toLowerCase().includes(searchQuery.toLowerCase()) 
      );
      setFiltereduser(filtered);
    }, [fdata, searchQuery]);
  
    useEffect(() => {
      Axios.get("http://localhost:4000/vechile").then((res) => {
        setFData(res.data);
      });
    }, []);
  
    const handleDelete = (vechileId) => {
      Axios.delete(`http://localhost:4000/vechile/${vechileId}`)
        .then((res) => {
          setFData(fdata.filter((vechile) => vechile._id !== vechileId));
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
                  placeholder="Search by Plate number"
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
            <button className="btn btn-primary position-absolute top-0 end-0 m-4"  data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
            </div>



            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a new vechile</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>


        <form  onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Number Plate
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="plate"
                       placeholder="Enter the numberplate"
                       value={plate}
                       onChange={handleOnChange}
                       required
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Model
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="model"
                        placeholder="Enter model"
                        value={model}
                        onChange={handleOnChange}
                        required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                     Fuel Type
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="fuel"
                       placeholder="Enter fuel type"
                       value={fuel}
                       onChange={handleOnChange}
                       required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Color
                    </label>
                    <input
                     type="text"
                     className="form-control"
                     id="color"
                     placeholder="Enter the color"
                     value={color}
                     onChange={handleOnChange}
                     required
                    ></input>
                  </div>
                  

                
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Add Vechile</button>
                </div>

                </form>
    
   </div> 
      </div>
      
    </div>
  </div>
</div>










            <h3 className="text-center text-light mt-4 mb-3" style={{ fontWeight: "bold", fontSize: "34px" }}>
              Available Vechile : {numberOfObjects}
            </h3>
            <div className="row">
              {filtereduser.map((vechile) => (
                <div className="col-md-4 mb-4" key={vechile._id}>
                  <div className="card">
                    <div className="card-body">
                      
                      <p className="card-text">
                        <strong>Licence Plate:</strong> {vechile.plate}
                      </p>
                      <p className="card-text">
                        <strong>Model :</strong> {vechile.model}
                      </p>
                      <p className="card-text">
                        <strong>Fuel Type:</strong> {vechile.fuel}
                      </p>
                      <p className="card-text">
                        <strong>Color :</strong> {vechile.color}
                      </p>
                      <div className="d-flex justify-content-center align-items-center mt-3">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(vechile._id)}
                        >
                          Delete
                        </button>
                      </div>
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
 
export default Vechile;