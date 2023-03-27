import React from 'react'
import MainNavBar from '../Components/MainNavBar'
import Style from '../Styles/About.module.css'
import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons'
function BasicPage() {
  return (
    <div>
        <MainNavBar/>
        <div className={Style.dmain}>
        <div className={Style.doctor}>
            <div className={Style.image}>
                  <img src="https://cdn.pixabay.com/photo/2017/01/31/22/06/doctor-2027615__340.png" width ="200" alt='logo' style={{marginLeft:100}}/>
            </div>
        <div className={Style.docLink}>
        <Link to='/doctor/signup' className={Style.link}>
                          Are you a Doctor <Icon.ArrowRight />
        </Link>
        </div>
        </div>
          <div className={Style.patient}>
                  
          <img src="https://cdn.pixabay.com/photo/2022/11/08/09/10/patient-7578055__340.png" width="200" height="400"alt='logo' style={{ marginLeft: 100 }} />
                  <div className={Style.docLink}>

                    <Link to='/patient/signup' className={Style.link}>
                        Are you a Patient <Icon.ArrowRight/>
                    </Link>
                  </div>
        </div>
        </div>
    </div>
  )
}

export default BasicPage