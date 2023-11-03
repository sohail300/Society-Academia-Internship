import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import LoginUser from './components/LoginUser';
import LoginAdmin from './components/LoginAdmin';
import UserHome from './components/UserHome';
import AdminHome from './components/AdminHome';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';

import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';

function App() {
  return (
<>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginuser" element={<LoginUser />} />
        <Route path="/loginadmin" element={<LoginAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/adminhome" element={<AdminHome />} />

        <Route path="/navbar" element={<Navbar />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Profile" element={<Profile />} />

        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
</>
  );
}

export default App;
