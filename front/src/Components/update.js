import React, { useState, useEffect } from "react";
import Axios from "axios";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./UpdateForm.css"

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year:"",
    image:"",
  });

  useEffect(() => {
    Axios.get(`http://localhost:4000/book/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook((book) => ({
      ...book,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBook({
          ...book,
          image: reader.result, // Store the base64 encoded image
        });
      };
      reader.readAsDataURL(file);
    }
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:4000/book/${id}`, book)
      .then((res) => {
        console.log("Book updated:", res.data);
        alert("Updated")
        setTimeout(() => {
          navigate("/view");
        }, 1000);
        // Redirect to the book list page or handle navigation as needed
      })
      .catch((error) => {
        console.error("Error updating book:", error);
       alert(error)
      });
  };

  return (
<>



<div class="formbold-main-wrapper">
        <div class="formbold-form-wrapper">
        
          <form   onSubmit={handleUpdate} >
            
            <br></br>
            <center><h1 class="heading">Update</h1></center>
            
            <img src={book.image} className="card-img-top" alt="Card" height="200" width="300" />

            <br></br>
            <hr></hr>
            <div class="formbold-input-flex">
                    <label class="formbold-form-label">
                    image
                    </label>
                    <input
                      type="file"
                      class="formbold-form-input"
                      id="image"
                      placeholder='.jpeg file'
                      onChange={handleImageChange}
                      accept="image/*"
                    ></input>
                  </div>
              <div class="formbold-input-flex">
                <div>
                    <input
                     type="text"
                     name="title"
                     value={book.title}
                     onChange={handleInputChange}
                    
                  
                    class="formbold-form-input"
                     />
                    <label  class="formbold-form-label">Title</label>
                </div>
                <div>
                    <input
                    class="formbold-form-input"
                    type="text"
                    name="author"
                    value={book.author}
                    onChange={handleInputChange}
                    
                   
                    />
                    <label  class="formbold-form-label">Author</label>
                </div>
              </div>
              <div class="formbold-input-flex">
                <div>
                    <input
                    class="formbold-form-input"
                    type="text"
                    name="genre"
                    value={book.genre}
                    onChange={handleInputChange}
                    
                    
                    />
                    <label class="formbold-form-label"> Genre </label>
                </div>
                <div>
                    <input
                    class="formbold-form-input"
                    type="text" 
                    name="year"
                    value={book.year}
                    onChange={handleInputChange}
                   />
                    <label class="formbold-form-label"> Publication Date </label>
                </div>
              </div>
              <div class="formbold-bottom">
              <button   class="formbold-btn" type="button" ><a class="formbold-anchor "  href="/view">Cancel</a></button>
              <button 
              class="formbold-btn"
              type="submit" >
                  Submit
              </button>
              
              
              </div>
          </form>
        </div>
      </div>






    </>
  );
}

export default UpdateBook;
