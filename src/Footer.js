import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Link to="/about" className="footer-link">About Us</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/contact" className="footer-link">Contact</Link>
                    </div>
                    <div className="col-4">
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
