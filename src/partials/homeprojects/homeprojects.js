import "./homeprojects.scss";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Slider from "react-slick";

import primaryArrow from "../../assets/img/global/red-arrow.svg";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";

// import statiqHomeThumbnail from "../../assets/img/home/statiq-home-thumbnail.webp";
// import tvsracingHomeThumbnail from "../../assets/img/home/tvsracing-home-thumbnail.webp";
// import hkHomeThumbnail from "../../assets/img/home/hk-home-thumbnail.webp";
// import airtelHomeThumbnail from "../../assets/img/home/lokal-home-thumbnail.webp";
// import airtelThumbnail from "../../assets/img/home/airtel-home-thumbnail.webp";
// import lokalHomeThumbnail from "../../assets/img/home/lokal-home-thumbnail.webp";
// import cokeHomeThumbnail from "../../assets/img/home/orix-home-thumbnail.webp";
// import rblThumbnail from "../../assets/img/industry/bfsi/projects/rbl.webp";
// import nuegoThumbnail from "../../assets/img/projects/nuego.webp";
// import noiseHomeThumbnail from "../../assets/img/home/noise-home-thumbnail.webp";

import airtelHomethumbnail from "../../assets/img/home/new-thumbnails/airtel-th.webp";
import cokeHomethumbnail from "../../assets/img/home/new-thumbnails/coke-th.webp";
import healthkartHomethumbnail from "../../assets/img/home/new-thumbnails/healthkart-th.webp";
import noiseHomethumbnail from "../../assets/img/home/new-thumbnails/noise-th.webp";
import boatThumbnail from "../../assets/img/home/boat-thumbnail.png";

// import nuegoHomethumbnail from "../../assets/img/home/new-thumbnails/nuego-th.webp";
import statiqHomethumbnail from "../../assets/img/home/new-thumbnails/statiq-th.webp";

const Homeprojects = () => {
  const [windowWidth, setWindowWidth] = useState(1366);
  // const animWords = ["strategy", "innovation"];
  // const animTextRef = useRef();

  useEffect(() => {
    // Scroll Animation
    // let masterTl = gsap.timeline({ repeat: -1 });
    // animWords.forEach((word) => {
    //   let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
    //   tl.to(animTextRef.current, { duration: 1, text: word });
    //   masterTl.add(tl);
    // });

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
          .to(".project-thumbnail.four > .slide", { scale: 1 }, ">-1")
          .to(".project-thumbnail.four", { yPercent: -100 })
          .to(".project-thumbnail.four > .slide", { yPercent: 100 }, ">-1")
          .to(".project-thumbnail.five > .slide", { scale: 1 }, ">-1");
        // .to(".project-thumbnail.five", { yPercent: -100 })
        // .to(".project-thumbnail.five > .slide", { yPercent: 100 }, ">-1")
        // .to(".project-thumbnail.six > .slide", { scale: 1 }, ">-1");
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
            <div className="custom-heading-wrapper">
              <h3 className="section-heading home-heading">Our Projects</h3>
              <h2>
                Acing UI UX design for many organisations across
                <br /> industries, from new age startups to global players.
              </h2>
            </div>
            <div className="projects-wrap position-relative">
              <div id="stick" className="images-card">
                <div className="images">
                  <div className="project-thumbnail one">
                    <a href="/projects/iot/boat-crest/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${boatThumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="project-thumbnail two">
                    <a href="/projects/energy/statiq/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${statiqHomethumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="project-thumbnail three">
                    <a href="/projects/iot/noise/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${noiseHomethumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                  <div className="project-thumbnail four">
                    <a href="/projects/retail/healthkart/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${healthkartHomethumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                  {/* <div className="project-thumbnail five">
                <a href="/projects/retail/coca-cola/">
                  <div className="slide tileImage" style={{   backgroundImage: `url(${nuegoHomethumbnail})`, }}></div>
                </a>
              </div> */}
                  <div className="project-thumbnail five">
                    <a href="/projects/enterprise/airtel/">
                      <div
                        className="slide tileImage"
                        style={{
                          backgroundImage: `url(${airtelHomethumbnail})`,
                        }}
                      ></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-text">
                <div id="textColumn">
                  <div className="text-intro one">
                    <a href="/projects/iot/boat-crest">
                      <h5>
                        <small>Consumer Electronics</small>
                        <span>Boat Crest</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UX Design</li>
                            <li>Smartwatch App Design</li>
                            <li>Motion Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        Transitioning the brand’s smartwatch connectivity
                        experience, through the lens of user-cohesion, for a
                        seamless connected experience.
                      </p>
                      <a
                        className="bttn bttn-primary"
                        href="/projects/iot/boat-crest"
                      >
                        Read More
                        <div className="arrow-dot">
                          <img
                            loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </a>
                    </a>
                  </div>
                  <div className="text-intro two">
                    <a href="/projects/energy/statiq/">
                      <h5>
                        <small>ENERGY</small>
                        <span>Statiq</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UX UI Design</li>
                            <li>Responsive Design</li>
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
                          <img
                            loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </a>
                    </a>
                  </div>

                  <div className="text-intro three">
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
                      <p>
                        Designing a wearable user experience, for young users
                        taking their first steps to digital.
                      </p>
                      <a
                        className="bttn bttn-primary"
                        href="/projects/iot/noise/"
                      >
                        Read More
                        <div className="arrow-dot">
                          <img
                            loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </a>
                    </a>
                  </div>

                  <div className="text-intro four">
                    <a href="/projects/retail/healthkart/">
                      <h5>
                        <small>Retail</small>
                        <span>Healthkart</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UI UX Design</li>
                            <li>Ecommerce Design</li>
                          </ul>
                        </div>
                      </h5>
                      <p>
                        Refining a health-focused e-commerce platform, catering
                        to various personas, and making fitness fun through
                        gamification.
                      </p>
                      <a
                        className="bttn bttn-primary"
                        href="/projects/retail/healthkart/"
                      >
                        Read More
                        <div className="arrow-dot">
                          <img
                            loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </a>
                    </a>
                  </div>

                  {/* <div className="text-intro five">
          <a href="/projects/automotive/nuego/">
            <h5>
              <small>MOBILITY</small>
              <span>Nuego</span>
              <div className="projectstags_">
                <ul>
                  <li>User Research</li>
                  <li>UI UX Design</li>
                  <li>Usability Testing</li>
                </ul>
              </div>
            </h5>
            <p>Crafting a premium, sustainable, and seamless bus booking experience for intercity commute.</p>
            <a className="bttn bttn-primary" href="/projects/automotive/nuego/" >
              Read More
              <div className="arrow-dot">
                <img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt="" />
              </div>
            </a>
          </a>
        </div> */}

                  <div className="text-intro five">
                    <a href="/projects/enterprise/airtel/">
                      <h5>
                        <small>Enterprise</small>
                        <span>Airtel</span>
                        <div className="projectstags_">
                          <ul>
                            <li>User Research</li>
                            <li>UI UX Design</li>
                            <li>Dashboard Design</li>
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
                          <img
                            loading="lazy"
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
            <div className="project-heading container">
              <div className="custom-heading-wrapper">
                <h3 className="section-heading">Our Projects</h3>
                <h2>
                  Acing UI UX design for many organisations across industries,
                  from new age startups to global players.
                </h2>
              </div>
            </div>
            <div className="container">
              <div className="projects-wrap position-relative">
                <Slider {...settings}>
                  <div>
                    <figure className="project-thumbnail-phone">
                      <img loading="lazy" src={cokeHomethumbnail} alt="" />
                      <div className="text-intro one">
                        <h5>
                          <small>Consumer Electronics</small>
                          <span>Boat Crest</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UX Design</li>
                              <li>Smartwatch App Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          Transitioning the brand’s smartwatch connectivity
                          experience, through the lens of user-cohesion, for a
                          seamless connected experience.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/iot/boat-crest"
                        >
                          {" "}
                          Read More
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
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
                      <img loading="lazy" src={statiqHomethumbnail} alt="" />
                      <div className="text-intro two">
                        <h5>
                          <small>ENERGY</small>
                          <span>Statiq</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UX UI Design</li>
                              <li>Responsive Design</li>
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
                          {" "}
                          Read More
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
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
                      <img loading="lazy" src={noiseHomethumbnail} alt="" />
                      <div className="text-intro three">
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
                        <p>
                          Designing a wearable user experience, for young users
                          taking their first steps to digital.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/iot/noise/"
                        >
                          {" "}
                          Read More
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
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
                      <img
                        loading="lazy"
                        src={healthkartHomethumbnail}
                        alt=""
                      />
                      <div className="text-intro four">
                        <h5>
                          <small>Retail</small>
                          <span>Healthkart</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UI UX Design</li>
                              <li>Ecommerce Design</li>
                            </ul>
                          </div>
                        </h5>
                        <p>
                          Refining a health-focused e-commerce platform,
                          catering to various personas, and making fitness fun
                          through gamification.
                        </p>
                        <a
                          className="bttn bttn-primary"
                          href="/projects/retail/healthkart/"
                        >
                          {" "}
                          Read More
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
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
                      <img loading="lazy" src={airtelHomethumbnail} alt="" />
                      <div className="text-intro five">
                        <h5>
                          <small>Enterprise</small>
                          <span>Airtel</span>
                          <div className="projectstags_">
                            <ul>
                              <li>User Research</li>
                              <li>UI UX Design</li>
                              <li>Dashboard Design</li>
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
                          {" "}
                          Read More
                          <div className="arrow-dot">
                            <img
                              loading="lazy"
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
