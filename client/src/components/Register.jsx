import React from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();

  const flexStyle={
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    margin:"8px"
  }
  return (
        <div className="center-reg">
          <h1>Register</h1>
          <form method="post" onSubmit={(e) => {}}>
          <div style={flexStyle}>
            <div className="txt_field">
              <input type="text" required />
              <label>Name</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <label>Mobile Number</label>
            </div>
          </div>
          <div style={flexStyle}>
            <div className="txt_field">
              <input type="text" required />
              <label>Aadhar Number</label>
            </div>
            <div className="txt_field">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="txt_field">
              <input type="password" required />
              <label>Confirm Password</label>
            </div>
          </div>
          <div style={flexStyle}>
            <div className="txt_field">
              <input type="text" required />
              <label>Address</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <label>District</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <label>State</label>
            </div>
            <div className="txt_field">
              <input type="text" required />
              <label>Pin Code</label>
            </div>
          </div>
            <input type="submit" value="Register" id="reg-btn"/>
            <div className="signup_link-reg">
              Already signed up? <span style={{textDecoration:"underline", color:"#3299de", cursor:"pointer"}} onClick={()=> navigate('/loginuser')}>Login</span>
            </div>
          </form>
        </div>
  );
};

export default Login;
