import React, { useState } from 'react'
import PatientNavBar from '../Components/PatientNavBar'
import { useParams ,useLocation} from 'react-router-dom';
import axios from 'axios';
function BookAppointment() {
    // let location =useLocation();
    const[symptoms,setSymptoms]=useState("")
    let { patId,id } = useParams();
    console.log(patId+id)
    async function bookApp(){
        // axios.post("",{
            
        // })
        alert("Appointment booked ")
    }
  return (
    <>
    <PatientNavBar/>
    <label for="Symptoms"> Symptoms</label>
    <input type='text' placeholder='Enter your symptoms' value={symptoms} onChange={(e)=>setSymptoms(e.target.value)}></input>
    <button onClick={bookApp} className='btn '>Book Appointment</button>
    </>
  )
}

export default BookAppointment