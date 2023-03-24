import React, { useState } from 'react'
import PatientNavBar from '../Components/PatientNavBar'
import Style from '../Styles/Patients.module.css'
function Complaint() {
  const [getcomplaints,setGetComplaints]=useState([
    {
    hospitalId:1,
    complaints:"VeryBad"
  },
    {
      hospitalId: 2,
      complaints: "VeryGood"
    },
    {
      hospitalId: 3,
      complaints: "Bad"
    }
])
  const[postcomplaints,setPostComplaints]=useState('');
  return (
    <div>
      <PatientNavBar/>
      <div className={Style.patientTable}>
        <div>

        <h3>
          Complaints:
        </h3>
        <div>

          <textarea name="Complaints" rows={4} cols={40} placeholder="Give your Complaints Here" value={postcomplaints} onChange={(e)=>setPostComplaints(e.target.value)}/>
        </div>
        <div>

          <button onClick={()=>alert('Successfully complained')}>Complaint</button>
        </div>
      </div> 
        </div>
      <div className={Style.patientTable}>
        <div>
        <h2 className={Style.heading}>Other Complaints</h2>
        <table className={Style.Table}>
          <thead >
              <tr>
              <th>S.no</th>
              <th>Complaints</th>
              </tr>
             </thead>
        {
        getcomplaints.map((co,index)=>
             <tbody >
              <tr>
                <td>{index+1}</td>
                <td>{co.complaints}</td>
              </tr>
             </tbody>
        
        )
      }
      </table>
      </div>
      </div>
    </div>
  )
}

export default Complaint