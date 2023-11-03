import React, { Component } from 'react'

import {Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png';
import youtube from '../images/Youtube.png'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.png'

export default function ContactUs() {
    const Navigate = useNavigate();
const handleProfile = (e)=>{
    e.preventDefault();
    Navigate('/Profile');
};
const handleLanguage = (e)=>{
    e.preventDefault();
    Navigate('/Language ');
};
const handleLogout = (e)=>{
    e.preventDefault();
    Navigate('/Loginas');
};
    return (
        <div style={{ backgroundColor: "#EEEEEE", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
                                <Link className="nav-link" to="/Loginas" style={{ color: "#FFF", fontSize: "16px" }} >Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="contact-us  " style={{ marginTop: "15vh", marginLeft: "38.0%" }}>
                <p >Contact Us</p>
            </div>

            <div className="container" style={{ marginLeft: "20%" }}>
                <table className="table table-borderless" style={{ width: "60%", background: "#EEEEEE" }}>
                    <tbody>

                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }} > Full Name</td>
                        </tr>
                        <div class="input-group flex-nowrap">

                            <input type="text" class="form-control" placeholder="Enter Your Full Name" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>

                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }} >Mobile Number</td>
                        </tr>
                        <div class="input-group flex-nowrap">

                            <input type="text" class="form-control" placeholder="Enter Your Mobile Number" aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }} > Description</td>
                        </tr>
                        <div class="form-group">

                            <textarea class="form-control auto-expand" id="exampleTextarea" rows="5" placeholder="Enter text here"></textarea>
                        </div>



                        <tr>
                            <button style={{ background: "#12AB69", borderRadius: "10% 20%", border: "none", color: "#FFFFFF", margin: "5% auto", display: "block", padding: "1%", width: "20%", fontSize: "15px" }}>Submit</button>
                        </tr>
                    </tbody>
                </table>


            </div>
            <div className="container">
                <table className="table table-borderless" style={{ background: "#EEEEEE", width: "100%" }}>
                    <tbody>
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }}>
                                <h2> Contact Us</h2>
                            </td>
                            <td className='profile-options' style={{ background: "#EEEEEE",textAlign:"-webkit-center" }}>
                                <h2>Find Us On</h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }}>
                                Email: rescueradar@gov.in
                            </td>
                            <td className='profile-options' style={{ background: "#EEEEEE", textAlign: "right" }} rowspan="3">
                                <img style={{ width: "5%", marginRight: "11%" }} src={youtube} alt="" />
                                <img style={{ width: "5%", marginRight: "11%" }} src={instagram} alt="" />
                                <img style={{ width: "5%", marginRight: "11%" }} src={facebook} alt="" />
                                <img style={{ width: "5%", marginRight: "11%" }} src={twitter} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }}>
                                Mobile: +12 5678845665
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
