import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg display-1" style={{width:"fit-content",marginLeft:"auto",fontSize:"1.25rem", backgroundColor:"none",marginRight:"1.5rem"}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link hey" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Explore</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" style={{marginRight:"0.5rem"}}>About Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
