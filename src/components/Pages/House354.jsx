import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class House354  extends React.Component {
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
                <Banner title="Light, Stone & Grain: A Trilogy of Luxury Finishes" pagename="House 354" bgimage={bnrimg}/>
                    
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
                                                        src={require('./../../images/projects/portrait/House354/pic10.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic10.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/House354/pic2.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic2.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/House354/pic3.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic3.jpg'))}
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
                                                        <p>2024-2025</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Dr Farhat Abbas Bhatti</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Construction, Interior, Exterior, Finishing</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>House 354, Intellectual Village, Bahria Town Phase 07, RWP</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img
                                                        src={require('./../../images/projects/portrait/House354/pic1.jpg')}
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
                                        <h3 className="font-weight-600">Luxury Residence Construction – A Holistic Approach</h3>
                                        <p>
                                            This project begins with a robust structural framework designed for longevity and safety. The foundation is carefully engineered to support the entire residence, incorporating modern techniques to ensure stability in all conditions. The construction phase emphasizes:
                                        </p>
                                        <ol style={{paddingLeft: 0}}>
                                            <li style={{marginTop: 32}}>
                                                <b style={{display: 'block', marginBottom: 8}}>Structural Framework &amp; Basement Development</b>
                                                <ul>
                                                    <li>
                                                        Comprehensive basement construction covering 50% of the building footprint, featuring:
                                                        <ul>
                                                            <li>Advanced waterproofing systems with triple-layer membrane protection and perimeter French drains to ensure complete moisture control</li>
                                                            <li>Structurally reinforced concrete walls and columns designed to support potential future vertical expansions</li>
                                                            <li>Strategically planned utility zones housing HVAC systems, electrical panels, and smart home infrastructure for easy maintenance access</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Above-ground structural elements incorporating:
                                                        <ul>
                                                            <li>Earthquake-resistant engineering with seismic joints and reinforced shear walls built to Zone-4 safety standards</li>
                                                            <li>Premium red meranti wood used for both structural supports and decorative exposed beams, treated for humidity resistance</li>
                                                            <li>Pre-planned conduit pathways throughout walls and floors for seamless MEP system integration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li style={{marginTop: 32}}>
                                                <b style={{display: 'block', marginBottom: 8}}>Premium Interior Finishes</b>
                                                <ul>
                                                    <li>
                                                        Flooring and wall surfaces featuring:
                                                        <ul>
                                                            <li>Oversized Italian ceramic tiles (1200x2400mm) with rectified edges for near-seamless installation</li>
                                                            <li>Anti-slip textured finishes in wet areas combined with radiant heating systems beneath bathroom floors</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Luxury bathroom installations including:
                                                        <ul>
                                                            <li>Grohe concealed thermostatic mixer showers with smart temperature memory functions</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Custom woodwork details comprising:
                                                        <ul>
                                                            <li>Solid red meranti built-in cabinetry with soft-close Blum hardware and integrated LED lighting</li>
                                                            <li>Architectural millwork including coffered ceilings, wainscoting, and custom-designed door casings</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li style={{marginTop: 32}}>
                                                <b style={{display: 'block', marginBottom: 8}}>High-Performance Systems</b>
                                                <ul>
                                                    <li>
                                                        Gourmet kitchen systems with:
                                                        <ul>
                                                            <li>Fotile telescopic downdraft exhaust systems capable of 900m³/hr air extraction</li>
                                                            <li>Induction hobs with automatic pan detection and child safety lock features</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Electrical infrastructure featuring:
                                                        <ul>
                                                            <li>Fiam industrial-grade wiring with dedicated circuits for high-load appliances</li>
                                                            <li>Future-proofed smart home conduits with access points for home automation upgrades</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Sustainable energy solutions incorporating:
                                                        <ul>
                                                            <li>15kW solar array with micro-inverters for optimized energy harvesting</li>
                                                            <li>15kWh lithium-ion battery wall for off-grid backup capability</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li style={{marginTop: 32}}>
                                                <b style={{display: 'block', marginBottom: 8}}>Exterior &amp; Landscape Integration</b>
                                                <ul>
                                                    <li>
                                                        Durable exterior cladding using:
                                                        <ul>
                                                            <li>Composite rain-screen panels with hidden fastener systems</li>
                                                            <li>Natural stone veneer accents at entryways</li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        Functional landscaping including:
                                                        <ul>
                                                            <li>Permeable paving systems with underground drainage</li>
                                                            <li>Drought-resistant native plantings with automated irrigation zones</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                        
                                        <div className="row" style={{margin: "30px 0"}}>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House354/pic4.jpg')}
                                                            alt="Luxury Detail 1"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic4.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House354/pic5.jpg')}
                                                            alt="Luxury Detail 2"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic5.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House354/pic6.jpg')}
                                                            alt="Luxury Detail 3"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic6.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{margin: "32px 0"}}>
                                            <b>Project Highlights Summary:</b>
                                            <ul>
                                                <li>✔ Comprehensive luxury build from substructure to final finishes</li>
                                                <li>✔ Engineered basement solutions maximizing usable square footage</li>
                                                <li>✔ Premium material selections from leading global brands</li>
                                                <li>✔ Smart home readiness with sustainable energy independence</li>
                                            </ul>
                                            <b>Current Progress (Q3 2024):</b>
                                            <ul>
                                                <li>Interior tile work 80% complete</li>
                                                <li>Custom millwork in fabrication phase</li>
                                                <li>Solar system installation commencing</li>
                                            </ul>
                                        </div>
                                        <div className="row" style={{margin: "30px 0"}}>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House354/pic7.jpg')}
                                                            alt="Portfolio Gold 1"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic7.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House354/pic8.jpg')}
                                                            alt="Portfolio Gold 2"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic8.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b30">
                                                <div className="project-detail-pic">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/House354/pic9.jpg')}
                                                            alt="Portfolio Gold 3"
                                                            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/House354/pic9.jpg'))}
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
                                                <a href="mailto:aghabuildersofficial@gmail.com" className="fa fa-google" target="_blank" rel="noopener noreferrer">
                                                    <span className="sr-only">Email aghabuildersofficial@gmail.com</span>
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

export default House354 ;