

import { Outlet } from "react-router-dom";



const Layout = () => {



  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <h2 class="navbar-brand" >Library</h2>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
       
        <li class="nav-item">
          <a class="nav-link active" href="/Service">Service</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link active" href="/about">About</a>
        </li>
        
        
       
      </ul>
    
    </div>
    <br></br>
  </div>
</nav>
      
      
      
      
      
    

      <Outlet />
    </>
  )
};

export default Layout;