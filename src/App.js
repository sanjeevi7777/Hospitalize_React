import logo from './logo.svg';
import './App.css';
import Main from './main'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import DoctorNavBar from './Components/DoctorNavBar';
import DoctorAppointment from './Pages/DoctorAppoinment';
import PatientAppointment from './Pages/PatientAppointment';
import Hospitals from './Pages/Hospitals';
import BookAppointment from './Pages/BookAppointment';
import Records from './Components/Records';
import Complaint from './Pages/Complaint.';
import DoctorHome from './Pages/DoctorHome';
import PatientHome from './Pages/PatientHome';

import PatientAbout from './Pages/PatientAbout';
import DoctorAbout from './Pages/DoctorAbout'
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<DoctorAppoinment/>} > </Route> */}
      
        <Route path="/doctor/appointment" element={<DoctorAppointment/>}></Route>
        <Route path="/doctor/home" element={<DoctorHome/>}></Route>
        <Route path="/patient/home" element={<PatientHome />}></Route>
        <Route path="/patient/aboutus" element={<PatientAbout/>}></Route>
        <Route path="/doctor/aboutus" element={<DoctorAbout />}></Route>

        <Route path="/patient" element={<Hospitals/>}></Route>
        <Route path="/patient/records" element={<Records/>}></Route>
        <Route path="/patient/complaint" element={<Complaint/>}></Route>
        <Route path="/patient/:patId/:id/bookAppointment" element={<BookAppointment/>}></Route>
        <Route path="/patient/:patId/:id" element={<PatientAppointment/>}></Route>
        
      </Routes>
    </Router>
    // <div className="App">
    //   {/* <Patient/> */}
    //   <DoctorNavBar/>
    //   <DoctorAppoinment/>
    // </div>
  );
}

export default App;
