import React from 'react';
import { NavLink } from 'react-router-dom';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');
var img4 = require('./../../images/mission.jpg');

class OurMission extends React.Component {
    render() {
        return (
            <>
                <section className="section-full mobile-page-padding mission-outer-section p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{ backgroundImage: `url(${img1}), url(${img2})` }}>
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START */}
                            <header className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h1 className="text-uppercase sep-line-one">
                                            <span className="font-weight-300 text-primary">Our</span> Mission
                                        </h1>
                                    </div>
                                </div>
                            </header>
                            {/* TITLE END */}
                            <div className="row">
                                <article className="col-md-4 col-sm-6">
                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{ backgroundImage: `url(${img3})` }}>
                                        <h2 className="m-t0">
                                            <span className="font-weight-100">Site Areas</span><br /> What We Serve
                                        </h2>
                                        <p>We deliver excellence in construction with a commitment to quality, innovation, and client satisfaction. Our expertise spans a range of services tailored to your needs.</p>
                                        <ul className="list-angle-right anchor-line">
                                            <li><NavLink to="/services">General Contracting</NavLink></li>
                                            <li><NavLink to="/services">Civil & Site Works</NavLink></li>
                                            <li><NavLink to="/services">Structural Construction</NavLink></li>
                                            <li><NavLink to="/services">MEP (Mechanical, Electrical, Plumbing)</NavLink></li>
                                            <li><NavLink to="/services">Renovation & Remodeling</NavLink></li>
                                        </ul>
                                        {/* <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">
                                                Read More <i className="fa fa-angle-right arrow-animation" />
                                            </NavLink>
                                        </div> */}
                                    </div>
                                </article>
                                <figure className="col-md-4 col-sm-6">
                                    <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: `url(${img4})` }} aria-label="Mission Image" />
                                </figure>
                                <aside className="col-md-4 col-sm-12">
                                    <div className="contact-home1-left bg-dark p-a30 m-b0">
                                        <h2 className="text-white m-t0">Agha Builders <span className="font-weight-100">Difference</span></h2>
                                        <p className="text-white">
                                            To redefine the construction industry by building sustainable, future-ready spaces that inspire communities and empower our clients. We turn visions into realities while prioritizing:
                                        </p>
                                        <ul className="text-white">
                                            <li><strong>Quality & Safety:</strong> Every project meets the highest standards.</li>
                                            <li><strong>Client-Centric Solutions:</strong> Tailored approaches for unique needs.</li>
                                            <li><strong>Environmental Stewardship:</strong> Eco-friendly materials and practices.</li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-right p-l50 text-uppercase text-pop-up-top">
                        <strong>Mission</strong>
                    </div>
                </section>
            </>
        );
    }
};

export default OurMission;