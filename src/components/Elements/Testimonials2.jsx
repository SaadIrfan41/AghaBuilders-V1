import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/PicM.png'),
        reviewername: 'Atif Nauman',
        position: 'Owner-Allied school (Main city campus) Sattlite Town',
        review: 'Agha Builders delivered exceptional construction work for our Allied School branch in Satellite Town. Their team was professional, met deadlines, and paid great attention to safety and quality. Highly recommended for educational institutions!'
    },
    {
        image: require('./../../images/testimonials/PicM.png'),
        reviewername: 'Mr. Sohail',
        position: 'NAB',
        review: 'Agha Builders transformed our space with flawless woodwork, elegant tiling, and precision installations. Mr. Sohail’s team delivered exceptional craftsmanship, on-time completion, and zero compromises on quality. Their attention to detail elevated our entire project. Strongly recommended for interior excellence! '
    },
    {
        image: require('./../../images/testimonials/PicF.png'),
        reviewername: 'Dr. Farahat Bhatti',
        position: 'Intellectual Village-Bahria Phase-7 (Repeat Client)',
        review: 'We first hired Agha Builders in 2015 to construct our dream villa in Intellectual Village – and they nailed it! The attention to detail, from the custom woodwork to those elegant arches we wanted, was spot-on. Fast forward to 2022, we called them again for renovations, and just like before, they delivered perfection. What keeps us coming back? Their team treats our home like their own – no shortcuts, just solid work. If you want builders who actually listen (and execute!), look no further.'
    },
    {
        image: require('./../../images/testimonials/PicM.png'),
        reviewername: 'Agha Masood Akram',
        position: 'Owner Plaza No.232 -  Bahria Town',
        review: 'We entrusted Agha Builders with constructing our commercial plaza in Bahria Town, and they delivered beyond expectations. From the initial planning to the final finishes, their team demonstrated professionalism, precision, and a deep understanding of commercial needs. The project was completed on time, with no compromises on quality—exactly what investors look for. Highly recommended for anyone developing commercial properties!'
    },
    {
        image: require('./../../images/testimonials/PicM.png'),
        reviewername: 'Shahid builders',
        position: 'Construction Manager - CMH Rawalpindi',
        review: 'At CMH Rawalpindi, Agha Builders proved they handle high-stakes projects with discipline. Their structural work passed our most stringent inspections - rare in this industry. They delivered on time, with zero rework. Their team’s commitment to quality and safety is commendable. If you’re looking for a contractor who can meet military standards, Agha Builders is your go-to.'
    },
    {
        image: require('./../../images/testimonials/PicM.png'),
        reviewername: 'Asad Hafeez',
        position: 'Owner Wings Bakery',
        review: 'Agha Builders transformed our bakery with stunning interiors and top-notch construction. Their attention to detail and commitment to quality were evident in every corner. The project was completed on time, and their team was professional throughout. Highly recommend them for any commercial space!'
    },
    {
        image: require('./../../images/testimonials/PicM.png'),
        reviewername: 'Ch. Shahid',
        position: 'Construction Manager - Giga Group',
        review: 'As Construction Manager at Giga Group, I’ve worked with many contractors, but Agha Builders stands out. Their team delivered our Bahria Town project with unmatched professionalism—strict timelines, zero rework, and transparent communication throughout. They don’t just build structures; they deliver peace of mind. A trusted partner for large-scale developments.'
    }
    
]

var bnr1 = require('./../../images/background/bg-6.png');

class Testimonials2 extends React.Component {
    
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
                <div className="section-full p-t80 bg-dark square_shape2  square_shape1 bg-moving mobile-page-padding" style={{backgroundImage:"url(" + bnr1 + ")"}}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-white text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Client</span> Testimonials</h2>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            {/* TESTIMONIAL START */}
                            <OwlCarousel className="owl-carousel testimonial-home-2 p-b30" {...options}>
                            
                                {testimonials.map((item, index) => (
                                    <div className="item" key={index}>
                                        <div className="col-sm-12 col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8">
                                            <div className="testimonial-1 testimonial-bg m-a30 hover-animation-1 text-center text-white">
                                                <div className="testimonial-detail clearfix">
                                                    <div className="testimonial-pic radius shadow scale-in-center"><img src={item.image} width={100} height={100} alt="" /></div>
                                                </div>
                                                <div className="testimonial-text">
                                                    <span className="fa fa-quote-right" />
                                                    <p>{item.review}</p>
                                                </div>
                                                <div className="testimonial-detail clearfix">
                                                    <h4 className="testimonial-name m-b5">{item.reviewername} -</h4>
                                                    <span className="testimonial-position">{item.position}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>   
                            
                        </div>
                        
                    </div>
                    <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
                        <strong>Clients</strong>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials2;