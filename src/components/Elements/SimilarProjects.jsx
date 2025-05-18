import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/projects/Supremecourt2.jpg'),
        title: 'Adal - The Restoration of Pakistan Supreme Court',
        description: 'In 2007, we were entrusted with a singular honor: The sensitive renovation of Pakistan highest temple of justice... ',
        link: '/SupremeCourtPakistan'
    },
    {
        image: require('./../../images/projects/portrait/House08/pic11.jpg'),
        title: 'The Artisan Residence – Luxury Material Mastery',
        description: 'This residence became a laboratory of luxury, where Italian design met Pakistani craftsmanship. Over ....',
        link: '/House08'
    },
    {
        image: require('./../../images/projects/portrait/349/pic4.jpg'),
        title: 'The Farahat Residence',
        description: 'This landmark project represents our philosophy in built form - where exceptional initial construction meets th....',
        link: '/House349'
    },
    {
        image: require('./../../images/projects/portrait/Plaza232/pic10.jpg'),
        title: 'Improving quality of life with an integrated unified approach',
        description: 'This prestigious commercial plaza in Bahria Town Phase 7 stands as a testament to quality construction and....',
        link: '/Plaza232'
    },
    {
        image: require('./../../images/projects/UnionCafe.jpg'),
        title: 'Crafting a Culinary Landmark',
        description: 'Nestled in the heart of Shahid Plaza, Union Café was envisioned as a modern culinary destination blending aesthetics.....',
        link: '/UnionCafe'
    }
]

var bnr1 = require('./../../images/background/bg-6.png');

class SimilarProjects extends React.Component {
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
            center: false,
            items:3,
            margin:40,
            nav:true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },			
                991:{
                    items:3
                },
                1200:{
                    items:4
                }	
                
            }
        };

        return (
            <>
                <div className="section-full p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Similar</span> projects</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                    </div>
                    <div className="section-content container-fluid">
                        <div className="similar-carousel-outer">
                            
                            <OwlCarousel className="owl-carousel similar-projects owl-btn-vertical-center" {...options}>
                                {projects.map((item, index) => (
                                            <div key={index} className="item mt-box">
                                                <div className="mt-img-effect mt-img-overlay7">
                                                    <img src={item.image} alt="" />
                                                </div>
                                                <div className="mt-info p-a30">
                                                    <h4 className="m-b20 m-t0"><NavLink to={item.link}>{item.title}</NavLink></h4>
                                                    <p>{item.description}</p>
                                                    <NavLink to={item.link} className="site-button btn-effect">Read More</NavLink>
                                                </div>
                                            </div>
                                        ))}
                                
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>projects</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default SimilarProjects;