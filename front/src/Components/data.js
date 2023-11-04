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


const Data = () => {
  const [cookies,removeCookie] = useCookies();


  const navigate = useNavigate();
  


  const Logout = () => {
    
    navigate("/login");
  };
   




 
    
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
      
        return status
          ? console.log(`Hello ${user}`)
          : (removeCookie("token"), navigate("/login"));
      };
      verifyCookie();
    }, [cookies, navigate, removeCookie]);



    const [inputValue, setInputValue] = useState({
        business:"",
        expenses:"",
      });
    
      const { business,expenses } = inputValue;
    
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
              "http://localhost:4000/adddata",
              {
                ...inputValue,
              },
              { withCredentials: true   }
            );
            const { success, message } = data;
            if (success) {
              alert("data Added Successfully !!!")
             
            } else {
              
              alert(message)
            }
          } catch (error) {
            console.log(error);
          }
          setInputValue({
            ...inputValue,
            business:"",
            expenses:"",
            
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
          Data Entry
        </h3>

        <form  onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Total Buisness
                    </label>
                    <input
                       type="text"
                       className="form-control"
                       id="business"
                       placeholder="Enter the total buisness"
                       value={business}
                       onChange={handleOnChange}
                       required
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      expenses
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="expenses"
                        placeholder="Enter the daily expences"
                        value={expenses}
                        onChange={handleOnChange}
                        required
                    ></input>
                  </div>
                 
                
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Submit</button>
                </div>

                </form>
        
      </div>
      
    </main>

        


        

        
      </div>
    </div>



        </>

     );
}
 
export default Data;