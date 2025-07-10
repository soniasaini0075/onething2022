import "./ServicesProjects.scss";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Slider from "react-slick";

import primaryArrow from "../../assets/img/global/red-arrow.svg";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import statiqHomeThumbnail from "../../assets/img/home/statiq-home-thumbnail.webp";
import tvsracingHomeThumbnail from "../../assets/img/home/tvsracing-home-thumbnail.webp";
import hkHomeThumbnail from "../../assets/img/home/hk-home-thumbnail.webp";
import airtelHomeThumbnail from "../../assets/img/home/airtel-home-thumbnail.webp";
import lokalHomeThumbnail from "../../assets/img/home/lokal-home-thumbnail.webp";
import cokeHomeThumbnail from "../../assets/img/home/orix-home-thumbnail.webp";
import noiseHomeThumbnail from "../../assets/img/home/noise-home-thumbnail.webp";
import rblThumbnail from "../../assets/img/industry/bfsi/projects/rbl.webp";
import nuegoThumbnail from "../../assets/img/projects/nuego.webp";

const Homeprojects = () => {
  const [windowWidth, setWindowWidth] = useState(1366);
  const animWords = ["strategy", "innovation"];
  const animTextRef = useRef();

  useEffect(() => {
    // Scroll Animation
    let masterTl = gsap.timeline({ repeat: -1 });
    animWords.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(animTextRef.current, { duration: 1, text: word });
      masterTl.add(tl);
    });

    const slider = {
      boxes: gsap.utils.toArray(".project-thumbnail"),
      mainTl: gsap.timeline({
        defaults: {
          duration: 1,
          ease: "none",
        },
        scrollTrigger: {
          trigger: "#textColumn",
          start: "top top",
          end: "bottom 100%",
          pin: ".images",
          pinSpacing: true,
          scrub: 1,
        },
      }),
      setNextPics: function () {
        slider.boxes.forEach((box, i) => {
          if (i > 0) {
            gsap.set(box.firstElementChild, { scale: 1.5 });
          }
        });
      },
      setTl: function () {
        slider.mainTl
          .to(".project-thumbnail.one", { yPercent: -100 })
          .to(".project-thumbnail.one > .slide", { yPercent: 100 }, ">-1")
          .to(".project-thumbnail.two > .slide", { scale: 1 }, ">-1")
          .to(".project-thumbnail.two", { yPercent: -100 })
          .to(".project-thumbnail.two > .slide", { yPercent: 100 }, ">-1")
          .to(".project-thumbnail.three > .slide", { scale: 1 }, ">-1")
          .to(".project-thumbnail.three", { yPercent: -100 })
          .to(".project-thumbnail.three > .slide", { yPercent: 100 }, ">-1")
          .to(".project-thumbnail.four > .slide", { scale: 1 }, ">-1");
      },
    };

    slider.setNextPics();
    slider.setTl();

    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <>
      {windowWidth > 900 && (
        <section className="our-projects-wrapper blur-overlay">
          <div className="container">
            <div className="custom-heading-wrapper-new">
              <h2 className="section-heading newh2" >
                Problems solved with our <br /> UI/UX Design
              </h2>
              <p className="fs-24">
                Making our design services impact the bottom line, for <br />{" "}
                businesses across the globe.{" "}
              </p>
            </div>
            <div className="projects-wrap position-relative">
              <div id="stick" className="images-card">
                <div
                  className="images"
                >
                  <div className="project-thumbnail one">
                    <a href="projects/energy/statiq/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${statiqHomeThumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="project-thumbnail two">
                    <a href="projects/iot/noise/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${noiseHomeThumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="project-thumbnail three">
                    <a href="projects/automotive/nuego/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${nuegoThumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="project-thumbnail four">
                    <a href="projects/enterprise/airtel/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${airtelHomeThumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-text">
                <div id="textColumn">
                  <div className="text-intro three">
                    <a href="projects/energy/statiq/">
                      <h5>
                        <small>Energy</small>
                        <span>Statiq</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>User Experience Design</li>
                            <li>Website Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        Bringing convenient and lightning quick EV charging to
                        India with interactive and intuitive design.
                      </p>
                      <a
                        className="bttn bttn-primary"
                        href="/projects/energy/statiq/"
                      >
                        Read More
                        <div className="arrow-dot">
                          <img loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </a>
                    </a>
                  </div>
                  <div className="text-intro four">
                    <a href="/projects/iot/noise/">
                      <h5>
                        <small>IOT</small>
                        <span>Noise</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UX UI Design</li>
                            <li>Motion Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>Designing a wearable user experience, for young users taking their first steps to digital.</p>
                      <a
                        className="bttn bttn-primary"
                        href="/projects/iot/noise/"
                      >
                        Read More
                        <div className="arrow-dot">
                          <img loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </a>
                    </a>
                  </div>

                  <div className="text-intro one">
                    <a href="projects/automotive/nuego/">
                      <h5>
                        <small>Automotive</small>
                        <span>NueGo</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UI UX Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        Crafting a premium, sustainable, and seamless bus
                        booking experience for intercity commute.
                      </p>
                      <a
                        className="bttn bttn-primary"
                        href="projects/automotive/nuego/"
                      >
                        Read More
                        <div className="arrow-dot">
                          <img loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </a>
                    </a>
                  </div>
                  <div className="text-intro two">
                    <a href="/projects/enterprise/airtel/">
                      <h5>
                        <small>Enterprise</small>
                        <span>Airtel</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UI UX Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        An enterprise grade solution, designed to streamline
                        communications between businesses, and customers.
                      </p>
                      <a
                        className="bttn bttn-primary"
                        href="projects/enterprise/airtel/"
                      >
                        Read More
                        <div className="arrow-dot">
                          <img loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="grad type-2 small gr-box project-bar"></div>
          </div>
        </section>
      )}
      {windowWidth <= 900 && (
        <>
          <div className="project-for-mobile blur-overlay">
            <div className="container">
            <div className="custom-heading-wrapper-new" >
              <h2 className="section-heading newh2" >
                Problems solved with our <br /> UI/UX Design
              </h2>
              <p className="fs-24">
                Making our design services impact the bottom line, for <br />{" "}
                businesses across the globe.{" "}
              </p>
            </div>
              <div className="projects-wrap position-relative">
                <Slider {...settings}>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img loading="lazy" src={statiqHomeThumbnail} alt="" />
                      <div className="text-intro one">
                        <h5>
                          <small>Energy</small>
                          <span>Statiq</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>User Experience Design</li>
                              <li>Website Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          Bringing convenient and lightning quick EV charging to
                          India with interactive and intuitive design.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/energy/statiq/"
                        >
                          Read More
                          <div className="arrow-dot">
                            <img loading="lazy"
                              src={primaryCtaArrow}
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img loading="lazy" src={noiseHomeThumbnail} alt="" />
                      <div className="text-intro one">
                        <h5>
                          <small>IOT</small>
                          <span>Noise</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UX UI Design</li>
                              <li>Motion Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>Designing a wearable user experience, for young users taking their first steps to digital.</p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/bfsi/rbl-bank/"
                        >
                          Read More
                          <div className="arrow-dot">
                            <img loading="lazy"
                              src={primaryCtaArrow}
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>

                  <div>
                    <figure className="project-thumbnail-phone">
                      <img loading="lazy" src={nuegoThumbnail} alt="" />
                      <div className="text-intro one">
                        <h5>
                          <small>Automotive</small>
                          <span>NueGo</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UI UX Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          Crafting a premium, sustainable, and seamless bus
                          booking experience for intercity commute.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="projects/automotive/nuego/"
                        >
                          Read More
                          <div className="arrow-dot">
                            <img loading="lazy"
                              src={primaryCtaArrow}
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img loading="lazy" src={airtelHomeThumbnail} alt="" />
                      <div className="text-intro one">
                        <h5>
                          <small>Enterprise</small>
                          <span>Airtel</span>
                          <div className="projectstags_">
                            <ul>
                            <li>User Research</li>
                            <li>UI UX Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                        An enterprise grade solution, designed to streamline
                        communications between businesses, and customers.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/enterprise/airtel/"
                        >
                          Read More
                          <div className="arrow-dot">
                            <img loading="lazy"
                              src={primaryCtaArrow}
                              className="icon icon-submit"
                              alt=""
                            />
                          </div>
                        </a>
                      </div>
                    </figure>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Homeprojects;
var settings = {
  dots: true,
  arrow: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrow: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        arrow: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: false,
      },
    },
  ],
};
