import "./home.scss";

// React
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBlogs } from "../../redux/actions";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Components & Assets
import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { Helmet } from "react-helmet";

import LinesBehindLayout from "../../partials/lines-behind-layout/LinesBehindLayout";
import CuratedProjectsLarge from "../../partials/curated-large/CuratedProjectsLarge";
import CultivatingCulture from "../../partials/culture/cultivatingCulture";
import ClientGrid from "../../partials/clients/ClientGrid";
import Hero from "../../partials/hero/hero";
import WhyOneThing from "../../partials/whyonething/whyonething";
import Awards from "../../partials/awards/awards";
import HomeFaq from "../../partials/homefaq/homefaq";
import Homeprojects from "../../partials/homeprojects/homeprojects";
import TurningIdeasToOutcome from "../../partials/turning-ideas-to-outcome/turning-ideas-to-outcome";

import closeIcon from "../../assets/img/global/close-text-bbtn.svg";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home({ appRef, cursor, blogs, fetchBlogs }) {
  const [tabKey, setTabKey] = useState("automotive");
  const [windowWidth, setWindowWidth] = useState(1366);
  const [loading, setLoading] = useState(true);
  const animTextRef = useRef();
  const homeRef = useRef();
  const animWords = ["strategy", "innovation"];
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    addPageMetas(
      PAGE_METAS.home.title,
      PAGE_METAS.home.desc,
      PAGE_METAS.home.keywords
    );
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 1,
      overwrite: true,
    });
  }, [pathname]);

  useEffect(() => {
    document.body.classList.add("home-page");

    let masterTl = gsap.timeline({ repeat: -1 });
    animWords.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(animTextRef.current, { duration: 1, text: word });
      masterTl.add(tl);
    });

    setWindowWidth(window.innerWidth);

    const isInViewport = (elem) => {
      if (!elem) return false;
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Elements for gradient animations
    const grad = document.getElementById("testGrad");
    const grad2 = document.getElementById("grad2");
    const thirdLastGrad = document.getElementById("thirdLast");
    const homeLeftGrad = document.getElementById("homeLeft");
    const homeRightGrad = document.getElementById("homeRight");
    const footerLeftGrad = document.getElementById("firstGrad");
    const footerRightGrad = document.getElementById("secondGrad");
    const footerGrad = document.getElementById("footerGrad");

    const onScroll = () => {
      if (isInViewport(thirdLastGrad)) {
        thirdLastGrad?.classList.replace("type-2-reverse", "type-3");
      } else {
        thirdLastGrad?.classList.replace("type-3", "type-2-reverse");
      }

      if (isInViewport(footerLeftGrad)) {
        footerLeftGrad?.classList.replace("type-2", "type-3");
      } else {
        footerLeftGrad?.classList.replace("type-3", "type-2");
      }

      if (isInViewport(footerRightGrad)) {
        footerRightGrad?.classList.replace("type-2", "type-3");
      } else {
        footerRightGrad?.classList.replace("type-3", "type-2");
      }

      if (isInViewport(footerGrad)) {
        footerGrad?.classList.replace("type-2", "type-3");
      } else {
        footerGrad?.classList.replace("type-3", "type-2");
      }

      if (isInViewport(grad)) {
        grad?.classList.replace("type-2", "type-3");
      } else {
        grad?.classList.replace("type-3", "type-2");
      }

      if (isInViewport(grad2)) {
        grad2?.classList.replace("type-2", "type-3");
      } else {
        grad2?.classList.replace("type-3", "type-2");
      }

      const homeRight = document.querySelector(".home-right");

      if (window.scrollY >= 150) {
        homeRight?.classList.add("anime-scroll");
      } else {
        homeRight?.classList.remove("anime-scroll");
      }
      if (window.scrollY >= 850) {
        homeRight?.classList.add("anime-scroll-2");
      } else {
        homeRight?.classList.remove("anime-scroll-2");
      }
      if (window.scrollY >= 1350) {
        homeRight?.classList.add("anime-scroll-3");
      } else {
        homeRight?.classList.remove("anime-scroll-3");
      }
      if (window.scrollY >= 1800) {
        homeRight?.classList.add("anime-scroll-4");
      } else {
        homeRight?.classList.remove("anime-scroll-4");
      }
      if (window.scrollY >= 2200) {
        homeRight?.classList.add("anime-scroll-5");
      } else {
        homeRight?.classList.remove("anime-scroll-5");
      }
      if (window.scrollY >= 2650) {
        homeRight?.classList.add("anime-scroll-6");
      } else {
        homeRight?.classList.remove("anime-scroll-6");
      }

      if (window.scrollY > 8882) {
        footerLeftGrad.style.transform = "translateY(227px)";
        footerLeftGrad.style.transitionDuration = "1500ms";
        footerLeftGrad.style.visibility = "visible";

        footerRightGrad.style.transform = "translateY(-183px)";
        footerRightGrad.style.transitionDuration = "1500ms";
        footerRightGrad.style.visibility = "visible";
      }
      if (window.scrollY > 9474) {
        footerLeftGrad.style.transform = "translateY(590px)";
        footerLeftGrad.style.transitionDuration = "1500ms";
        footerLeftGrad.style.visibility = "visible";

        footerRightGrad.style.transform = "translateY(-310px)";
        footerRightGrad.style.transitionDuration = "1500ms";
        footerRightGrad.style.visibility = "visible";

        footerGrad.style.transform = "translateY(2px)";
        footerGrad.style.transitionDuration = "1500ms";
        footerGrad.style.visibility = "visible";
      }
    };

    window.addEventListener("scroll", onScroll);

    setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("home-page");
    };
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => {
  if (cursor && typeof cursor.removeImg === "function") {
    cursor.removeImg();
  }
  setShow(false);
};

const handleShow = () => {
  if (cursor && typeof cursor.setImg === "function") {
    cursor.setImg(closeIcon);
  }
  setShow(true);
};

  // Mobile handlers if needed
  const mobilehandleClose = () => setShow(false);
  const mobilehandleShow = () => setShow(true);

  return (
    <>
      {loading && <PageLoader />}
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href="https://www.onething.design/"
        />
      </Helmet>
      <div data-scroll-container className="homepage-wrapper" ref={homeRef}>
        <Hero />
        <section className="marquee-effect blur-overlay homepage-marquee">
          <div className="div-wrap">
            <span className="track">
              Strategy - Research - Design - Branding - Development - Strategy -
              Research - Design - Branding - Development
            </span>
          </div>
        </section>
        <ClientGrid partnerHeading={"Driving impact for the leading Ones"} />
        <Homeprojects />
        {/* <Industries /> */}
        <Awards title="home" />
        <TurningIdeasToOutcome />
        {/* <CultivatingCulture /> */}
        <WhyOneThing />
        <CuratedProjectsLarge title={"The design circle"} />
        <HomeFaq />
      </div>
    </>
  );
}

Home.propTypes = {
  appRef: PropTypes.object,
  cursor: PropTypes.shape({
    removeImg: PropTypes.func.isRequired,
    setImg: PropTypes.func.isRequired,
  }).isRequired,
  blogs: PropTypes.array,
  fetchBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  blogs: state.blogs,
});

const mapDispatchToProps = {
  fetchBlogs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
