import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return ( 
        <div className="landContainer">
            <Link to="/login" className="item">
                <button className="ui button primary">Login</button>
            </Link>
            <span> OR </span>
            <Link to="/register" className="item">
                <button className="ui button primary">Register</button>
            </Link>
        </div>
    );
}

export default LandingPage;