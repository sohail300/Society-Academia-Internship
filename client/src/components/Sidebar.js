import React from 'react';
import logo from '../images/logoe.png';
import Navbar from './Navbar';
import profile from '../images/profile.png';

export default function Sidebar() {
    return (
        <div>
            
            <div style={{ backgroundColor: "#D9FBEE", minHeight: "100vh",marginRight:"10%",position:"fixed" }}>
            <nav className="sidebar">
                <div>
                    <img style={{ borderRadius: "100%", position: "fixed", width: "9%", height: "18%", marginTop: "14.6%", marginLeft: "8%" }} src={profile} alt="" />
                    <div className='d-flex justify-content-center'>
                        <h1 style={{ fontWeight: "400", lineHeight: "normal", position: "fixed", marginTop: "24%", color: "#031F13", fontSize: "24px", color: "#FFFFFF" }}>
                            Your Name
                        </h1>
                        <h1 style={{ fontWeight: "400", lineHeight: "normal", position: "fixed", marginTop: "26%", color: "#031F13", fontSize: "24px", textAlign: "center", color: "#FFFFFF" }}>
                            Mobile Number
                        </h1>
                    </div>
                </div>
            </nav>
            <img className="img-responsive" style={{borderRadius:"50%",height:"20%",width:"10%", position: "fixed", marginTop: "13%", marginLeft: "21.2%" }} src={logo} alt="" />
        </div>
        </div>
    );
}
