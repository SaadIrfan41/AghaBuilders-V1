import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class SikaInstallations extends React.Component {
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
                <Banner title="Sika x Agha Builders: Building with Chemistry" pagename="Sika" bgimage={bnrimg}/>
                    
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
                                                        src={require('./../../images/projects/portrait/Sika/pic1.jpg')}
                                                        alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/Sika/pic1.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/Sika/pic3.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/Sika/pic3.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/Sika/pic2.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/Sika/pic2.jpg'))}
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
                                                        <p>2023-2025</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Sika Pakistan</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Specialty Contract</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>Punjab, Pakistan</p>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    {/* Video replaced with image */}
                                                    <img
                                                        src={require('./../../images/projects/portrait/Sika/pic4.jpg')}
                                                        alt="House 349 Large"
                                                        style={{
                                                            width: '100%',
                                                            height: '350px',
                                                            objectFit: 'cover',
                                                            borderRadius: '8px'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-detail-containt">
                                    <div className="bg-white text-black">
                                        <h3 className="font-weight-600">Precision Repairs with Sika Technologies</h3>
                                        <p>As a trusted partner of Sika Pakistan – a global leader in construction chemicals and material solutions – we delivered specialized repair and installation services using their high-performance systems. This unique collaboration combined Sika's cutting-edge technologies with our on-ground expertise, resulting in durable, brand-certified outcomes for commercial and infrastructure projects. From waterproofing to structural reinforcement, each task adhered to Sika's stringent global standards, while also generating co-branded technical content to showcase real-world applications in Pakistan's construction landscape.</p>
                                        <strong>Key Achievements</strong>
                                        <ul>
                                            <li>✔ Brand-Integrated Deliverables – Executed repairs and installations while aligning with Sika's global quality standards, creating marketable case studies for their regional portfolio.</li>
                                            <li>✔ Technical Precision – Applied Sika's proprietary materials (e.g., Sikadur, Sikafloor) in number of commercial/residential sites.</li>
                                            <li>✔ Collaborative Content – Co-produced technical guides and video testimonials showcasing applied solutions, amplifying Sika's local expertise.</li>
                                        </ul>
                                      
                                        
                                          <strong>Why This Mattered</strong>
                                        <p>
                                            This partnership elevated our profile as a trusted executor for international brands in Pakistan, combining Sika's cutting-edge materials with our on-ground craftsmanship.
                                        </p>
                                        {/* End added images */}

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

export default SikaInstallations;