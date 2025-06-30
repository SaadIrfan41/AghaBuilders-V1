import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class RendezvousXpress extends React.Component {
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
                <Banner title="Rendezvous Xpress – The Centaurus Transformation" pagename="Rendezvous Xpress" bgimage={bnrimg}/>
                    
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
                                                        <p>2017</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Rendezvous Xpress</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Renovation, Interior - Exterior</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>4th Jinnah Avenue, Centaurus, Islamabad</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    {/* Replace video thumbnail and play button with a static image */}
                                                    <img
                                                        src={require('./../../images/projects/portrait/RendezvousXpress/Pic11.jpg')}
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
                                        <h3 className="font-weight-600">Centaurus' Crowd Favorite: Engineering a Café for the Future</h3>
                                        <p>
                                            <em>
                                                Tasked with revitalizing this popular Centaurus establishment, we delivered a full renovation that honored its legacy while infusing contemporary flair. The 20-month transformation balanced operational upgrades with aesthetic reinvention.
                                            </em>
                                        </p>
                                        <ul>
                                            <li>✔ Structural Reconfiguration – Improved kitchen workflow and customer circulation</li>
                                            <li>✔ Material Modernization – Replaced worn surfaces with durable, stylish alternatives</li>
                                            <li>✔ Brand-Aligned Design – Color schemes and textures reflecting Rendezvous' identity</li>
                                            <li>✔ Minimal Business Disruption – Phased construction allowing partial operation</li>
                                        </ul>
                                        <em>
                                            <span style={{
                                                display: 'block',
                                                background: '#f8f9fa',
                                                color: '#222',
                                                borderLeft: '4px solid rgb(230, 83, 20)',
                                                padding: '24px 40px',
                                                margin: '18px 0',
                                                fontStyle: 'italic',
                                                fontWeight: 500,
                                                borderRadius: 6
                                            }}>
                                                "Where every rebuilt booth and rewired circuit served the same goal – an enhanced guest experience."
                                            </span>
                                        </em>
                                        <h4 className="font-weight-600" style={{marginTop: 32}}>Signature Challenges Overcome</h4>
                                        <p>
                                            This project presented unique demands our team expertly navigated:
                                        </p>
                                        <ul>
                                            <li>✔ Mall Regulations Compliance – Strict after-hours work windows and noise controls</li>
                                            <li>✔ Heritage Element Preservation – Maintaining the café's iconic stained-glass feature</li>
                                            <li>✔ HVAC Reengineering – New ventilation resolving longstanding temperature issues</li>
                                        </ul>
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

export default RendezvousXpress;