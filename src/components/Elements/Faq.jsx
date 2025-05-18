import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPen } from '@fortawesome/free-solid-svg-icons';

class Faq extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white inner-page-padding">
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Some</span> FAQ</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    <div className="section-content p-b30">
                                        <div className="mt-accordion acc-bg-gray" id="accordion5">
                                            <div className="panel mt-panel">
                                                <div className="acod-head acc-actives">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseOne5"  className="collapsed" data-parent="#accordion5">
                                                        Where is Agha Builders located, and which areas do you serve?
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseOne5" className="acod-body collapse">                                         
                                                <div className="acod-content p-tb15">
  <p>
    We are headquartered in Islamabad and provide construction services across major cities in Pakistan, including:
  </p>
  <ul style={{ paddingLeft: "2em" }}>
    
    <li>General Contracting</li>
    <li>Electric Automation</li>
    <li>Complete Solar Energy Solutions</li>
    <li>Civil &amp; Site Work</li>
    <li>Structural Construction</li>
    <li>Roofing &amp; Exteriors</li>
    <li>MEP (Mechanical, Electrical, Plumbing)</li>
    <li>Interior Finishes</li>
    <li>Renovation &amp; Remodeling</li>
    <li>Demolition &amp; Waste Removal</li>
    <li>Paving &amp; Surfacing</li>
    <li>Termite &amp; Pest Control</li>
    <li>Flooring Installation</li>
    <li>Landscaping &amp; Hardscaping</li>
    <li>Painting &amp; Coating</li> 
    <li>Waterproofing &amp; Insulation</li>
    <li>Site Preparation &amp; Excavation</li>
    <li>Foundation &amp; Structural Work</li>
    <li>Electrical &amp; Lighting Installation</li>
    <li>HVAC Installation &amp; Maintenance</li>
    <li>Plumbing &amp; Drainage Systems</li>
    <li>Fire Protection &amp; Safety Systems</li>
    <li>Roofing &amp; Waterproofing</li>
    <li>Carpentry &amp; Millwork</li>
    <li>Drywall &amp; Ceiling Installation</li>
    <li>Concrete &amp; Masonry Work</li>
    <li>Specialty Contracting</li>
  </ul>
</div>
                                                </div>
                                            </div>
                                            <div className="panel mt-panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                        Do you provide construction services for overseas Pakistanis investing in property back home?
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseTwo5" className="acod-body collapse">
                                                    <div className="acod-content p-tb15">Yes, we specialize in managing end-to-end construction for overseas clients, including remote approvals, regular video updates, and secure payment options in USD/PKR.</div>
                                                </div>
                                            </div>
                                            <div className="panel mt-panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                        How do you handle delays due to weather/political instability?
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseThree5" className="acod-body collapse">
                                                    <div className="acod-content p-tb15">Our projects include buffer timelines and contingency plans to mitigate disruptions from monsoon rains, protests, or supply chain issues common in Pakistan.</div>
                                                </div>
                                            </div>
                                            <div className="panel mt-panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFour5" className="collapsed" data-parent="#accordion5">
                                                            How to contact support?
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseFour5" className="acod-body collapse">
                                                    <div className="acod-content p-tb15">You can contact support via email or phone. Our team is available 24/7 to assist you with any queries.</div>
                                                </div>
                                            </div>
                                            <div className="panel mt-panel">
                                                <div className="acod-head">
                                                    <h6 className="acod-title">
                                                        <a data-toggle="collapse" href="#collapseFive5" className="collapsed" data-parent="#accordion5">
                                                        Can you customize designs to suit Pakistani family needs?
                          <span className="indicator"><i className="fa" /></span>
                                                        </a>
                                                    </h6>
                                                </div>
                                                <div id="collapseFive5" className="acod-body collapse">
                                                    <div className="acod-content p-tb15">Absolutely! Our designs include modern Islamic architecture, extended kitchens, sehri spaces, and joint-family layouts tailored to local lifestyles.</div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    {/* TITLE START */}
                                    <div className="section-head">
                                        <div className="mt-separator-outer separator-left">
                                            <div className="mt-separator">
                                                <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Solution</h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TITLE END */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-gray center">
                                                <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                    <span className="icon-cell text-primary"> <FontAwesomeIcon className="text-white" icon={faPen}   size="2x" /></span>
                                                </div>
                                                <div className="icon-content text-black">
                                                    <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">Need something custom?</h4>
                                                    <p>Let Our Experts Guide You – We’ll Craft the Perfect Solution for Your Project.</p>
                                                    <NavLink to="/ContactUs" className="site-button-link" data-hover="Read More">Contact Us <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mt-icon-box-wraper p-a25 m-b30 onhover-box-shadow bg-dark center">
                                                <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-secondry  scale-in-center">
                                                    <span className="icon-cell text-primary bg"> <FontAwesomeIcon className="text-white" icon={faCoffee}   size="2x" /> </span>
                                                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                                                </div>
                                                <div className="icon-content text-white">
                                                    <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">Get Free Consultation</h4>
                                                    <p>Your needs are unique? Our experts will prepare the best solution for you!</p>
                                                    <NavLink to="/about" className="site-button-link white" data-hover="Read More">Call Now <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FAQ */}
                    <div className="hilite-title text-right p-l50 text-uppercase text-pop-up-top">
                        <strong>FAQ's</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Faq;