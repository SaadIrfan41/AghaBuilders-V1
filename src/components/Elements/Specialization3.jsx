import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-6.png');

class Specialization3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-dark mobile-page-padding" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="section-head m-b50 text-white text-center">
                                <h3 className="m-t0">We are all constructed out of our self dialogue.</h3>
                                <p>Where innovative design meets precision execution. Each undertaking reflects our commitment to quality, client collaboration, and sustainable solutions across all construction disciplines.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/projects/Supremecourt2.jpg')}  alt=""/>
                                        <div className="figcaption">
                                            <h4>Renovation</h4>
                                            <p>The Restoration of Pakistan's Supreme Court</p>
                                            <NavLink to="/SupremeCourtPakistan"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/projects/UnionCafe.jpg')} alt="" />
                                        <div className="figcaption">
                                            <h4>Construction</h4>
                                            <p>Crafting a Culinary Landmark</p>
                                            <NavLink to="/UnionCafe"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/projects/Bop.jpg')} alt=""/>
                                        <div className="figcaption bg-dark">
                                            <h4>Demolition</h4>
                                            <p>Controlled Dismantling & Eco-Conscious Disposal</p>
                                            <NavLink to="/BOPDemolition"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization3;