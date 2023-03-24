import React, { useState } from 'react'
import PatientNavBar from '../Components/PatientNavBar'
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Styles from '../Styles/Patients.module.css'
function BookAppointment() {
  // let location =useLocation();
  const [symptoms, setSymptoms] = useState("")
  const [days, setDays] = useState("")
  let { patId, id } = useParams();
  console.log(patId + id)
  async function bookApp() {
    alert("Appointment booked ")
  }
  return (
    <>
      <PatientNavBar />
      <div className={Styles.symptomContainer}>
        <div style={{textAlign:'center',marginTop:'50px'}}>
          <h1>Book Your Appoinment</h1>
        <div className={Styles.symptomContainerIn}>
          <table>
            <tr>
              <td><h4> Symptoms</h4></td>
              <td><input type='text' placeholder='Enter your symptoms' value={days} onChange={(e) => setDays(e.target.value)}></input></td>
            </tr>
            <tr>
              <td><h4>No of Days</h4></td>
              <td><input type='text' placeholder='Enter your Days' value={symptoms} onChange={(e) => setSymptoms(e.target.value)}></input></td>
            </tr>
          </table>
          <button  className="btn btn-success" onClick={bookApp} >Book Now</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default BookAppointment