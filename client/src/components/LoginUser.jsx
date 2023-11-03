import React from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const LoginUser = () => {
  const navigate=useNavigate();

  return (
        <div className="center">
          <h1>Login</h1>
          <form method="post" onSubmit={(e) => {}}>
            <div className="txt_field">
              <input type="text" required />
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="Login" />
            <div className="signup_link">
              Haven't signed up yet? <span style={{textDecoration:"underline", color:"#3299de", cursor:"pointer"}} onClick={()=> navigate('/register')}>Register</span>
              
            </div>
          </form>
        </div>
  );
};

export default LoginUser;
