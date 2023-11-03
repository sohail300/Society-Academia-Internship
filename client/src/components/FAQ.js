import React from 'react'
import logo from '../images/logo.png'
import {Link, useNavigate } from 'react-router-dom'

export default function FAQ() {
    const navigate = useNavigate();
   
    
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

            <div className="contact-us  " style={{ marginTop: "10%", marginLeft: "43%",marginBottom:"3%" }}>
                <p >FAQ</p>
            </div>
            <table class="table table-striped" style={{width:"75%",margin:"0 auto",lineHeight:"2.5em"}}>
                
               <tr className='question'>How do I check the status of my order?</tr>
               <tr className='answer'>To check the status of your order, log into your account, and go to the My Orders section to get all the information.</tr>
              
               <tr>&nbsp;</tr>
               <tr className='question'>How do I check the status of my order?</tr>
               <tr className='answer'>To check the status of your order, log into your account, and go to the My Orders section to get all the information.</tr>
                <tr>&nbsp;</tr>
               <tr className='question'>How do I check the status of my order?</tr>
               <tr className='answer'>To check the status of your order, log into your account, and go to the My Orders section to get all the information.</tr>
                <tr>&nbsp;</tr>
               <tr className='question'>How do I check the status of my order?</tr>
               <tr className='answer'>To check the status of your order, log into your account, and go to the My Orders section to get all the information.</tr>
                <tr>&nbsp;</tr>
               <tr className='question'>How do I check the status of my order?</tr>
               <tr className='answer'>To check the status of your order, log into your account, and go to the My Orders section to get all the information.</tr>
                <tr>&nbsp;</tr>
               <tr className='question'>How do I check the status of my order?</tr>
               <tr className='answer'>To check the status of your order, log into your account, and go to the My Orders section to get all the information.</tr>
                <tr>&nbsp;</tr>
            </table>

        </div>
    )
}
