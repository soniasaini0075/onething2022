import "./error.scss";

import { useEffect } from "react";

import error404 from "../../assets/img/global/404.svg";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
// import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    document.body.classList.add("error-page");
  }, []);

  //   let location = useLocation();

  return (
    <>
      <div className="page-not-found-wrapper page-wrapper">
        <section className="page-heading page-heading-404">
          <div className="container">
            <div className="heading-wrapper">
              <figure>
                <img
                  loading="lazy"
                  src={error404}
                  className="error-image"
                  alt=""
                />
                <figcaption>
                  <h5>
                    Oops! The page you're browsing for no longer exists or has
                    been moved.
                  </h5>
                  <a className="bttn bttn-primary" href="/">
                    Back to Home
                    <div className="arrow-dot">
                      <img
                        loading="lazy"
                        src={primaryCtaArrow}
                        className="icon icon-submit"
                        alt=""
                      />
                    </div>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default PageNotFound;
