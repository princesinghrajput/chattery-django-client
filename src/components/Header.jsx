import React from 'react';
import '../App.css'; // Assuming your CSS is in App.css

const Header = () => {
    return (
        <div className="header">
            <div>
                <span><b>Chatterly</b></span>
                <div className="chat">
                    <i className="fas fa-comment-dots"></i>
                </div>
            </div>
            <div className="profile">
                <div className="photo">
                    <img src="./image/profile n.jpg" alt="Profile" width="30" height="30" style={{ borderRadius: '30px' }} />
                </div>
                <select value="name">
                    <option>Nisha Dhanda</option>
                    <option>Login In</option>
                    <option>Login Out</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
