import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class SupremeCourtPakistan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomedImg: null
        };
    }

    handleImgClick = (imgSrc) => {
        this.setState({ zoomedImg: imgSrc });
    };

    handleZoomClose = () => {
        this.setState({ zoomedImg: null });
    };

    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Restoring the Temple of Justice" pagename="SupremeCourtPakistan" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="project-detail-outer">
                                <div className="m-b30">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-block">
                                                <div className="row">
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Timeline</h4>
                                                        <p>2007-2009</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>MES, SCP</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Renovation, Installations</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>Constitution Ave, G-5/2 Red Zone, Islamabad</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    {/* Replace video thumbnail and play button with a static image */}
                                                    <img
                                                        src={require('./../../images/projects/Supremecourt.jpg')}
                                                        alt="Supreme Court Pakistan"
                                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-detail-containt">
                                    <div className="bg-white text-black">
                                        <h3 className="font-weight-600">Adal - The Restoration of Pakistan's Supreme Court</h3>
                                        <p>
                                            <em>
                                                In 2007, we were entrusted with a singular honor: The sensitive renovation of Pakistan's highest temple of justice. This transformation balanced reverence for the Court's neoclassical grandeur with discreet modernization of its functioning heart. From painstakingly restoring original teak paneling in the Chief Justice's chambers to installing the monumental Tarazo-e-Adl in the central atrium, every decision carried the weight of history. The project culminated with the unveiling of a new Lady Justice statue on Constitution Day - a symbolic guardian for the building's second century of service. More than brick and mortar, this was the careful stewardship of Pakistan's judicial legacy.
                                            </em>
                                        </p>
                                        <strong>Project Highlights</strong>
                                        <ul>
                                            <li>
                                                <b>✔ Historic Courthouse Restoration</b>
                                                <ul>
                                                    <li>Preserved the architectural integrity while modernizing facilities</li>
                                                    <li>Upgraded courtrooms with improved acoustics and lighting</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <b>✔ Installation of Justice Scales (Tarazo-e-Adl)</b>
                                                <ul>
                                                    <li>Designed and placed the iconic bronze scales of justice</li>
                                                    <li>Symbolizes the court's enduring commitment to fairness</li>
                                                </ul>
                                            </li>
                                            
                                            <li>
                                                <b>✔ Structural Enhancements</b>
                                                <ul>
                                                    <li>Strengthened foundations for seismic safety</li>
                                                    <li>Restored original stonework and wood paneling</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <strong>Why This Project Mattered</strong>
                                        <p>
                                            "Honored to contribute to Pakistan's highest judicial institution, blending heritage preservation with functional upgrades. Our work restored not just a building, but a symbol of the nation's justice system."
                                        </p>
                                        <div className="m-b0">
                                            <div className="mt-divider divider-1px  bg-black"><i className="icon-dot c-square" /></div>
                                        </div>
                                        <ul className="social-icons social-square social-darkest m-b0">
                                           <li>
        						<a href="mailto:info@aghabuilders.com" className="fa fa-google" target="_blank" rel="noopener noreferrer">
    						<span className="sr-only">Email info@aghabuilders.com</span>
    						</a>
    						</li>
    <li>
        <a href="https://www.instagram.com/aghabuildersofficial/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Instagram aghabuildersofficial</span>
        </a>
    </li>
    <li>
        <a href="https://www.facebook.com/aghabuildersofficial" className="fa fa-facebook" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">Facebook aghabuildersofficial</span>
        </a>
    </li>
    <li>
        <a href="https://www.youtube.com/@aghabuildersofficial" className="fa fa-youtube" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">YouTube aghabuildersofficial</span>
        </a>
    </li>
    <li>
        <a href="https://www.linkedin.com/company/agha-builders" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer">
            <span className="sr-only">LinkedIn agha-builders</span>
        </a>
    </li>
    

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END  */}
                    <SimilarProjects/>
                </div>

                {/* Image Zoom Modal */}
                {this.state.zoomedImg && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.8)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000
                        }}
                        onClick={this.handleZoomClose}
                    >
                        <img
                            src={this.state.zoomedImg}
                            alt="Zoomed"
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                boxShadow: '0 0 20px #000',
                                background: '#fff',
                                borderRadius: 8
                            }}
                            onClick={e => e.stopPropagation()}
                        />
                        <button
                            onClick={this.handleZoomClose}
                            style={{
                                position: 'absolute',
                                top: 30,
                                right: 40,
                                fontSize: 32,
                                color: '#fff',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>
                )}

                {/* <div className="modal fade" id="myModal3" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://www.youtube.com/watch?v=s3A7AK1K2hc' />
                        </div>
                    </div>
                </div> */}

                <Footer />
            </>
        );
    };
};

export default SupremeCourtPakistan;