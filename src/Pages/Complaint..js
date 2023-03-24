import React, { useState } from 'react'
import PatientNavBar from '../Components/PatientNavBar'
import Style from '../Styles/Patients.module.css'
import * as Icon from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
function Complaint() {
  const [getcomplaints, setGetComplaints] = useState([
    {
      hospitalId: 1,
      complaints: "Long Wait Times. ..."
    },
    {
      hospitalId: 2,
      complaints: "Issues with Staff Members.Amount of Time Spent with Doctor. ..."
    },
    {
      hospitalId: 3,
      complaints: "Lack of Communication and Dismissiveness."
    }
  ])
  const [postcomplaints, setPostComplaints] = useState('');
  return (
    <div>

      <div>
        <PatientNavBar />
        <div className={Style.patientTable}>
          <div>

            <h3>
              Complaints:
            </h3>
            <div>

              <textarea name="Complaints" rows={4} cols={40} placeholder="Give your Complaints Here" value={postcomplaints} onChange={(e) => setPostComplaints(e.target.value)} />
            </div>
            <div>

              <button className={Style.buttons} onClick={() => alert('Successfully complained')} >Complaint</button>
            </div>
          </div>
        </div>
        {/* <div className={Style.patientTable}>
        <div>
        <h2 className={Style.heading}>Other Complaints:</h2>
        <div className={Style.patientTable}>

        <table className={Style.Table}>
          <thead >
              <tr>
             
              <th>Complaints</th>
              </tr>
             </thead>
        {
        getcomplaints.map((co,index)=>
             <tbody >
              <tr>
                
                <td>{co.complaints}</td>
              </tr>
             </tbody>
        
        )
      }
      </table>
        </div>
      </div>
      </div> */}
        <div className={Style.patientTable} style={{marginTop:60}}>
         <div>

         
          <h3>OtherComplaints:</h3>
          <div className={Style.complaintBox}>

          
          {
          getcomplaints.map((get,ind)=>
          <div>
              <div className={ ind%2 ===0 ? Style.container : Style.darker}>
                <p className={ind % 2 === 0 ? Style.timeright : Style.timeleft}>{get.complaints}</p>
                {/* <span className={ind % 2 === 0 ? Style.timeright : Style.timeleft}>11:00</span> */}
                <Link style={{ color: 'black' }} to='/patient/profile'><Icon.PersonCircle size="25px" className={ind % 2 === 0 ? Style.icon : Style.iconright} /></Link>
                
        </div>
          
            </div>
        
          )
          }
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Complaint