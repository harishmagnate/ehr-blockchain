import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/partial/Navbar';
import DoctorLogin from './components/doctor/DoctorLogin';
import PatientLogin from './components/patient/PatientLogin';
import DoctorHome from './components/doctor/DoctorHome';
import PatientHome from './components/patient/PatientHome';
import DoctorLoginState from './contexts/DoctorLoginState';
import PatientState from './contexts/PatientState';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <DoctorLoginState>
        <PatientState>
          <Router>
            <Navbar></Navbar>
            <Routes>
              <Route path='/home' element={<Home></Home>}></Route>
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/doctor/*' element={<DoctorHome></DoctorHome>}></Route>
              <Route path='/patient/*' element={<PatientHome></PatientHome>}></Route>
            </Routes>
          </Router>
        </PatientState>
      </DoctorLoginState>
      <ToastContainer />
    </>
  );
}

export default App;
