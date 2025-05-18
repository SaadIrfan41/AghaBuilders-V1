import React from 'react';

var img1 = require('./../../images/background/bg-6.png');
var img2 = require('./../../images/background/line.png');

class AboutSummary extends React.Component {
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
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-dark bg-repeat square_shape2 inner-page-padding" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-left">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Projects</span> Timeline</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        <div className="section-content our-story">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic4.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover" style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2024</h4>
                                        <h4 className="m-b20">House 354</h4>
                                        <p>House 354 offers modern elegance with its open-concept design, featuring spacious living areas, a gourmet kitchen with high-end finishes, and seamless indoor-outdoor flow. Thoughtful details like energy-efficient windows and smart home readiness combine comfort with sustainability, while the private landscaped outdoor space creates a perfect retreat. This home exemplifies quality craftsmanship with every detail designed for contemporary living. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic7.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2023</h4>
                                        <h4 className="m-b20">House 08</h4>
                                        <p>House 08 embodies modern sophistication with its clean architectural lines and inviting open-concept layout. The residence features sun-filled living spaces seamlessly connected to a gourmet kitchen equipped with top-tier appliances and elegant countertops. Thoughtful design elements like energy-efficient windows and smart home technology blend comfort with sustainability, while the private outdoor area offers a serene escape. Every detail reflects a perfect balance of contemporary style and everyday functionality, creating a home designed for both relaxation and entertainment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic6.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2022</h4>
                                        <h4 className="m-b20">Plaza 232</h4>
                                        <p>Designed as a hub for commerce and innovation, Plaza 232 offers premium office and retail spaces in a strategically central location. The development combines sleek, contemporary architecture with practical features like flexible floor plans, high-speed connectivity, and energy-efficient systems. Ideal for businesses of all sizes, it provides a professional environment with 24/7 security and dedicated management, ensuring both functionality and peace of mind.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic8.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2021</h4>
                                        <h4 className="m-b20">Union Cafe</h4>
                                        <p>Union Cafe welcomes guests with its inviting ambiance and thoughtfully crafted menu, designed to delight both casual diners and culinary enthusiasts. The space blends modern aesthetics with cozy touches, featuring warm lighting, comfortable seating, and an open kitchen concept that adds to the vibrant atmosphere. </p>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic9.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2020</h4>
                                        <h4 className="m-b20">Metal Tech Engineering Factory</h4>
                                        <p>Metal Tech Engineering Factory stands as a leader in high-quality metal fabrication and engineering solutions. Equipped with advanced machinery and a skilled workforce, the facility specializes in producing durable, precision-crafted components for various industrial applications. From structural steelwork to custom metal parts, every project is executed with strict adherence to safety standards and efficiency. </p>
                                    </div>
                                </div>
                            </div>

                             <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic10.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2019</h4>
                                        <h4 className="m-b20">House Lane No.3 Radio Pakistan</h4>
                                        <p>Nestled within the iconic Radio Pakistan premises, House Lane No.3 represents a unique blend of mid-century architecture and cultural heritage. This distinguished residence, originally built for broadcasting personnel, showcases period-specific design elements like arched doorways, teak woodwork, and art deco influences that reflect Pakistan's golden era of radio. </p>
                                    </div>
                                </div>
                            </div>

                            
                             <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic11.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2018</h4>
                                        <h4 className="m-b20">Rendezvous Xpress</h4>
                                        <p>Rendezvous Xpress redefines fast dining with its gourmet approach to quick-service meals. Designed for busy urbanites, this modern eatery combines efficient service with chef-driven recipes, offering fresh, flavorful dishes made from premium ingredients. The contemporary space features sleek counter service, vibrant branding, and comfortable grab-and-go seating—perfect for professionals, students, and families seeking quality meals without the wait. From artisanal sandwiches to specialty coffees, every item balances convenience with uncompromised taste. </p>
                                    </div>
                                </div>
                            </div>

                             <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic12.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2016-17</h4>
                                        <h4 className="m-b20">Starlet Shoes Bank Rd Saddar</h4>
                                        <p>Step into Starlet Shoes, your premier destination for stylish and comfortable footwear at Bank Road, Saddar. Our showroom offers a carefully curated collection of shoes for men, women, and children, blending the latest trends with timeless designs. From casual sneakers to formal loafers, every pair is crafted with quality materials to ensure durability and comfort.

Located in the heart of Saddar’s bustling shopping district, our store provides a welcoming atmosphere where you can explore a wide range of sizes and styles. Whether you're looking for everyday wear or a special occasion, Starlet Shoes delivers affordable fashion without compromising on quality. </p>
                                    </div>
                                </div>
                            </div>

                                    <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic13.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2015</h4>
                                        <h4 className="m-b20">The Smart School</h4>
                                        <p> The Smart School redefines learning through its innovative, technology-driven approach to education. Designed to nurture future-ready students, our institution combines a rigorous academic curriculum with cutting-edge digital tools to create an engaging and dynamic learning environment.

Our classrooms integrate smart boards, e-learning platforms, and interactive resources to enhance comprehension and creativity. Beyond academics, we emphasize critical thinking, problem-solving, and leadership skills through project-based learning and extracurricular activities. With a focus on personalized education, The Smart School ensures each student receives tailored support to excel academically and personally.</p>
                                    </div>
                                </div>
                            </div>


                             <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="our-story-pic-block">
                                        <div className="mt-media our-story-pic">
                                            <img src={require('./../../images/gallery/portrait/pic14.jpg')} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-6">
                                    <div className="mt-box our-story-detail bg-moving bg-cover"  style={{ backgroundImage: 'url(' + img2 + ')' }}>
                                        <h4 className="text-uppercase m-b20">2011-14</h4>
                                        <h4 className="m-b20">Indian High Commission</h4>
                                        <p>Our team delivered premium interior finishing and precision tile installation for the Indian High Commission, combining diplomatic-grade durability with elegant aesthetics. The project featured imported marble and granite flooring with intricate geometric patterns, scratch-resistant surfaces for high-traffic areas, and specialized non-slip tiling in security-sensitive zones—all while incorporating subtle cultural motifs into the contemporary design. Every detail was executed with meticulous craftsmanship to meet the exacting standards of diplomatic infrastructure. </p>
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

export default AboutSummary;