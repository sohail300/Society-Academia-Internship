import React from 'react'
import logo from '../images/logo.png'
import {Link , useNavigate } from 'react-router-dom';


export default function AboutUs() {
    const Navigate = useNavigate();


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
            <div className="contact-us  " style={{ marginTop: "10%", marginLeft: "39%", marginBottom: "3%" }}>
                <p >About Us</p>
            </div>

            <table>
                <tr>
                    <td><img src={logo} alt="" style={{ width: "100%" }} /></td>
                    <td>
                        <h5>What is Rescue Radar?</h5>
                        <h5>&nbsp;</h5>
                        <h5 style={{width:"80%"}}>What is Rescue Radar?Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  irure dolor in reprehenderit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  irure dolor in reprehenderit Lorem ipsum dolor sit amet</h5>
                    </td>
                </tr>
            </table>




        </div>
    )
}
