import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/portrait/pic3.jpg'),
    require('./../../images/gallery/portrait/pic2.jpg'),
    require('./../../images/gallery/portrait/pic5.jpg'),
    require('./../../images/gallery/portrait/pic6.jpg'),
    require('./../../images/gallery/portrait/pic4.jpg'),
]

var bnr1 = require('./../../images/background/line.png');

class About4 extends React.Component {
    
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };
 
      loadScript('./assets/js/masonary.js');
      
    };
    
    render() {
        const options = {
            loop:true,
            autoplay:true,
            autoplayTimeout:3000,
            margin:30,
            nav:false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            items:1,
            dots: true
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-white inner-page-padding">
                    <div className="container">
                        <div className="section-content ">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 ">
                                    <div className="m-about ">
                                        <OwlCarousel className="owl-carousel about-us-carousel" {...options}>
                                            {images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="ow-img">
                                                    <NavLink to="/about"><img src={item} alt=""/></NavLink>
                                                    </div>
                                                </div>
                                            ))}
                                        
                                        </OwlCarousel>
                                        
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="m-about-containt text-black p-t80">
                                        <div className="m-about-years bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                                            <span className="text-primary large-title">35+</span>
                                            <span className="large-title-info">Years of Legacy</span>
                                        </div>
                                        <h3 className="font-weight-600">From one man’s vision to a legacy of building excellence.</h3>
                                        <p>Agha Builders began as a one-man operation driven by passion, precision, and purpose. Over 35+ years, it has grown into a trusted name in the industry—delivering hundreds of successful projects ranging from residential homes and commercial complexes to large-scale industrial and infrastructure developments.

Our commitment to quality, innovation, and client satisfaction has been the foundation of our journey. Every structure we build is a reflection of our values—crafted to endure, designed to inspire.</p>
                                        <div className="author-info p-t20">
                                            {/* <div className="author-signature">
                                                <img src={require('./../../images/Signature+Black.png')} alt="Signature" width={150} />
                                            </div> */}
                                            <div className="author-name">
                                                <h4 className="m-t0">Ghulam Murtaza</h4>
                                                <p>CEO &amp; Founder</p>
                                            </div>
                                            <NavLink to="/contactus" className="site-button-secondry btn-effect"><span>Get in touch</span></NavLink>
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

export default About4;