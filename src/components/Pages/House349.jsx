import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class House349 extends React.Component {
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
                <Banner title="Helping you and your house become better acquainted." pagename="House349" bgimage={bnrimg}/>
                    
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
                                                        src={require('./../../images/projects/portrait/349/House349a.jpg')}
                                                        alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/349/House349a.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/349/House349b.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/349/House349b.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/349/House349c.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/349/House349c.jpg'))}
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
                                                        <p>2014-2015, 2023-2024</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Dr. Farahat Abbas Bhatti</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Contruction, Renovation</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>Intellectual Village - Bahria Town Phase 7, RWP</p>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    {/* Video replaced with image */}
                                                    <img
                                                        src={require('./../../images/projects/portrait/349/pic2.jpg')}
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
                                        <h3 className="font-weight-600">Project Journey: The Farahat Residence</h3>
                                        <p>
                                        This landmark project represents our philosophy in built form - where exceptional initial construction meets thoughtful, future-ready renovation. From its groundbreaking in 2014 to its meticulous 2023 transformation, the residence stands as proof that true quality evolves gracefully with time.

What began as a custom-built dream home matured into a case study of how spaces can be reinvented while honoring their original character. Nearly a decade after our first collaboration, we were privileged to return and enhance what we'd created - a rare opportunity that few construction firms experience with their clients.
                                        </p>
                                        <strong>Phase 1: Original Construction (2014-2015)</strong>
                                        <ul>
                                            <li>Built a custom-designed residence from the ground up</li>
                                            <li>Created functional spaces tailored to the family's lifestyle</li>
                                            <li>Established strong structural foundations</li>
                                            <li>Incorporated traditional design elements</li>
                                            <li>Used quality materials throughout</li>
                                        </ul>
                                        <strong>Phase 2: Comprehensive Renovation (2022-2023)</strong>
                                        <ul>
                                            <li>Preserved the home's original character while modernizing systems</li>
                                            <li>Upgraded safety features to current standards</li>
                                            <li>Improved energy efficiency throughout the property</li>
                                            <li>Integrated modern technology discreetly</li>
                                            <li>Enhanced natural lighting in key areas</li>
                                            <li>Carefully restored original architectural details</li>
                                        </ul>
                                        <strong>Key Project Highlights</strong>
                                        <ul>
                                            <li>✔ Long-term partnership – Serving the same client across nearly a decade</li>
                                            <li>✔ Seamless integration – Blending old and new elements harmoniously</li>
                                            <li>✔ Quality craftsmanship – Maintaining high standards in both construction phases</li>
                                            <li>✔ Client-focused approach – Adapting to evolving needs over time</li>
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
                                                "They understood our vision in 2014 and helped it evolve in 2023 - always respecting what made this house our home." <br /> – Dr. Farahat Abbas Bhatti
                                            
                                            </span>
                                        </em>
                                        {/* Added images after description */}
                                        <div className="row" style={{ marginBottom: 30 }}>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/349/pic1.jpg')}
                                                            alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/349/pic1.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/349/House349e.jpg')}
                                                            alt=""
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/349/House349e.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/349/House349f.jpg')}
                                                            alt=""
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/349/House349f.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End added images */}

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

export default House349;