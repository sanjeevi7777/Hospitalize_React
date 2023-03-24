import React, { useState, useEffect } from 'react';
// import styles from "../Styles/Doctors.module.css"
import PatientNavBar from '../Components/PatientNavBar'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';

// CSS FILES
import styles from '../Styles/Patients.module.css'

function Hospitals() {
    const navigate=useNavigate();
    let location=useLocation();
    let id=40;
    const hospitals = [
        {
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
            image: "https://res.cloudinary.com/dcmagxgci/image/upload/v1679633976/hospital_t4ebfq.jpg",
            name: "XYZ",
            location: "ABCD",
            rating: "4.5/5"
        },
        {
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
                <a>
                    <div className={styles.hospital_cards}>
                        {hospitals.map((hospital)=>{
                            return (
                                <div className={styles.card}>
                                    <div className={styles.img_container}>
                                        <img src={hospital.image} className={styles.image} />
                                    </div>
                                    <p className={styles.details}>Name : {hospital.name}</p>
                                    <p className={styles.details}>Location : {hospital.location}</p>
                                    <p className={styles.details}>Rating : {hospital.rating}</p>
                                    <a href='#' className={styles.availability}>Doctor's Availability {'-->'}</a>
                                </div>
                            )
                        })}
                    </div>
                </a>
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