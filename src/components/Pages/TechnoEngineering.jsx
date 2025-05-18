import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/5.jpg');

class TechnoEngineering extends React.Component {
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
                <Banner title="Faysal Hills Commercial Complex – From Groundwork to Turnkey Delivery" pagename="Techno Engineering" bgimage={bnrimg}/>
                    
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
                                                        src={require('./../../images/projects/portrait/TechnoEngineering/pic1.jpg')}
                                                        alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/TechnoEngineering/pic1.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/TechnoEngineering/pic2.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/TechnoEngineering/pic1.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/TechnoEngineering/pic3.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/TechnoEngineering/pic3.jpg'))}
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
                                                        <p>Techno Engineering – Techno Group of Companies
                                                        </p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Waste Removal & Construction</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>Near Faisal Hills</p>
                                                    </div>
                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img
                                                        src={require('./../../images/projects/portrait/TechnoEngineering/pic7.jpg')}
                                                        alt="Faysal Hills Commercial Complex"
                                                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                                                    />
                                                    {/* Removed video play button */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-detail-containt">
                                    <div className="bg-white text-black">
                                        <h3 className="font-weight-600">Techno Engineering: Where Clean-Up Meets Build-Up</h3>
                                        {/* Summary paragraph */}
                                        <p>
                                            This project demonstrates our comprehensive approach—transforming a raw site into a fully functional commercial facility. From responsible demolition and waste management to the construction of secure storage and comfortable labor accommodations, we delivered a turnkey solution on a tight timeline.
                                        </p>
                                        {/* New Phases */}
                                        <strong>Phase 1: Site Preparation & Waste Removal</strong>
                                        <p>
                                            Before construction could begin, our team meticulously prepared the site to ensure a solid foundation for development.
                                        </p>
                                        <ul>
                                            <li>✔ Complete Site Clearance – Safe removal of all existing structures and debris</li>
                                            <li>✔ Eco-Friendly Disposal – 80% of materials recycled or repurposed</li>
                                            <li>✔ Regulatory Compliance – All waste handled according to environmental standards</li>
                                        </ul>
                                        <strong>Phase 2: Commercial Construction</strong>
                                        <p>
                                            With the site cleared, we constructed functional spaces designed for durability and efficiency.
                                        </p>
                                        <ul>
                                            <li>✔ Secure Storage Units – Built with robust materials for long-term use</li>
                                            <li>✔ Comfortable Labor Quarters – Designed for optimal living conditions</li>
                                            <li>✔ On-Time Delivery – Completed within 6 months despite challenges</li>
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
                                                "A project that showcases our end-to-end capabilities, from initial cleanup to final construction."
                                            </span>
                                        </em>
                                        {/* Added images after description */}
                                        <div className="row" style={{ marginBottom: 30 }}>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/TechnoEngineering/pic4.jpg')}
                                                            alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/TechnoEngineering/pic4.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/TechnoEngineering/pic5.jpg')}
                                                            alt=""
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/TechnoEngineering/pic5.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/TechnoEngineering/pic6.jpg')}
                                                            alt=""
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/TechnoEngineering/pic6.jpg'))}
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

                <div className="modal fade" id="myModal3" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://www.youtube.com/watch?v=s3A7AK1K2hc' />
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    };
};

export default TechnoEngineering;