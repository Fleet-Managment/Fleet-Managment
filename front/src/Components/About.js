import React from "react";
import libraryImage from "../images/lib_books.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="container mt-5">
<center><h1>About Us</h1></center>
<br></br>
      <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        
      <p class="card-text">Welcome to our library book management website! We are dedicated to providing a vast collection of books to our community.</p>
<p>Our mission is to promote reading and knowledge sharing. We offer a wide range of books in various genres, from classics to the latest bestsellers.</p>

<h2>Explore Our Collection</h2>
<p>Feel free to explore our website, search for your favorite books, check out their details, and borrow them to enjoy the world of literature.</p>

<h2>Membership Benefits</h2>
<p>Joining our library comes with a host of benefits:</p>
<ul>
    <li>Access to thousands of books in our extensive collection.</li>
    <li>Exclusive invitations to book clubs and reading events.</li>
    <li>Discounts on workshops and author talks.</li>
    <li>Personalized recommendations based on your reading preferences.</li>
</ul>

<h2>Library Events</h2>
<p>We regularly host exciting events to engage our members:</p>
<ul>
    <li>Author readings and book signings.</li>
    <li>Literary discussions and book club meetings.</li>
    <li>Workshops on various literary topics, from writing to storytelling.</li>
    <li>Children's storytime sessions for young readers.</li>
</ul>

<h2>Get Involved</h2>
<p>We encourage active participation from our members:</p>
<ul>
    <li>Submit book suggestions for our collection.</li>
    <li>Volunteer as a reading mentor for the community.</li>
    <li>Share your book reviews and recommendations with fellow readers.</li>
    <li>Participate in our annual literary contest and win exciting prizes.</li>
</ul>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <img src={libraryImage}></img>
        
      </div>
    </div>
  </div>
</div>






        {/* <h1 className="mb-4">About Our Library</h1>
        
        <p>
          Welcome to our library book management website! We are dedicated to
          providing a vast collection of books to our community.
        </p>

        <img
          src={libraryImage}
          alt="Library Interior"
          className="img-fluid rounded"
          style={{ maxWidth: "100%", maxHeight: "400px" }}
        />
        
        <p>
          Our mission is to promote reading and knowledge sharing. We offer a
          wide range of books in various genres, from classics to the latest
          bestsellers.
        </p>

        <p>
          Feel free to explore our website, search for your favorite books,
          check out their details, and borrow them to enjoy the world of
          literature.
        </p>

        <p>
          If you have any questions or need assistance, please don't hesitate
          to contact our friendly staff.
        </p> */}

        <div className="text-center mt-4">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
        <br>
        </br>
        <br></br>
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
    </>
  );
};

export default About;
