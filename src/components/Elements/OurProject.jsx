import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const filters = [
  { label: "Construction", filter: ".cat-1" },
  { label: "Commercial", filter: ".cat-4" },
  { label: "Renovation", filter: ".cat-2" },
  { label: "Residential", filter: ".cat-3" },
  { label: "Corporate", filter: ".cat-5" },
  { label: "Specialty Contracting", filter: ".cat-6" },
];

const projects = [
  {
    image: require("./../../images/projects/SCP.jpg"),
    title: "Supreme Court Of Pakistan",
    address: "Constitution Ave, G-5/2 Red Zone, Islamabad",
    width: "col-md-3",
    filter: "cat-2",
    link: "/SupremeCourtPakistan",
  },
  {
    image: require("./../../images/projects/portrait/349/House349c.jpg"),
    title: "House 349",
    address: "Intellectual Village - Bahria Town Phase 7, RWP",
    width: "col-md-3",
    filter: "cat-1",
    link: "/House349",
  },
  {
    image: require("./../../images/projects/portrait/House08/pic2.jpg"),
    title: "House 08",
    address: "House 08, Bahria Town, Islamabad",
    width: "col-md-3",
    filter: "cat-6",
    link: "/House08",
  },
  {
    image: require("./../../images/projects/portrait/House354/pic5.jpg"),
    title: "House 354",
    address: "House 354, Intellectual Village, Bahria Town ",
    width: "col-md-3",
    filter: "cat-1",
    link: "/House354",
  },
  {
    image: require("./../../images/projects/portrait/CHElectronic/pic1.jpg"),
    title: "Ch Electronics",
    address: "Opposite, Punjab Food Authority Building, Rawalpindi ",
    width: "col-md-3",
    filter: "cat-3",
    link: "/CHElectronics",
  },
  {
    image: require("./../../images/projects/portrait/UnionCafe/pic6.jpg"),
    title: "Union Cafe",
    address: "Shahid Plaza, F6/4, Islamabad",
    width: "col-md-3",
    filter: "cat-1",
    link: "/UnionCafe",
  },
  {
    image: require("./../../images/projects/portrait/Plaza232/pic9.jpg"),
    title: "Plaza232",
    address: "Plaza No 232, Pack View - Phase 7 Bahria",
    width: "col-md-3",
    filter: "cat-",
    link: "/Plaza232",
  },
  {
    image: require("./../../images/projects/pic-l-5.jpg"),
    title: "Techno Engineering",
    address: "Near Faisal Hills",
    width: "col-md-6",
    filter: "cat-6",
    link: "/TechnoEngineering",
  },
  {
    image: require("./../../images/projects/Bop1.jpg"),
    title: "BOP Demolition",
    address: "Bank Rd Branch, Saddar, Rawalpindi",
    width: "col-md-3",
    filter: "cat-5",
    link: "/BOPDemolition",
  },
  {
    image: require("./../../images/projects/RE.jpg"),
    title: "Rendezvous Xpress",
    address: "4th Jinnah Avenue, Centaurus, Islamabad",
    width: "col-md-3",
    filter: "cat-4",
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
    <div style={{ position: "relative", width: "100%" }}>
      {!loaded && (
        <div
          className="skeleton-img"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            minHeight: "200px",
          }}
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

const OurProject = () => {
  const portfolioWrapRef = useRef(null);
  const isotopeRef = useRef(null);

  useEffect(() => {
    if (window.Isotope && portfolioWrapRef.current) {
      isotopeRef.current = new window.Isotope(portfolioWrapRef.current, {
        itemSelector: ".masonry-item",
        transitionDuration: "1s",
        originLeft: true,
        stamp: ".stamp",
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
      <div className="section-full mobile-page-padding p-t80 p-b30 square_shape2 ">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="mt-separator-outer separator-left">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one ">
                  <span className="font-weight-300 text-primary">Our</span>{" "}
                  Project
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}
          <div className="section-content">
            <div
              ref={portfolioWrapRef}
              className="portfolio-wrap row mfp-gallery product-stamp clearfix"
            >
              {/* COLUMNS 1 */}
              <div className="stamp col-md-3 col-sm-6 m-b30">
                <div className="bg-gray p-a30">
                  <div className="filter-wrap">
                    <ul className="filter-navigation masonry-filter text-uppercase">
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
                </div>
              </div>
              {/* COLUMNS 2 */}
              {projects.map((item, index) => (
                <div
                  key={index}
                  className={`${item.filter} masonry-item ${item.width} col-sm-6 m-b30`}
                >
                  <div className="mt-box   image-hover-block">
                    <div className="mt-thum-bx">
                      <SkeletonImage
                        src={item.image}
                        alt=""
                        onImageLoad={handleImageLoad}
                      />
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
          </div>
        </div>
        <div className="hilite-title text-right p-l50 text-uppercase text-pop-up-top">
          <strong>Projects</strong>
        </div>
      </div>
    </>
  );
};

export default OurProject;
