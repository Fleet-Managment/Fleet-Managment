import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const YourFormComponent = () => {
  // State to store the selected values for the dropdowns
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
      driver: selectedOption1,
      vechile: selectedOption2,
      ...formData,
    };

    Axios.post('http://localhost:4000/addschedule', dataToSend)
      .then((response) => {
        // Handle success
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error sending data:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="dropdown1">Dropdown 1:</label>
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

      <div>
        <label htmlFor="dropdown2">Dropdown 2:</label>
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
      </div>

      {/* Additional form fields */}
      <div>
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          value={formData.from}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label htmlFor="to">To:</label>
        <input
          type="text"
          id="to"
          value={formData.to}
          onChange={handleFieldChange}
        />
      </div>
      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          value={formData.time}
          onChange={handleFieldChange}
        />
      </div>
      

      <button type="submit">Submit</button>
    </form>
  );
};

export default YourFormComponent;
