import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';

var bnrimg = require('./../../images/banner/5.jpg');

class CHElectronics extends React.Component {
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
                <Banner title="Light, Stone & Grain: A Trilogy of Luxury Finishes" pagename="Chaudary Electronics" bgimage={bnrimg}/>
                    
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
                                                        src={require('./../../images/projects/portrait/CHElectronic/pic1.jpg')}
                                                        alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/CHElectronic/pic1.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/CHElectronic/pic2.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/CHElectronic/pic2.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/CHElectronic/pic3.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/CHElectronic/pic3.jpg'))}
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
                                                        <p>2025-On Going</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Mr.Moeed - Owner Ch.Electronics Rwp </p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Tile Work, Finishing</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>Opposite, Punjab Food Authority Building, Rawalpindi </p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img
                                                        src={require('./../../images/projects/portrait/CHElectronic/pic7.jpg')}
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
                                        <h3 className="font-weight-600">The Moeed Residence – Contemporary Elegance Under Construction</h3>
                                        <p>
                                            This ongoing residential project involves the careful construction of a custom-designed home tailored to the client's lifestyle. Focused on quality finishes and thoughtful layouts, the residence balances comfort with elegant design.
                                        </p>
                                        <ul>
                                            <li>✔ <b>Premium Tile Work</b> – High-quality finishes throughout living spaces</li>
                                            <li>✔ <b>Custom Interiors</b> – Designed to reflect the owner's taste</li>
                                            <li>✔ <b>Attention to Detail</b> – Seamless integration of functional elements</li>
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
                                            "A home designed to evolve with its family."
                                        </blockquote>
                                        <h4 className="font-weight-600">Key Priorities</h4>
                                        <ul>
                                            <li>✔ <b>Comfort & Functionality</b> – Spaces built for daily living</li>
                                            <li>✔ <b>Durable Materials</b> – Long-lasting finishes suited to local conditions</li>
                                            <li>✔ <b>Timely Progress</b> – Steady construction while maintaining quality</li>
                                        </ul>
                                        {/* Added three pictures at bottom */}
                                        <div className="row m-t30 m-b30">
                                            <div className="col-md-4 col-sm-4 m-b20">
                                                <img
                                                    src={require('./../../images/projects/portrait/CHElectronic/pic4.jpg')}
                                                    alt="Project View 1"
                                                    style={{ width: '100%', borderRadius: 8, objectFit: 'cover', cursor: 'zoom-in' }}
                                                    onClick={() => this.handleImgClick(require('./../../images/projects/portrait/CHElectronic/pic4.jpg'))}
                                                />
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b20">
                                                <img
                                                    src={require('./../../images/projects/portrait/CHElectronic/pic5.jpg')}
                                                    alt="Project View 2"
                                                    style={{ width: '100%', borderRadius: 8, objectFit: 'cover', cursor: 'zoom-in' }}
                                                    onClick={() => this.handleImgClick(require('./../../images/projects/portrait/CHElectronic/pic5.jpg'))}
                                                />
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-b20">
                                                <img
                                                    src={require('./../../images/projects/portrait/CHElectronic/pic6.jpg')}
                                                    alt="Project View 3"
                                                    style={{ width: '100%', borderRadius: 8, objectFit: 'cover', cursor: 'zoom-in' }}
                                                    onClick={() => this.handleImgClick(require('./../../images/projects/portrait/CHElectronic/pic6.jpg'))}
                                                />
                                            </div>
                                        </div>
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

export default CHElectronics;