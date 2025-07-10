import React from "react";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import "./hero.scss"

const Hero = () => {

  return (
    <section className="banner blur-overlay home-banner">
      <div className="container position-relative">
        <div className="banner_txt">
          <h1 className="splittext">
            A UI UX Design Agency,{" "}
            <span className="gradient-text">evolving</span> the way people interact with the digital world.
          </h1>
          <div>
            <div className="homepage-subtitle"></div>
            <p className="banner-text-wrapper">
              <span className="banner-text-anim banner-description"></span>
            </p>
          </div>
          <div className="col-md-3 col-7 buttons-wrapper">
            <a className="bttn bttn-primary" href="/contact/">
              Get in touch
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
        <div id="homeRight" className="grad small type-3 home-right"></div>
        <div id="homeLeft" className="grad large type-3 home-left"></div>
      </div>
    </section>
  );
};

export default Hero;
