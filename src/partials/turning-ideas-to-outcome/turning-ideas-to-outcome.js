import React from "react";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import "./turning-ideas-to-outcome.scss"


const TurningIdeasToOutcome = () => {
  return (
    <section className="our-services-wrapper blur-overlay" id="ourServices">
      <div className="container position-relative">
        <div className="overall-services">
          <h3 className="section-heading home-heading">Turning ideas to outcomes</h3>
          <div
            id="testGrad"
            className="grad large type-2 grad_img2 testGrad"
          ></div>
          <p className="p-sec our-services-desc">
            We host a world where design reigns. Our belief system says that{" "}
            effective design is born from combining empathy, data, and insights.
            We research, strategize, design and develop to create experiences
            that are meant to propel business growth.
          </p>
          <div id="grad2" className="grad medium type-2 grad_img2"></div>
          <div className="work-grid our-services-stats">
            <div className="numbers">
              <div className="working-days ">
                <h5>8+</h5>
                <p>Years of delivering excellence</p>
              </div>
            </div>
            <div className="numbers">
              <div className="working-days">
                <h5>250+</h5>
                <p>Products created</p>
              </div>
            </div>
            <div className="numbers">
              <div className="working-days">
                <h5>10+</h5>
                <p>Countries served</p>
              </div>
            </div>
            <div className="numbers">
              <div className="working-days">
                <h5>80+</h5>
                <p>Strong and diverse people</p>
              </div>
            </div>
          </div>
          <a className="bttn bttn-primary" href="/ui-ux-design-services">
            Explore Services
            <div className="arrow-dot">
              <img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TurningIdeasToOutcome;
