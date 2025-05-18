import React from 'react';
import { NavLink } from 'react-router-dom';

// Commented-out blog object for future use
/*
{
    image: require('./../../images/blog/default/thum1.jpg'),
    title: 'Upcoming Construction Events in Islamabad (2024-2025)',
    description: "Islamabad, Pakistan's rapidly growing capital, is set to host several key construction, architecture, and real estate events in the coming months. These exhibitions, conferences, and trade shows will bring together industry leaders, developers, contractors, and policymakers to discuss innovations, regulations, and investment opportunities.",
    date: '20 Nov',
    year: '2024'
}
*/

const blogs = [
    {
        image: require('./../../images/blog/default/thum2.jpg'),
        title: 'The Future of Solar Energy in Pakistan: Benefits, Challenges & Opportunities (2025 Guide)',
        description: 'Solar energy is rapidly transforming Pakistan\'s power sector, offering a sustainable, cost-effective solution to the country\'s energy crisis. With over 300 sunny days per year, Pakistan has immense potential for solar power adoption—but what does this mean for homeowners, businesses, and the national grid?',
        date: '15 March',
        year: '2025'
    }
];

class BlogList extends React.Component {
    render() {
        return (
            <>
                <div className="col-lg-8 col-md-8">
                    <div className="news-listing ">
                        {blogs.map((item, index) => (
                            <div className="blog-post blog-lg date-style-3 block-shadow" key={index}>
                                <div className="mt-post-media mt-img-effect zoom-slow">
                                    <NavLink to={"/Blogpostdetails"}><img src={item.image} alt=""/></NavLink>
                                </div>
                                <div className="mt-post-info p-a30 p-m30 bg-white">
                                    <div className="mt-post-title ">
                                        <h4 className="post-title"><NavLink to={"/Blogpostdetails"}>{item.title}</NavLink></h4>
                                    </div>
                                    <div className="mt-post-meta ">
                                        <ul>
                                            <li className="post-date"> <i className="fa fa-calendar text-primary" /><strong>{item.date}</strong> <span> {item.year}</span> </li>
                                            <li className="post-author"><i className="fa fa-user text-primary" /><NavLink to={"/Blogpostdetails"}>By <span>Admin</span></NavLink> </li>
                                        </ul>
                                    </div>
                                    <div className="mt-post-text">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="clearfix">
                                        <div className="mt-post-readmore pull-left">
                                            <NavLink to={"/Blogpostdetails"} title="READ MORE" rel="bookmark" className="site-button-link">Read More<i className="fa fa-angle-right arrow-animation" /></NavLink>
                                        </div>
                                        <div className="widget_social_inks pull-right">
                                            <ul className="social-icons social-radius social-dark m-b0">
                                                <li>
                                                    <a href="mailto:aghabuildersofficial@gmail.com" className="fa fa-google" target="_blank" rel="noopener noreferrer">
                                                        <span className="sr-only">Email aghabuildersofficial@gmail.com</span>
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>                
                        ))}
                        
                    </div>
                    <ul className="pagination m-tb0">
                      <li className="disabled"><span>«</span></li>
                      <li className="disabled"><span>1</span></li>
                      <li className="disabled"><span>2</span></li>
                      <li className="disabled"><span>3</span></li>
                      <li className="disabled"><span>4</span></li>
                      <li className="disabled"><span>5</span></li>
                      <li className="disabled"><span>»</span></li>
                  </ul>
                </div>
            </>
        );
    }
};

export default BlogList;