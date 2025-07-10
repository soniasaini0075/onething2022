import "./enterprise.scss";

import { useEffect, useState } from "react";
import Slider from "react-slick";

import comingSoonIcon from "../../assets/img/coming-soon.svg";
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
import podcastImage5 from "../../assets/img/podcast/large-podcast-img5r.webp";
import tinyPot from "../../assets/img/podcast/tiny-2-pod.webp";
import flipkartLogo from "../../assets/img/podcast/flipkart.webp";
import onethingLogo from "../../assets/img/podcast/onething-s-logo.webp";
import schbangLogo from "../../assets/img/podcast/schbang-logo.webp";

import posableProject from "../../assets/img/industry/retail/projects/posable.webp";
import crisilProject from "../../assets/img/industry/saas/projects/crisil.jpeg";
import airtelProject from "../../assets/img/home/airtel-home-thumbnail.webp";
import prescintoProject from "../../assets/img/industry/saas/projects/prescinto.webp";

import saasBanner from "../../assets/img/industry/saas/banner.webp";
import projectArrow from "../../assets/img/svg/right-arrow.svg";
import airtelTestimonial from "../../assets/img/industry/saas/testimonials/kartik.webp";
import rblTestimonial from "../../assets/img/industry/bfsi/testimonials/rbl-testimonial.webp";
import orixTestimonial from "../../assets/img/industry/bfsi/testimonials/orix-testimonial.webp";
import rightArrow from "../../assets/img/svg/right-arrow.svg";
import leftArrow from "../../assets/img/svg/left-arrow.svg";

import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Enterprise = () => {
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
    document.body.classList.add("enterprise-page");
}, []);
let location = useLocation();
return (
<>
<Helmet>
    <link rel="preload dns-prefetch canonical" href={`https://www.onething.design${location?.pathname}`}></link>
</Helmet>
<div className="industry-page-wrapper page-wrapper">
    <section className="industry_banner blur-overlay">
        <div className="left_container position-relative">
            <h2 className="wrap_">
                <span className="industry-tag gradient-text">Enterprise</span>
                Catalyzing productivity<br/> with Enterprise UX
            </h2>
            <div className="grad-img ab_grad grad type-2 medium"></div>
            <div className="grad-img ab_grad grad mesh w medium"></div>
            <figure className="industry-banner left_container">
                <img loading="lazy" src={saasBanner} className="banner-img" alt="" />
            </figure>
        </div>
    </section>
    <section className="industry-intro-wrapper blur-overlay">
        <div className="wrapp_">
            <div className="container">
                <div className="grad-img ab_grad grad type-2 small"></div>
                <div className="content left_container">
                    <p className="intro-text">The main objective of Enterprise UX is centered around increasing efficiency and productivity for all user groups within an organization. Hence, our approach to enterprise UX is focussed at streamlining complex processes and creating intuitive interfaces, to minimize cognitive load & reduce distractions. Our commitment to creating goal-oriented experiences help employees to work seamlessly with B2B SaaS applications, <span>driving optimal performance</span> and business success.</p>
                    <div className="stats-container">
                        <h3 class="section-heading">Look at what data says</h3>
                        <div class="stats-flex colm-1">
                            <div class="stat-div">
                                <h5>50%</h5>
                                <p>of companies using multiple SaaS applications will centralize management in the next five years</p>
                            </div>
                            <div class="stat-div">
                                <h5>53%</h5>
                                <p>of surveyed IT decision makers said ERP was an investment priority, in addition to CRM</p>
                            </div>
                        </div>
                        <div class="stats-flex colm-2">
                            <div class="stat-div">
                                <h5>38%</h5>
                                <p>of companies say that they are running almost completely on SaaS</p>
                            </div>
                            <div class="stat-div">
                                <h5>80%</h5>
                                <p>of businesses plan to make all their systems SaaS by 2025</p>
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
                <h3 class="section-heading">Enhancing user-software interaction for</h3>
            </div>
            <div className="post-listing">
                <div className="project-industry type--1">
                    <a href="/projects/enterprise/airtel/" data-cursor-img={caseStudyIcon}>
                        <figure>
                            <img loading="lazy" src={airtelProject} className="project-thumbnail" alt="" />
                            <figcaption>
                                <h6 className="var-bold">Airtel</h6>
                                <p>Designing an enterprise-grade solution enabling support-employees to establish clear customer communications, that led to 125% increase in customer base.</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div className="project-industry type--2">
                    <a href="javascript:void(0)" data-cursor-img={comingSoonIcon}>
                        <figure>
                            <img loading="lazy" src={crisilProject} className="project-thumbnail" alt="" />
                            <figcaption>
                                <h6 className="var-bold">Crisil</h6>
                                <p>Recreating the portal of a 360 degree internal management tool, to enable employees in performing their tasks efficiently and seamlessly.</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div className="project-industry type--3">
                    <a href="/projects/energy/prescinto/">
                        <figure>
                            <img loading="lazy" src={prescintoProject} className="project-thumbnail" alt="" />
                            <figcaption>
                                <h6 className="var-bold">Prescinto</h6>
                                <p>Empowering solar power plants by streamlining energy management with a customizable dashboard.</p>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                <div className="project-industry type--4">
                    <a href="/projects/retail/posable/" data-cursor-img={caseStudyIcon}>
                        <figure>
                            <img loading="lazy" src={posableProject} className="project-thumbnail" alt="" />
                            <figcaption>
                                <h6 className="var-bold">POSable</h6>
                                <p>Crafting a completely digital POS system, allowing business owners to fully-track their sales remotely.</p>
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
                        <Slider className="testimonials-img-slider" {...settings} asNavFor={navRight} ref={(sliderLeft) => setNavLeft(sliderLeft)}>
                            <div>
                                <figure>
                                    <img loading="lazy" src={airtelTestimonial} className="img-fluid" alt="Testimonial Onething" />
                                </figure>
                            </div>
                        </Slider>
                    </div>
                    <div className="col-md-8">
                        <Slider className="testimonials-text-slider" {...testimonialsTest} asNavFor={navLeft} ref={(sliderRight) => setNavRight(sliderRight)}>
                            <div>
                                <p>
                                    They have a very solid design team. The team came up with some interesting design angles with an insightful creative flow. Even though the work happened remotely, the desired output was delivered on time.
                                </p>
                                <p className="fs-20 testifier-details">
                                    Kartik Bhandari, <br /><span>Product Manager, Airtel</span>
                                </p>
                            </div>
                        </Slider>
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
                    href="/blogs/often-ignored-customer-retention-strategies-for-saas-companies/"
                    >
                    <div className="card-body">
                        <div className="d-flex jc-sb">
                            <span className="badge trans-badge">Blogs</span>
                        </div>
                        <div className="podcast_mx-wdth large-ban">
                            <div className="text">
                                Customer retention strategy for <span className="txt-an-grad">SaaS</span>
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
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div className="card bg-red custom-card podcast_sm_cards position-relative">
            <a href="/blogs/the-changing-face-of-b2b-and-enterprise-designing/">
                <div className="card-body">
                    <div className="d-flex">
                        <span className="badge trans-badge">Blogs</span>
                    </div>
                    <div className="podcast_mx-wdth">
                        <div className="text">Changing face of B2B design</div>
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
            <a href="/blogs/benefits-of-ux-and-ui-design/">
                <div className="card-body">
                    <div className="d-flex">
                        <span className="badge trans-badge">Blogs</span>
                    </div>
                    <div className="podcast_mx-wdth">
                        <div className="text" style={{ width: "90%" }}>
                            UX design for improved RoI
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
        <figure>
            <img loading="lazy" src={podcastImage5} className="podcast-img2" alt="" />
        </figure>
        <a
        href="/podcast/decoding-the-need-for-enterprise-ux"
        className="z-indx"
        >
        <div className="card-body">
            <div className="d-flex jc-sb">
                <span className="badge trans-badge">Podcast</span>
                <img loading="lazy"
                src={schbangLogo}
               
                className="icon icon-share"
                alt=""
                />
            </div>
            <div className="podcast_mx-wdth fs-26">
                <div className="text">
                     Decoding the need for enterprise UX
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
            <ul class="related-industries-list">
                <li>
                    <a href="/education">
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
                    <a href="">
                        <h5>Media</h5>
                        <figure>
                            <img loading="lazy" src={projectArrow} className="icon-arrow icon" alt="" />
                        </figure>
                    </a>
                </li>
                <li>
                    <a href="/retail">
                        <h5>Retail & Manufacturing</h5>
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
export default Enterprise;


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