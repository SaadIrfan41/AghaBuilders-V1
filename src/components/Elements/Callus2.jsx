import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-10.jpg');

class Callus2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-tb80 overlay-wraper bg-center bg-parallax bg-cover" data-stellar-background-ratio="0.5" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="overlay-main bg-black opacity-07" />
                    <div className="container">
                        <div className="section-content">
                            <div className="call-us-section text-center text-white">
                                <h4 className="m-b15">Let's work together</h4>
                                <h2 className="call-us-number m-b15 m-b0">+92 334 2224202</h2>
                                <h4 className="call-us-address m-t0 m-b20">Plaza 232, Nadir Rd, Bahria P7, Intellectual Village, Rawalpindi</h4>
                                <NavLink to="/contactus" className="site-button-secondry btn-effect active">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Callus2;