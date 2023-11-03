import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function EditProfile() {
    const navigate = useNavigate();
    const location = useLocation();
    const [fullName, setFullName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState(null); // Define error state

    useEffect(() => {
        // Retrieve the selectedImage from the location state
        if (location.state && location.state.selectedImage) {
            setSelectedImage(location.state.selectedImage);
        }

        // Retrieve fullName and mobileNumber from local storage
        const storedFullName = localStorage.getItem('fullName');
        const storedMobileNumber = localStorage.getItem('mobileNumber');

        if (storedFullName && storedMobileNumber) {
            setFullName(storedFullName);
            setMobileNumber(storedMobileNumber);
        }
    }, [location.state]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const nameRegex = /^[A-Za-z\s]+$/; // Regex for valid name (only letters and spaces)
        // const mobileRegex = /^[0-9]{10}$/; // Regex for valid 10-digit mobile number

        if (!nameRegex.test(fullName)) {
            setError('Please enter a valid name.');
            return;
        }
        //  else if (!mobileRegex.test(mobileNumber)) {
        //     setError('Please enter a valid 10-digit mobile number.');
        //     return;
        // } else if (/[^0-9]/.test(mobileNumber)) {
        //     setError('Mobile number should contain only digits.');
        //     return;
        // }

        setError(null); // Clear error on success
        // Your form submission logic here

        // Reset input values
        setFullName('');
        // setMobileNumber('');

        // Store updated values in local storage
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('mobileNumber', mobileNumber);
        navigate('/Profile');
    };

    // Determine if the "Update" button should be disabled based on input values
    const isButtonDisabled = !fullName || error;

    return (
        <div style={{ backgroundColor: "#EEEEEE", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar fullName={fullName} mobileNumber={mobileNumber} selectedImage={selectedImage} />
            <div className="container" style={{ marginLeft: "40%", marginTop: "10%" }}>
                <table className="table table-borderless" style={{ width: "60%", background: "#EEEEEE" }}>
                    <tbody>
                        <tr>
                            <td className='profile-options' style={{ background: "#EEEEEE" }} > Full Name</td>
                        </tr>
                        <div className="input-group flex-nowrap">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Full Name"
                                aria-label="Username"
                                aria-describedby="addon-wrapping"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        
                        <button
                            type="button"
                            className="btn "
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            style={{ background: "#12AB69", borderRadius: "10% 20%", border: "none", color: "#FFFFFF", margin: "5% auto", display: "block", padding: "1%", width: "20%", fontSize: "15px" }}
                            onClick={handleUpdate}
                            disabled={isButtonDisabled}
                        >
                            Update
                        </button>
                        {error && <p className="text-danger">{error}</p>}
                        {error === null && ( // Only show the modal when there are no errors
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header" style={{ background: "#4bdb9d" }}>
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Updated.</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Your details have been updated Successfully.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                                // onClick={handleSubmit}
                                            >Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
