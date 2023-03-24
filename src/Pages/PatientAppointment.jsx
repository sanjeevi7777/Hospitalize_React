import PatientNavBar from '../Components/PatientNavBar'
import { useParams, useNavigate ,useLocation} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Styles from '../Styles/Doctors.module.css'
function PatientAppointment() {
    const navigate=useNavigate();
    let {id}=useParams();
    console.log(id)
    const [doctors,setDoctors]=useState([
        {
            doctorId:1,
            doctorName:"Sachin",
            specialist:"Ent",
            hopitalId:2,
        },
        {
            doctorId:2,
            doctorName:"Vinoth",
            specialist:"MD",
            hopitalId:1,
        },
        {
            doctorId:3,
            doctorName:"Mattu",
            specialist:"Heart",
            hopitalId:1,
        }
    ,
        {
            doctorId: 4,
            doctorName: "Vasan",
            specialist: "Kidney",
            hopitalId: 4,
        }
    ]);

  return (
    <>
        <PatientNavBar/>
        <div  className={Styles.appoinmentContainer}>
            <div>
            <h1  style={{marginTop:"30px"}} className={Styles.appoinmentHeading }>Select Your Doctor</h1>
            <table style={{marginTop:"30px"}} className={Styles.containerTable}>
                <tr>
                <th>DoctorId</th>
                <th>
                    Doctor Name
                </th>
                <th>Specialist</th>
                <th>Submit</th>
                </tr>
    
            {
              doctors.filter(doctor=>doctor.hopitalId==id).map((doc)=>

                <tr>
                              <td>{doc.doctorId} </td>
                              <td>{doc.doctorName}</td>
                              <td>{doc.specialist}</td>
                              <td><button  onClick={(e)=>{navigate(`bookAppointment`,{state:{docId:doc.doctorId}})}}>BOOK</button></td>
                        </tr>
                

              )
            }
          </table>
          </div>
        </div> 
    </>
  )
}

export default PatientAppointment