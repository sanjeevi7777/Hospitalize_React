import React, { useState, useEffect } from 'react';
import PatientNavBar from '../Components/PatientNavBar'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// CSS FILES
import styles from '../Styles/Patients.module.css'
// import styles from "../Styles/Doctors.module.css"

function Hospitals() {
  
    let id=40;
    const hospitals = [
        {
            id:1,
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "KMCH",
            location: "Neelambur",
            rating: "4.5/5"
        },
        {
            id:2,
            image: "https://res.cloudinary.com/duc6xzza7/image/upload/v1679682034/images_eeffvb.jpg",
            name: "KG",
            location: "Gandhipuram",
            rating: "4.5/5"
        },
        {
            id:3,
            image: "https://res.cloudinary.com/duc6xzza7/image/upload/v1679682072/CARE-Hospitals-Malakpet_z2i6pd.png",
            name: "Hindusthan",
            location: "Neelambur",
            rating: "4.5/5"
        },
        {
            id:1,
            image: "https://res.cloudinary.com/duc6xzza7/image/upload/v1679682040/images_am0mhg.jpg",
            name: "Apollo",
            location: "Peelamedu",
            rating: "4.5/5"
        },
        {
            id:2,
            image: "https://res.cloudinary.com/duc6xzza7/image/upload/v1679682024/campus-Riverside-Ottawa-The-Hospital-Ont_s43iyb.webp",
            name: "Vasan",
            location: "Erode",
            rating: "4.5/5"
        },
        {
            id:3,
            image: "https://res.cloudinary.com/duc6xzza7/image/upload/v1679682005/2bc5e43752c04d55904ea8db56579e96_slhnwn.jpg",
            name: "Vel Clinic",
            location: "Madurai",
            rating: "4.5/5"
        },
    ];

    return (
        <>
            <PatientNavBar />
            <center>
                    <div className={styles.hospital_cards}>
                        {hospitals.map((hospital)=>{
                            return (
                                <Link to={`/patient/40/${hospital.id}`} style={{textDecoration: "none"}}>
                                    <div className={styles.card}>
                                        <div className={styles.img_container}>
                                            <img src={hospital.image} className={styles.image} />
                                        </div>
                                        {/* <p className={styles.details} >Name : {hospital.name}</p>
                                        <p className={styles.details}>Location : {hospital.location}</p>
                                        <p className={styles.details}>Rating : {hospital.rating}</p> */}
                                        <h3>{hospital.name}</h3>
                                        <table className={styles.appoinmentTable}>
                                            <tr >
                                                <th style={{backgroundColor:"white"}}>Location </th>
                                                <td style={{backgroundColor:"white"}}>: {hospital.location}</td>
                                            </tr>
                                            <tr>
                                                <th style={{backgroundColor:"white"}}>Ratings </th>
                                                <td style={{backgroundColor:"white"}}>: {hospital.rating}</td>
                                            </tr>
                                        </table>
                                        <button  style={{marginTop:"10px"}} className='btn btn-primary'>VIEW</button>
                                        {/* <Link to={`/patient/40/${hospital.id}`} className={styles.availability}>Doctor's Availability {'-->'}</Link> */}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
            </center>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Hospitals
