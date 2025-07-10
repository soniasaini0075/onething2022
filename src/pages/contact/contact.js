import "./contact.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import Awards from "../../partials/awards/awards";
import FormComp from "../../partials/form/form";

import logo from "../../assets/img/logo/logo-icon.png";

const Contact = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [navLeft, setNavLeft] = useState();
  const [navRight, setNavRight] = useState();
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  const sliderPrev = () => {
    navRight.slickPrev();
  };
  const sliderNext = () => {
    navRight.slickNext();
  };
  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    const threshold = 2700;
    setIsHidden(scrollHeight > threshold);
  };
  useEffect(() => {
    getYear();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(window.innerWidth, "width");
  console.log(window.innerHeight, "height");

  useEffect(() => {
    document.body.classList.add("landing-page");
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
      {/* <div className="agency-header">
   <a href="https://onething.design/">
      <figure>
         <img loading="lazy" className="agency-logo" src={logo} alt=''/>
      </figure>
   </a>
</div> */}
      <div className="landing-page-wrapper page-wrapper blur-overlay">
        <div className="contact-form-heading-wrapper">
          <section className="contact-page-hero blur-overlay">
            <div className="div-wrap">
              <div className="container">
                <div className="heading-wrap">
                  <h2 className="section-heading">
                    Let’s build great products together!
                  </h2>
                </div>
                <div className="landing-stats-wrapper">
                  <div className="stat">
                    <h3>
                      8+
                      <span>
                        Years of delivering
                        <br /> excellence
                      </span>
                    </h3>
                  </div>
                  <div className="stat">
                    <h3>
                      250+
                      <span>
                        Products
                        <br /> created{" "}
                      </span>
                    </h3>
                  </div>
                  <div className="stat">
                    <h3>
                      10+
                      <span>
                        Countries
                        <br /> served
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="contact-form-wrapper blur-overlay content"
            id="landingForm"
          >
            <h1>Schedule a call</h1>
            <div className="form-div">
              <FormComp title="contact" />
            </div>
          </div>
        </div>
        <div className="contact-clients-landing">
          <div className="awards-landing-in-contact">
            <Awards title="contact" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
