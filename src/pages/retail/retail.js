import "./retail.scss";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import React from 'react';
import caseStudyIcon from "../../assets/img/case-study.svg";
import CuratedProjectsLarge from "../../partials/curated-large/CuratedProjectsLarge";
import Newsletter from "../../partials/newsletter/newsletter";
import whiteArrow from "../../assets/img/global/white-arrow.svg";
import playIcon from "../../assets/img/global/play.svg";
import playDarkIcon from "../../assets/img/podcast/play-dark.svg";
import submitArrow from "../../assets/img/global/red-arrow.svg";
import podcastBackgroundOne from "../../assets/img/podcast/large-podcast-bg1.webp";
import podcastBackgroundTwo from "../../assets/img/podcast/large-podcast-bg2.webp";
import podcastBackgroundThree from "../../assets/img/podcast/large-podcast-bg3.webp";
import podcastBackgroundFour from "../../assets/img/podcast/large-podcast-bg4.webp";
import podcastBackgroundFive from "../../assets/img/podcast/large-podcast-bg5.webp";
import podcastImage from "../../assets/img/podcast/large-podcast-img1.webp";
import podcastImage4 from "../../assets/img/podcast/large-podcast-img4.webp";
import tinyPot from "../../assets/img/podcast/tiny-2-pod.webp";
import flipkartLogo from "../../assets/img/podcast/flipkart.webp";
import onethingLogo from "../../assets/img/podcast/onething-s-logo.webp";
import schbangLogo from "../../assets/img/podcast/schbang-logo.webp";

import cocaCola from "../../assets/img/industry/retail/projects/coca-cola.webp";
import healthKart from "../../assets/img/industry/retail/projects/healthkart.webp";
import suprDaily from "../../assets/img/industry/retail/projects/suprDaily.webp";
import posableProject from "../../assets/img/industry/retail/projects/posable.webp";

import bfsiBanner from "../../assets/img/industry/retail/banner.webp";
import projectArrow from "../../assets/img/svg/right-arrow.svg";

import healthkartTestimonial from "../../assets/img/industry/retail/testimonials/healthkart-testimonial.webp";
import cokeTestimonial from "../../assets/img/industry/retail/testimonials/coke-testimonial.webp";
import suprdailyTestimonial from "../../assets/img/industry/retail/testimonials/suprdaily-testimonial.webp";
import rightArrow from "../../assets/img/svg/right-arrow.svg";
import leftArrow from "../../assets/img/svg/left-arrow.svg";

import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Retail = () => {
  useEffect(() => {
    addPageMetas(PAGE_METAS.retail.title, PAGE_METAS.retail.desc);
  }, []);
  
  const [navLeft, setNavLeft] = useState();
  const [navRight, setNavRight] = useState();

  let first_grad = document?.getElementById("first_grad");
  let second_grad = document?.getElementById("second_grad");
  if (first_grad != null && second_grad != null) {
    first_grad.classList.replace("type-2", "type-3");
    first_grad.style.top = "64px";
    first_grad.style.left = "180px";
    second_grad.classList.replace("w", "type-3");
  }
  window.addEventListener("scroll", function () {
    // to add animation to selected element if the element lies in the viewport.
    var isInViewport = function (elem) {
      var bounding = elem?.getBoundingClientRect();
      return (
        bounding?.top >= 0 &&
        bounding?.left >= 0 &&
        bounding?.bottom <=
          (window?.innerHeight || document?.documentElement?.clientHeight) &&
        bounding?.right <=
          (window?.innerWidth || document?.documentElement?.clientWidth)
      );
    };

    let third_grad = document.getElementById("third_grad");

    if (isInViewport(first_grad)) {
      first_grad?.classList.replace("type-2", "type-3");
      first_grad.style.top = "64px";
      first_grad.style.left = "180px";
    } else {
      first_grad?.classList.replace("type-3", "type-2");
      first_grad.style.top = "64px";
      first_grad.style.left = "180px";
    }

    if (isInViewport(second_grad)) {
      second_grad?.classList.replace("w", "type-3");
    } else {
      second_grad?.classList.replace("type-3", "w");
    }

    if (isInViewport(third_grad)) {
      third_grad?.classList.replace("type-2", "type-3");
    } else {
      third_grad?.classList.replace("type-3", "type-2");
    }
  });

  const sliderPrev = () => {
    navRight.slickPrev();
  };

  const sliderNext = () => {
    navRight.slickNext();
  };

  useEffect(() => {
    document.body.classList.add("industry-page");
    document.body.classList.add("retail-page");
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
              <span className="industry-tag gradient-text">Retail</span>
              Amplifying cart value for modern marketplaces
            </h2>
            <div
              id="first_grad"
              className="grad-img ab_grad grad type-2 medium"
            ></div>
            <div
              id="second_grad"
              className="grad-img ab_grad grad mesh w medium"
            ></div>
            <figure className="industry-banner left_container">
              <img loading="lazy" src={bfsiBanner} className="banner-img" alt="" />
            </figure>
          </div>
        </section>
        <section className="industry-intro-wrapper blur-overlay">
          <div className="wrapp_">
            <div className="container">
              <div
                id="third_grad"
                className="grad-img ab_grad grad type-2 small"
              ></div>
              <div className="content left_container">
                <p className="intro-text">
                  We prioritize personalisation and functionality to empower
                  online shoppers with a seamless buying journey. As the number
                  of consumers resorting to online shopping continues to rise,
                  providing an uninterrupted{" "}
                  <span>digital retail experience</span> has become paramount if
                  the aim is to invoke more purchases.
                </p>
                <div className="stats-container">
                  <h3 className="section-heading">Look at what data says</h3>
                  <div className="stats-flex colm-1">
                    <div className="stat-div">
                      <h5>88%</h5>
                      <p>
                        of online shoppers are less likely to return to a site
                        after a bad customer experience
                      </p>
                    </div>
                    <div className="stat-div">
                      <h5>23%</h5>
                      <p>
                        of online shoppers will share a positive shopping
                        experience with 10+ people
                      </p>
                    </div>
                  </div>
                  <div className="stats-flex colm-2">
                    <div className="stat-div">
                      <h5>46%</h5>
                      <p>
                        of people say they would not purchase from a brand again
                        if they had an interruptive mobile experience
                      </p>
                    </div>
                    <div className="stat-div">
                      <h5>60%</h5>
                      <p>
                        of online shoppers use only mobile devices to make
                        purchases
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
                Top retail platforms, transformed with design
              </h3>
            </div>
            <div className="post-listing">
              <div className="project-industry type--1">
                <a href="/projects/retail/healthkart/">
                  <figure>
                    <img loading="lazy"
                      src={healthKart}
                      className="project-thumbnail"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="var-bold">HealthKart</h6>
                      <p>
                        We reduced the bounce rate by 25% for India’s no. 1
                        sports and nutrition supplement marketplace.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="project-industry type--2">
                <a href="/projects/retail/coca-cola/">
                  <figure>
                    <img loading="lazy" src={cocaCola} className="project-thumbnail" alt="" />
                    <figcaption>
                      <h6 className="var-bold">Coca-cola</h6>
                      <p>
                        We built a D2C shopping experience for a multinational
                        beverage company, leading to a 55% increase in its cart
                        value.
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
                <a href="/projects/retail/suprdaily/">
                  <figure>
                    <img loading="lazy" src={suprDaily} className="project-thumbnail" alt="" />
                    <figcaption>
                      <h6 className="var-bold">SuprDaily</h6>
                      <p>
                        By designing accessible buying flows for India’s pioneer
                        player in micro-delivery, we increased their order value
                        by 38%.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="project-industry type--4">
                <a href="/projects/retail/posable/">
                  <figure>
                    <img loading="lazy"
                      src={posableProject}
                      className="project-thumbnail"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="var-bold">POSable</h6>
                      <p>
                        Crafting a completely digital POS system, allowing
                        business owners to fully-track their sales remotely.
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
                        <img loading="lazy"
                          src={healthkartTestimonial}
                          className="img-fluid"
                          alt="Testimonial Onething"
                        />
                      </figure>
                    </div>

                    <div>
                      <figure>
                        <img loading="lazy"
                          src={cokeTestimonial}
                          className="img-fluid"
                          alt="Testimonial Onething"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img loading="lazy"
                          src={suprdailyTestimonial}
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
                        The team provided intuitive UX flows, user and
                        competitor understanding and a high quality UI that
                        encapsulates HK’s brand identity. The best part was that
                        our team was included in the process and decisions, and
                        was consulted at every milestone.
                      </p>
                      <p className="fs-20 testifier-details">
                        Manish Goyal, <br />
                        <span>Head of Product and Analytics, Healthkart</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        The design work & attention to detail was commendable.
                        This project was a new learning experience for me and
                        the team made sure that they made a positive impact!
                      </p>
                      <p className="fs-20 testifier-details">
                        Aabir Chatterjee, <br />
                        <span>Product Manager, Cocacola</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Their team has a stunning ability to deliver well in
                        complex use cases. They use straight thinking and
                        effective improvisation of design principles to make
                        experiences more intuitive.
                      </p>
                      <p className="fs-20 testifier-details">
                        Ravish Malik, <br />
                        <span>Senior Product Designer, Swiggy</span>
                      </p>
                    </div>
                  </Slider>
                  <ul className="list-unstyled d-flex custom_arrows">
                    <li className="prev" onClick={sliderPrev}>
                      <img loading="lazy"
                        src={leftArrow}
                        className="img-fluid"
                        alt="Left Arrow"
                      />
                    </li>
                    <li className="next" onClick={sliderNext}>
                      <img loading="lazy"
                        src={rightArrow}
                        className="img-fluid"
                        alt="Right Arrow"
                      />
                    </li>
                  </ul>
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
                  <figure>
                    <img loading="lazy" src={podcastImage} className="podcast-img2" alt="" />
                  </figure>
                  <a
                    className="z-indx"
                    href="/podcast/e-commerce-for-the-next-billion-with-bharath-ram-flipkart/"
                  >
                    <div className="card-body">
                      <div className="d-flex jc-sb">
                        <span className="badge trans-badge">Podcast</span>
                        <img loading="lazy"
                          src={flipkartLogo}
                        
                          className="icon icon-share"
                          alt=""
                        />
                      </div>
                      <div className="podcast_mx-wdth large-ban">
                        <div className="text">
                          <span className="txt-an-grad">Ecommerce</span> for the
                          Next Billion
                        </div>
                        <div className="in-flx">
                          <a>
                            <img loading="lazy"
                              src={playDarkIcon}
                              className="icon icon-share"
                              alt=""
                              height="auto"
                              width="100%"
                            />
                          </a>
                          <p className="vd_ply">
                            <b>Bharath Ram</b> (SVP Growth, Flipkart){" "}
                            <b>&amp;</b> <br />
                            <b>Divanshu</b> (Co-Founder, Onething)
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card bg-red custom-card podcast_sm_cards position-relative">
                  <a href="/blogs/e-commerce-strategies-to-convert-first-time-visitors-to-loyal-customers/">
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge trans-badge">Blogs</span>
                      </div>
                      <div className="podcast_mx-wdth">
                        <div className="text">
                          Ecommerce Strategies to Gain Loyal Customers
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
                <div className="card bg-sky-blue custom-card podcast_sm_cards position-relative">
                  <a href="/blogs/ux-design-in-retail-how-retail-experience-design-has-changed/">
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge trans-badge">Blogs</span>
                      </div>
                      <div className="podcast_mx-wdth">
                        <div className="text" style={{ width: "90%" }}>
                          Transformation of Retail Experience Design
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
                  className="card bg-violet custom-card podcast_sm_cards position-relative"
                  style={{ backgroundImage: `url(${podcastBackgroundFive})` }}
                >
                  <a
                    href="/podcast/decoding-the-direct-to-consumer-landscape-with-arjun-vaidya-dr-vaidyas"
                    className="z-indx"
                  >
                    <div className="card-body">
                      <div className="d-flex jc-sb">
                        <span className="badge trans-badge">Podcast</span>
                      </div>
                      <div className="podcast_mx-wdth fs-26">
                        <div className="text">
                          Decoding the <br />
                          D2C landscape
                        </div>
                        <div className="d-flex justify-content-between">
                          <a className="bttn bttn-secondary bttn-secondary-white">
                            <span>Explore</span>
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
                      <img loading="lazy"
                        src={projectArrow}
                        className="icon-arrow icon"
                        alt=""
                      />
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
                      <img loading="lazy"
                        src={projectArrow}
                        className="icon-arrow icon"
                        alt=""
                      />
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
                      <img loading="lazy"
                        src={projectArrow}
                        className="icon-arrow icon"
                        alt=""
                      />
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
};
export default Retail;

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
