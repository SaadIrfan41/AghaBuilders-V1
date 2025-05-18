import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from 'react-player';


var img1 = require('./../../images/Video2.png');

class OurValue2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
                    <div className="container">
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-7 col-sm-6">
                                    <div className="video-section-full-v2">
                                        <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                                            <div className="overlay-main bg-black opacity-04" />
                                                <div className="video-section-inner">
                                                    <div className="video-section-content">
                                                        <div className="video-section-left">
                                                        <button type="button" className="play-now" data-toggle="modal" data-target="#">Open Modal
                                                                <i className="icon fa fa-play" />
                                                                <span className="ripple" />
                                                                </button>
                                                        </div>
                                                        <div className="video-section-right">
                                                            <NavLink to={"#"} className="font-weight-600 text-uppercase" onClick={this.openModal}></NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-6">
                                    {/* TITLE START */}
                                    <div className="video-part-2">
                                        <h3><span className="font-weight-100">We will provide</span> you the best work which you dreamt for!</h3>
                                        <p>From a one-man passion project to an industry leader over 35+ years, we've built hundreds of homes, commercial spaces, and infrastructure projects—always with uncompromising quality, innovation, and client trust. Every structure we craft is designed to last and inspire</p>
                                        {/* <ul className="list-angle-right anchor-line">
                                        <li><NavLink to={"/services"}>Construction</NavLink></li>
                                            <li><NavLink to={"/services"}>Renovation</NavLink></li>
                                            <li><NavLink to={"/services"}>Demolition</NavLink></li>
                                        </ul> */}
                                    </div>
                                    {/* TITLE END */}
                                    <div className="author-info author-info-v2 p-t20">
                                        {/* <div className="author-signature">
                                            <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                        </div> */}
                                        <div className="author-name">
                                            <h4 className="m-t0">Ghulam Murtaza</h4>
                                            <p> CEO &amp; Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ReactPlayer url='https://vimeo.com/34741214' />
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurValue2;