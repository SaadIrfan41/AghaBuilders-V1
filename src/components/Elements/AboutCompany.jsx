import React from 'react';
import { NavLink } from 'react-router-dom';

class AboutCompany extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 bg-white">
                    <div className="container">
                        <div className="section-content ">
                            <div className="m-service-containt text-black">
                                <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                        <div className="service-about-left">
                                            <div className="mt-media">
                                                <img src={require('./../../images/s-1.png')} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-sm-12">
                                        <div className="service-about-right m-b30">
                                            <h3 className="m-t0">Precision isn’t just our promise—it’s in every brick we lay. </h3>
                                            <p>We don’t just build structures; we craft legacies with uncompromising quality that stands the test of time. When others cut corners, we double down on excellence. Because your project isn’t just another job—it’s a testament to what happens when expertise meets relentless standards. This isn’t construction. This is Agha Builders. <br />
                                            From blueprint to final finish, we sweat the details so you don’t have to. Our builds don’t just meet codes—they set new benchmarks. Because when quality is non-negotiable, only Agha Builders delivers.
                                            </p>
                                            <div className="call-for-quote-outer">
                                                <div className="call-quote text-white">
                                                    <span>Call For a Quote:</span>
                                                    <h4>+92 334 2224202</h4>
                                                </div>
                                                <div className="call-estimate bg-dark">
                                                <NavLink to={"#"} className="site-button-secondry btn-effect"> <b>Download Profile</b></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </>
        );
    }
};

export default AboutCompany;