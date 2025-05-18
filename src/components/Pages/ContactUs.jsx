import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/4.jpg');

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactUs extends React.Component {
    render() {
        // const defaultProps = {
        //     center: {
        //       lat: 34.073280,
        //       lng: -118.251410
        //     },
        //     zoom: 12
        // };
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Putting a plan to action, to assure your satisfaction!" pagename="Contact Us" bgimage={bnrimg}/>
                    {/* SECTION CONTENTG START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        {/* LOCATION BLOCK*/}
                        <div className="container">
                            {/* GOOGLE MAP & CONTACT FORM */}
                            <div className="section-content">
                                {/* CONTACT FORM*/}
                                <div className="row">
                                    <div className="col-md-8 col-sm-6">
                                        <form className="contact-form cons-contact-form" method="post" action="form-handler.php">
                                            <div className="contact-one m-b30">
                                                {/* TITLE START */}
                                                <div className="section-head">
                                                    <div className="mt-separator-outer separator-left">
                                                        <div className="mt-separator">
                                                            <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Get</span> In touch</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* TITLE END */}
                                                <div className="form-group">
                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                </div>
                                                <div className="form-group">
                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="message" rows={4} className="form-control " required placeholder="Message" defaultValue={""} />
                                                </div>
                                                <div className="text-right">
                                                    <button name="submit" type="submit" value="Submit" className="site-button btn-effect">submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="contact-info m-b30">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Contact</span> Info</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="bg-dark p-a20 text-white">
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-phone" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Phone number</h5>
                                                        <p>+92 334 2224202</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left p-b40">
                                                    <div className="icon-xs"><i className="fa fa-envelope" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Email address</h5>
                                                        <p>aghabuildersofficial@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="mt-icon-box-wraper left">
                                                    <div className="icon-xs"><i className="fa fa-map-marker" /></div>
                                                    <div className="icon-content">
                                                        <h5 className="m-t0 font-weight-500">Address info</h5>
                                                        <p>Plaza 232, Nadir Rd, Bahria P7, Intellectual Village, Rawalpindi</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gmap-outline">
                                <div style={{ height: '400px', width: '100%' }}>
                                    {/* Updated map iframe */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d699.5343891213056!2d73.0880314377425!3d33.52202115349482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2s!4v1747566601576!5m2!1sen!2s"
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="New Map Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>
                <Footer />
            </>
        );
    }
}

export default ContactUs;