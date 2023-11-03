import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-bg text-colour fixed-top" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/UserHomepage"><img src={logo} alt="" style={{ width: "70px", height: "55px" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-center" aria-current="page" to="/UserHomepage" style={{ color: "#FFF", fontSize: "24px" }}>HomeCertify</Link>
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
                                <Link className="nav-link" to="/" style={{ color: "#FFF", fontSize: "16px" }} >Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar