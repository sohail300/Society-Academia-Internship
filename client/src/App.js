import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
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
        <Route path="/login" element={<Login />} />
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
