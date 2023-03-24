import React, { useState, useEffect } from 'react';
import PatientNavBar from '../Components/PatientNavBar';
function Home() {
    return ( 
        <>
        <PatientNavBar/>
            <h1>This is patient home page</h1>
        </>
     );
}

export default Home;