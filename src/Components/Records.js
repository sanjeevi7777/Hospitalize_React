import React, { useState } from 'react'
import PatientNavBar from './PatientNavBar'

function Records() {
    const[records,setRecords]=useState([
        {
            id:1,
            patientId:11,
            Date:"12-01-2004",
            hospitalId:21,
             hospitalName:"Krishna",
            bloodpressure:"120mmHg",
            weight:58,
            consultant:"Sabari",
            drug:{
                drugId:1,
                drugName:"Parecetomol"
            }
        },
        {
            id: 2,
            patientId: 12,
            Date: "12-01-2004",
            hospitalId: 21,
            hospitalName: "KCT",
            bloodpressure: "120mmHg",
            weight: 58,
            consultant: "Jega",
            drug: {
                drugId: 2,
                drugName: "Dolo"
            }
        },
        {
            id: 3,
            patientId: 11,
            Date: "12-01-2004",
            hospitalId: 21,
            hospitalName: "kpr",
            bloodpressure: "120mmHg",
            weight: 58,
            consultant: "rahul",
            drug: {
                drugId: 1,
                drugName: "saridon"
            }
        },
        {
            id: 1,
            patientId: 11,
            Date: "12-01-2004",
            hospitalId: 21,
            hospitalName: "Krishna",
            bloodpressure: "120mmHg",
            weight: 58,
            consultant: "Sathish",
            drug: {
                drugId: 1,
                drugName: "dolo-650"
            }
        }
    ])
  return (
    <div>
        <PatientNavBar/>
        <div>{
            records.map((rec,ind)=>
            <div>
                 <h3>
                    {rec.id}
                    </h3>
                    <h3>
                    {rec.patientId}
                        </h3>
                        <h3>
                    {rec.Date}
                            </h3>
                            <h3>
                    {rec.hospitalName}
                                </h3>
                                <h3>
                    {rec.consultant}
                                    </h3>
                                    <h3>
                    {rec.drug.drugName}

                 </h3>
                </div>)
}
        </div>
    </div>
  )
}

export default Records