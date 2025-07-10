import "./about.scss";
import "../../style.scss";

import React from 'react';
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import CuratedProjectsSmall from "../../partials/curated-small/CuratedProjectsSmall";
import Awards from "../../partials/awards/awards";
// Images
import bannerAbout from "../../assets/img/about/about_banner.webp";
import cultureAbout1 from "../../assets/img/about/our_culture_img12.webp";
import cultureAbout2 from "../../assets/img/about/our_culture_img2.webp";

import culture2 from "../../assets/img/about/things_img2.webp";
import ourWorkBanner from "../../assets/img/about/wrk_img.webp";
import ourWorkBannerPark from "../../assets/img/about/wrk_img2.webp";

import teamMemAkbar from "../../assets/img/about/team/akbar.webp";
import teamMemDivanshu from "../../assets/img/about/team/divanshu.webp";
import teamMemManik from "../../assets/img/about/team/manik.webp";
import teamMemRavina from "../../assets/img/about/team/ravina.webp";
import teamMemHari from "../../assets/img/about/team/hari.webp";
import teamMemShaurya from "../../assets/img/about/team/shaurya.webp";
import teamMemVenky from "../../assets/img/about/team/venky.webp";
import teamMemAishwarya from "../../assets/img/about/team/aishwarya.webp";

import dragIcon from "../../assets/img/global/drag-btn.svg";

import rightSliderArrow from "../../assets/img/global/culture-hover-right.svg";
import leftSliderArrow from "../../assets/img/global/culture-hover-left.svg";

import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { Helmet } from "react-helmet";
import MouseFollower from "mouse-follower";

// Numbers Bg
const About = () => {
  // useEffect(() => {
  //   document.body.classList.add("about-page");
  // }, []);
  const [teamSlider, setTeamSlider] = useState();
  const [deviceKey, setDeviceKey] = useState("hdplus");
  const [loading, setLoading] = useState(true);

  let first_grad = document?.getElementById("first_grad");
  if (first_grad != null) {
    first_grad.classList.replace("type-2", "type-3");
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

    let second_sec_left_grad = document.getElementById("second_sec_left_grad");
    let second_sec_right_grad = document.getElementById(
      "second_sec_right_grad"
    );
    let final_grad_one = document.getElementById("final_grad_one");
    let final_grad_two = document.getElementById("final_grad_two");
    let final_grad_three = document.getElementById("final_grad_three");

    if (isInViewport(first_grad)) {
      first_grad?.classList.replace("type-2", "type-3");
    } else {
      first_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(second_sec_left_grad)) {
      second_sec_left_grad?.classList.replace("type-2", "type-3");
    } else {
      second_sec_left_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(second_sec_right_grad)) {
      second_sec_right_grad?.classList.replace("type-2", "type-3");
    } else {
      second_sec_right_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(final_grad_one)) {
      final_grad_one?.classList.replace("type-2", "type-3");
    } else {
      final_grad_one?.classList.replace("type-3", "type-2");
    }
    if (isInViewport(final_grad_two)) {
      final_grad_two?.classList.replace("mesh-gradient", "type-3");
    } else {
      final_grad_two?.classList.replace("type-3", "mesh-gradient");
    }
    if (isInViewport(final_grad_three)) {
      final_grad_three?.classList.replace("type-2", "type-3");
    } else {
      final_grad_three?.classList.replace("type-3", "type-2");
    }
  });

  useEffect(() => {
    addPageMetas(PAGE_METAS.about.title, PAGE_METAS.about.desc);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    document.body.classList.add("about-page");
    console.log(document.querySelector(".mf-cursor-media"));
    document.querySelector(".mf-cursor-media").style.width = "150px";
    document.querySelector(".mf-cursor-media").style.height = "150px";
    document.querySelector(".mf-cursor-media").style.margin = "-70px 0 0 -70px";
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

  const cultureAbout = {
    fhd: {
      style: {
        width: "100%",
        height: "500px",
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
        height: "406px",
      },
    },
    smalltablet: {
      style: {
        width: "100%",
        height: "406px",
      },
    },
    phone: {
      style: {
        width: "100%",
        height: "406px",
      },
    },
  };

  const imgCulture = {
    fhd: {
      style: {
        width: "100%",
        height: "454px",
      },
    },
    qhd: {
      style: {
        width: "100%",
        height: "454px",
      },
    },
    hdplus: {
      style: {
        width: "100%",
        height: "454px",
      },
    },
    bigtablet: {
      style: {
        width: "100%",
        height: "291px",
      },
    },
    smalltablet: {
      style: {
        width: "100%",
        height: "291px",
      },
    },
    phone: {
      style: {
        width: "100%",
        height: "291px",
      },
    },
  };

  const workBanner = {
    fhd: {
      style: {
        width: "100%",
        height: "540px",
      },
    },
    qhd: {
      style: {
        width: "100%",
        height: "540px",
      },
    },
    hdplus: {
      style: {
        width: "100%",
        height: "540px",
      },
    },
    bigtablet: {
      style: {
        width: "100%",
        height: "234px",
      },
    },
    smalltablet: {
      style: {
        width: "100%",
        height: "380px",
      },
    },
    phone: {
      style: {
        width: "100%",
        height: "234px",
      },
    },
  };

  const imgCultureTwo = {
    fhd: {
      style: {
        width: "100%",
        height: "596px",
      },
    },
    qhd: {
      style: {
        width: "100%",
        height: "596px",
      },
    },
    hdplus: {
      style: {
        width: "100%",
        height: "588px",
      },
    },
    bigtablet: {
      style: {
        width: "100%",
        height: "348px",
      },
    },
    smalltablet: {
      style: {
        width: "100%",
        height: "348px",
      },
    },
    phone: {
      style: {
        width: "100%",
        height: "348px",
      },
    },
  };

  const imgCultureThree = {
    fhd: {
      style: {
        width: "100%",
        height: "428px",
      },
    },
    qhd: {
      style: {
        width: "100%",
        height: "428px",
      },
    },
    hdplus: {
      style: {
        width: "100%",
        height: "428px",
      },
    },
    bigtablet: {
      style: {
        width: "100%",
        height: "195px",
      },
    },
    smalltablet: {
      style: {
        width: "100%",
        height: "195px",
      },
    },
    phone: {
      style: {
        width: "100%",
        height: "195px",
      },
    },
  };

  const teamSliderNext = () => {
    teamSlider.slickNext();
  };

  const teamSliderPrev = () => {
    teamSlider.slickPrev();
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
          href="https://www.onething.design/about"
        ></link>
      </Helmet>
      {loading && <PageLoader />}
      {!loading && (
        <div className="about-page-wrapper page-wrapper">
          <section className="about_banner blur-overlay">
            <div className="container position-relative">
              <h1>Making change, Onething at a time</h1>
              <div
                id="first_grad"
                className="grad-img ab_grad grad type-2 medium"
              ></div>
            </div>
          </section>
          <section className="banner-image-section blur-overlay">
            <div className="div-wrap right_container">
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
                          style={aboutBanner[deviceKey].style}
                        />
                      }
                    >
                      <Tween
                        position="0"
                        from={{ yPercent: -30 }}
                        to={{ yPercent: 0 }}
                      >
                        <img
                          loading="lazy"
                          src={bannerAbout}
                          className="img-fluid"
                          alt=""
                        />
                      </Tween>
                    </Timeline>
                  </Scene>
                </Controller>
              </figure>
            </div>
          </section>
          <section className="about_statement blur-overlay">
            <div className="container about_sec">
              <div className="row no-gutter">
                <div className="col-md-12 position-relative">
                  <h5>
                    Beyond being a leading UI UX Design Agency, we also extend
                    into endeavours that are conscious and mindful in nature. A
                    little curiosity, an open mind, and our shared love for
                    animals, music & pizza is what make us design heads who we
                    are. Obsessing over creating beautiful and sustainable
                    experiences is our passion.
                  </h5>
                  <div
                    id="second_sec_left_grad"
                    className="grad-img grad_img3 grad type-2 medium"
                  ></div>
                  <div
                    id="second_sec_right_grad"
                    className="grad-img grad_img4 grad type-2 medium"
                  ></div>
                </div>
              </div>
            </div>
          </section>
          <section className="lets_talk blur-overlay">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-4">
                  <div className="lets_talk_txt">
                    <h2 className="section-heading">Dissecting the impact</h2>
                    <p>
                      Witness the numbers, narrate our tale of disruption with
                      design.
                    </p>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="numbers-card content-grid-two content-grid">
                    <ul className="list-unstyled talk_list">
                      <li>
                        <div className="card black_card projects-card">
                          <div className="card_content">
                            <h4>250+</h4>
                            <label>Projects</label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="card black_card likes-card">
                          <div className="card_content">
                            <h4>25+</h4>
                            <label>Industries</label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="card black_card conferences-card">
                          <div className="card_content">
                            <h4>30K+</h4>
                            <label>Design Community</label>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-unstyled talk_list">
                      <li>
                        <div className="card black_card clients-card">
                          <div className="card_content">
                            <h4>80+</h4>
                            <label>Team</label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="card black_card awards-card">
                          <div className="card_content">
                            <h4>05</h4>
                            <label>Awards</label>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="card black_card years-card">
                          <div className="card_content">
                            <h4>07</h4>
                            <label>Years</label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <Awards title="about" />
          </section>
          <section className="thing_we_do blur-overlay">
            <div className="container">
              <h3 className="section-heading">Bonds beyond work </h3>
              <div className="row flex-row-reverse no-gutter">
                <div className="col-md-4">
                  <div className="cult_cards first-card-culture">
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
                                style={imgCulture[deviceKey].style}
                              />
                            }
                          >
                            <Tween
                              position="0"
                              from={{ yPercent: -30 }}
                              to={{ yPercent: 0 }}
                            >
                              <img
                                loading="lazy"
                                src={culture2}
                                className="img-fluid"
                                alt=""
                              />
                            </Tween>
                          </Timeline>
                        </Scene>
                      </Controller>
                    </figure>
                    <p class="has-border">
                      Every year, our entire team comes together for an
                      off-site, to experience togetherness even in a hybrid
                      setup.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt_30em no-gutter">
                <div className="col-md-6">
                  <div className="cult_cards second-card-culture">
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
                                style={imgCultureTwo[deviceKey].style}
                              />
                            }
                          >
                            <Tween
                              position="0"
                              from={{ yPercent: -20 }}
                              to={{ yPercent: 0 }}
                            >
                              <img
                                loading="lazy"
                                src={cultureAbout1}
                                className="img-fluid"
                                alt=""
                              />
                            </Tween>
                          </Timeline>
                        </Scene>
                      </Controller>
                    </figure>
                    <p class="has-border">
                      Culture and diversity remain an intrinsic part of
                      Onething, it reflects in the way we celebrate!{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row no-gutter">
                <div className="col-md-8 mx-auto">
                  <div className="cult_cards">
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
                                style={imgCultureThree[deviceKey].style}
                              />
                            }
                          >
                            <Tween
                              position="0"
                              from={{ yPercent: -30 }}
                              to={{ yPercent: 0 }}
                            >
                              <img
                                loading="lazy"
                                src={ourWorkBannerPark}
                                className="img-fluid"
                                alt=""
                              />
                            </Tween>
                          </Timeline>
                        </Scene>
                      </Controller>
                    </figure>
                    <p class="has-border">
                      Our immense adoration and love for all beings, comes from
                      our culture of giving back.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="our-culture-wrapper blur-overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="cult_cards">
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
                                style={cultureAbout[deviceKey].style}
                              />
                            }
                          >
                            <Tween
                              position="0"
                              from={{ yPercent: -50 }}
                              to={{ yPercent: 0 }}
                            >
                              <img
                                loading="lazy"
                                src={cultureAbout1}
                                className="img-fluid"
                                alt="Our Culture"
                              />
                            </Tween>
                          </Timeline>
                        </Scene>
                      </Controller>
                    </figure>
                    <p class="has-border">
                      Our culture defines us and results in exemplary work. Last
                      month, we took an Offsite to Ranthambore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row flex-row-reverse mt_15em">
                <div className="col-md-4">
                  <div className="cult_cards">
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
                                style={{ width: "100%", height: "329px" }}
                              />
                            }
                          >
                            <Tween
                              position="0"
                              from={{ yPercent: -10 }}
                              to={{ yPercent: 0 }}
                            >
                              <img
                                loading="lazy"
                                src={cultureAbout2}
                                className="img-fluid"
                                alt="Our Culture"
                              />
                            </Tween>
                          </Timeline>
                        </Scene>
                      </Controller>
                    </figure>
                    <p class="has-border">
                      Our culture defines us and results in exemplary work. Last
                      month, we took an Offsite to Ranthambore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="meet_our_team">
            <div className="left_container">
              <div className="row">
                <div className="col-md-4">
                  <h2>
                    Meet the <br /> A-one <br /> team
                  </h2>
                  <p>
                    We are a diverse set of people who challenge conventions and
                    design our own chronicles.
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="slider-wrapper image-slider-wrap">
                    <Slider
                      className="teams_slider"
                      {...teamSettings}
                      ref={(teamSlider) => setTeamSlider(teamSlider)}
                    >
                      <div className="teams_card">
                        <figure>
                          <img
                            loading="lazy"
                            src={teamMemDivanshu}
                            className="img-fluid"
                            alt="Divanshu Thakral"
                          />
                          <figcaption>
                            <h5>
                              Divanshu Thakral
                              <small className="caption">Co-founder</small>
                            </h5>
                            <p>
                              "All our dreams can come true, if we have the
                              courage to pursue them."
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="teams_card">
                        <figure>
                          <img
                            loading="lazy"
                            src={teamMemManik}
                            className="img-fluid"
                            alt="Manik Arora"
                          />
                          <figcaption>
                            <h5>
                              Manik Arora
                              <small className="caption">
                                Co-founder and design director
                              </small>
                            </h5>
                            <p>
                              "Have no fear of perfection - you'll never reach
                              it."
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="teams_card">
                        <figure>
                          <img
                            loading="lazy"
                            src={teamMemRavina}
                            className="img-fluid"
                            alt="Manik Arora"
                          />
                          <figcaption>
                            <h5>
                              Ravina
                              <small className="caption">UI LEAD</small>
                            </h5>
                            <p>
                              "For us, empathy is the building block of any
                              design project."
                            </p>
                          </figcaption>
                        </figure>
                      </div>

                      {/* <div className="teams_card">
                        <figure>
                          <img loading="lazy" src={teamMemHari} className="img-fluid" alt="Manik Arora"
                          />
                          <figcaption>
                            <h5>
                              Harikumaran
                              <small className="caption">UI LEAD</small>
                            </h5>
                            <p>
                              “The fundamental role of design is to solve users’
                              problems, everything else is just secondary.”
                            </p>
                          </figcaption>
                        </figure>
                      </div> */}
                      <div className="teams_card">
                        <figure>
                          <img
                            loading="lazy"
                            src={teamMemAishwarya}
                            className="img-fluid"
                            alt="Aishwarya"
                          />
                          <figcaption>
                            <h5>
                              Aishwarya
                              <small className="caption">PROJECT MANAGER</small>
                            </h5>
                            <p>
                              "No project is successful if the team is not
                              strongly held by the pillar of unity."
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                      <div className="teams_card">
                        <figure>
                          <img
                            loading="lazy"
                            src={teamMemShaurya}
                            className="img-fluid"
                            alt="Shaurya Chabbra"
                          />
                          <figcaption>
                            <h5>
                              Shaurya
                              <small className="caption">GRAPHICS LEAD</small>
                            </h5>
                            <p>
                              "I believe all designers have to have a little
                              crazy streak, if the goal is to build something
                              great."
                            </p>
                          </figcaption>
                        </figure>
                      </div>
                      {/* <div className="teams_card">
                        <figure>
                          <img
                            loading="lazy"
                            src={teamMemDivanshu}
                            className="img-fluid"
                            alt="Divanshu Thakral"
                          />
                          <figcaption>
                            <h5>
                              Divanshu Thakral
                              <small className="caption">Co-founder</small>
                            </h5>
                            <p>
                              "All our dreams can come true, if we have the
                              courage to pursue them."
                            </p>
                          </figcaption>
                        </figure>
                      </div> */}
                    </Slider>
                    <div
                      className="image-slider-overlay-bttn slider-half left-slider-bttn"
                      data-cursor-img={leftSliderArrow}
                      onClick={teamSliderPrev}
                    ></div>
                    <div
                      className="image-slider-overlay-bttn slider-half right-slider-bttn"
                      data-cursor-img={rightSliderArrow}
                      onClick={teamSliderNext}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="our_work left_container right_container blur-overlay">
            <div class="div-wrap">
              <figure class="our-work-banner">
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
                          style={workBanner[deviceKey].style}
                        />
                      }
                    >
                      <Tween
                        position="0"
                        from={{ yPercent: -50 }}
                        to={{ yPercent: 0 }}
                      >
                        <img
                          loading="lazy"
                          src={ourWorkBanner}
                          className="img-fluid"
                          alt=""
                        />
                      </Tween>
                    </Timeline>
                  </Scene>
                </Controller>
              </figure>
              <div className="position-relative">
                <div className="our_wrk_mxwdth left_container right_container">
                  <h3>Our moral compass</h3>
                  <ul className="list-unstyled wrk_list">
                    <li>
                      <h5>Shoot to win</h5>
                      <p>
                        Our eye is always on the target and whatever we do, we
                        do with a go-getter attitude.
                      </p>
                    </li>
                    <li>
                      <h5>Take ownership</h5>
                      <p>
                        We take ownership of things, and that’s how we lead
                        brands towards success.
                      </p>
                    </li>
                    <li>
                      <h5>Be there for each other</h5>
                      <p>
                        Our work relationships are no less than our family,
                        that’s how connected we are.
                      </p>
                    </li>
                    <li>
                      <h5>Think, and then do</h5>
                      <p>
                        Anything we do is rooted in conscious reasoning and has
                        a core of its own.
                      </p>
                    </li>
                    <li>
                      <h5>Respect</h5>
                      <p>
                        A culture where people are sensitive towards each other
                        and flexing hierarchies/positions is a big no.
                      </p>
                    </li>
                  </ul>
                </div>
                <div
                  id="final_grad_one"
                  className="grad-img wrk_gard1 grad type-2 small"
                ></div>
                <div
                  id="final_grad_two"
                  className="grad-img wrk_gard2 grad mesh-gradient medium"
                ></div>
                <div
                  id="final_grad_three"
                  className="grad-img wrk_gard3 grad type-2 small"
                ></div>
              </div>
            </div>
          </section>
          <section className="follow_us blur-overlay">
            <div className="container">
              <div className="follow_content">
                <div className="row no-gutter">
                  <div className="col-md-6">
                    <h3>Follow the madness</h3>
                  </div>
                  <div className="col-md-4 offset-md-2 align-self-end">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          href="https://www.linkedin.com/company/onething-design/"
                          target="_blank" rel="noreferrer"
                        >
                          <svg
                            class="linkedin svg-icon"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.1055 12.4272C10.1055 11.8114 10.3501 11.2209 10.7855 10.7855C11.2209 10.3501 11.8114 10.1055 12.4272 10.1055H35.5707C35.8759 10.105 36.1781 10.1647 36.4602 10.2811C36.7422 10.3976 36.9985 10.5686 37.2144 10.7842C37.4303 10.9999 37.6015 11.256 37.7183 11.5379C37.8351 11.8198 37.8951 12.122 37.8949 12.4272V35.5707C37.8953 35.8759 37.8354 36.1782 37.7188 36.4603C37.6022 36.7423 37.4311 36.9986 37.2154 37.2145C36.9996 37.4304 36.7434 37.6016 36.4614 37.7183C36.1794 37.8351 35.8772 37.8951 35.572 37.8949H12.4272C12.1222 37.8949 11.8202 37.8349 11.5384 37.7181C11.2566 37.6013 11.0006 37.4302 10.785 37.2145C10.5694 36.9988 10.3984 36.7427 10.2818 36.4609C10.1652 36.179 10.1053 35.877 10.1055 35.572V12.4272ZM21.105 20.7008H24.868V22.5905C25.4112 21.5042 26.8006 20.5265 28.8886 20.5265C32.8916 20.5265 33.8402 22.6903 33.8402 26.6604V34.0145H29.7893V27.5648C29.7893 25.3038 29.2461 24.028 27.8667 24.028C25.953 24.028 25.1573 25.4036 25.1573 27.5648V34.0145H21.105V20.7008ZM14.1577 33.8415H18.2099V20.5265H14.1577V33.8402V33.8415ZM18.7897 16.1838C18.7973 16.5307 18.7356 16.8757 18.6081 17.1985C18.4806 17.5213 18.2899 17.8153 18.0472 18.0634C17.8046 18.3115 17.5148 18.5086 17.1949 18.6432C16.875 18.7777 16.5315 18.8471 16.1844 18.8471C15.8374 18.8471 15.4938 18.7777 15.1739 18.6432C14.8541 18.5086 14.5643 18.3115 14.3216 18.0634C14.0789 17.8153 13.8882 17.5213 13.7607 17.1985C13.6333 16.8757 13.5715 16.5307 13.5792 16.1838C13.5942 15.5028 13.8752 14.8547 14.3622 14.3783C14.8491 13.902 15.5032 13.6353 16.1844 13.6353C16.8656 13.6353 17.5197 13.902 18.0067 14.3783C18.4936 14.8547 18.7747 15.5028 18.7897 16.1838V16.1838Z"
                              fill="url(#paint0_linear_1701_4217)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1701_4217"
                                x1="10.1055"
                                y1="24.0002"
                                x2="37.8949"
                                y2="24.0002"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#EF8081" />
                                <stop offset="0.619792" stop-color="#F63132" />
                                <stop offset="1" stop-color="#9F1689" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/onething.design/"
                          target="_blank" rel="noreferrer"
                        >
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.9978 19.1975C21.3537 19.1975 19.1958 21.3553 19.1958 23.9995C19.1958 26.6437 21.3537 28.8015 23.9978 28.8015C26.642 28.8015 28.7999 26.6437 28.7999 23.9995C28.7999 21.3553 26.642 19.1975 23.9978 19.1975ZM38.4003 23.9995C38.4003 22.011 38.4183 20.0405 38.3066 18.0555C38.1949 15.75 37.669 13.7038 35.9831 12.0179C34.2935 10.3284 32.251 9.80602 29.9454 9.69434C27.9569 9.58267 25.9864 9.60068 24.0015 9.60068C22.0129 9.60068 20.0424 9.58267 18.0575 9.69434C15.7519 9.80602 13.7058 10.332 12.0198 12.0179C10.3303 13.7074 9.80797 15.75 9.6963 18.0555C9.58462 20.0441 9.60263 22.0146 9.60263 23.9995C9.60263 25.9844 9.58462 27.9585 9.6963 29.9435C9.80797 32.249 10.3339 34.2952 12.0198 35.9811C13.7094 37.6706 15.7519 38.193 18.0575 38.3047C20.046 38.4163 22.0165 38.3983 24.0015 38.3983C25.99 38.3983 27.9605 38.4163 29.9454 38.3047C32.251 38.193 34.2971 37.667 35.9831 35.9811C37.6726 34.2916 38.1949 32.249 38.3066 29.9435C38.4219 27.9585 38.4003 25.988 38.4003 23.9995ZM23.9978 31.388C19.9091 31.388 16.6093 28.0882 16.6093 23.9995C16.6093 19.9108 19.9091 16.611 23.9978 16.611C28.0866 16.611 31.3864 19.9108 31.3864 23.9995C31.3864 28.0882 28.0866 31.388 23.9978 31.388ZM31.689 18.0339C30.7344 18.0339 29.9634 17.263 29.9634 16.3084C29.9634 15.3537 30.7344 14.5828 31.689 14.5828C32.6436 14.5828 33.4145 15.3537 33.4145 16.3084C33.4148 16.535 33.3704 16.7596 33.2838 16.969C33.1972 17.1785 33.0701 17.3689 32.9098 17.5291C32.7495 17.6894 32.5591 17.8165 32.3497 17.9031C32.1402 17.9898 31.9157 18.0342 31.689 18.0339Z"
                              fill="url(#paint0_linear_1701_4219)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1701_4219"
                                x1="9.60156"
                                y1="23.9995"
                                x2="38.4019"
                                y2="23.9995"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#EF8081" />
                                <stop offset="0.619792" stop-color="#F63132" />
                                <stop offset="1" stop-color="#9F1689" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://open.spotify.com/show/1bFew0EsLhxbfPjswN8syn"
                          target="_blank" rel="noreferrer"
                        >
                          <svg
                            class="spotify svg-icon"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.9965 9.59961C16.0597 9.59961 9.60254 16.058 9.60254 23.9948C9.60254 31.9388 16.0597 38.3996 23.9965 38.3996C31.9405 38.3996 38.4025 31.9376 38.4025 23.9948C38.4025 16.058 31.9405 9.59961 23.9965 9.59961ZM16.6921 29.2844C18.3402 28.7795 20.054 28.5215 21.7777 28.5188C24.6745 28.5188 27.5341 29.2532 30.0481 30.6428C30.1981 30.7244 30.3337 30.9932 30.3961 31.3292C30.4561 31.6652 30.4321 32.0096 30.3337 32.1884C30.2874 32.2735 30.2246 32.3485 30.149 32.4091C30.0734 32.4697 29.9866 32.5147 29.8935 32.5414C29.8004 32.5682 29.7029 32.5763 29.6067 32.5651C29.5105 32.554 29.4174 32.5238 29.3329 32.4764C27.4864 31.4634 25.4552 30.8316 23.3598 30.6185C21.2645 30.4053 19.1477 30.6152 17.1349 31.2356C17.0425 31.2655 16.9451 31.2767 16.8484 31.2685C16.7516 31.2604 16.6574 31.2331 16.5713 31.1882C16.4852 31.1433 16.4089 31.0817 16.3468 31.007C16.2847 30.9324 16.2381 30.8461 16.2097 30.7532C16.0813 30.3332 16.3465 29.3972 16.6921 29.2844ZM16.0645 23.9804C17.9264 23.4746 19.8472 23.2183 21.7765 23.2184C25.2493 23.2184 28.6969 24.0584 31.7485 25.6496C31.9633 25.7576 32.1205 25.9424 32.1925 26.168C32.2289 26.2819 32.2422 26.402 32.2314 26.5211C32.2207 26.6402 32.1863 26.756 32.1301 26.8616C31.8577 27.3944 31.5385 27.7532 31.3381 27.7532C31.1919 27.7526 31.048 27.7172 30.9181 27.65C28.0972 26.1772 24.96 25.4136 21.7777 25.4252C20.0077 25.4217 18.2452 25.6578 16.5385 26.1272C16.4247 26.1583 16.3058 26.1667 16.1887 26.1519C16.0716 26.1371 15.9586 26.0994 15.8561 26.0409C15.7535 25.9824 15.6636 25.9042 15.5912 25.811C15.5189 25.7177 15.4657 25.6111 15.4345 25.4972C15.3001 24.9908 15.6085 24.1052 16.0645 23.9804V23.9804ZM15.9025 20.5172C15.7675 20.5519 15.6269 20.5594 15.4889 20.5395C15.3509 20.5195 15.2182 20.4724 15.0985 20.4009C14.9787 20.3294 14.8744 20.2349 14.7914 20.1228C14.7084 20.0108 14.6484 19.8834 14.6149 19.748C14.4673 19.1504 14.8405 18.4568 15.3829 18.32C17.4751 17.8047 19.6218 17.5432 21.7765 17.5412C25.9165 17.5412 29.8837 18.4724 33.5653 20.3096C33.8183 20.4354 34.0109 20.6565 34.101 20.9242C34.191 21.192 34.171 21.4846 34.0453 21.7376C33.8737 22.0832 33.5017 22.4552 33.0913 22.4552C32.9304 22.4546 32.7715 22.419 32.6257 22.3508C29.2592 20.662 25.5429 19.7881 21.7765 19.7996C19.8145 19.7996 17.8381 20.0408 15.9025 20.5172V20.5172Z"
                              fill="url(#paint0_linear_1701_4221)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1701_4221"
                                x1="9.60254"
                                y1="23.9996"
                                x2="38.4025"
                                y2="23.9996"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#EF8081" />
                                <stop offset="0.619792" stop-color="#F63132" />
                                <stop offset="1" stop-color="#9F1689" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UC-W601M2PO8qJhwgnlm66Vg"
                          target="_blank" rel="noreferrer"
                        >
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40.4994 21.6244V25.0003C40.4774 25.236 40.4463 25.4717 40.4341 25.708C40.35 27.3298 40.2375 28.9479 39.915 30.5465C39.5523 32.3438 38.465 33.4817 36.631 33.9061C35.9768 34.0572 35.2967 34.1405 34.6244 34.1738C32.0703 34.2998 29.5156 34.4421 26.9595 34.4841C24.3272 34.5273 21.6929 34.469 19.0593 34.4383C16.6519 34.4101 14.2497 34.3073 11.8578 34.0083C9.89652 33.7625 8.46916 32.5407 8.05091 30.6681C7.71799 29.178 7.58223 27.6615 7.54539 26.1437C7.49884 24.2185 7.46846 22.2889 7.55508 20.3662C7.62167 18.8748 7.80461 17.3783 8.06901 15.9063C8.40387 14.04 9.6166 12.9072 11.5411 12.5562C12.3828 12.4026 13.2419 12.3092 14.0971 12.2665C16.3183 12.1556 18.5408 12.0446 20.7646 12.0139C23.3439 11.9788 25.9239 12.0151 28.5039 12.0465C31.0612 12.0772 33.614 12.1875 36.1559 12.4966C37.9898 12.7198 39.4831 13.9241 39.8393 15.6832C40.1005 16.9746 40.2117 18.2961 40.3623 19.607C40.4392 20.2759 40.456 20.9517 40.5 21.6244H40.4994ZM20.6275 27.9981C23.5101 26.4064 26.3428 24.8416 29.226 23.2493C26.3292 21.6501 23.4965 20.0859 20.6275 18.5024V27.9981Z"
                              fill="black"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dribbble.com/onething-design"
                          target="_blank" rel="noreferrer"
                        >
                          <svg
                            class="dribble svg-icon"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.001 10C16.2688 10 10.001 16.2678 10.001 24C10.001 31.7322 16.2688 38 24.001 38C31.7332 38 38.001 31.7322 38.001 24C38.001 16.2678 31.7332 10 24.001 10ZM24.001 12.0286C27.0509 12.0286 29.8348 13.1696 31.9488 15.047C30.3955 17.0959 28.0358 18.4602 25.6712 19.3835C24.3326 16.9456 22.8324 14.6001 21.1807 12.3625C22.1045 12.1398 23.0514 12.0277 24.0017 12.0286H24.001ZM18.9078 13.1626C20.4688 15.4978 21.9808 17.6629 23.3619 20.1136C19.8689 21.0187 15.9216 21.5619 12.2753 21.571C13.0439 17.8414 15.5492 14.7446 18.9078 13.1633V13.1626ZM33.2767 16.4316C35.0066 18.5456 35.9582 21.1894 35.9724 23.9209C33.2032 23.3749 30.4494 23.2321 27.6452 23.5149C27.3302 22.7288 26.948 21.9819 26.5819 21.1769C28.999 20.2018 31.5834 18.533 33.2767 16.4309V16.4316ZM24.3342 21.9658C24.6338 22.6028 24.981 23.279 25.3072 23.9699C21.4082 25.6891 17.2607 27.9865 15.1082 32.0143C13.0418 29.7276 11.9405 26.7299 12.0352 23.6493C16.2107 23.6297 20.3092 23.1075 24.3342 21.9658V21.9658ZM30.6608 25.2299C32.4029 25.2303 34.1379 25.4538 35.8233 25.8949C35.5634 27.5163 34.9727 29.0668 34.088 30.4501C33.2032 31.8335 32.0433 33.0199 30.6804 33.9358C30.0378 31.0133 29.4253 28.2168 28.3424 25.3972C29.1099 25.2854 29.8845 25.2292 30.6601 25.2292L30.6608 25.2299ZM35.8856 25.4469C35.8772 25.5155 35.8695 25.5827 35.8597 25.6499C35.8695 25.582 35.8779 25.5148 35.8856 25.4469ZM26.1276 25.9439C27.2308 28.795 28.0967 31.952 28.6777 35.0243C27.1987 35.6518 25.6083 35.9742 24.0017 35.9721C21.3402 35.9759 18.754 35.0888 16.6552 33.4521C18.8231 29.9353 22.181 27.2739 26.1269 25.9446L26.1276 25.9439Z"
                              fill="url(#paint0_linear_1701_4225)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1701_4225"
                                x1="10.001"
                                y1="24"
                                x2="38.001"
                                y2="24"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#EF8081" />
                                <stop offset="0.619792" stop-color="#F63132" />
                                <stop offset="1" stop-color="#9F1689" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CuratedProjectsSmall title={"The design circle"} />
        </div>
      )}
    </>
  );
};
export default About;

var teamSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  centerMode: false,
  speed: 800,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        initialSlide: 1,
        initialSlide: 2,
      },
    },
  ],
};
