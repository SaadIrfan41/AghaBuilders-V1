import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import Specialization from './../Elements/Specialization';
import About from './../Elements/About';
import OurValue2 from './../Elements/OurValue2';
import OurMission from './../Elements/OurMission';
import OurMission2 from './../Elements/OurMission2';
import Callus2 from './../Elements/Callus2';
import OurProject from './../Elements/OurProject';
import ClientsLogo from './../Elements/ClientsLogo';
import Testimonials2 from './../Elements/Testimonials2';
import Faq from './../Elements/Faq';
import OurServices from './../Elements/OurServices';
import 'owl.carousel/dist/assets/owl.carousel.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
                    <Specialization />
                    <About />
                    <OurValue2 />
                    <Callus2 />
                    <OurMission />
                    <OurServices />
                    <OurMission2 />
                    <OurProject />
                    <ClientsLogo />
                    <Testimonials2 />
                    <Faq />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;