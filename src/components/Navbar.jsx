import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MeliSport</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <div className="button">
                <a href="" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in"></i>
                    Login
                </a>
                <a href="" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in"></i>
                    Register
                </a>
                <a href="" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in"></i>
                    Cart
                </a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar