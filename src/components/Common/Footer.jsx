import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';

var bgimage = require('./../../images/background/bg-site.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: require('./../../images/Logo OW.png')};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo;}

    render() {
        
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    <div className="container call-to-action-wrap bg-no-repeat bg-center" style={{ backgroundImage: 'url('+bgimage+')' }}>
                        {/* <div className="p-a30 bg-primary ">
                            <div className="row">
                                <div className="col-md-8 col-sm-8">
                                    <div className="call-to-action-left text-black">
                                        <h4 className="text-uppercase m-b10 m-t0">Subscribe to our newsletter!</h4>
                                        <span>Never Miss Anything From Construx By Signing Up To Our Newsletter.</span>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="call-to-action-right">
                                        <div className="widget_newsletter">
                                            <div className="newsletter-bx">
                                                <form role="search" action="./">
                                                    <div className="input-group">
                                                        <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                        <span className="input-group-btn">
                                                            <button type="submit" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                        <p className="max-w400">Your trusted partner for quality construction, innovative designs, and timely project delivery—building dreams into reality.</p>
                                        {/* <ul className="social-icons  mt-social-links">
                                            <li><NavLink to={"#"} className="fa fa-google" /></li>
                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                        </ul> */}
                                        <ul className="social-icons  mt-social-links">
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
                                            {/* <li>
                                                <a href="https://www.tiktok.com/@aghabuildersofficial" className="fa-brands fa-tiktok" target="_blank" rel="noopener noreferrer"></a>
                                            </li> */}
                                        </ul>
                                     </div>

                                        
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul className="widget_address">
                                            <li>Plaza 232, Nadir Rd, Bahria P7, Intellectual Village, Rawalpindi</li>
                                            <li>info@aghabuilders.com</li>
                                            <li> (+92) 334 222 4202 </li>
                                            <li> (+92) 300 055 5148 </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* USEFUL LINKS */}
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul>
                                            <li><NavLink to={"/about"}>About</NavLink></li>
                                            <li><NavLink to={"/ProjectsPortfolio"}>Projects</NavLink></li>
                                            <li><NavLink to={"/blog-listing"}>Blog</NavLink></li>
                                            <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* TAGS */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry-date">
                                        <h4 className="widget-title">Resent Post</h4>
                                        <div className="widget-post-bx">
                                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                    <strong className="p-date">15</strong>
                                                    <span className="p-month">Mar</span>
                                                    <span className="p-year">2025</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/Blogpostdetails"}>The Future of Solar Energy in Pakistan: Benefits, Challenges & Opportunities (2025 Guide)</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            {/* <li className="post-comment"><i className="fa fa-comments" /> 28</li> */}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">
                                                    <strong className="p-date">30</strong>
                                                    <span className="p-month">Jan</span>
                                                    <span className="p-year">2022</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>We'll be a sensation for you next renovation</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />By Admin</li>
                                                            <li className="post-comment"><i className="fa fa-comments" /> 29</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">© 2025 Agha Builders. Developed by <a href='https://hanansemab.com/' target="_blank" rel="noopener noreferrer" style={{color:'White'}} > hanansemab.com </a></span>
                                </div>
                            </div>
                        </div>
                    </div>

{/* Floating Chat Button and WhatsApp optimized for mobile */}
<style>
{`
@media (max-width: 600px) {
  .lets-chat-float {
    right: 54px !important;
    bottom: 60px !important;
    font-size: 13px !important;
    padding: 5px 8px !important;
  }
  .whatsapp-float {
    width: 40px !important;
    height: 40px !important;
    font-size: 20px !important;
    right: 10px !important;
    bottom: 55px !important; /* leave space for go-to-top */
  }
  .go-to-top-btn {
    right: 10px !important;
    bottom: 10px !important;
  }
}
@media (min-width: 601px) {
  .lets-chat-float {
    right: 65px !important; /* leave space for go-to-top and WhatsApp */
    bottom: 76px !important;
    padding: 5px 8px !important;
  }
  .whatsapp-float {
    right: 11px !important; /* leave space for go-to-top */
    bottom: 70px !important;
    width: 48px !important;
    height: 48px !important;
    font-size: 24px !important;
  }
  .go-to-top-btn {
    right: 10px !important;
    bottom: 10px !important;
  }
}
`}
</style>
<div
    className="lets-chat-float"
    style={{
        position: 'fixed',
        bottom: '70px',
        right: '70px',
        zIndex: 1001,
        background: '#fff',
        color: '#333',
        borderRadius: '8px',
        padding: '5px 8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        display: 'flex',
        fontSize: '15px',
        alignItems: 'center',
        whiteSpace: 'nowrap'
    }}
>
    Let's Chat
</div>
<a
    href="https://wa.me/+923342224202"
    className="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    style={{
        position: 'fixed',
        bottom: '20px',
        right: '35px',
        zIndex: 1000,
        background: '#ff5b0f',
        color: '#fff',
        borderRadius: '100%',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        fontSize: '24px',
        textDecoration: 'none'
    }}
    aria-label="Chat on WhatsApp"
>
    <i className="fa fa-whatsapp" />
</a>


                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>

            </>
        );
    };
};

export default Footer;