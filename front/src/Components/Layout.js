

import { Outlet } from "react-router-dom";
import React from 'react'
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

 import { FaTruckFast } from 'react-icons/fa6';



const Layout = () => {


  



  return (
    <>


<aside id="sidebar" >
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaTruckFast className='icon_header'/> FLEETOX
            </div>
            
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="driver">
                    <BsFillArchiveFill className='icon'/> Drivers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="driver">
                    <BsFillGrid3X3GapFill className='icon'/> Vechiles
                    </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="schedule">
                    <BsPeopleFill className='icon'/> Schedule
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="alerts">
                    <BsListCheck className='icon'/> Alerts
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="settings">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>

      
      
      
      
      
    

      <Outlet />
    </>
  )
};

export default Layout;