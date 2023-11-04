import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import React from 'react'

import 
{  BsBusFrontFill, BsFillBellFill}
 from 'react-icons/bs'
 import {FaUsers} from 'react-icons/fa'
 import 
 {  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import axios from "axios";



import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsFillGearFill,
} from "react-icons/bs";

import { FaTruckFast } from "react-icons/fa6";
const Home = () => {

  const [fdata, setFData] = useState([]);
  const [vdata, setVData] = useState([]);

 


  
  const [data, setData] = useState([]);
  const [profits, setProfits] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/data").then((res) => {
    // setData(res.data);
    const dataArray = res.data;

      // Calculate profit for each object in the array
      const calculatedProfits = dataArray.map(item => ({
        ...item,
        profit: item.business - item.expenses
      }));

      // Set the data with profit values in the state
      setData(calculatedProfits);

      // If you want to store both profit and date
      const profitsWithDate = calculatedProfits.map(item => ({
        profit: item.profit,
        date: item.createdAt // Assuming the date field is called createdAt
      }));

      setProfits(profitsWithDate);
    });
  




       
      
      
    
  }, []);


  console.log({data})

  console.log({profits})
  




  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };


  // to get drivers count

  useEffect(() => {
    axios.get("http://localhost:4000/user").then((res) => {
      setFData(res.data);
    });
  }, []);


  // to get vechiles

  useEffect(() => {
    axios.get("http://localhost:4000/vechile").then((res) => {
      setVData(res.data);
    });
  }, []);



const driver = fdata.length;
const vehicle = vdata.length;







  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  
  useEffect(() => {


    const verifyCookie = async () => {
      
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      
      const { status, name } = data;
      setUsername(name);
      return status
        ?console.log(`Hello ${name}`, )
        : (removeCookie("token"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  
  
  


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

        
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>DRIVER'S</h3>
                    <FaUsers className='card_icon'/>
                </div>
                <h1>{driver}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>VEHICLE'S</h3>
                    <BsBusFrontFill className='card_icon'/>
                </div>
                <h1>{vehicle}</h1>
            </div>
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div> */}
            {/* <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>*/}
        </div> 

        <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={profits}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" type="category" />
        <YAxis dataKey="profit" type="number" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
      </LineChart>
    </ResponsiveContainer>
</div>

   
          
        </main>
      </div>
    </div>









      </>
  );
}

export default Home;