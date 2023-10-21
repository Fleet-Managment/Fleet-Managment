import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";


import "./view.css"

function Myblogs() {
  const [fdata, setFData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(fdata);

  useEffect(() => {
    const filtered = fdata.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [fdata, searchQuery]);
  


  useEffect(() => {
    Axios.get("http://localhost:4000/book").then((res) => {
      setFData(res.data);
    });
  }, []);



  const handleDelete = (bookId) => {
    // Send a DELETE request to the server
    Axios.delete(`http://localhost:4000/book/${bookId}`)
      .then((res) => {
        // Update the list of books after successful deletion
       
        setFData(fdata.filter((book) => book._id !== bookId));
      })
      .catch((error) => {
        alert(error);
          
        console.error("Error deleting book:", error);
      });
  };

  return (
    <>
      <div className="myblogs-container">
      
      
     
        <div className="animated-search-container">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search by title, author, or genre"
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



      <h3 className="text-center mt-4 mb-3" style={{ color: "darkblue", fontWeight: "bold", fontSize: "34px" }}>
  Available Books
</h3>


<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
  {filteredBooks.map((book) => (
    <div className="col-md-2 col-lg-2 col-sm-6 mb-4" key={book._id}>
      <div className="card shadow-sm">
        <img
          src={book.image}
          className="card-img-top"
          alt="Book Cover"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="card-text">
            <strong>Genre:</strong> {book.genre}
          </p>
          <p className="card-text">
            <strong>Year:</strong> {book.year}
          </p>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <a href={`/update/${book._id}`} className="btn btn-primary me-2">
              Update
            </a>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(book._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


<footer class="bg-light pb-5">
      <div class="container text-center">
        <div>
          <div>Contact US</div>
          <div>Phone:+91 7025047555</div>
          <div>E-Mail:edu@gmail.com</div>
        </div>
        <p class="font-italic text-muted mb-0">
          &copy; Copyrights education.com All rights reserved.
        </p>
      </div>
    </footer>

        
      </div>
    </>
  );
}

export default Myblogs;
