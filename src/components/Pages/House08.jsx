import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class House08  extends React.Component {
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
                <Banner title="Light, Stone & Grain: A Trilogy of Luxury Finishes" pagename="House 08" bgimage={bnrimg}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="project-detail-outer">
                                <div className="m-b0">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/House08/pic1.jpg')}
                                                        alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic1.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/House08/pic2.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic2.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/House08/pic3.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic3.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="m-b30">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-block">
                                                <div className="row">
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Timeline</h4>
                                                        <p>2023-2024</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Non Disclosed</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Tile Work, Wood Work, Finishing</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>House 08, Bahria Town, Islamabad</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img
                                                        src={require('./../../images/projects/portrait/House08/pic8.jpg')}
                                                        alt="Plaza 232 Front View"
                                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-detail-containt">
                                    <div className="bg-white text-black">
                                        <h3 className="font-weight-600">The Artisan Residence – Luxury Material Mastery</h3>
                                        <p>
                                            <em>
                                                This residence became a laboratory of luxury, where Italian design met Pakistani craftsmanship. Over 14 months, we executed millimeter-perfect installations of:
                                            </em>
                                        </p>
                                        <strong>✔ Statement Surfaces</strong>
                                        <ul>
                                            <li>1200x2400mm Versace Medusa marble-look porcelain tiles (seamless book-matched patterns)</li>
                                            <li>Pre-heated solid wood doors with humidity-responsive core (zero seasonal warping)</li>
                                            <li>Custom parquet inlays using teak, walnut and rosewood</li>
                                        </ul>
                                        <strong>✔ Architectural Jewelry</strong>
                                        <ul>
                                            <li>Hand-chamfered tile edges for shadow-line detailing</li>
                                            <li>Concealed LED cove lighting enhancing material textures</li>
                                            <li>Laser-leveled substrate preparation (0.5mm variance tolerance)</li>
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
                                                "Where even the grout lines became design elements."
                                            </span>
                                        </em>
                                        {/* 3 images before Technical Triumphs */}
                                        <div className="row" style={{margin: "30px 0"}}>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House08/pic4.jpg')}
                                                            alt="Luxury Detail 1"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic4.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House08/pic5.jpg')}
                                                            alt="Luxury Detail 2"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic5.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House08/pic6.jpg')}
                                                            alt="Luxury Detail 3"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic6.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="font-weight-600" style={{marginTop: 32}}>Technical Triumphs</h4>
                                        <p>Solutions for Pakistan's climate and lifestyle demands:</p>
                                        <strong>✔ Climate-Adaptive Framework</strong>
                                        <ul>
                                            <li>Expansion-compensating tile underlayment system</li>
                                            <li>Kiln-dried joinery (8% moisture content stabilized)</li>
                                        </ul>
                                        <strong>✔ Design-Integrated Functionality</strong>
                                        <ul>
                                            <li>Anti-fog bathroom mirrors with hidden heating elements</li>
                                            <li>Acoustic-backed wall panels disguised as art installations</li>
                                        </ul>
                                        <strong>✔ Material Sourcing</strong>
                                        <ul>
                                            <li>Direct Versace Ceramics import from Italy (certified installer status)</li>
                                            <li>Reclaimed deodar beams repurposed as floating shelves</li>
                                        </ul>
                                        <h4 className="font-weight-600" style={{marginTop: 32}}>Portfolio Gold:</h4>
                                        <ul>
                                            <li>Brand Partnerships (Versace Certified Installer badge)</li>
                                            <li>Micro-Detailing (0.2mm laser-aligned tile spacing)</li>
                                            <li>Hidden Tech (Pre-wired for future home automation)</li>
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
                                                "Not just surfaces – engineered environments."
                                            </span>
                                        </em>
                                        {/* 3 images at the bottom */}
                                        <div className="row" style={{margin: "30px 0"}}>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House08/pic7.jpg')}
                                                            alt="Portfolio Gold 1"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic7.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House08/pic9.jpg')}
                                                            alt="Portfolio Gold 2"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic9.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House08/pic10.jpg')}
                                                            alt="Portfolio Gold 3"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House08/pic10.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

                <Footer />
            </>
        );
    };
};

export default House08 ;