import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import About4 from './../Elements/About4';
// import Team3 from './../Elements/Team3';
import About2 from './../Elements/About2';
import AboutSummary from './../Elements/AboutSummary';
import Testimonials2 from './../Elements/Testimonials2';
import ClientsLogo from './../Elements/ClientsLogo';
import Specialization4 from '../Elements/Specialization4';





var bnrimg = require('./../../images/banner/1.jpg');

class About extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content">
                    <Banner title="Creating quality urban lifestyles, building stronger communities." pagename="About Us" bgimage={bnrimg}/>
                    <About4 />
                    <About2 />
                    <Specialization4 />
                    {/* <Team3 /> */}
                    <AboutSummary />
                    <ClientsLogo />
                    <Testimonials2 />
                    
                </div>

                <Footer />

            </>
        );
    };
};

export default About;