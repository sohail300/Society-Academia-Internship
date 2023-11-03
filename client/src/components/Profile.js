import React, { useEffect, useState } from 'react';

import { Link, useNavigate, useParams } from 'react-router-dom'; // Import useParams

import user from '../images/editprofile.svg';
import lan from '../images/language.svg';
import logo from '../images/logo.png';
import profile from '../images/profile.png';
import logos from '../images/logoe.png';

import contact from '../images/contact.png';
import faq from '../images/faq.svg';
import about from '../images/about.svg';
import fb from '../images/feedback.svg';
import dta from '../images/download.gif';

export default function Profile() {
   
    const navigate = useNavigate();
    // const { fullName, mobileNumber } = useParams(); // Use useParams to get fullName and mobileNumber from 
    const fullName = localStorage.getItem('fullName');
  const mobileNumber = localStorage.getItem('mobileNumber');

    const [selectedImage, setSelectedImage] = useState(null);

    // Modify this function to handle image selection
    useEffect(() => {
        console.log('useEffect is running');
        const savedImage = localStorage.getItem('selectedImage');
        if (savedImage) {
            setSelectedImage(savedImage);
        }
    }, []);
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            // You can perform additional validation here if needed
            setSelectedImage(imageUrl);
            localStorage.setItem('selectedImage', imageUrl);
        }
    };

    const handleEditProfile = (e) => {
        e.preventDefault();
        
        // Pass the selectedImage as state when navigating to EditProfile
        navigate('/EditProfile', { state: { selectedImage } });
    };
    const handleLanguage = (e) => {
        e.preventDefault();
        navigate('/Language'); // Replace '/Language' with the correct path
    };
    const handleContact = (e) => {
        e.preventDefault();
        navigate('/ContactUs'); // Replace '/Language' with the correct path
    };
    const handleFAQ = (e) => {
        e.preventDefault();
        navigate('/FAQ'); // Replace '/Language' with the correct path
    };
    const handleAboutUs = (e) => {
        e.preventDefault();
        navigate('/AboutUs'); // Replace '/Language' with the correct path
    };
    const handleFeedback = (e) => {
        e.preventDefault();
        navigate('/Feedback'); // Replace '/Language' with the correct path
    };
    const handleLogo = (e) => {
        e.preventDefault();
        navigate('/Homepage'); // Replace '/Language' with the correct path
    };
    const handleLogout = (e) => {
        e.preventDefault();
    
        // Clear user details from local storage
        localStorage.removeItem('selectedImage');
        localStorage.removeItem('fullName');
        localStorage.removeItem('mobileNumber');
    
        navigate('/Loginas'); // Replace '/Loginas' with the correct path
    };

    return (
        <div style={{ backgroundColor: '#EEEEEE', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
             <nav className="navbar navbar-expand-lg navbar-bg text-colour fixed-top" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/UserHomepage"><img src={logo} alt="" style={{ width: "70px", height: "55px" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto"> {/* Centered item */}
                            <li className="nav-item">
                                <Link className="nav-link active text-center" aria-current="page" to="/UserHomepage" style={{ color: "#FFF", fontSize: "24px" }}>Rescue <span style={{ color: "#EB801B" }}>Radar</span></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto"> {/* Right-aligned items */}
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "#FFF", fontSize: "16px" }} to="/Profile" >Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Language" style={{ color: "#FFF", fontSize: "16px" }} >Language</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Loginas" style={{ color: "#FFF", fontSize: "16px" }} onClick={handleLogout}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                             
            <div style={{ backgroundColor: '#D9FBEE', minHeight: '100vh', marginRight: '10%', position: 'fixed', top: '60px', zIndex: 999 }}>
                <div style={{ backgroundColor: '#D9FBEE', minHeight: '100vh', marginRight: '10%', position: 'fixed' }}>
                    <nav className="sidebar">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}>
                            {/* Modify the following section to allow image selection */}

                            <input
                                type="file"
                                id="profileImage"
                                accept="image/*" // Specify that only image files are allowed
                                style={{ display: 'none' }}
                                onChange={handleImageChange}
                            />
                            <label htmlFor="profileImage" style={{ cursor: 'pointer' }}>
                                {selectedImage ? (
                                    <img src={selectedImage} alt="Profile" style={{ width: '130px',height:"130px", borderRadius: '50%' }} />
                                ) : (
                                    <>
                                        <img src={user} alt="Edit Profile" style={{ width: '3%', marginRight: '3%' }} />
                                       <img src={user} alt="" />
                                    </>
                                )}
                            </label>
                            {/* End of modification */}
                            <div className='text-center'>
                                <h1 style={{ fontWeight: '400', lineHeight: 'normal', color: '#031F13', fontSize: '24px', color: '#FFFFFF' }}>
                                {fullName}
                                </h1>
                                <h1 style={{ fontWeight: '400', lineHeight: 'normal',  color: '#031F13', fontSize: '24px', color: '#FFFFFF' }}>
                                 {mobileNumber}
                                </h1>
                            </div>
                        </div>
                    </nav>
                    <img className="img-responsive" style={{ borderRadius: '50%', height: '20%', width: '10%', position: 'fixed', marginTop: '13%', marginLeft: '21.2%' }} src={logos} alt="" />
                </div>
            </div>
            <div className="container" style={{ marginLeft: '40%', marginTop: '10%' }}>
                <table className="table table-borderless" style={{ width: '60%', background: '#EEEEEE' }}>
                    <tbody>
                        <tr>
                            <td className='profile-text' style={{ background: '#D9FBEE', color: '#12AB69', boxShadow: '3.31137px 3.31137px 13.24547px 0px rgba(0, 0, 0, 0.20)' }}>PROFILE</td>
                        </tr>
                        <tr onClick={handleEditProfile}>
                            <td className='profile-options' style={{ background: '#EEEEEE' }} > <img style={{ width: '3%', marginRight: '3%' }} src={user} alt="" />Edit profile</td>
                        </tr>
                        <tr onClick={handleLanguage}>
                            <td className='profile-options ' style={{ background: '#EEEEEE' }} > <img style={{ width: '3%', marginRight: '3%' }} src={lan} alt="" />Language</td>
                        </tr>
                        <tr>
                            <td className='profile-text' style={{ background: '#D9FBEE', color: '#12AB69', boxShadow: '3.31137px 3.31137px 13.24547px 0px rgba(0, 0, 0, 0.20)' }}>HELP</td>
                        </tr>
                        <tr onClick={handleContact}>
                            <td className='profile-options' style={{ background: '#EEEEEE' }} ><img style={{ width: '3%', marginRight: '3%' }} src={contact} alt="" />Contact us</td>
                        </tr>
                        <tr onClick={handleFAQ}>
                            <td className='profile-options' style={{ background: '#EEEEEE' }} ><img style={{ width: '3%', marginRight: '3%' }} src={faq} alt="" />FAQ</td>
                        </tr>
                        <tr onClick={handleAboutUs}>
                            <td className='profile-options' style={{ background: '#EEEEEE' }} ><img style={{ width: '3%', marginRight: '3%' }} src={about} alt="" />About us</td>
                        </tr>
                        <tr onClick={handleFeedback}>
                            <td className='profile-options' style={{ background: '#EEEEEE' }} ><img style={{ width: '3%', marginRight: '3%' }} src={fb} alt="" />Feedback</td>
                        </tr>
                        <tr>
                            <td className='profile-options' style={{ background: '#EEEEEE' }} ><img style={{ width: '3%', marginRight: '3%' }} src={dta} alt="" />Download this app</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
