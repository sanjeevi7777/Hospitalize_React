import React, { useState, useEffect } from 'react';
import PatientNavBar from '../Components/PatientNavBar'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// CSS FILES
import styles from '../Styles/Patients.module.css'
// import styles from "../Styles/Doctors.module.css"

function Hospitals() {
    const navigate=useNavigate();
    let location=useLocation();
    let id=40;
    const hospitals = [
        {
            id:1,
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            id:2,
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            id:3,
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            id:1,
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            id:2,
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            id:3,
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
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
                                        <p className={styles.details} >Name : {hospital.name}</p>
                                        <p className={styles.details}>Location : {hospital.location}</p>
                                        <p className={styles.details}>Rating : {hospital.rating}</p>
                                        <Link to={`/patient/40/${hospital.id}`} className={styles.availability}>Doctor's Availability {'-->'}</Link>
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
