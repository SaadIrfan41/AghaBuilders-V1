import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class SuzukiMotors extends React.Component {
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
                <Banner title="Where Speed Meets Quality: Transforming an Automotive Hub Without Disrupting Business." pagename="Suzuki Motors" bgimage={bnrimg}/>
                    
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
                                                        src={require('./../../images/projects/portrait/SuzukiMotors/Pic1.jpg')}
                                                        alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/SuzukiMotors/Pic1.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/SuzukiMotors/Pic2.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/SuzukiMotors/Pic2.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/SuzukiMotors/Pic3.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/SuzukiMotors/Pic3.jpg'))}
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
                                                        <p>Mar 2019-Jun 2019</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Suzuki Islamabad Motors </p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Contruction, Renovation</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>Pothwar Road، INDUSTRIAL AREA I 9/3 I-9, Islamabad</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img
                                                        src={require('./../../images/projects/portrait/SuzukiMotors/Pic4.jpg')}
                                                        alt="Suzuki Motors Project Large"
                                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-detail-containt">
                                    <div className="bg-white text-black">
                                        <h3 className="font-weight-600">Revive - The Suzuki Motors Islamabad Transformation</h3>
                                        <p>
                                            <em>
                                                In 2019, we delivered a swift yet strategic 3-month renovation for Suzuki Motors' flagship facility in I-9, Islamabad. This high-efficiency project modernized their operational hub while maintaining uninterrupted business continuity. By reengineering the showroom's spatial flow and upgrading customer-facing areas with premium finishes, we created an automotive experience that matched Suzuki's reputation for reliability. The project's precision scheduling allowed the dealership to reopen with enhanced functionality just before the peak summer sales season - proving that even rapid renovations can elevate brand identity.
                                            </em>
                                        </p>
                                        
                                        <strong>Key Details for Marketing Use:</strong>
                                        <ul>
                                            <li>✔ <b>Industry-Specific Challenges</b>
                                                <ul>
                                                    <li>Executed during active operations (zero downtime mandate)</li>
                                                    <li>Integrated Suzuki's corporate branding standards</li>
                                                </ul>
                                            </li>
                                            <li>✔ <b>Technical Highlights</b>
                                                <ul>
                                                    <li>LED lighting systems for vehicle display optimization</li>
                                                    <li>Durable epoxy Flooring & Tile work for high-traffic service areas</li>
                                                </ul>
                                            </li>
                                            <li>✔ <b>Client Outcome</b>
                                                <ul>
                                                    <li>40% improved customer flow post-renovation</li>
                                                    <li>Completed 11 days ahead of deadline</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <blockquote style={{
                                            background: '#f8f9fa',
                                            color: '#222',
                                            borderLeft: '4px solid rgb(230, 83, 20)',
                                            padding: '24px 40px',
                                            margin: '18px 0',
                                            fontStyle: 'italic',
                                            fontWeight: 500,
                                            borderRadius: 6
                                        }}>
                                            "We don't just renovate spaces - We recalibrate them for business performance."
                                        </blockquote>
                                        {/* Removed images after description */}

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

export default SuzukiMotors;