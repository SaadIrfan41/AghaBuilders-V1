import React from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import SimilarProjects from '../Elements/SimilarProjects';
import Banner from '../Elements/Banner';
import ReactPlayer from 'react-player';

var bnrimg = require('./../../images/banner/5.jpg');

class UnionCafe extends React.Component {
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
                <Banner title="Union Café – Crafting a Culinary Landmark" pagename="Union Cafe" bgimage={bnrimg}/>
                    
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
                                                        src={require('./../../images/projects/portrait/UnionCafe/pic1.jpg')}
                                                        alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/UnionCafe/pic1.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/UnionCafe/pic7.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/UnionCafe/pic7.jpg'))}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="project-detail-pic m-b30">
                                                <div className="mt-media">
                                                    <img
                                                        src={require('./../../images/projects/portrait/UnionCafe/pic3.jpg')}
                                                        alt=""
                                                        style={{ cursor: 'zoom-in' }}
                                                        onClick={() => this.handleImgClick(require('./../../images/projects/portrait/UnionCafe/pic3.jpg'))}
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
                                                        <p>2021-2022</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Client</h4>
                                                        <p>Union Cafe </p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">Scope</h4>
                                                        <p>Construction - Interior-Exterior</p>
                                                    </div>
                                                    <div className="col-md-12 m-b10">
                                                        <h4 className="text-uppercase font-weight-600 m-b10">LOCATION</h4>
                                                        <p>Shahid Plaza, F6/4, Islamabad </p>
                                                    </div>
                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                    <img
                                                        src={require('./../../images/projects/portrait/UnionCafe/pic8.jpg')}
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
                                        <h3 className="font-weight-600">From Blueprint to Bistro: The Union Café Construction Story</h3>
                                        <p>
                                            <em>
                                                Nestled in the heart of Shahid Plaza, Union Café was envisioned as a modern culinary destination blending aesthetics with functionality. Our team transformed this vision into reality within a tight 9-month timeline.
                                            </em>
                                        </p>
                                        <ul>
                                            <li>✔ Strategic Space Utilization – Maximized seating capacity without compromising comfort</li>
                                            <li>✔ Kitchen Engineering – Installed commercial-grade ventilation and cooking systems</li>
                                            <li>✔ Aesthetic Finishes – Curated materials to create a warm, inviting ambiance</li>
                                            <li>✔ On-Budget Completion – Delivered without cost overruns despite material shortages</li>
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
                                                "A café designed as much for Instagram-worthy moments as for memorable dining experiences."
                                            </span>
                                        </em>
                                        <h4 className="font-weight-600" style={{marginTop: 32}}>Special Features</h4>
                                        <p>
                                            The project incorporated several unique elements to stand out in Islamabad's competitive F&amp;B scene:
                                        </p>
                                        <ul>
                                            <li>✔ Signature Lighting – Custom-designed fixtures creating perfect mood lighting</li>
                                            <li>✔ Soundscaping – Acoustic treatments for balanced noise levels</li>
                                            <li>✔ Outdoor Integration – Seamless transition between indoor and patio seating</li>
                                        </ul>
                                        {/* Added images after description */}
                                        <div className="row" style={{ marginBottom: 30 }}>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/UnionCafe/pic4.jpg')}
                                                            alt="Construction works Intellectual village - House 349 Bahria Phase 8"
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/UnionCafe/pic4.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/UnionCafe/pic5.jpg')}
                                                            alt=""
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/UnionCafe/pic5.jpg'))}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4">
                                                <div className="project-detail-pic m-b30">
                                                    <div className="mt-media">
                                                        <img
                                                            src={require('./../../images/projects/portrait/UnionCafe/pic6.jpg')}
                                                            alt=""
                                                            style={{ cursor: 'zoom-in' }}
                                                            onClick={() => this.handleImgClick(require('./../../images/projects/portrait/UnionCafe/pic6.jpg'))}
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

export default UnionCafe;