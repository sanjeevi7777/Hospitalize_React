import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/Doctors.module.css"
import img from "../assests/logo.png"
import * as Icon from 'react-bootstrap-icons'
function DoctorNavBar() {
  return (

    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <img src="https://res.cloudinary.com/dobtf02zs/image/upload/v1679632344/logo_gwiuby.png" alt="Logo" width="36" height="30" class="d-inline-block align-text-top"/>

          <a class="navbar-brand" href="#">Hospitalize</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end"  id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
              <Link class="nav-link active" to='/doctor/home'>Home</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link active" to='/doctor/appointment'>Appointment</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to='/doctor/aboutus'>About</Link>
              </li>
              <div style={{marginLeft:"100px"}}></div>
              <li class="nav-item">
              <span class="glyphicon glyphicon-user"></span>
                

                <Link class="nav-link active" to='/doctor/aboutus'><Icon.Person width="30"/>Profile</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>


        


    </>

  )
}

export default DoctorNavBar
