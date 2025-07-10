import "./services.scss";

import { useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import CuratedProjectsLarge from "../../partials/curated-large/CuratedProjectsLarge";
import Testimonials from "../../partials/testimonials/testimonials";

// Images
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import eCommerceIndustry from "../../assets/img/icons/industry/icon.svg";
import visibility from "../../assets/img/global/visibility.svg";

import webAppPreview from "../../assets/img/services/web-app-preview.webp";
import mobile from "../../assets/img/services/mobile.webp";
import tvAppPreview from "../../assets/img/services/tv-app-preview.webp";
import smartwatchAppPreview from "../../assets/img/services/smartwatch-preview.webp";
import vrPreview from "../../assets/img/services/vr-preview.webp";
import medical from "../../assets/img/services/medical.webp";
import kiosk from "../../assets/img/services/kiosk.webp";
import autoInfotainment from "../../assets/img/services/auto_infotainment.webp";

import discover from "../../assets/img/services/discover2y.webp";
import define from "../../assets/img/services/define2y.webp";
import design from "../../assets/img/services/design2y.webp";
import develop from "../../assets/img/services/develop2y.webp";

import bannerAbout from "../../assets/img/services/banner-team-y.webp";

import resOne from "../../assets/img/services/research-one-y.webp";
import resTwo from "../../assets/img/services/research-two-y.webp";

import contentOne from "../../assets/img/services/contentOne.webp";
import contentTwo from "../../assets/img/services/contentTwo.webp";

import expDesignOne from "../../assets/img/services/design-1y.webp";
import expDesignTwo from "../../assets/img/services/design-2y.webp";

import servDesignOne from "../../assets/img/services/service-design1y.webp";
import servDesignTwo from "../../assets/img/services/service-design2y.webp";

import uxAuditOne from "../../assets/img/services/uxAuditOne.webp";
import uxAuditTwo from "../../assets/img/services/uxAuditTwo.webp";

import entUXOne from "../../assets/img/services/enterprise-ux1y.webp";
import entUXTwo from "../../assets/img/services/entUXTwo.webp";

import designEnggOne from "../../assets/img/services/design-engg1y.webp";
import designEnggTwo from "../../assets/img/services/design-engg2y.webp";

// import businessstrategy1 from "../../assets/img/services/business-strategy1.webp";
// import businessstrategy2 from "../../assets/img/services/business-strategy2.webp";

import marketing1 from "../../assets/img/services/marketing1.webp";
import marketing2 from "../../assets/img/services/marketing2.webp";

import ServicesProjects from "../../partials/servicesprojects/ServicesProjects";

import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { Helmet } from "react-helmet";

const Services = () => {
  const [key, setKey] = useState("discover");
  const [isDiscoverTriggered, setDiscoverTrigger] = useState(false);
  const [deviceKey, setDeviceKey] = useState("hdplus");

  let grad_one_left = document?.getElementById("grad_one_left");
  let grad_two_right = document?.getElementById("grad_two_right");
  if (grad_one_left != null) {
    grad_one_left?.classList.replace("type-2", "type-3");
  }
  if (grad_two_right != null) {
    grad_two_right?.classList.replace("type-2", "type-3");
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

    let third_grad = document?.getElementById("third_grad");
    let fourth_grad = document?.getElementById("fourth_grad");
    let fifth_grad = document?.getElementById("fifth_grad");
    let sixth_grad = document?.getElementById("sixth_grad");
    let seventh_grad = document?.getElementById("seventh_grad");
    let eighth_grad = document?.getElementById("eighth_grad");

    if (isInViewport(grad_one_left)) {
      grad_one_left?.classList.replace("type-2", "type-3");
    } else {
      grad_one_left?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(grad_two_right)) {
      grad_two_right?.classList.replace("type-2", "type-3");
    } else {
      grad_two_right?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(third_grad)) {
      third_grad?.classList.replace("type-2", "type-3");
    } else {
      third_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(fourth_grad)) {
      fourth_grad?.classList.replace("type-2", "type-3");
    } else {
      fourth_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(fifth_grad)) {
      fifth_grad?.classList.replace("type-2", "type-3");
    } else {
      fifth_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(sixth_grad)) {
      sixth_grad?.classList.replace("type-2", "type-3");
    } else {
      sixth_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(seventh_grad)) {
      seventh_grad?.classList.replace("type-2", "type-3");
    } else {
      seventh_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(eighth_grad)) {
      eighth_grad?.classList.replace("type-2", "type-3");
    } else {
      eighth_grad?.classList.replace("type-3", "type-2");
    }
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    addPageMetas(PAGE_METAS.services.title, PAGE_METAS.services.desc);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    document.body.classList.add("services-page");
    document.querySelector(".mf-cursor-media").style.width = "300px";
    document.querySelector(".mf-cursor-media").style.height = "300px";
    document.querySelector(".mf-cursor-media").style.margin =
    "-140px 0 0 -140px";
  }, []);

  const aboutBanner = {
    fhd: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    qhd: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    hdplus: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    bigtablet: {
      style: {
        width: "100%",
        height: "390px",
      },
    },
    smalltablet: {
      style: {
        width: "100%",
        height: "390px",
      },
    },
    phone: {
      style: {
        width: "100%",
        height: "171px",
      },
    },
  };
  const research = {
    fhd: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    qhd: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    hdplus: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    bigtablet: {
      style: {
        width: "100%",
        height: "390px",
      },
    },
    smalltablet: {
      style: {
        width: "100%",
        height: "390px",
      },
    },
    phone: {
      style: {
        width: "100%",
        height: "386px",
      },
    },
  };
  const serviceDesign = {
    fhd: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    qhd: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    hdplus: {
      style: {
        width: "100%",
        height: "491px",
      },
    },
    bigtablet: {
      style: {
        width: "100%",
        height: "390px",
      },
    },
    smalltablet: {
      style: {
        width: "100%",
        height: "390px",
      },
    },
    phone: {
      style: {
        width: "100%",
        height: "238px",
      },
    },
  };

  useEffect(() => {
    // setWindowWidth(window.innerWidth);
    if (window.innerWidth >= 1920) {
      setDeviceKey("fhd");
    } else if (window.innerWidth < 1920 && window.innerWidth >= 1440) {
      setDeviceKey("qhd");
    } else if (window.innerWidth < 1440 && window.innerWidth >= 1366) {
      setDeviceKey("hdplus");
    } else if (window.innerWidth < 1366 && window.innerWidth >= 1024) {
      setDeviceKey("bigtablet");
    } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
      setDeviceKey("smalltablet");
    } else {
      setDeviceKey("phone");
    }
  }, []);

  return (
  <>
  <Helmet>
    <link
    rel="preload dns-prefetch canonical"
    href={`https://www.onething.design/ui-ux-design-services`}
    ></link>
  </Helmet>
  {loading && <PageLoader />}
  {!loading && (
  <div className="services-page-wrapper page-wrapper">
    <section className="page-heading blur-overlay">
      <div className="container">
        <div className="heading-wrapper">
          <h1 className="left_container newh1">
            UI UX Design Services <br/>that unify your customer experience
          </h1>
          <div className="cta-wrapper">
            <div className="col-md-3 col-7 buttons-wrapper">
              <a className="bttn bttn-primary" style={{width: '240px'}} href="/contact/">
                Start a Project
                <div className="arrow-dot">
                  <img loading="lazy"
                  src={primaryCtaArrow}
                  className="icon icon-submit"
                  alt=""
                  />
                </div>
              </a>
            </div>
          </div>
          <div
          id="grad_one_left"
          className="grad type-2 small gr-box2"
          ></div>
          <div
          id="grad_two_right"
          className="grad type-2 small gr-box"
          ></div>
        </div>
      </div>
    </section>
    <section className="banner-image-section blur-overlay">
      <div className="div-wrap container">
        <figure className="right_container">
          <Controller>
            <Scene
            indicators={false}
            duration="200%"
            triggerHook="onEnter"
            >
            <Timeline
            wrapper={
              <div
              className="parallax"
              style={aboutBanner[deviceKey].style}
              />
            }
            >
            <Tween
            position="0"
            from={{
              yPercent: -30,
            }}
            to={{
              yPercent: 0,
            }}
            >
            <img loading="lazy" src={bannerAbout} className="img-fluid" alt="UI UX Design Services" />
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </figure>
</div>
</section>
<section className="marquee-effect blur-overlay">
  <div className="div-wrap">
    <h1 className="track">
      Strategy - Research - Design - Branding - Development - Strategy
      - Research - Design - Branding - Development
    </h1>
  </div>
</section>
<section className="branding-as-service service-div blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <div
      id="third_grad"
      className="grad type-2 small gr-box2"
      ></div>
      <div className="left_container">
        <div className="service-intro">
          <h2 className="section-heading newh2">User Research</h2>
          <p className="fs-20">
            Knowing the user inside out is ground-zero for any product
            and the very core of our UI UX design services. We utilize
            the principles of human-centered design to know what your
            users need and want most.
          </p>
        </div>
      </div>
      <div className="accordion-content-area service-accordian">
        {/* <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Discovery Workshop</Accordion.Header>
            <Accordion.Body>
              <p>
                Laying the foundation for a product and its goals by
                hosting a contextual workshop with key stakeholder
                groups. Conducting propriatory activities to shape a
                foundational understanding of the final outcomes.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>User Research</Accordion.Header>
            <Accordion.Body>
              <p>
                Generating an understanding of the audience, and the
                facets of design which they would value most through
                methods like ethnographic research, and interviews.{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Heuristic Analysis</Accordion.Header>
            <Accordion.Body>
              <p>
                Conducting a full fledged UX heuristic analysis,
                contextualizing an existing product through the lens
                of conventionally good practices in UX design,
                identifying areas of improvement, and their severity.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
        {/* <ul className="tags one">
          <li>UX Audit</li>
          <li>Concept Testing</li>
          <li>User Interviews</li>
        </ul>
        <ul className="tags two">
          <li>Customer Journey Mapping</li>
          <li>Usability Testing</li>
        </ul> */}
      </div>
      <div className="service-accordian">
        <ul className="tags one">
          <a href="/ux-audit/" target="_blank" rel="noreferrer">
            <li><h3 className="newh3-li">UX Audit</h3></li>
          </a>
          <li><h3 className="newh3-li">User Interviews</h3></li>
          <a href="/blogs/why-usability-testing-is-crucial-for-product-success/" target="_blank" rel="noreferrer">
            <li><h3 className="newh3-li">Usability Testing</h3></li>
          </a>
        </ul>
        <ul className="tags two">
          <li><h3 className="newh3-li">Concept Testing</h3></li>
          <li><h3 className="newh3-li">Customer Journey Mapping</h3></li>
        </ul>
      </div>
      <div className="service-accordian left_container">
        <div className="mobile">
          <ul className="tags">
            <li><h3 className="newh3-li-sm">UX Audit</h3></li>
            <li><h3 className="newh3-li-sm">User Interviews</h3></li>
            <li><h3 className="newh3-li-sm">Usability Testing</h3></li>
            <li><h3 className="newh3-li-sm">Concept Testing</h3></li>
            <li><h3 className="newh3-li-sm">Customer Journey Mapping</h3></li>
          </ul>
        </div>
      </div>
      <div className="service-gallery">
        <div className="grid-wrap">
          <div className="column_">
            <figure className="right_container resOne">
              <Controller>
                <Scene
                indicators={false}
                duration="200%"
                triggerHook="onEnter"
                >
                <Timeline
                wrapper={
                  <div
                  className="parallax"
                  style={{ width: "100%", height: "454px" }}
                  />
                }
                >
                <Tween
                position="0"
                from={{
                  yPercent: -20,
                }}
                to={{
                  yPercent: 0,
                }}
                >
                <img loading="lazy"
                src={resOne}
                className="img-fluid"
                alt=""
                />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </figure>
    </div>
    <div className="column_">
      <figure className="resTwo">
        <Controller>
          <Scene
          indicators={false}
          duration="200%"
          triggerHook="onEnter"
          >
          <Timeline
          wrapper={
            <div
            className="parallax"
            style={{ width: "100%", height: "631px" }}
            />
          }
          >
          <Tween
          position="0"
          from={{
            yPercent: -20,
          }}
          to={{
            yPercent: 0,
          }}
          >
          <img loading="lazy"
          src={resTwo}
          className="img-fluid"
          alt=""
          />
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
</figure>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="design-as-service service-div blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <div
      id="fourth_grad"
      className="grad type-2 small gr-box2"
      ></div>
      <div className="left_container">
        <div className="service-intro left_container">
          <h2 className="section-heading newh2">Strategy</h2>
          <p className="fs-20">
            Strategy is central to our UI UX design services. Just
            like a compass, it guides your product on a path that’s
            delightful for users and aligned with the business goals.{" "}
          </p>
        </div>
      </div>
      <div className="service-accordian">
        {/* <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Product Strategy</Accordion.Header>
            <Accordion.Body>
              <p>
                Consolidating a product design strategy, to define
                what features to build, and defining long-term plans
                for the lifetime of the product.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>UX UI Design</Accordion.Header>
            <Accordion.Body>
              <p>
                Crafting a digital product through human interaction
                design. Defining & creating user flows, and finishing
                with a researched visual interface.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Usability Testing</Accordion.Header>
            <Accordion.Body>
              <p>
                Ensuring that the product will be used and loved by
                users; identifying and addressing any gulfs in
                understanding for smoother interactions.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Motion Design</Accordion.Header>
            <Accordion.Body>
              <p>
                Envisioning creative motion-graphics from the
                ground-up. Utilizing scalable assets to create
                compelling and engaging animations.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>UX Writing</Accordion.Header>
            <Accordion.Body>
              <p>
                Building bespoke content, to assist users through
                journeys in an digital product. Refining the
                experience through more than just visuals.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
        <ul className="tags one">
          <a href="/blogs/product-design-101/" target="_blank" rel="noreferrer">
            <li><h3 className="newh3-li">Product Roadmap</h3></li>
          </a>
          <li><h3 className="newh3-li">Product Concepts</h3></li>
          <li><h3 className="newh3-li">KPI Definition</h3></li>
        </ul>
        <ul className="tags two">
          <li><h3 className="newh3-li">Value Proposition</h3></li>
          <li><h3 className="newh3-li">Digital Strategy</h3></li>
          <li><h3 className="newh3-li">Information Architecture</h3></li>
        </ul>
      </div>
      <div className="service-accordian left_container">
        <div className="mobile">
          <ul className="tags">
            <li><h3 className="newh3-li-sm">Product Roadmap</h3></li>
            <li><h3 className="newh3-li-sm">Product Concepts</h3></li>
            <li><h3 className="newh3-li-sm">KPI Definition</h3></li>
            <li><h3 className="newh3-li-sm">Value Proposition</h3></li>
            <li><h3 className="newh3-li-sm">Digital Strategy</h3></li>
            <li><h3 className="newh3-li-sm">Information Architecture</h3></li>
          </ul>
        </div>
      </div>
      <div className="service-gallery">
        <div className="grid-wrap">
          <div className="column_">
            <figure className="expDesignOne">
              <Controller>
                <Scene
                indicators={false}
                duration="200%"
                triggerHook="onEnter"
                >
                <Timeline
                wrapper={
                  <div
                  className="parallax"
                  style={{ width: "100%", height: "596px" }}
                  />
                }
                >
                <Tween
                position="0"
                from={{
                  yPercent: -20,
                }}
                to={{
                  yPercent: 0,
                }}
                >
                <img loading="lazy"
                src={expDesignOne}
                className="img-fluid"
                alt=""
                />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </figure>
    </div>
    <div className="column_">
      <figure className="expDesignTwo">
        <Controller>
          <Scene
          indicators={false}
          duration="200%"
          triggerHook="onEnter"
          >
          <Timeline
          wrapper={
            <div
            className="parallax"
            style={{ width: "100%", height: "510px" }}
            />
          }
          >
          <Tween
          position="0"
          from={{
            yPercent: -20,
          }}
          to={{
            yPercent: 0,
          }}
          >
          <img loading="lazy"
          src={expDesignTwo}
          className="img-fluid"
          alt=""
          />
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
</figure>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="business-strategy-as-service service-div blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <div
      id="fifth_grad"
      className="grad type-2 small gr-box2"
      ></div>
      <div className="service-intro">
        <h2 className="section-heading newh2">Branding</h2>
        <p className="fs-20">
          We leverage accessibility principles to ensure your brand
          stands out and communicates effectively across all customer
          touchpoints. Step into the spotlight and shape your unique
          brand identity with us.
        </p>
      </div>
      {/* <div className="service-accordian"> */}
        <div className="service-accordian left_container">
          <ul className="tags one">
            <li><h3 className="newh3-li">Strategy</h3></li>
            <li><h3 className="newh3-li">Brand Identity Development</h3></li>
            <li><h3 className="newh3-li">Logo Design</h3></li>
          </ul>
          <ul className="tags two">
            <li><h3 className="newh3-li">Packaging Design</h3></li>
            <li><h3 className="newh3-li">Graphic Systems</h3></li>
          </ul>
        </div>
        <div className="service-accordian left_container">
          <div className="mobile">
            <ul className="tags">
              <li><h3 className="newh3-li-sm">Strategy</h3></li>
              <li><h3 className="newh3-li-sm">Brand Identity Development</h3></li>
              <li><h3 className="newh3-li-sm">Logo Design</h3></li>
              <li><h3 className="newh3-li-sm">Packaging Design</h3></li>
              <li><h3 className="newh3-li-sm">Graphic Systems</h3></li>
            </ul>
          </div>
        </div>
        {/* <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Service Design Blueprint
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Outlining actions at steps being taken at every step of
                the service delivery process. Outlining the network of
                service delivery, and steps being taken at every turn.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Customer Journey Mapping
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Visualizing and modeling the entire customer journey,
                taking into account every point of interaction, and
                identifying activities, strengths, and weaknesses at
                every interchange.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Service Innovations</Accordion.Header>
            <Accordion.Body>
              <p>
                Isolating and introducing positive changes in the
                service delivery with an effective UX roadmap. Designed
                to drive key performance metrics, and keep you ahead at
                every step.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion> */}
      {/* </div> */}
      <div className="service-gallery">
        <div className="grid-wrap">
          <div className="column_">
            <figure className="right_container serviceDesignOne">
              <Controller>
                <Scene
                indicators={false}
                duration="200%"
                triggerHook="onEnter"
                >
                <Timeline
                wrapper={
                  <div
                  className="parallax"
                  style={{ width: "100%", height: "596px" }}
                  />
                }
                >
                <Tween
                position="0"
                from={{
                  yPercent: -20,
                }}
                to={{
                  yPercent: 0,
                }}
                >
                <img loading="lazy"
                src={servDesignOne}
                className="img-fluid"
                alt=""
                />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </figure>
    </div>
    <div className="column_">
      <figure className="serviceDesignTwo">
        <Controller>
          <Scene
          indicators={false}
          duration="200%"
          triggerHook="onEnter"
          >
          <Timeline
          wrapper={
            <div
            className="parallax"
            style={serviceDesign[deviceKey].style}
            />
          }
          >
          <Tween
          position="0"
          from={{
            yPercent: -20,
          }}
          to={{
            yPercent: 0,
          }}
          >
          <img loading="lazy"
          src={servDesignTwo}
          className="img-fluid"
          alt=""
          />
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
</figure>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="content-as-service-div service-div blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <div
      id="sixth_grad"
      className="grad type-2 small gr-box2"
      ></div>
      <div className="left_container">
        <div className="service-intro left_container">
          <h2 className="section-heading newh2">Content</h2>
          <p className="fs-20">
            We craft compelling narratives that resonate with your
            users, setting the stage for meaningful and engaging
            products. Discover a world where content is more than just
            words – it's an experience.{" "}
          </p>
        </div>
        <div className="service-accordian left_container">
          <ul className="tags one">
            <li><h3 className="newh3-li">Strategy</h3></li>
            <li><h3 className="newh3-li">UX Writing</h3></li>
          </ul>
          <ul className="tags two">
            <li><h3 className="newh3-li">Microcopy</h3></li>
            <li><h3 className="newh3-li">Digital Copywriting</h3></li>
          </ul>
        </div>
        <div className="service-accordian left_container">
          <div className="mobile">
            <ul className="tags">
              <li><h3 className="newh3-li-sm">Strategy</h3></li>
              <li><h3 className="newh3-li-sm">UX Writing</h3></li>
              <li><h3 className="newh3-li-sm">Microcopy</h3></li>
              <li><h3 className="newh3-li-sm">Digital Copywriting</h3></li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="service-accordian">
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header> Strategy</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>UX Writing</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Microcopy</Accordion.Header>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Digital Copywriting</Accordion.Header>
          </Accordion.Item>
        </Accordion>
      </div> */}
      <div className="service-gallery">
        <div className="grid-wrap">
          <div className="column_">
            <figure className="expDesignOne">
              <Controller>
                <Scene
                indicators={false}
                duration="200%"
                triggerHook="onEnter"
                >
                <Timeline
                wrapper={
                  <div
                  className="parallax"
                  style={{ width: "100%", height: "596px" }}
                  />
                }
                >
                <Tween
                position="0"
                from={{
                  yPercent: -20,
                }}
                to={{
                  yPercent: 0,
                }}
                >
                <img loading="lazy"
                src={contentOne}
                className="img-fluid"
                alt=""
                />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </figure>
    </div>
    <div className="column_">
      <figure className="expDesignTwo">
        <Controller>
          <Scene
          indicators={false}
          duration="200%"
          triggerHook="onEnter"
          >
          <Timeline
          wrapper={
            <div
            className="parallax"
            style={{ width: "100%", height: "510px" }}
            />
          }
          >
          <Tween
          position="0"
          from={{
            yPercent: -20,
          }}
          to={{
            yPercent: 0,
          }}
          >
          <img loading="lazy"
          src={contentTwo}
          className="img-fluid"
          alt=""
          />
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
</figure>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="exp-design-as-service service-div blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <div className="left_container">
        <div className="service-intro left_container">
          <h2 className="section-heading newh2">Experience Design</h2>
          <p className="fs-20">
            By crafting captivating digital experiences from
            scratch/refining existing ones, we cater to brands across
            industries and around the globe. Our design services focus
            on global accessibility, improved interactions, boosting
            user satisfaction, and fuelling growth for your business.
          </p>
        </div>
      </div>
      <div className="service-accordian left_container">
        <ul className="tags one">
          <a href="/blogs/e-commerce-strategies-to-convert-first-time-visitors-to-loyal-customers/" target="_blank" rel="noreferrer">
            <li>
              <h3 className="newh3-li">E-commerce</h3>             
            </li>
          </a>
          <a href="/blogs/web-design-and-development-approaches-that-can-help-you-grow-your-start-up/" target="_blank" rel="noreferrer">
            <li>
              <h3 className="newh3-li">Website design</h3>
            </li>
          </a>
          <li><h3 className="newh3-li">Responsive web design</h3></li>
          <a href="/blogs/understanding-app-ux-design-a-beginners-guide/" target="_blank" rel="noreferrer">
            <li><h3 className="newh3-li">Mobile app UX</h3></li>
          </a>
        </ul>
        <ul className="tags two">
          <a href="/blogs/how-can-ux-designers-create-a-great-user-experience-for-wearable-technology/" target="_blank" rel="noreferrer">
            <li><h3 className="newh3-li">Wearable app/interface design</h3></li>
          </a>
          <li><h3 className="newh3-li">Digital kiosks design</h3></li>
          <a href="/blogs/dashboard-design/" target="_blank" rel="noreferrer">
            <li><h3 className="newh3-li">Dashboard design</h3></li>
          </a>
        </ul>
      </div>

      <div className="service-accordian left_container">
        <div className="mobile">
          <ul className="tags">
            <li><h3 className="newh3-li-sm">E-commerce</h3></li>
            <li><h3 className="newh3-li-sm">Website design</h3></li>
            <li><h3 className="newh3-li-sm">Responsive web design</h3></li>
            <li><h3 className="newh3-li-sm">Mobile app UX</h3></li>
            <li><h3 className="newh3-li-sm">Wearable app/interface design</h3></li>
            <li><h3 className="newh3-li-sm">Digital kiosks design</h3></li>
            <li><h3 className="newh3-li-sm">Dashboard design</h3></li>
          </ul>
        </div>
      </div>
      <div
      id="seventh_grad"
      className="grad type-2 small gr-box2"
      ></div>
      <div className="service-gallery">
        <div className="grid-wrap">
          <div className="column_">
            <figure className="entUXOne">
              <Controller>
                <Scene
                indicators={false}
                duration="200%"
                triggerHook="onEnter"
                >
                <Timeline
                wrapper={
                  <div
                  className="parallax"
                  style={{ width: "100%", height: "596px" }}
                  />
                }
                >
                <Tween
                position="0"
                from={{
                  yPercent: -20,
                }}
                to={{
                  yPercent: 0,
                }}
                >
                <img loading="lazy"
                src={entUXTwo}
                className="img-fluid"
                alt=""
                />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </figure>
    </div>
    <div className="column_">
      <figure className="entUXTwo">
        <Controller>
          <Scene
          indicators={false}
          duration="200%"
          triggerHook="onEnter"
          >
          <Timeline
          wrapper={
            <div
            className="parallax"
            style={{ width: "100%", height: "454px" }}
            />
          }
          >
          <Tween
          position="0"
          from={{
            yPercent: -20,
          }}
          to={{
            yPercent: 0,
          }}
          >
          <img loading="lazy"
          src={entUXOne}
          className="img-fluid"
          alt=""
          />
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
</figure>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="development-as-service service-div blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <div
      id="eighth_grad"
      className="grad type-2 small gr-box2"
      ></div>
      <div className="left_container">
        <div className="service-intro">
          <h2 className="section-heading newh2">Development</h2>
          <p className="fs-20">
            In this final stage of our UI UX design services, we
            develop and craft your product, so it can be used directly
            by your users. Hence, seamlessly translating design
            outputs into tangible digital products in the real world.
          </p>
        </div>
      </div>
      <div className="service-accordian left_container">
        <ul className="tags">
          <li><h3 className="newh3-li">Frontend</h3></li>
          <li><h3 className="newh3-li">Backend</h3></li>
        </ul>
      </div>
      <div className="service-gallery">
        <div className="grid-wrap">
          <div className="column_">
            <figure className="left_container desEngg.">
              <Controller>
                <Scene
                indicators={false}
                duration="200%"
                triggerHook="onEnter"
                >
                <Timeline
                wrapper={
                  <div
                  className="parallax"
                  style={{ width: "100%", height: "477px" }}
                  />
                }
                >
                <Tween
                position="0"
                from={{
                  yPercent: -20,
                }}
                to={{
                  yPercent: 0,
                }}
                >
                <img loading="lazy"
                src={designEnggOne}
                className="img-fluid"
                alt=""
                />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </figure>
    </div>
    <div className="column_">
      <figure>
        <Controller>
          <Scene
          indicators={false}
          duration="200%"
          triggerHook="onEnter"
          >
          <Timeline
          wrapper={
            <div
            className="parallax"
            style={{ width: "100%", height: "395px" }}
            />
          }
          >
          <Tween
          position="0"
          from={{
            yPercent: -20,
          }}
          to={{
            yPercent: 0,
          }}
          >
          <img loading="lazy"
          src={designEnggTwo}
          className="img-fluid"
          alt=""
          />
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
</figure>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="ux-audit-as-service service-div blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <div
      id="fifth_grad"
      className="grad type-2 small gr-box2"
      ></div>
      <div className="service-intro">
        <h2 className="section-heading newh2">UX Audit</h2>
        <p className="fs-20">
          Uncover the untapped potential of your product, and make
          sure it strikes the chord with your users. We prioritize
          enhancing usability, accessibility, and delight for your
          users by pinpointing areas for improvement and providing
          actionable recommendations.
        </p>
        <div className="cta-wrapper">
          <a className="bttn bttn-primary" href="/ux-audit/">
            Learn More
            <div className="arrow-dot">
              <img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt="" />
            </div>
          </a>
        </div>
      </div>
      <div className="service-accordian left_container"></div>
      <div className="service-gallery">
        <div className="grid-wrap">
          <div className="column_">
            <figure className="serviceDesignOne">
              <Controller>
                <Scene
                indicators={false}
                duration="200%"
                triggerHook="onEnter"
                >
                <Timeline
                wrapper={
                  <div
                  className="parallax"
                  style={{ width: "100%", height: "596px" }}
                  />
                }
                >
                <Tween
                position="0"
                from={{
                  yPercent: -20,
                }}
                to={{
                  yPercent: 0,
                }}
                >
                <img loading="lazy"
                src={uxAuditOne}
                className="img-fluid"
                alt=""
                />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </figure>
    </div>
    <div className="column_">
      <figure className="serviceDesignTwo">
        <Controller>
          <Scene
          indicators={false}
          duration="200%"
          triggerHook="onEnter"
          >
          <Timeline
          wrapper={
            <div
            className="parallax"
            style={serviceDesign[deviceKey].style}
            />
          }
          >
          <Tween
          position="0"
          from={{
            yPercent: -20,
          }}
          to={{
            yPercent: 0,
          }}
          >
          <img loading="lazy"
          src={uxAuditTwo}
          className="img-fluid"
          alt=""
          />
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
</figure>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="our-expertise-wrapper blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <div
      id="nineth_grad"
      className="grad type-2 small gr-box1"
      ></div>
      <div className="content-div">
        <div className="left_container">
          <h2 className="section-heading newh2">
            Industries we design for
          </h2>
          <div className="industries-listing">
            <ul className="industry-list">
              <li>
                <svg
                className="i-l-svg"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M13.3334 12.3333L10.0001 9L6.66675 12.3333"
                stroke="#A7A7A7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
                <path
                d="M10 9V16.5"
                stroke="#A7A7A7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
                <path
                d="M16.8674 14C17.6654 13.5853 18.2957 12.9292 18.659 12.1351C19.0223 11.341 19.0978 10.4542 18.8736 9.61465C18.6494 8.77511 18.1384 8.03064 17.421 7.49873C16.7037 6.96682 15.821 6.67777 14.9122 6.67719H13.8814C13.6337 5.76418 13.1722 4.91655 12.5314 4.19804C11.8907 3.47953 11.0874 2.90883 10.182 2.52886C9.27652 2.14888 8.2925 1.96951 7.30388 2.00423C6.31525 2.03895 5.34774 2.28686 4.47409 2.72932C3.60045 3.17178 2.84339 3.79728 2.25985 4.55879C1.6763 5.3203 1.28145 6.198 1.10497 7.12592C0.928498 8.05383 0.974996 9.0078 1.24097 9.91612C1.50694 10.8244 1.98547 11.6635 2.64057 12.3701"
                stroke="#A7A7A7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
                <path
                d="M13.3334 12.3333L10.0001 9L6.66675 12.3333"
                stroke="#A7A7A7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                  id="paint0_linear_2933_8025"
                  x1="6.66675"
                  y1="10.6667"
                  x2="13.3334"
                  y2="10.6667"
                  gradientUnits="userSpaceOnUse"
                  >
                  <stop stop-color="#EF8081" />
                  <stop offset="0.619792" stop-color="#F63132" />
                  <stop offset="1" stop-color="#9F1689" />
                </linearGradient>
              </defs>
            </svg>
            <span>E-commerce</span>
          </li>
          <li>
            <svg
            className="i-l-svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M13.75 7.8333L6.25 3.5083"
            stroke="#A7A7A7"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
            <path
            d="M17.5 13.3334V6.66675C17.4997 6.37448 17.4225 6.08742 17.2763 5.83438C17.13 5.58134 16.9198 5.37122 16.6667 5.22508L10.8333 1.89175C10.58 1.74547 10.2926 1.66846 10 1.66846C9.70744 1.66846 9.42003 1.74547 9.16667 1.89175L3.33333 5.22508C3.08022 5.37122 2.86998 5.58134 2.72372 5.83438C2.57745 6.08742 2.5003 6.37448 2.5 6.66675V13.3334C2.5003 13.6257 2.57745 13.9127 2.72372 14.1658C2.86998 14.4188 3.08022 14.6289 3.33333 14.7751L9.16667 18.1084C9.42003 18.2547 9.70744 18.3317 10 18.3317C10.2926 18.3317 10.58 18.2547 10.8333 18.1084L16.6667 14.7751C16.9198 14.6289 17.13 14.4188 17.2763 14.1658C17.4225 13.9127 17.4997 13.6257 17.5 13.3334Z"
            stroke="#A7A7A7"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
            <path
            d="M2.72461 5.7998L9.99961 10.0081L17.2746 5.7998"
            stroke="#A7A7A7"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
            <path
            d="M10 18.4V10"
            stroke="#A7A7A7"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
          </svg>

          <span>Micro Delivery</span>
        </li>
        <li>
          <svg
          className="i-l-svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M10.8333 1.66663L2.5 11.6666H10L9.16667 18.3333L17.5 8.33329H10L10.8333 1.66663Z"
          stroke="#A7A7A7"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
        </svg>
        <span>Energy</span>
      </li>
      <li>
        <svg
        className="i-l-svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <g clip-path="url(#clip0_5384_14825)">
          <path
          d="M7.50033 18.3332C7.96056 18.3332 8.33366 17.9601 8.33366 17.4998C8.33366 17.0396 7.96056 16.6665 7.50033 16.6665C7.04009 16.6665 6.66699 17.0396 6.66699 17.4998C6.66699 17.9601 7.04009 18.3332 7.50033 18.3332Z"
          stroke="#A7A7A7"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
          <path
          d="M16.6663 18.3332C17.1266 18.3332 17.4997 17.9601 17.4997 17.4998C17.4997 17.0396 17.1266 16.6665 16.6663 16.6665C16.2061 16.6665 15.833 17.0396 15.833 17.4998C15.833 17.9601 16.2061 18.3332 16.6663 18.3332Z"
          stroke="#A7A7A7"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
          <path
          d="M0.833008 0.833496H4.16634L6.39967 11.9918C6.47588 12.3755 6.6846 12.7201 6.9893 12.9654C7.29399 13.2107 7.67526 13.341 8.06634 13.3335H16.1663C16.5574 13.341 16.9387 13.2107 17.2434 12.9654C17.5481 12.7201 17.7568 12.3755 17.833 11.9918L19.1663 5.00016H4.99967"
          stroke="#A7A7A7"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_5384_14825">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <span>FMCG</span>
    </li>
    <li>
      <svg
      className="i-l-svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
      d="M10 0.833496V19.1668"
      stroke="#A7A7A7"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
      />
      <path
      d="M14.1667 4.1665H7.91667C7.14312 4.1665 6.40125 4.47379 5.85427 5.02078C5.30729 5.56776 5 6.30962 5 7.08317C5 7.85672 5.30729 8.59858 5.85427 9.14557C6.40125 9.69255 7.14312 9.99984 7.91667 9.99984H12.0833C12.8569 9.99984 13.5987 10.3071 14.1457 10.8541C14.6927 11.4011 15 12.143 15 12.9165C15 13.6901 14.6927 14.4319 14.1457 14.9789C13.5987 15.5259 12.8569 15.8332 12.0833 15.8332H5"
      stroke="#A7A7A7"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
      />
    </svg>

    <span>BFSI </span>
  </li>
  <li>
    <svg
    className="i-l-svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    d="M2 3H6.8C7.64869 3 8.46263 3.32778 9.06274 3.91122C9.66286 4.49467 10 5.28599 10 6.11111V17C10 16.3812 9.74714 15.7877 9.29706 15.3501C8.84697 14.9125 8.23652 14.6667 7.6 14.6667H2V3Z"
    stroke="#A7A7A7"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
    <path
    d="M18 3H13.2C12.3513 3 11.5374 3.32778 10.9373 3.91122C10.3371 4.49467 10 5.28599 10 6.11111V17C10 16.3812 10.2529 15.7877 10.7029 15.3501C11.153 14.9125 11.7635 14.6667 12.4 14.6667H18V3Z"
    stroke="#A7A7A7"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    />
  </svg>

  <span>Education</span>
</li>
<li>
  <svg
  className="i-l-svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
  d="M13.333 2.5H0.833008V13.3333H13.333V2.5Z"
  stroke="#A7A7A7"
  stroke-width="1.66667"
  stroke-linecap="round"
  stroke-linejoin="round"
  />
  <path
  d="M13.333 6.6665H16.6663L19.1663 9.1665V13.3332H13.333V6.6665Z"
  stroke="#A7A7A7"
  stroke-width="1.66667"
  stroke-linecap="round"
  stroke-linejoin="round"
  />
  <path
  d="M4.58333 17.5002C5.73393 17.5002 6.66667 16.5674 6.66667 15.4168C6.66667 14.2662 5.73393 13.3335 4.58333 13.3335C3.43274 13.3335 2.5 14.2662 2.5 15.4168C2.5 16.5674 3.43274 17.5002 4.58333 17.5002Z"
  stroke="#A7A7A7"
  stroke-width="1.66667"
  stroke-linecap="round"
  stroke-linejoin="round"
  />
  <path
  d="M15.4163 17.5002C16.5669 17.5002 17.4997 16.5674 17.4997 15.4168C17.4997 14.2662 16.5669 13.3335 15.4163 13.3335C14.2657 13.3335 13.333 14.2662 13.333 15.4168C13.333 16.5674 14.2657 17.5002 15.4163 17.5002Z"
  stroke="#A7A7A7"
  stroke-width="1.66667"
  stroke-linecap="round"
  stroke-linejoin="round"
  />
</svg>

<span>Logistics</span>
</li>
<li>
  <svg
  className="i-l-svg"
  width="20"
  height="20"
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
  d="M16.667 5.8335H3.33366C2.41318 5.8335 1.66699 6.57969 1.66699 7.50016V15.8335C1.66699 16.754 2.41318 17.5002 3.33366 17.5002H16.667C17.5875 17.5002 18.3337 16.754 18.3337 15.8335V7.50016C18.3337 6.57969 17.5875 5.8335 16.667 5.8335Z"
  stroke="#A7A7A7"
  stroke-width="1.66667"
  stroke-linecap="round"
  stroke-linejoin="round"
  />
  <path
  d="M13.3337 17.5V4.16667C13.3337 3.72464 13.1581 3.30072 12.8455 2.98816C12.5329 2.67559 12.109 2.5 11.667 2.5H8.33366C7.89163 2.5 7.46771 2.67559 7.15515 2.98816C6.84259 3.30072 6.66699 3.72464 6.66699 4.16667V17.5"
  stroke="#A7A7A7"
  stroke-width="1.66667"
  stroke-linecap="round"
  stroke-linejoin="round"
  />
</svg>

<span>Enterprise</span>
</li>
</ul>
</div>
<a
className="bttn bttn-primary"
href="/projects/"
// style={{ display: "none" }}
>
View Projects
<div className="arrow-dot">
  <img loading="lazy"
  src={primaryCtaArrow}
  className="icon icon-submit"
  alt=""
  />
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="ui-ux-service-wrapper blur-overlay">
  <div className="left-div">
    <div className="grad type-2 small gr-box2 grad-one "></div>
    <div className="grad type-2 small gr-box2 grad-two "></div>

  </div>
  <div className="right-div">
    <div className="heading-wrapper">
      <h2 className="heading newh2">
        UI UX Design Services,
        <br /> across new technologies
      </h2>
    </div>
    <div className="grid-container">
      <div className="parent">
        <div className="flex">
          <span className="numbers">01</span>
          <h4 className="newh4">AR/VR</h4>
        </div>
        <div className="flex">
          <span className="numbers">02</span>
          <h4 className="newh4">Web 3.0</h4>
        </div>
        <div className="flex">
          <span className="numbers">03</span>
          <h4 className="newh4">IoT</h4>
        </div>
        <div className="flex">
          <span className="numbers">04</span>
          <h4 className="newh4">Blockchain</h4>
        </div>
        <div className="flex">
          <span className="numbers">05</span>
          <h4 className="newh4">NFT</h4>
        </div>
      </div>
    </div>
  </div>
</section>

<section
className="our-platforms-wrapper blur-overlay"
style={{ display: "none" }}
>
<div className="div-wrap">
  <div className="container">
    <h3 className="section-heading">Designing across platforms</h3>
    <div className="platform-listing">
      <ul className="platform-list">
        <li data-cursor-img={webAppPreview}>
          <div className="intro">
            <span>01</span>
            <h5>Desktop</h5>
          </div>
          <img loading="lazy"
          src={visibility}
          className="img-fluid visibility-icon"
          alt=""
          />
        </li>
        <li data-cursor-img={mobile}>
          <div className="intro">
            <span>02</span>
            <h5>Mobile</h5>
          </div>
          <img loading="lazy"
          src={visibility}
          className="img-fluid visibility-icon"
          alt=""
          />
        </li>
        <li data-cursor-img={smartwatchAppPreview}>
          <div className="intro">
            <span>03</span>
            <h5>Wearables</h5>
          </div>
          <img loading="lazy"
          src={visibility}
          className="img-fluid visibility-icon"
          alt=""
          />
        </li>
        <li data-cursor-img={tvAppPreview}>
          <div className="intro">
            <span>04</span>
            <h5>Smart TV</h5>
          </div>
          <img loading="lazy"
          src={visibility}
          className="img-fluid visibility-icon"
          alt=""
          />
        </li>
        <li data-cursor-img={kiosk}>
          <div className="intro">
            <span>05</span>
            <h5>Digital Kiosks</h5>
          </div>
          <img loading="lazy"
          src={visibility}
          className="img-fluid visibility-icon"
          alt=""
          />
        </li>
        <li data-cursor-img={vrPreview}>
          <div className="intro">
            <span>06</span>
            <h5>AR &amp; VR</h5>
          </div>
          <img loading="lazy"
          src={visibility}
          className="img-fluid visibility-icon"
          alt=""
          />
        </li>
        <li data-cursor-img={medical}>
          <div className="intro">
            <span>07</span>
            <h5>Medical Devices</h5>
          </div>
          <img loading="lazy"
          src={visibility}
          className="img-fluid visibility-icon"
          alt=""
          />
        </li>
        <li data-cursor-img={autoInfotainment}>
          <div className="intro">
            <span>08</span>
            <h5>Auto Infotainment Systems</h5>
          </div>
          <img loading="lazy"
          src={visibility}
          className="img-fluid visibility-icon"
          alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</div>
</section>
<section className="services-pratice-wrapper blur-overlay">
  <div className="div-wrap">
    <div className="container">
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="services-p-tab"
      >
      <Tab eventKey="discover" title="Discover">
        <figure
        className={`brHeight brWidth serpratice-fig ${
          isDiscoverTriggered ? "open" : ""
        }`}
        >
        <img loading="lazy" src={discover} className="img-fluid" alt="" />
        <figcaption>
          <button
          className="toggle-indicator"
          onClick={() =>
          setDiscoverTrigger(!isDiscoverTriggered)
        }
        >
        <span></span>
        <span></span>
      </button>
      <div className="brief">
        <p className="fs-18">
          For us, every project begins with a discovery phase,
          where we define the scope and vision of the project
          to give a foundation to the design process. We work
          closely with all the stakeholders to identify
          resources, milestones, timelines and deliverables of
          the project.
        </p>
      </div>
    </figcaption>
  </figure>
</Tab>
<Tab eventKey="define" title="Define">
  <figure
  className={`brHeight brWidth serpratice-fig ${
    isDiscoverTriggered ? "open" : ""
  }`}
  >
  <img loading="lazy" src={define} className="img-fluid" alt="" />
  <figcaption>
    <button
    className="toggle-indicator"
    onClick={() =>
    setDiscoverTrigger(!isDiscoverTriggered)
  }
  >
  <span></span>
  <span></span>
</button>
<div className="brief">
  <p className="fs-18">
    After gathering all the valuable insights, we
    establish a clear idea of the problem the product is
    trying to address. We observe the problem from a
    human lens and create a problem statement that
    serves as a compass for the remaining design
    process.
  </p>
</div>
</figcaption>
</figure>
</Tab>
<Tab eventKey="design" title="Design">
  <figure
  className={`brHeight brWidth serpratice-fig ${
    isDiscoverTriggered ? "open" : ""
  }`}
  >
  <img loading="lazy" src={design} className="img-fluid" alt="" />
  <figcaption>
    <button
    className="toggle-indicator"
    onClick={() =>
    setDiscoverTrigger(!isDiscoverTriggered)
  }
  >
  <span></span>
  <span></span>
</button>
<div className="brief">
  <p className="fs-18">
    We use all the information gathered until this stage
    to get started with a design roadmap that meets the
    desired outcome. With interactive and intuitive
    design prototypes we create a fully responsive
    platform, which can be user-tested, and iterated on.
  </p>
</div>
</figcaption>
</figure>
</Tab>
<Tab eventKey="develop" title="Develop">
  <figure
  className={`brHeight brWidth serpratice-fig ${
    isDiscoverTriggered ? "open" : ""
  }`}
  >
  <img loading="lazy" src={develop} className="img-fluid" alt="" />
  <figcaption>
    <button
    className="toggle-indicator"
    onClick={() =>
    setDiscoverTrigger(!isDiscoverTriggered)
  }
  >
  <span></span>
  <span></span>
</button>
<div className="brief">
  <p className="fs-18">
    Finally, the designs are handed to the
    frontend-development team, who masterfully translate
    the work done by designers, into a product which can
    be interfaced with by users, tying up the seamless
    process with actionable output being delivered
    end-to-end!
  </p>
</div>
</figcaption>
</figure>
</Tab>
</Tabs>
</div>
</div>
</section>

<section className="lets_talk blur-overlay">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-md-4">
        <div className="lets_talk_txt">
          <h2 className="section-heading newh2">
            Onething, A leading Global UI UX Design Company
          </h2>
          <a className="bttn bttn-primary" style={{width: "240px"}} href="/contact/">
            Start a Project
            <div className="arrow-dot">
              <img loading="lazy"
              src={primaryCtaArrow}
              className="icon icon-submit"
              alt=""
              />
            </div>
          </a>
        </div>
      </div>
      <div className="col-md-7">
        <div className="numbers-card content-grid-two content-grid">
          <ul className="list-unstyled talk_list">
            <li>
              <div className="card black_card projects-card">
                <div className="card_content">
                  <h4>7+</h4>
                  <label>Years of</label>
                  <label>Delivering</label>
                  <label>Excellence</label>
                </div>
              </div>
            </li>
            <li>
              <div className="card black_card likes-card">
                <div className="card_content">
                  <h4>4.9</h4>
                  <label>Clutch</label>
                  <label>Rating</label>
                </div>
              </div>
            </li>
            {/* <li>
              <div className="card black_card conferences-card">
                <div className="card_content">
                  <h4>30K+</h4>
                  <label>Design Community</label>
                </div>
              </div>
            </li> */}
          </ul>
          <ul className="list-unstyled talk_list">
            <li>
              <div className="card black_card clients-card">
                <div className="card_content">
                  <h4>250+</h4>
                  <label>Products Created</label>
                </div>
              </div>
            </li>
            <li>
              <div className="card black_card awards-card">
                <div className="card_content">
                  <h4>10+</h4>
                  <label>Countries </label>
                  <label>Served</label>
                </div>
              </div>
            </li>
            <li>
              <div className="card black_card years-card">
                <div className="card_content">
                  <h4>80+</h4>
                  <label>Strong &</label>
                  <label>Diverse People</label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<ServicesProjects />

<section>
  <div className="homefaq--main">
    <div className="faq-page-wrapper page-wrapper">
      <section
      className="page-heading blur-overlay"
      style={{ paddingBottom: " 0px" }}
      >
      <div className="container">
        <div className="heading-wrapper custom-heading-wrapper">
          <h2 className="section-heading newh2">
            Frequently asked questions
          </h2>
          <div className="grad type-2 small small-gr gr-box2 "></div>
        </div>
      </div>
    </section>
    <section className="faq-accords-wrapper blur-overlay">
      <div className="container">
        <div className="main__">
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>What are UI UX design services?</Accordion.Header>
              <Accordion.Body>
                <p className="fs-20">UI UX design services are aimed at bridging the gap between between technology and human interaction. Through these services, UI UX design agencies provide value to businesses in the digital world. UI UX design services kickstart by understanding user behaviours, needs, and motivations, later translating these insights into highly efficient, effective and aesthetically pleasing digital products. The importance of UI UX design services lies in its ability to make technology accessible and enjoyable for users, enhancing their engagement and satisfaction. UI UX design services help mould the digital landscape, ensuring that businesses can deliver experiences that resonate with their users while driving their own growth and success. This intricate fusion between user needs and business goals, is accomplished by UI UX design services, and is what makes digital products not just functional, but delightful and immersive.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>How can UI UX design services benefit my business?</Accordion.Header>
              <Accordion.Body>
                <p className="fs-20">Utilising UI UX design services in your business is the key to equipping your digital presence with a powerful engine of growth and user satisfaction. With professionally crafted user experiences, you're essentially presenting your users with an aesthetically pleasing digital environment that is both engaging and easy to navigate.</p>
                <p className="fs-20">Taking design services from top and reputable design studios ensure that users’ interaction with your product or service goes beyond the surface level. It is about the journey your users undertake, from the very moment they discover your product to the after-sales service. A memorable user experience forms the backbone of a seamless and enjoyable user journey, encouraging customers to keep coming back.
                  <br/>
                UI UX design services form an essential part of your product's identity, playing a vital role in determining how your customers perceive and interact with your business. In essence, leveraging UI UX design services is not just about making your digital product look good. It's about creating an experience that speaks to your audience, empathises with their needs, and provides them with value at every touchpoint. This is the true power of UI UX design services and how they can propel your business’ success.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Can UI UX design services help enhance the accessibility of my website or application?</Accordion.Header>
              <Accordion.Body>
                <p className="fs-20">UI UX design services blend the principles of aesthetics, functionality, and inclusivity to create an interface that is accessible for users of all kinds. Design services take a strategic approach with elements such as optimal colour contrast, legible typography, clear icons, and logical navigation, thereby removing any potential barriers to accessibility.</p>
                <p className="fs-20">However, the true value of UI UX design services extends beyond these tangible elements. It's about empathy — understanding the challenges diverse users might face, anticipating their needs, and innovating a solution that accommodates everyone. This might involve creating a responsive design that adjusts to different screen sizes, or ensuring compatibility with assistive technologies like screen readers and voice recognition software.Additionally, UI UX design services prioritise user testing by involving diverse user groups, which is crucial in identifying and rectifying any overlooked accessibility issues.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>What does the UI UX design process involve?</Accordion.Header>
              <Accordion.Body>
               <p className="fs-20">The UI UX design process begins with a comprehensive understanding of the problem at hand, and the definition of the project scope. To achieve this, UX designers conduct informative discovery workshops and then dive deep into the process with UX research, wireframing, prototyping, and usability testing. The design process inculcates employing low and high-fidelity prototypes and mockups to present the final design solutions. These prototypes undergo usability testing to gather user feedback. This feedback aids designers in refining the design, ensuring an optimal outcome in of the UI UX design process.</p>
             </Accordion.Body>
           </Accordion.Item>
           <Accordion.Item eventKey="4">
            <Accordion.Header>What are some key elements of effective UI UX design?</Accordion.Header>
            <Accordion.Body>
             <p className="fs-20">To understand the key elements of effective UI UX design, it's important to know that it's a multifaceted field that combines visual aesthetics, functional design, and an in-depth understanding of human psychology. The ultimate goal of UI UX design services is to create a seamless, intuitive, and engaging experience for users, making their interaction with a product or service as smooth and satisfactory as possible.</p>
             <p className="fs-20">In order to craft successful products its significant to adopt a user-centered approach. By placing the user at the heart of the design process, designers meet their needs, wants, and limitations, offering optimal usability and accessibility.</p>
             <p className="fs-20">Clarity and simplicity are also imperative. The goal is streamline the user journey, minimising user input and avoiding unnecessary confusion. An intuitive, and easy to use design reduces the cognitive load on users, enabling them to achieve their goals more effortlessly.</p>
             <p className="fs-20">Furthermore, consistency is a key aspect of UI UX design. Whether it's the layout, fonts, colours, or design elements, maintaining uniformity throughout the application or website creates a cohesive user experience. This consistency reduces the learning curve for users, making the product more user-friendly.
              <br/>
              Effective UI UX design also prioritises feedback and interaction. Users should be constantly informed about actions, state changes, or errors through various visual cues, animations, or sounds. This level of engagement keeps users aware and enhances their overall experience.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>What role does research play in UI UX design services?</Accordion.Header>
          <Accordion.Body>
           <p className="fs-20">Research holds a central role in UI UX design services. It serves as the foundation upon which successful user experiences are built. Research helps design teams in understanding their users, needs, behaviours, and the contexts in which they will communicate with the product. These insights, in turn, influences every decision made throughout the design process.</p>
           <p className="fs-20">In the context of UI UX design services, various research methodologies are used to ensures a user-centered approach. It involves a range of practises, such as interviews, surveys, usability testing, and analysis of user data, to gather insights about the end users. These interactions with users help in creating user personas and user journey maps, which act as guiding tools for the design process.</p>
         </Accordion.Body>
       </Accordion.Item>
       <Accordion.Item eventKey="6">
        <Accordion.Header>How long does it take to complete a UI and UX design project?</Accordion.Header>
        <Accordion.Body>
         <p className="fs-20">The duration varies depending on the project requirement. However it’s usually between 3 months to 1 year.</p>
       </Accordion.Body>
     </Accordion.Item>
   </Accordion>
   <div className="cta-wrapper">
    <a className="bttn bttn-primary" href="/faq/">
      View More
      <div className="arrow-dot">
        <img loading="lazy"
        src={primaryCtaArrow}
        className="icon icon-submit"
        alt=""
        />
      </div>
    </a>
  </div>
</div>
</div>
</section>
</div>
</div>
</section>

<Testimonials />
<CuratedProjectsLarge title={"The design circle"} />
</div>
)}
</>
);
};
export default Services;
