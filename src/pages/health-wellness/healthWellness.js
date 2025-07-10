import "./health-and-wellness.scss";
import React from 'react';
import { useEffect, useState } from "react";
import Slider from "react-slick";

import caseStudyIcon from "../../assets/img/case-study.svg";
import comingSoonIcon from "../../assets/img/coming-soon.svg";

// import CuratedProjectsLarge from "../../partials/curated-large/CuratedProjectsLarge";
import Newsletter from "../../partials/newsletter/newsletter";
import whiteArrow from "../../assets/img/global/white-arrow.svg";
import podcastBackgroundOne from "../../assets/img/podcast/large-podcast-bg1.webp";

import podcastBackgroundFive from "../../assets/img/podcast/large-podcast-bg5.webp";
import '../../partials/curated-large/curated-projects-large.scss'
import itcUnikid from "../../assets/img/industry/health/projects/itc.webp";
import healthKart from "../../assets/img/industry/retail/projects/healthkart.webp";
import atomProject from "../../assets/img/industry/health/projects/atom.webp";
import noiseProject from "../../assets/img/industry/health/projects/noise.webp";

import healthwellnessBanner from "../../assets/img/industry/health/banner.webp";
import projectArrow from "../../assets/img/svg/right-arrow.svg";
import healthkartTestimonial from "../../assets/img/industry/retail/testimonials/healthkart-testimonial.webp";
// import cokeTestimonial from "../../assets/img/industry/retail/testimonials/coke-testimonial.webp";
// import suprdailyTestimonial from "../../assets/img/industry/retail/testimonials/suprdaily-testimonial.webp";
// import rightArrow from "../../assets/img/svg/right-arrow.svg";
// import leftArrow from "../../assets/img/svg/left-arrow.svg";

import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const HealthWellness = () => {
  const [navLeft, setNavLeft] = useState();
  const [navRight, setNavRight] = useState();

  const sliderPrev = () => {
    navRight.slickPrev();
}

const sliderNext = () => {
    navRight.slickNext();
}

useEffect(() => {
    document.body.classList.add("industry-page");
    document.body.classList.add("health-and-wellness-page");
}, []);
let location = useLocation();

return (
  <>
    <Helmet>
      <link
        rel="preload dns-prefetch canonical"
        href={`https://www.onething.design${location?.pathname}`}
      ></link>
    </Helmet>
    <div className="industry-page-wrapper page-wrapper">
      <section className="industry_banner blur-overlay">
        <div className="left_container position-relative">
          <h2 className="wrap_">
            <span className="industry-tag gradient-text">
              Health and Wellness
            </span>
            Sustainable solutions to democratize healthcare
          </h2>
          <div className="grad-img ab_grad grad type-2 medium"></div>
          <div className="grad-img ab_grad grad mesh w medium"></div>
          <figure className="industry-banner left_container">
            <img
              loading="lazy"
              src={healthwellnessBanner}
              className="banner-img"
              alt=""
            />
          </figure>
        </div>
      </section>
      <section className="industry-intro-wrapper blur-overlay">
        <div className="wrapp_">
          <div className="container">
            <div className="grad-img ab_grad grad type-2 small"></div>
            <div className="content left_container">
              <p className="intro-text">
                The healthcare industry is undergoing a significant
                transformation. With leading voices advocating a
                consumer-centric approach, we dedicatedly build digital
                solutions that enhance patient experience, revolutionize care
                delivery and help users monitor and take charge of their health.
                Partner with us to revolutionize your healthcare offerings and
                create <span>adaptable solutions</span> that comply with the
                existing standards and also empower users.
              </p>
              <div className="stats-container">
                <h3 className="section-heading">Look at what data says</h3>
                <div className="stats-flex colm-1">
                  <div className="stat-div">
                    <h5>$660B</h5>
                    <p>
                      is the projected revenue for the digital health market by
                      2025
                    </p>
                  </div>
                  <div className="stat-div">
                    <h5>62%</h5>
                    <p>
                      of practitioners in the United States were unable to
                      access telehealth through their Electronic Health Records
                      (EHR) systems during the pandemic
                    </p>
                  </div>
                </div>
                <div className="stats-flex colm-2">
                  <div className="stat-div">
                    <h5>32%</h5>
                    <p>
                      improved cost efficiency can be achieved if healthcare
                      players invest in digital transformation
                    </p>
                  </div>
                  <div className="stat-div">
                    <h5>92%</h5>
                    <p>
                      increase projected in consumer(patient) satisfaction &
                      engagement when businesses consider CX design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="related-industries-posts blur-overlay">
        <div className="container">
          <div className="heading-wrapper">
            <h3 className="section-heading">
              Building products for sustainable well-being
            </h3>
          </div>
          <div className="post-listing">
            <div className="project-industry type--1">
              <a
                href="/projects/retail/healthkart/"
                data-cursor-img={caseStudyIcon}
              >
                <figure>
                  <img
                    loading="lazy"
                    src={healthKart}
                    className="project-thumbnail"
                    alt=""
                  />
                  <figcaption>
                    <h6 className="var-bold">HealthKart</h6>
                    <p>
                      A wellness space where users can track and be in-charge of
                      their health via a personalized ecommerce experience.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="project-industry type--2">
              <a
                href="/projects/health-wellness/itc-unikid/"
                data-cursor-img={caseStudyIcon}
              >
                <figure>
                  <img
                    loading="lazy"
                    src={itcUnikid}
                    className="project-thumbnail"
                    alt=""
                  />
                  <figcaption>
                    <h6 className="var-bold">ITC Unikid</h6>
                    <p>
                      A phygital ecosystem that combines the ease of online
                      subscription models, and digital personalization tools to
                      create a nutrition tracking product aimed at child
                      development.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
        <div className="podcast-wrapper">
          <div className="left_container"></div>
        </div>
        <div className="post-listing">
          <div className="container">
            <div className="project-industry type--3">
              <a href="javascript:void(0)" data-cursor-img={comingSoonIcon}>
                <figure>
                  <img
                    loading="lazy"
                    src={atomProject}
                    className="project-thumbnail"
                    alt=""
                  />
                  <figcaption>
                    <h6 className="var-bold">Atom</h6>
                    <p>
                      We designed this habit-building app basis the principles
                      of behavioral psychology, which led to the platform
                      gaining 500K+ new users, along with a 4.9 rating on the
                      Play Store.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div className="project-industry type--4">
              <a href="/projects/iot/noise/" data-cursor-img={caseStudyIcon}>
                <figure>
                  <img
                    loading="lazy"
                    src={noiseProject}
                    className="project-thumbnail"
                    alt=""
                  />
                  <figcaption>
                    <h6 className="var-bold">Noise</h6>
                    <p>
                      Noise Champ 2 made to the ‘Amazon choice product’; A
                      wearable experience for kids, designed to add a new layer
                      to parenting & habit development.
                    </p>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="testimonials-section-wrapper">
        <section className="testimonials-section">
          <div className="container">
            <div className="row m-0">
              <div className="col-md-4">
                <Slider
                  className="testimonials-img-slider"
                  {...settings}
                  asNavFor={navRight}
                  ref={(sliderLeft) => setNavLeft(sliderLeft)}
                >
                  <div>
                    <figure>
                      <img
                        loading="lazy"
                        src={healthkartTestimonial}
                        className="img-fluid"
                        alt="Testimonial Onething"
                      />
                    </figure>
                  </div>
                </Slider>
              </div>
              <div className="col-md-8">
                <Slider
                  className="testimonials-text-slider"
                  {...testimonialsTest}
                  asNavFor={navLeft}
                  ref={(sliderRight) => setNavRight(sliderRight)}
                >
                  <div>
                    <p>
                      The team provided intuitive UX flows, user and competitor
                      understanding and a high quality UI that encapsulates HK’s
                      brand identity. The best part was that our team was
                      included in the process and decisions, and was consulted
                      at every milestone.
                    </p>
                    <p className="fs-20 testifier-details">
                      Manish Goyal, <br />
                      <span>Head of Product and Analytics, Healthkart</span>
                    </p>
                  </div>
                </Slider>
                {/*<ul className="list-unstyled d-flex custom_arrows">
    <li className="prev" onClick={sliderPrev}>
    <img loading="lazy" src={leftArrow} className="img-fluid" alt="Left Arrow" />
    </li>
    <li className="next" onClick={sliderNext}>
    <img loading="lazy" src={rightArrow} className="img-fluid" alt="Right Arrow" />
    </li>
    </ul>*/}
              </div>
            </div>
          </div>
        </section>
      </div>













    <div className="curated-large-wrapper">
    <section className="curated-content d-md-block d-none">
    <div className="container">
    <div className="curated-cards">
    <div
    className="card bg-violet custom-card podcast_lg_cards position-relative"
    style={{ backgroundImage: `url(${podcastBackgroundOne})` }}
    >
    <a className="z-indx" href="blogs/using-human-centred-design-in-healthtech/" >
    <div className="card-body">
    <div className="d-flex jc-sb">
    <span className="badge trans-badge">Blogs</span>
    </div>
    <div className="podcast_mx-wdth large-ban">
    <div className="text">
    Human-centered design in healthcare
    </div>
    <div className="in-flx">
    <div className="d-flex justify-content-between">
    <a className="bttn bttn-secondary bttn-secondary-white">
    <span>Read More</span>
    <img loading="lazy"
    src={whiteArrow}
    className="icon icon-share"
    alt=""
    />
    </a>
    <span className="read-minutes">3 mins read</span>
    </div>
    </div>
    </div>
    </div>
    </a>
    </div>
    <div className="card bg-red custom-card podcast_sm_cards position-relative">
    <a href="/blogs/how-iot-may-transform-healthcare-in-the-coming-future/">
    <div className="card-body">
    <div className="d-flex">
    <span className="badge trans-badge">Blogs</span>
    </div>
    <div className="podcast_mx-wdth">
    <div className="text">How IoT may transform healthcare </div>
    <div className="d-flex justify-content-between">
    <a className="bttn bttn-secondary bttn-secondary-white">
    <span>Read More</span>
    <img loading="lazy"
    src={whiteArrow}
    className="icon icon-share"
    alt=""
    />
    </a>
    <span className="read-minutes">5 mins read</span>
    </div>
    </div>
    </div>
    </a>
    </div>
    <div className="card bg-sky-blue custom-card podcast_sm_cards position-relative">
    <a href="/blogs/insights-for-healthcare-product-marketing/">
    <div className="card-body">
    <div className="d-flex">
    <span className="badge trans-badge">Blogs</span>
    </div>
    <div className="podcast_mx-wdth">
    <div className="text" style={{ width: "90%" }}>
    Insights for healthcare product marketing 
    </div>
    <div className="d-flex justify-content-between">
    <a className="bttn bttn-secondary bttn-secondary-white">
    <span>Read More</span>
    <img loading="lazy"
    src={whiteArrow}
    className="icon icon-share"
    alt=""
    />
    </a>
    <span className="read-minutes">9 mins read</span>
    </div>
    </div>
    </div>
    </a>
    </div>
    <div
    className="card bg-violet custom-card podcast_sm_cards position-relative" style={{ backgroundImage: `url(${podcastBackgroundFive})` }}>
    <a
    href="/blogs/designing-with-care-for-healthcare/"
    className="z-indx"
    >
    <div className="card-body">
    <div className="d-flex jc-sb">
    <span className="badge trans-badge">Blogs</span>
    </div>
    <div className="podcast_mx-wdth fs-26">
    <div className="text">Designing with<br/> care for healthcare</div>
    <div className="d-flex justify-content-between">
    <a className="bttn bttn-secondary bttn-secondary-white">
    <span>Read More</span>
    <img loading="lazy"
    src={whiteArrow}
    className="icon icon-share"
    alt=""
    />
    </a>
    </div>
    </div>
    </div>
    </a>
    </div>

    <div className="card custom-card podcast_email bg-white">
    <Newsletter heading={"Subscribe to our newsletter"} />
    </div>
    </div>
    </div>
    </section>
    </div>
    <section className="other--industries--wrapper">
    <div className="container">
    <h3 className="section-heading">Other Industries</h3>
    <div className="other-industries-listing">
    <ul className="related-industries-list">
    <li>
    <a href="/bfsi">
    <h5>BFSI</h5>
    <figure>
    <img loading="lazy" src={projectArrow} className="icon-arrow icon" alt="" />
    </figure>
    </a>
    </li>
    <li>
    <a href="javascript:void(0)">
    <h5>
    Education
    <span className="gradient-text">(Coming Soon)</span>
    </h5>
    <figure>
    <img loading="lazy" src={projectArrow} className="icon-arrow icon" alt="" />
    </figure>
    </a>
    </li>
    <li>
    <a href="javascript:void(0)">
    <h5>
    Media
    <span className="gradient-text">(Coming Soon)</span>
    </h5>
    <figure>
    <img loading="lazy" src={projectArrow} className="icon-arrow icon" alt="" />
    </figure>
    </a>
    </li>
    </ul>
    </div>
    </div>
    </section>
    </div>
  </>
);
}
export default HealthWellness;


var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

var testimonialsTest = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};