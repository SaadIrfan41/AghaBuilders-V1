import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const images = [
    require('./../../images/gallery/pic1.jpg'),
    require('./../../images/gallery/pic8.jpg'),
    require('./../../images/gallery/pic9.jpg'),
    require('./../../images/gallery/pic6.jpg'),
    require('./../../images/gallery/pic2.jpg')    
]

var bnr1 = require('./../../images/background/bg-6.png');

class About extends React.Component {
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
            margin:30,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                991:{
                    items:1
                }
            }
        };
        return (
            <>
                <div className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">About</span> Company</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content">
                            <div className="row">
                                <div className="col-md-9 col-sm-12">
                                    <OwlCarousel className="owl-carousel about-home owl-btn-vertical-center" {...options}>
                                        {images.map((item, index) => (
                                            <div className="item" key={index}>
                                                <div className="mt-img-effect zoom-slow">
                                                <NavLink to="/about"><img src={item} alt=""/></NavLink>
                                                </div>
                                            </div>
                                            
                                        ))}
                                       
                                    </OwlCarousel>
                                </div>
                                <div className="col-md-3 col-sm-12">
                                    <div className="about-home-right bg-white p-a30">
                                        <h3 className="m-t0"><span className="font-weight-100">Building</span>  a Legacy of Excellence.</h3>
                                        <p><strong>With over 35 years of experience, Agha Builders has transformed from a one-man operation into a recognized leader in the construction industry. Our journey is a testament to dedication, craftsmanship, and innovation in every project we undertake.</strong></p>
                                        <p>We pride ourselves on being more than just builders—we are creators of spaces that inspire and endure. From residential developments to large-scale commercial projects, we combine traditional values with modern techniques, ensuring that every construction project reflects the highest standards of quality and precision.</p>
                                        <div className="text-right">
                                            <NavLink to="/about" className="site-button-link" data-hover="Read More">Read More <i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>About</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default About;