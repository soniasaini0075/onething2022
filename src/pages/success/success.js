import "./success.scss";
import { useEffect } from "react";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import { useState } from "react";
import PageLoader from "../../partials/loaders/page-loader";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Success = () => {
  const { state } = useLocation();

  useEffect(() => {
    document.body.classList.add("success-page");
  }, []);

  const [loading, setLoading] = useState(true);

  let grad_one = document?.getElementById("grad_one");

  if (grad_one != null) {
    grad_one.classList.replace("type-2", "type-3");
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

    if (isInViewport(grad_one)) {
      grad_one?.classList.replace("type-2", "type-3");
    } else {
      grad_one?.classList.replace("type-3", "type-2");
    }
  });

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for a second
      await new Promise((r) => setTimeout(r, 1000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
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
      {loading && <PageLoader />}
      <div className="success-page-wrapper page-wrapper">
        <div className="combined-banner">
          {/* <section className="page-heading">
            <div className="container">
               <div className="heading-wrapper">
                  <h1>Get in touch</h1>
                  <div className="grad type-2 small gr-box2"></div>
               </div>
            </div>
         </section> */}
          <section className="message-container">
            <div className="container">
              <div class="message__">
                <div id="grad_one" className="grad type-2 small gr-box2"></div>
                <h3 className="gradient-text">
                  {/* Thank you for reaching out. */}
                  {/*{state?.from === "odsForm"
                    ? "ODS FORM"
                    : state?.from === "registerForm"
                    ? "REGISTER FORM"
                    : "Thank you for reaching out."
                    }*/}
                </h3>
                <p className="fs-20">
                  We are excited to receive your requirements. Our Business team
                  will get in touch with you in 24 hours.
                </p>
                <a className="bttn bttn-primary" href="/">
                  Go to Home
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
          </section>
          {/* <section className="contact-info-details">
            <div class="container">
               <div class="d-flex flex-column justify-content-end align-items-end contact-details">
                  <p className="fs-20">Prefer email?</p>
                  <p className="fs-20"><a href="mailto:sayhello@onething.design" class="link_">sayhello@onething.design</a></p>
               </div>
            </div>
         </section> */}
        </div>
      </div>
    </>
  );
};
export default Success;
