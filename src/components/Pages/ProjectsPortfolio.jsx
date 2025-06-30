import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Banner from "../Elements/Banner";

var bnrimg = require("./../../images/banner/1.jpg");

const filters = [
  { label: "Construction", filter: ".cat-1" },
  { label: "Renovation", filter: ".cat-2" },
  { label: "Commercial", filter: ".cat-3" },
  { label: "Residential", filter: ".cat-4" },
  { label: "Corporate", filter: ".cat-5" },
  { label: "Specialty Contracting", filter: ".cat-6" },
];

const projects = [
  {
    thumb: require("./../../images/projects/SCP.jpg"),
    image: require("./../../images/projects/SCP.jpg"),
    title: "Supreme Court of Pakistan",
    description: "Adal - The Restoration of Pakistan Supreme Court",
    filter: "cat-2",
    link: "/SupremeCourtPakistan",
  },

  {
    thumb: require("./../../images/projects/Bop1.jpg"),
    image: require("./../../images/projects/Bop1.jpg"),
    title: "BOP Bank Road Branch Demolition",
    description: "Controlled Dismantling & Eco-Conscious Disposal",
    filter: "cat-6",
    link: "/BOPDemolition",
  },
  {
    thumb: require("./../../images/projects/portrait/House354/pic5.jpg"),
    image: require("./../../images/projects/portrait/House354/pic5.jpg"),
    title: "House 354",
    description: "Light, Stone & Grain: A Trilogy of Luxury Finishes",
    filter: "cat-1",
    link: "/House354",
  },
  {
    thumb: require("./../../images/projects/portrait/House08/pic11.jpg"),
    image: require("./../../images/projects/portrait/House08/pic11.jpg"),
    title: "House 08",
    description: "The Artisan Residence – Luxury Material Mastery",
    filter: "cat-4",
    link: "/House08",
  },
  {
    thumb: require("./../../images/projects/portrait/UnionCafe/pic6.jpg"),
    image: require("./../../images/projects/portrait/UnionCafe/pic6.jpg"),
    title: "Union Cafe",
    description: "Crafting a Culinary Landmark",
    filter: "cat-1",
    link: "/UnionCafe",
  },
  {
    thumb: require("./../../images/projects/portrait/TechnoEngineering/pic8.jpg"),
    image: require("./../../images/projects/portrait/TechnoEngineering/pic8.jpg"),
    title: "Techno Engineering",
    description: "Where Clean-Up Meets Build-Up.",
    filter: "cat-5",
    link: "/TechnoEngineering",
  },
  {
    thumb: require("./../../images/projects/portrait/CHElectronic/pic1.jpg"),
    image: require("./../../images/projects/portrait/CHElectronic/pic1.jpg"),
    title: "Chaudary Electronics",
    description: "Light, Stone & Grain: A Trilogy of Luxury Finishes",
    filter: "cat-4",
    link: "/CHElectronics",
  },
  {
    thumb: require("./../../images/projects/portrait/Sika/pic3.jpg"),
    image: require("./../../images/projects/portrait/Sika/pic3.jpg"),
    title: "Sika Pakistan",
    description: "Sika x Agha Builders: Building with Chemistry",
    filter: "cat-6",
    link: "/SikaInstallations",
  },
  {
    thumb: require("./../../images/projects/portrait/349/pic4.jpg"),
    image: require("./../../images/projects/portrait/349/pic4.jpg"),
    title: "House 349",
    description: "Helping you and your house become better acquainted.",
    filter: "cat-1",
    link: "/House349",
  },
  {
    thumb: require("./../../images/projects/portrait/Plaza232/pic9.jpg"),
    image: require("./../../images/projects/portrait/Plaza232/pic9.jpg"),
    title: "Plaza 232",
    description: "Plaza No 232, Pack View - Phase 7 Bahria Town",
    filter: "cat-1",
    link: "/Plaza232",
  },
  {
    thumb: require("./../../images/projects/portrait/SuzukiMotors/Pic2.jpg"),
    image: require("./../../images/projects/portrait/SuzukiMotors/Pic2.jpg"),
    title: "Suzkuki Islamabad Motors",
    description: "Transforming an Automotive Hub Without Disrupting Business.",
    filter: "cat-2",
    link: "/SuzukiMotors",
  },
  {
    thumb: require("./../../images/projects/portrait/RendezvousXpress/Pic11.jpg"),
    image: require("./../../images/projects/portrait/RendezvousXpress/Pic11.jpg"),
    title: "Rendezvous Xpress",
    description: "The Centaurus Transformation",
    filter: "cat-3",
    link: "/RendezvousXpress",
  },
];

const SkeletonImage = ({ src, alt, onImageLoad, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    if (onImageLoad) {
      onImageLoad();
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "200px" }}>
      {!loaded && (
        <div
          className="skeleton-img"
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          display: loaded ? "block" : "none",
          objectFit: "cover",
        }}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

const ProjectMasonary = () => {
  const portfolioWrapRef = useRef(null);
  const isotopeRef = useRef(null);

  useEffect(() => {
    if (window.Isotope && portfolioWrapRef.current) {
      isotopeRef.current = new window.Isotope(portfolioWrapRef.current, {
        itemSelector: ".masonry-item",
        transitionDuration: "1s",
        originLeft: true,
      });
    }

    return () => {
      if (isotopeRef.current) {
        isotopeRef.current.destroy();
      }
    };
  }, []);

  const handleFilter = (filter) => (e) => {
    e.preventDefault();
    if (isotopeRef.current) {
      isotopeRef.current.arrange({ filter });
    }
    document.querySelectorAll(".masonry-filter li").forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.parentElement.classList.add("active");
  };

  const handleImageLoad = () => {
    if (isotopeRef.current) {
      isotopeRef.current.layout();
    }
  };

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title="Creating quality urban lifestyles, building stronger communities."
          pagename="Project Masonry"
          bgimage={bnrimg}
        />

        {/* SECTION CONTENT START */}
        <div className="section-full p-tb80 bg-gray inner-page-padding">
          {/* GALLERY CONTENT START */}
          <div className="container-fluid">
            {/* PAGINATION START */}
            <div className="filter-wrap p-b30 text-center">
              <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                <li className="active">
                  <NavLink
                    to={"#"}
                    data-filter="*"
                    data-hover="All"
                    onClick={handleFilter("*")}
                  >
                    All
                  </NavLink>
                </li>
                {filters.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      to={"#"}
                      data-filter={item.filter}
                      data-hover={item.label}
                      onClick={handleFilter(item.filter)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* PAGINATION END */}
            {/* GALLERY CONTENT START */}
            <div
              ref={portfolioWrapRef}
              className="portfolio-wrap gallery-grid-container mfp-gallery"
            >
              {projects.map((item, index) => (
                <div
                  key={index}
                  className={`${item.filter} masonry-item col-lg-3  col-md-4 col-sm-6 m-b30`}
                >
                  <div className="image-effect-one hover-shadow">
                    <NavLink to={item.link}>
                      <SkeletonImage
                        src={item.thumb}
                        alt=""
                        style={{ cursor: "pointer" }}
                        onImageLoad={handleImageLoad}
                      />
                    </NavLink>
                    <div className="figcaption">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      <NavLink to={item.link}>
                        <i className="link-plus bg-primary" />
                      </NavLink>
                    </div>
                    <a className="mfp-link" href={item.image}>
                      <i className="fa fa-arrows-alt" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* GALLERY CONTENT END */}
          </div>
          {/* GALLERY CONTENT END */}
        </div>
        {/* SECTION CONTENT END  */}
      </div>

      <Footer />
    </>
  );
};

export default ProjectMasonary;
