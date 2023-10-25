import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";


const Dash = () => {

   




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
  
    
  
    return ( 
        <>

<div className="container-fluid">
  <div className="row">
    <main className="col-md-10">
      <div className="myblogs-container p-4">
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
                    {/* Add any actions here */}
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
 
export default Dash;