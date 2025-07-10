import "./onethingDesignSchool.scss";

import React from 'react';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import ClientGrid from "../../partials/clients/ClientGrid";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ctaArrow from "../../assets/img/global/grad-arrow.svg";
import teamMemDivanshu from "../../assets/img/about/team/divanshu.webp";
import teamMemManik from "../../assets/img/about/team/manik.webp";
import teamMemAntara from "../../assets/img/about/team/antara.webp";
import teamMemVenky from "../../assets/img/about/team/venky.webp";
import teamMemSuhail from "../../assets/img/about/team/suhail.webp";
import masterUnion from "../../assets/img/ods/master-union.svg";
import growthSchool from "../../assets/img/ods/growth-school.svg";

import teamMemAmritansh from "../../assets/img/about/team/amritansh.webp";


import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import bannerOds from "../../assets/img/ods/banner-ods.webp";
import beyondClassroom from "../../assets/img/ods/beyond-classroom.webp";

const OnethingDesignSchool = () => {
  useEffect(() => {
    document.body.classList.add("ods-page");
  }, []);
  let location = useLocation();

  const [deviceKey, setDeviceKey] = useState("hdplus");
  const odsBanner = {
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


  return (
  <>
  <Helmet>
    <link rel="preload dns-prefetch canonical" href={`https://www.onething.design${location?.pathname}`} ></link>
  </Helmet>
  <div className="ods-page-wrapper page-wrapper">
    <section className="page-heading blur-overlay">
      <div className="container">
        <div className="heading-wrapper">
          <h1 className="left_container newh1">
            Empowering the <br/>Next - Gen of UX designers
          </h1>
          <div className="left_container cta-wrapper">
            <div className="col-md-3 col-7 buttons-wrapper">
              <a className="bttn bttn-primary" style={{width: '240px'}} href="/become-mentor">Become a Mentor
                <div className="arrow-dot">
                  <img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt=""/>
                </div>
              </a>
            </div>
          </div>
          <div id="grad_one_left" className="grad type-2 small gr-box2" ></div>
          <div id="grad_two_right" className="grad type-2 small gr-box" ></div>
        </div>
      </div>
    </section>
    <section className="banner-image-section blur-overlay">
      <div className="div-wrap container">
        <figure className="right_container">
          <Controller>
            <Scene indicators={false} duration="200%" triggerHook="onEnter">
              <Timeline wrapper={
                <div className="parallax" style={odsBanner[deviceKey].style} />
              }>
              <Tween position="0" from={{ yPercent: -30, }} to={{   yPercent: 0, }}>
                <img loading="lazy" src={bannerOds} className="img-fluid" alt="UI UX Design Services" />
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </figure>
    </div>
  </section>
  <section className="ux-role-wrapper blur-overlay">
    <div className="left_container">
      <div className="custom-wrapper">
        <div className="grad type-2 small gr-box2"></div>
        <div className="grad type-2 large mesh-gradient gr-box"></div>
        <h2 className="newh2 section-heading">The role of a UX designer is no longer peripheral</h2>
        <p className="fs-20">It's become central to businesses around the world. Our mission is to help aspiring designers transition from being mere participants in this wave of demand to becoming leading figures who shape and drive the industry.</p>
      </div>
    </div>
  </section>
  <section className="beyond-classrooms-wrapper blur-overlay">
    <div className="grad type-2 large gr-box2"></div>
    <div className="container custom-container">
      <div className="left_container">
        <h2 className="section-heading newh2">Beyond classrooms</h2>
        <p className="fs-24">With us, you won't just learn the principles of user experience design, you'll learn to apply them in ways that push boundaries.</p>
      </div>
      <div className="left_container">
        <div className="content-grid">
          <div className="content-div">
            <div className="accordion-content-area service-accordian">
              <Accordion flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Globally recognised excellence</Accordion.Header>
                  <Accordion.Body>
                    <p>We’ve worked with businesses established across the globe, and this exposure translates into how we teach.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Real world experiences</Accordion.Header>
                  <Accordion.Body>
                    <p>Break free from the constraints of traditional theory, and dive headfirst into industry projects by solving real-time problems.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Interdisciplinary learning</Accordion.Header>
                  <Accordion.Body>
                    <p>We don’t just teach design, we equip our students with a business mindset and how design decisions directly impact the bottom line.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Career Opportunities</Accordion.Header>
                  <Accordion.Body>
                    <p>Get a chance to score your spot at Onething and many other top design agencies and product companies.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Collaborative Programs</Accordion.Header>
                  <Accordion.Body>
                    <p>We have partnered with some of the top education institutes to provide students the utmost exposure they deserve.</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion> 
            </div>
          </div>
          <div className="visual-glance">
            <figure>
              <img loading="lazy" src={beyondClassroom} className="img-fluid" alt="UI UX Design Services" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="learning-from-industry-leaders-wrapper blur-overlay">
    <div className="div-wrap">
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="section-heading newh2">
            Learn from industry leaders
          </h2>
          <p>Meet the building pillars of Onething Design School, bringing their own domain expertise to the table.</p>
        </div>
        <div className="mentors-grid">
          <div className="mentors">
            <div className="mentor-card">
              <figure>
                <img loading="lazy" src={teamMemDivanshu} className="img-fluid" alt="Akbar" />
                <figcaption>
                  <h5 className="var-light">
                    Divanshu Thakral
                    <small className="caption gradient-text">Co-founder At onething </small>
                  </h5>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mentors">
            <div className="mentor-card">
              <figure>
                <img loading="lazy" src={teamMemManik} className="img-fluid" alt="Akbar" />
                <figcaption>
                  <h5 className="var-light">
                    Manik Arora
                    <small className="caption gradient-text">Co-founder and design director At onething</small>
                  </h5>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mentors">
            <div className="mentor-card">
              <figure>
                <img loading="lazy" src={teamMemVenky} className="img-fluid" alt="Akbar" />
                <figcaption>
                  <h5 className="var-light">
                    Venky
                    <small className="caption gradient-text">Design Manager At onething</small>
                  </h5>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mentors">
            <div className="mentor-card">
              <figure>
                <img loading="lazy" src={teamMemAntara} className="img-fluid" alt="Akbar" />
                <figcaption>
                  <h5 className="var-light">
                    Antara Bhargava
                    <small className="caption gradient-text">EXPERIENCE DESIGN LEAD at onething</small>
                  </h5>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mentors">
            <div className="mentor-card">
              <figure>
                <img loading="lazy" src={teamMemSuhail} className="img-fluid" alt="Akbar" />
                <figcaption>
                  <h5 className="var-light">
                    Suhail Gupta
                    <small className="caption gradient-text">Product Designer at Urban Company</small>
                  </h5>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mentors">
            <div className="mentor-card">
              <figure>
                <img loading="lazy" src={teamMemAmritansh} className="img-fluid" alt="Akbar" />
                <figcaption>
                  <h5 className="var-light">
                    Amritansh Pandey
                    <small className="caption gradient-text">UI/UX Designer at Mastercard</small>
                  </h5>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="become-mentor-wrapper blur-overlay">
    <div className="container">
      <div className="grad type-2 medium"></div>
      <div className="grad type-2 mesh-gradient large"></div>
      <div className="div-wrap">
        <div className="container">
          <h2 className="newh2">Shape the careers of aspiring UX professionals</h2>
          <div className="buttons-wrapper">
            <p className="gradient-text">write to us: 
            <a className="bttn bttn-secondary" href="mailto:sayhello@onething.design">
               sayhello@onething.design
            </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="partnerships-wrapper blur-overlay">
    <div className="container">
      <div className="div-wrap">
        <div className="heading-wrapper">
          <h2 className="section-heading newh2">Partnerships</h2>
        </div>
        <div className="partnerships-grid">
          <a href="https://mastersunion.org/mastercamps/user-experience-design" target="_blank" rel="noreferrer">
            <div className="partner-info">
              <h5>Masters’ Union</h5>
              <p>MasterCamp in User Experience Design offers a holistic curriculm including capstone with real clients, design hackathons, UX teardowns and much more.</p>
             <figure>
                <img loading="lazy" src={masterUnion} className="school-logo" alt="" />
             </figure>
            </div>
          </a>
          <a href="https://learn.growthschool.io/user-experience-research" target="_blank" rel="noreferrer">
              <div className="partner-info">
              <h5>Growth school</h5>
              <p>UX Research & Strategy Program is focussed at helping design professionals turn user insights into effective design strategies.</p>
             <figure>
                <img loading="lazy" src={growthSchool} className="school-logo" alt="" />
             </figure>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <ClientGrid partnerHeading={"Brands your mentors have helped build"} />
  <section className="demo--strip toshow">
    <div className="container">
    <div className="content-grid position-relative">
    <div className="content">
    <h3 className="section-heading">
    Let’s get you <br/> industry-ready!
    </h3>
    <div className="cta-wrapper">
    <a className="bttn bttn-secondary" href="/register">
    <span>Register Now</span>
    <img loading="lazy" src={ctaArrow} className="icon-arrow icon" alt="" />
    </a>
    </div>
    </div>
    <div className="visual-glance">
    <div className="grad type-2 large"></div>
    <div className="grad type-2 small"></div>
    </div>
    </div>
    </div>
    </section>
</div>
</>
);
};

export default OnethingDesignSchool















