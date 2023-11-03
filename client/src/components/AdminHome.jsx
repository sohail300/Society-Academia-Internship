import Arrow from '../images/Arrow.svg';
import homepng from '../images/home.png'
import { useNavigate } from 'react-router-dom';

export default function AdminHome() {
  const navigate = useNavigate();

  const homeBtnStyle = {
    margin: '0 auto',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    width: '32vw',
    marginBottom: '16px',
    borderRadius: '15px',
    boxShadow: '1.5px 1.5px 1.5px 0px rgba(0, 0, 0, 0.25), 7.5px 7.5px 10.5px 0px rgba(0, 0, 0, 0.25), -1.2px -1.5px 1.5px 0px rgba(255, 255, 255, 0.85), -6px -6px 7.5px 0px rgba(255, 255, 255, 0.15)'
  };

  return (
    <>
      <div style={{ height: "10vh", background: "#000" }}>

      </div>
      <div className='component-box' style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", margin: "40px 0px" }}>
        <div>

          {/* <h1 style={{ textAlign: "center" }}>Housing Plan Approval Portal</h1> */}
          <br />

          <div className='home-btn' style={{ ...homeBtnStyle, backgroundColor: "#92DAFF" }} onClick={() => navigate('/checkmap')}  >
            <h3 style={{ marginLeft: "4vh", textAlign: "left", margin: "auto 2vw", fontSize: "1.5rem" }}>CHECK MAP</h3>
            <img src={Arrow} alt="" />
          </div>
          <div className='home-btn' style={{ ...homeBtnStyle, backgroundColor: "#FF7E7E" }} onClick={() => navigate('/pastmap')}>
            <h3 style={{ marginLeft: "4vh", textAlign: "left", margin: "auto 2vw", fontSize: "1.5rem" }}>PAST UPLOADS</h3>
            <img src={Arrow} alt="" />
          </div>
        </div>
        <img src={homepng} alt="" height="480px" style={{ mixBlendMode: "" }} />
      </div>

    </>
  );
}

