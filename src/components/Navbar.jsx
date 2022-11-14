import React from 'react'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
// import { Satellite } from '@mui/icons-material'

const Navbar = () => {
  const state = useSelector((state) => state.handleCart )
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    <div class="container-fluid">
      <NavLink className="navbar-brand" href="#">MeliSport</NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NavLink to='/' className="nav-link active" aria-current="page" href="#">Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to='/products' className="nav-link" href="#">Product</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to='about' className="nav-link" href="#">About</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to='/contacts' className="nav-link" href="#">Contact</NavLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <div className="button">
                <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in"></i>
                    Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in"></i>
                    Register
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in"></i>
                    Cart({state.length})
                </NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar