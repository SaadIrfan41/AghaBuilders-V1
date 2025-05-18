import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Commercial", filter: ".cat-3" },
    { label: "Residential", filter: ".cat-4" },
    { label: "Corporate", filter: ".cat-5" },
    { label: "Specialty Contract", filter: ".cat-6" },

];

const projects = [
    {
        image: require('./../../images/projects/Supremecourt2.jpg'),
        title: 'Supreme Court of Pakistan',
        address: 'Constitution Ave, G-5/2 Red Zone, Islamabad',
        filter: 'cat-2',
        link: '/SupremeCourtPakistan'
    },
    {
        image: require('./../../images/projects/portrait/349/pic4.jpg'),
        title: 'House 349',
        address: 'Intellectual Village - Bahria Town Phase 7, RWP',
        filter: 'cat-1',
        link: '/House349'

    },
    {
        image: require('./../../images/projects/portrait/House08/pic11.jpg'),
        title: 'House 08',
        address: 'House 08, Bahria Town, Islamabad',
        filter: 'cat-4',
        link: '/House08'
    },
    {
        image: require('./../../images/projects/portrait/House354/pic11.jpg'),
        title: 'House 354',
        address: 'House 354, Intellectual Village, Bahria Town ',
        filter: 'cat-1',
        link: '/House354'
    },
    {
        image: require('./../../images/projects/portrait/CHElectronic/pic8.jpg'),
        title: 'Chaudary Electronics',
        address: 'Opposite, Punjab Food Authority Building, Rawalpindi ',
        filter: 'cat-6',
        link: '/CHElectronics'
    },
    {
        image: require('./../../images/projects/UnionCafe.jpg'),
        title: 'Union Café',
        address: 'Shahid Plaza, F6/4, Islamabad',
        filter: 'cat-3',
        link: '/UnionCafe'
    },
    {
        image: require('./../../images/projects/portrait/SuzukiMotors/Pic5.jpg'),
        title: 'Suzuki Motors Islamabad',
        address: 'Pothwar Road، INDUSTRIAL AREA I 9/3 I-9, Islamabad',
        filter: 'cat-3',
        link: '/SuzukiMotors'
    },
    {
        image: require('./../../images/projects/portrait/Plaza232/pic10.jpg'),
        title: 'Plaza No.232',
        address: 'Plaza No 232, Pack View - Phase 7 Bahria',
        filter: 'cat-5',
        link: '/Plaza232'
    },
]

var img1 = require('./../../images/background/bg5.jpg');

class OurProject3 extends React.Component {
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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
                <div className="section-full p-t80 p-b50 bg-parallax bg-cover mobile-page-padding" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + img1 + ')' }}>
                    <div className="container">
                        {/* TITLE START */}
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator text-white">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our</span> Project</h2>
                                </div>
                            </div>
                        </div>
                        {/* TITLE END */}
                        {/* PAGINATION START */}
                        <div className="filter-wrap p-b15 center">
                            <ul className="masonry-filter link-style  text-uppercase white">
                                <li className="active"><NavLink to={"#"} data-filter="*" data-hover="All">All</NavLink></li>
                                {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter} data-hover={item.label}>{item.label}</NavLink></li>
                                ))}

                            </ul>
                        </div>
                        {/* PAGINATION END */}
                        {/* GALLERY CONTENT START */}
                        <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} masonry-item col-md-3 col-sm-6 m-b30`}>
                                    <div className="mt-box   image-hover-block">
                                        <div className="mt-thum-bx">
                                            <img src={item.image} alt=""/>
                                        </div>
                                        <div className="mt-info  p-t20 text-white">
                                            <h4 className="mt-tilte m-b10 m-t0">{item.title}</h4>
                                            <p className="m-b0">{item.address}</p>
                                        </div>
                                        <NavLink to={item.link}></NavLink>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                </div>
            </>
        );
    }
};

export default OurProject3;