import "./bfsi.scss";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import React from 'react';
import Newsletter from "../../partials/newsletter/newsletter";
import whiteArrow from "../../assets/img/global/white-arrow.svg";
import podcastBackgroundOne from "../../assets/img/podcast/large-podcast-bg1.webp";
import podcastBackgroundFive from "../../assets/img/podcast/large-podcast-bg5.webp";
import podcastImage from "../../assets/img/podcast/large-podcast-img1.webp";
import podcastImage5 from "../../assets/img/podcast/large-podcast-img5r.webp";
import flipkartLogo from "../../assets/img/podcast/flipkart.webp";
import schbangLogo from "../../assets/img/podcast/schbang-logo.webp";

import mmmProject from "../../assets/img/industry/bfsi/projects/mmm.webp";
import hdfcProject from "../../assets/img/industry/bfsi/projects/hdfc.webp";
import orixProject from "../../assets/img/industry/bfsi/projects/orix.webp";

import bfsiBanner from "../../assets/img/industry/bfsi/banner.webp";
import projectArrow from "../../assets/img/svg/right-arrow.svg";
import mmmTestimonial from "../../assets/img/industry/bfsi/testimonials/mmm-testimonial.webp";
import rblTestimonial from "../../assets/img/industry/bfsi/testimonials/rbl-testimonial.webp";
import orixTestimonial from "../../assets/img/industry/bfsi/testimonials/orix-testimonial.webp";
import rightArrow from "../../assets/img/svg/right-arrow.svg";
import leftArrow from "../../assets/img/svg/left-arrow.svg";

import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Bfsi = () => {
  const [navLeft, setNavLeft] = useState();
  const [navRight, setNavRight] = useState();

  let first_grad = document?.getElementById("first_grad");
  let second_grad = document?.getElementById("second_grad");
  if (first_grad != null && second_grad != null) {
    first_grad.classList.replace("type-2", "type-3");
    first_grad.style.top = "64px";
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
    } else {
      first_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(second_grad)) {
      second_grad?.classList.replace("type-2", "type-3");
    } else {
      second_grad?.classList.replace("type-3", "type-2");
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
    addPageMetas(PAGE_METAS.bfsi.title, PAGE_METAS.bfsi.desc);
    document.body.classList.add("industry-page");
    document.body.classList.add("bfsi-page");
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
              <span className="industry-tag gradient-text">BFSI</span>
              Accelerating growth for financial products
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
              <img
                loading="lazy"
                src={bfsiBanner}
                className="banner-img"
                alt=""
              />
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
                  We simplify the complex mechanics of finance to make way for
                  transparent, intuitive and{" "}
                  <span>bankable fintech experiences</span>, while ensuring a
                  friction balance to shield your users from financial blunders.
                </p>
                <div className="stats-container">
                  <h3 class="section-heading">Look at what data says</h3>
                  <div class="stats-flex colm-1">
                    <div class="stat-div">
                      <h5>75%</h5>
                      <p>
                        of US’ population is drawn to fintech for a simple,
                        fast, and accessible experience
                      </p>
                    </div>
                    <div class="stat-div">
                      <h5>6</h5>
                      <p>
                        out of every 10 mobile users prefer finance apps over
                        websites
                      </p>
                    </div>
                  </div>
                  <div class="stats-flex colm-2">
                    <div class="stat-div">
                      <h5>71%</h5>
                      <p>
                        of banking users don’t receive time-targeted product
                        recommendations.
                      </p>
                    </div>
                    <div class="stat-div">
                      <h5>25%</h5>
                      <p>
                        of the fintech market is held by digital payment
                        products
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
              <h3 class="section-heading">
                Unlocking impact for the leading ones
              </h3>
            </div>
            <div className="post-listing">
              <div className="project-industry type--1">
                <a href="/projects/bfsi/orix/">
                  <figure>
                    <img
                      loading="lazy"
                      src={orixProject}
                      className="project-thumbnail"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="var-bold">Orix</h6>
                      <p>
                        Revolutionizing car leasing, lending, rentals, life
                        insurance through an autonomous website for one of the
                        pioneers in the segment.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div className="project-industry type--2">
                <a href="/projects/bfsi/mymoneymantra/">
                  <figure>
                    <img
                      loading="lazy"
                      src={mmmProject}
                      className="project-thumbnail"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="var-bold">MyMoneyMantra</h6>
                      <p>
                        Designing for the legacy of a leading financial company
                        by translating its trust to a digital context, bringing
                        a 2.7x increase in their digital loan applications.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>
              {/*<div className="project-industry type--3">
                <a href="/projects/bfsi/rbl-bank/">
                  <figure>
                    <img loading="lazy"
                      src={rblProject}
                      className="project-thumbnail"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="var-bold">RBL Bank</h6>
                      <p>
                        Creating a simplified process of account application
                        with an intuitive and functional design for a
                        well-renowned financial institution of India.
                      </p>
                    </figcaption>
                  </figure>
                </a>
              </div>*/}
              <div className="project-industry type--4">
                <a href="/projects/bfsi/hdfc-smartbuy/">
                  <figure>
                    <img
                      loading="lazy"
                      src={hdfcProject}
                      className="project-thumbnail"
                      alt=""
                    />
                    <figcaption>
                      <h6 className="var-bold">HDFC SmartBuy</h6>
                      <p>
                        Redesigning the digital portal of the nation’s top bank
                        to provide a new-age banking experience to customers; an
                        experience beyond banking.
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
                          src={mmmTestimonial}
                          className="img-fluid"
                          alt="Testimonial Onething"
                        />
                      </figure>
                    </div>

                    <div>
                      <figure>
                        <img
                          loading="lazy"
                          src={rblTestimonial}
                          className="img-fluid"
                          alt="Testimonial Onething"
                        />
                      </figure>
                    </div>
                    <div>
                      <figure>
                        <img
                          loading="lazy"
                          src={orixTestimonial}
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
                        We did a major chunk of the project in the lockdown
                        period. Although we were apprehensive of the outcomes,
                        Onething made sure that the project went smoothly. They
                        have a unique outlook towards problem solving while
                        meeting business objectives.
                      </p>
                      <p className="fs-20 testifier-details">
                        Aparna Sharma, <br />
                        <span>Director, MyMoneyMantra</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        The team was able to breakdown a large scale
                        communication system into granular touchpoints and
                        create a segment-wise approach to cover all channels of
                        communications.
                      </p>
                      <p className="fs-20 testifier-details">
                        Utkarsh Saxena, <br />
                        <span>Senior Vice President, RBL Bank Limited</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        The team grasped the problem statement and delivered
                        solutions through a thorough design process. They also
                        helped us understand best practices in the industry to
                        create an autonomous platform that would cater to the
                        needs of our users.
                      </p>
                      <p className="fs-20 testifier-details">
                        Vikas Saini, <br />
                        <span>Assistant Vice President, Orix</span>
                      </p>
                    </div>
                  </Slider>
                  <ul className="list-unstyled d-flex custom_arrows">
                    <li className="prev" onClick={sliderPrev}>
                      <img
                        loading="lazy"
                        src={leftArrow}
                        className="img-fluid"
                        alt="Left Arrow"
                      />
                    </li>
                    <li className="next" onClick={sliderNext}>
                      <img
                        loading="lazy"
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
                    <img
                      loading="lazy"
                      src={podcastImage}
                      className="podcast-img2"
                      alt=""
                    />
                  </figure>
                  <a
                    className="z-indx"
                    href="/blogs/how-to-enhance-customer-service-experience-for-your-fintech-platform/"
                  >
                    <div className="card-body">
                      <div className="d-flex jc-sb">
                        <span className="badge trans-badge">Blogs</span>
                        <img
                          loading="lazy"
                          src={flipkartLogo}
                          className="icon icon-share"
                          alt=""
                          height="auto"
                          width="100%"
                        />
                      </div>
                      <div className="podcast_mx-wdth large-ban">
                        <div className="text">
                          Enhancing{" "}
                          <span className="txt-an-grad">Customer Service</span>{" "}
                          Experience for Fintech Platforms
                        </div>
                        <div className="d-flex justify-content-between">
                          <a className="bttn bttn-secondary bttn-secondary-white">
                            <span>Read More</span>
                            <img
                              loading="lazy"
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
                <div className="card bg-red custom-card podcast_sm_cards position-relative">
                  <a href="/blogs/design-tips-to-improve-the-trust-factor-of-fintech-products/">
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge trans-badge">Blogs</span>
                      </div>
                      <div className="podcast_mx-wdth">
                        <div className="text">
                          Designing Trust for Fintech Products
                        </div>
                        <div className="d-flex justify-content-between">
                          <a className="bttn bttn-secondary bttn-secondary-white">
                            <span>Read More</span>
                            <img
                              loading="lazy"
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
                  <a href="/static/media/EdTech-Whitepaper.a3c7e9c7b917c9584743.pdf">
                    <div className="card-body">
                      <div className="d-flex">
                        <span className="badge trans-badge">Blogs</span>
                      </div>
                      <div className="podcast_mx-wdth">
                        <div className="text" style={{ width: "90%" }}>
                          Digital Retail Banking Disruptions
                        </div>
                        <div className="d-flex justify-content-between">
                          <a className="bttn bttn-secondary bttn-secondary-white">
                            <span>Read More</span>
                            <img
                              loading="lazy"
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
                  <figure>
                    <img
                      loading="lazy"
                      src={podcastImage5}
                      className="podcast-img2"
                      alt=""
                    />
                  </figure>
                  <a
                    href="/podcast/future-of-brands-in-web-3-0-with-akshay-schbang%EF%BF%BC/"
                    className="z-indx"
                  >
                    <div className="card-body">
                      <div className="d-flex jc-sb">
                        <span className="badge trans-badge">Podcast</span>
                        <img
                          loading="lazy"
                          src={schbangLogo}
                          className="icon icon-share"
                          alt=""
                        />
                      </div>
                      <div className="podcast_mx-wdth fs-26">
                        <div className="text">
                          Neobanking Experience for SMBs & Entrepreneurs
                        </div>
                        <div className="d-flex justify-content-between">
                          <a className="bttn bttn-secondary bttn-secondary-white">
                            <span>Explore</span>
                            <img
                              loading="lazy"
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
              <ul class="related-industries-list">
                <li>
                  <a href="/education">
                    <h5>
                      Education
                      <span className="gradient-text">(Coming Soon)</span>
                    </h5>
                    <figure>
                      <img
                        loading="lazy"
                        src={projectArrow}
                        className="icon-arrow icon"
                        alt=""
                      />
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="">
                    <h5>Media</h5>
                    <figure>
                      <img
                        loading="lazy"
                        src={projectArrow}
                        className="icon-arrow icon"
                        alt=""
                      />
                    </figure>
                  </a>
                </li>
                <li>
                  <a href="/retail">
                    <h5>Retail & Manufacturing</h5>
                    <figure>
                      <img
                        loading="lazy"
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
export default Bfsi;

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
