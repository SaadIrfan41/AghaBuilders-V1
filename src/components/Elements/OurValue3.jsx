import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/background/bg-4.png');
var img2 = require('./../../images/background/bg-site.png');

class OurValue3 extends React.Component {
    
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray bg-no-repeat bg-bottom-right mobile-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-md-7 col-sm-6  m-b30">
                                    <div className="brochur bg-dark p-a20">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p-a30 bg-primary bg-bottom-right" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                                    <div className="text-black">
                                                        <h4 className="mt-tilte m-t0">Brochure</h4>
                                                        <p>Download our detailed brochure to discover how we deliver exceptional results across every phase of construction. </p>
                                                        <NavLink to="#" className="site-button-secondry btn-half"><span> Download brochure</span></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="text-white p-r15">
                                                    <h4 className="mt-tilte">Let's help you!</h4>
                                                    <p>Every project comes with its own complexities—let us craft custom solutions tailored to your specific needs. Whether you're facing structural hurdles, tight deadlines, or budget constraints, our team turn obstacles into opportunities.</p>
                                                    <NavLink to="/ContactUs" className="site-button btn-effect">Contact Us</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6 m-b30">
                                    <div className="our-exp">
                                      
                                        <div style={{ textAlign: 'center' }}>
                                            <img
                                                
                                                src={require('./../../images/projects/Supremecourt1.jpg')}
                                                alt="Our Experience"
                                                style={{ maxWidth: 'auto', height: 'auto', }}
                                            />
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

export default OurValue3;