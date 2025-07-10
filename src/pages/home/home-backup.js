import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Slider from "react-slick";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { fetchBlogs } from "../../redux/actions";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
// import { TimelineMax } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import TypeAnimation from "react-type-animation";

import LinesBehindLayout from "../../partials/lines-behind-layout/LinesBehindLayout";
// import CuratedProjectsLarge from "../../partials/curated-large/CuratedProjectsLarge";
import CuratedProjectsLarge from "../../partials/curated-large/CuratedProjectsLarge";
import CultivatingCulture from "../../partials/culture/cultivatingCulture";
import ClientGrid from "../../partials/clients/ClientGrid";

import playButton from "../../assets/img/svg/play-button.svg";
import videoPreview from "../../assets/img/home/showreel-button.gif";
import primaryArrow from "../../assets/img/global/red-arrow.svg";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import statiqHomeThumbnail from "../../assets/img/home/statiq-home-thumbnail.webp";
import tvsracingHomeThumbnail from "../../assets/img/home/tvsracing-home-thumbnail.webp";
import hkHomeThumbnail from "../../assets/img/home/hk-home-thumbnail.webp";
import airtelHomeThumbnail from "../../assets/img/home/lokal-home-thumbnail.webp";
import lokalHomeThumbnail from "../../assets/img/home/lokal-home-thumbnail.webp";
import cokeHomeThumbnail from "../../assets/img/home/orix-home-thumbnail.webp";
import noiseHomeThumbnail from "../../assets/img/home/noise-home-thumbnail.webp";
import closeIcon from "../../assets/img/global/close-text-bbtn.svg";
import showReelVideo from "../../assets/img/videos/showreel.mp4";
import LocomotiveScroll from "locomotive-scroll";

import "./home.scss";
import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { Helmet } from "react-helmet";
import JellyEffect from '../../utils/jelly-scroll/jelly';

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home({ appRef, cursor, blogs, fetchBlogs }) {
  // Options with defaults
// const jelly = new JellyEffect({
//   intensity: 0.15, // delta multiplier, set negative to invert
//     speed: 0.6, // duration of animation
//     min: -5, // minimum deformation value
//     max: 5, // maximum deformation value
//   scrollPos: () => window.pageYOffset // function that return current scroll position
// });
  const [tabKey, setTabKey] = useState("automotive");
  const [windowWidth, setWindowWidth] = useState(1366);
  const [loading, setLoading] = useState(true);
  const animTextRef = useRef();
  const homeRef = useRef();
  const animWords = ["strategy", "innovation"];
  // gsap.registerPlugin(TextPlugin);
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    addPageMetas(PAGE_METAS.home.title, PAGE_METAS.home.desc);
    gsap.to(window, {
      scrollTo: { y: 0, autoKill: false },
      duration: 1,
      // onComplete: () => scrollTween = null,
      overwrite: true,
    });
  }, [pathname]);

useEffect(() => {
document.body.classList.add("home-page");

// Page Meta Tags
// addPageMetas("Homepage | Onething", "Meta descriptions new");

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
// gsap.to(boxRef.current, { rotation: "+=90" });
// fetchBlogs();

// gsap.to(".home-left", {
//     scrollTrigger: ".home-left",
//     y: 500
// })

// let homeTl = gsap.timeline();
// let projectTl = gsap.timeline();

// ScrollTrigger.create({
//     animation: homeTl,
//     trigger: ".home-banner",
//     start: "top top",
//     end: "+=500",
//     scrub: true
// });

// homeTl.to(".home-left", {
//     bottom: "100%",
//     duration: 10
// });

// homeTl.to(".home-right", {
//     top: "80%",
//     duration: 10
// });

// ScrollTrigger.create({
//     animation: projectTl,
//     trigger: ".our-projects-wrapper",
//     start: "top top",
//     end: "bottom center",
//     scrub: true
// });

// projectTl.to(".project-bar", {
//     top: "50%"
// });

//TODO:

// window.addEventListener("scroll", function () {
//   let ourServicesWrapper = document.querySelector(".our-services-wrapper");
//   let clientHeight = document.documentElement.clientHeight;
//   let ourServicesWrapperY = ourServicesWrapper.getBoundingClientRect().y;
//   let ourServicesWrapperHeight =
//     ourServicesWrapper.getBoundingClientRect().height;

//   if (
//     clientHeight >
//     ourServicesWrapperY + (ourServicesWrapperHeight * 2) / 3
//   ) {
//     console.log('HEllo')
//     document.querySelector(".grad .large .type-2 .grad_img2").style.height = "1000px";
//   }
// });

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

//TODO:
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });
let grad = document.getElementById("testGrad");
let grad2 = document.getElementById("grad2");
let thirdLastGrad = document.getElementById("thirdLast");
let homeLeftGrad = document.getElementById('homeLeft');
let homeRightGrad = document.getElementById('homeRight');
let footerLeftGrad = document.getElementById('firstGrad');
let footerRightGrad = document.getElementById('secondGrad');
let footerGrad = document.getElementById('footerGrad');




const newspaperSpinning = [
{ transform: "translateY(100px)" },
{ transform: "rotate(360deg) scale(0)" },
];
const newspaperRotate = [{ transform: "rotate(180deg)" }];

const newspaperTiming = {
duration: 2000,
iterations: 1,
};

//TODO: function to trigger onScroll event in locomotive scroll .
// scroll.on("scroll", (args) => {
//   if (args.scroll.y >= 150) {
//     document.querySelector(".home-right").classList.add("anime-scroll");
//   }
//   // if (isInViewport(ourServicesWrapper)) {
//   //   ourServicesWrapper.style.color = "pink";
//   // }
//   // if (isInViewport(airtel)) {
//   //   airtel.style.color = "red";
//   // }
//   if (isInViewport(grad)) {
//     grad.animate(newspaperSpinning, newspaperTiming);
//   }
// });

window.addEventListener("scroll", function () {
let projectWrapper = document.querySelector(".our-projects-wrapper");
let projectBar = document.querySelector(".project-bar");
let mainWrapper = document.querySelector(".home-banner");

// to add animation to selected element if the element lies in the viewport.

// if(isInViewport(homeLeftGrad)){
//   homeLeftGrad.classList.add("type-2", "type-3")
// } else {
//   homeLeftGrad.classList.replace('type-3', 'type-2');
// }

if(isInViewport(thirdLastGrad)){
thirdLastGrad?.classList.replace("type-2-reverse", "type-3")
} else {
thirdLastGrad?.classList.replace('type-3', 'type-2-reverse');
}

if(isInViewport(footerLeftGrad)){
footerLeftGrad?.classList.replace("type-2", "type-3")
} else {
footerLeftGrad?.classList.replace('type-3', 'type-2');
}

if(isInViewport(footerRightGrad)){
footerRightGrad?.classList.replace("type-2", "type-3")
} else {
footerRightGrad?.classList.replace('type-3', 'type-2');
}

if(isInViewport(footerGrad)){
footerGrad?.classList.replace("type-2", "type-3")
} else {
footerGrad?.classList.replace('type-3', 'type-2');
}

if (isInViewport(grad)) {
grad?.classList.replace("type-2", "type-3")
} else{
grad?.classList.replace('type-3', 'type-2');
}

if (isInViewport(grad2)) {
grad2?.classList.replace("type-2", "type-3")
} else{
grad2?.classList.replace('type-3', 'type-2');
}

// console.log("Scrolling", window.scrollY, projectWrapper.scrollHeight);
if (window.scrollY >= 150) {
document?.querySelector(".home-right")?.classList.add("anime-scroll");
} else {
document.querySelector(".home-right")?.classList.remove("anime-scroll");
}
if (window.scrollY >= 850) {
this.document
.querySelector(".home-right")
?.classList.add("anime-scroll-2");
} else {
this.document
.querySelector(".home-right")
?.classList.remove("anime-scroll-2");
}
if (window.scrollY >= 1350) {
this.document
.querySelector(".home-right")
?.classList.add("anime-scroll-3");
} else {
this.document
.querySelector(".home-right")
?.classList.remove("anime-scroll-3");
}
if (window.scrollY >= 1800) {
this.document
.querySelector(".home-right")
?.classList.add("anime-scroll-4");
} else {
this.document
.querySelector(".home-right")
?.classList.remove("anime-scroll-4");
}
if (window.scrollY >= 2200) {
this.document
.querySelector(".home-right")
?.classList.add("anime-scroll-5");
} else {
this.document
.querySelector(".home-right")
?.classList.remove("anime-scroll-5");
}
if (window.scrollY >= 2650) {
this.document
?.querySelector(".home-right")
.classList.add("anime-scroll-6");
} else {
this.document
.querySelector(".home-right")
?.classList.remove("anime-scroll-6");
}



//   if (window.scrollY >= projectWrapper.offsetTop) {
//     projectBar.style.position = "fixed";
//     projectBar.classList.add("animate");
//     if (
//       window.scrollY >=
//       mainWrapper.scrollHeight + mainWrapper.scrollHeight / 4 + 100
//     ) {
//       projectBar.style.top = "45%";
//       if (window.scrollY >= mainWrapper.scrollHeight * 2) {
//         projectBar.style.top = "60%";
//         if (window.scrollY >= mainWrapper.scrollHeight * 3) {
//           projectBar.style.top = "calc(100% - 217px)";
//           if (window.scrollY >= projectWrapper.scrollHeight + 100) {
//             projectBar.style.position = "absolute";
//           } else {
//             projectBar.style.position = "fixed";
//           }
//         } else {
//           projectBar.style.top = "60%";
//         }
//       } else {
//         projectBar.style.top = "45%";
//       }
//     } else {
//       projectBar.style.top = "30%";
//     }
//   } else {
//     projectBar.style.position = "absolute";
//     projectBar.classList.remove("animate");
//   }

// if(window.scrollY >= (mainWrapper.scrollHeight + (mainWrapper.scrollHeight/3))) {
//     projectBar.style.top = "25%"
// }

// if(window.scrollY >= (mainWrapper.scrollHeight + (mainWrapper.scrollHeight/2))) {
//     projectBar.style.top = "35%"
// }

// if(window.scrollY >= (mainWrapper.scrollHeight *2)) {
//     projectBar.style.top = "45%"
// }

// if (window.scrollY == 0) {
//   document.querySelector(
//     ".home-right"
//   ).style.transform = `translateY(calc(100% - 140px))`;
//   document.querySelector(
//     ".home-right"
//   ).style.transitionDuration = `1000ms`;
// }
// if (window.scrollY >= 150) {
//   document.querySelector(".home-right").classList.add("anime-scroll");
//   document.querySelector(
//     ".home-right"
//   ).style.transform = `translateY(${window.scrollY}px)`;
//   document.querySelector(
//     ".home-right"
//   ).style.transitionDuration = `1000ms`;
// }
// if (window.scrollY >= 151 && window.scrollY <= 3345) {
//   const scrollY = window.scrollY;
//   document.querySelector(
//     ".home-right"
//   ).style.transform = `translateY(calc(${scrollY}px))`;
//   document.querySelector(
//     ".home-right"
//   ).style.transitionDuration = `1500ms`;
// }
// if (window.scrollY > 3391) {
//   document.querySelector(
//     ".home-right"
//   ).style.transform = `translateY(0px)`;
//   document.querySelector(
//     ".home-right"
//   ).style.transitionDuration = `500000ms`;
// }

// if (window.scrollY >= 5555) {
//   grad.style.transform = "translateY(350px)";
//   grad.style.transitionDuration = "1500ms";
// }
// if (window.scrollY >= 5900) {
//   grad.style.transform = "translateY(21px)";
//   grad.style.transitionDuration = "1500ms";
//   grad2.style.transform = "translateY(-400px)";
//   grad2.style.transitionDuration = "1500ms";
// }

if(this.window.scrollY > 7955) {
this.document.getElementById('thirdLast').style.transform = "translateY(275px)";
this.document.getElementById('thirdLast').style.transitionDuration = "1500ms";
}

if(window.scrollY > 8882){
document.getElementById('firstGrad').style.transform = "translateY(227px)";
document.getElementById('firstGrad').style.transitionDuration = "1500ms";
document.getElementById('firstGrad').style.visibility = 'visible';

document.getElementById('secondGrad').style.transform = "translateY(-183px)";
document.getElementById('secondGrad').style.transitionDuration = "1500ms";
document.getElementById('secondGrad').style.visibility = 'visible';

}
if(window.scrollY > 9474){
document.getElementById('firstGrad').style.transform = "translateY(590px)";
document.getElementById('firstGrad').style.transitionDuration = "1500ms";
document.getElementById('firstGrad').style.visibility = 'visible';

document.getElementById('secondGrad').style.transform = "translateY(-310px)";
document.getElementById('secondGrad').style.transitionDuration = "1500ms";
document.getElementById('secondGrad').style.visibility = 'visible';

document.getElementById('footerGrad').style.transform = "translateY(2px)";
document.getElementById('footerGrad').style.transitionDuration = "1500ms";
document.getElementById('footerGrad').style.visibility = 'visible';

}

});

setTimeout(() => {
setLoading(false);
}, 500);
}, []);

const tabKeysArray = [
"automotive",
"media",
"retail",
"education",
"gaming",
"healthandwellness",
"bfsi",
];

const handleProjectTabs = (direction) => {
let tabIndex = tabKeysArray.indexOf(tabKey);

if (direction == "next" && tabIndex < tabKeysArray.length - 1) {
setTabKey(tabKeysArray[tabIndex + 1]);
}

if (direction == "prev" && tabIndex > 0) {
setTabKey(tabKeysArray[tabIndex - 1]);
}
};

const [show, setShow] = useState(false);
const handleClose = () => {
cursor.removeImg();
setShow(false);
};
const handleShow = () => {
cursor.setImg(closeIcon);
setShow(true);
};

const mobilehandleClose = () => setShow(false);
const mobilehandleShow = () => setShow(true);

return (
<>
{loading && <PageLoader />}
<Helmet>
<link rel="preload dns-prefetch canonical" href="https://www.onething.design/"></link>
</Helmet>
<div data-scroll-container className="homepage-wrapper" ref={homeRef}>
<section className="banner blur-overlay home-banner">
<div className="container position-relative">
<div className="banner_txt">
<h1 className="splittext">
<div className="banner-text-wrapper">
<span className="banner-text-anim">Designing a</span>
</div>
<div className="banner-heading-second-line">
<span className="banner-text-anim">difference</span>
</div>
</h1>
<div>
<div className="homepage-subtitle">
We are a global UI UX design company innovating extraordinary
customer experiences to help brands and startups create value.
</div>
<p className="banner-text-wrapper">
<span className="banner-text-anim banner-description"></span>
</p>
</div>
<div className="col-md-3 col-7 buttons-wrapper">
{windowWidth > 900 && (
<div className="banner-text-wrapper play-video">
<Button onClick={handleShow}>
<figure className="position-relative vd_img banner-text-anim">
<img loading="lazy"
src={playButton}
className="img-fluid"
alt="Play Icon"
/>
</figure>
</Button>
{show && (
<div className="custom--modal home-video--modal">
<div className="modal--body">
<Button
className="close"
type="button"
onClick={handleClose}
>
Close
</Button>
<div id="video-wrapper">
<video
id="player"
loop
autoPlay={true}
playsInline=""
>
<source src={showReelVideo} type="video/mp4" />
</video>
</div>
</div>
</div>
)}
</div>
)}
{windowWidth <= 900 && (
<>
<div className="banner-text-wrapper play-video">
<Button onClick={mobilehandleShow}>
<figure className="position-relative vd_img banner-text-anim">
<img loading="lazy"
src={playButton}
className="img-fluid"
alt="Play Icon"
/>
</figure>
</Button>
<Modal
show={show}
onHide={mobilehandleClose}
className="modal-mobile"
>
<Modal.Header closeButton></Modal.Header>
<Modal.Body>
<div id="video-wrapper">
<video
id="player"
loop
autoPlay={true}
playsInline=""
>
<source src={showReelVideo} type="video/mp4" />
</video>
</div>
</Modal.Body>
</Modal>
</div>
</>
)}
</div>
</div>
<div id="homeRight" className="grad small type-3 home-right"></div>
<div id="homeLeft" className="grad large type-3 home-left"></div>
</div>
</section>

{windowWidth > 900 && (
<section className="our-projects-wrapper blur-overlay">
<div className="container">
<div className="projects-wrap position-relative">
<div id="stick" className="images-card">
<div data-scroll data-scroll-sticky data-scroll-target="#stick" className="images">
<div className="project-thumbnail four">
<a href="projects/iot/noise/">
<div
className="slide tileImage"
style={{
backgroundImage: `url(${noiseHomeThumbnail})`,
}}
></div>
</a>
</div>
<div className="project-thumbnail one">
<a href="projects/automotive/tvs-racing/">
<div
className="slide tileImage"
style={{
backgroundImage: `url(${tvsracingHomeThumbnail})`,
}}
></div>
</a>
</div>
<div className="project-thumbnail two">
<a href="projects/energy/statiq/">
<div
className="slide tileImage"
style={{
backgroundImage: `url(${statiqHomeThumbnail})`,
}}
></div>
</a>
</div>
<div className="project-thumbnail three">
<a href="projects/retail/healthkart/">
<div
className="slide tileImage"
style={{
backgroundImage: `url(${hkHomeThumbnail})`,
}}
></div>
</a>
</div>
</div>
</div>
<div className="card-text">
<div id="textColumn"><div className="text-intro four">
<a href="projects/automotive/tvs-racing/">
<h5>
<small>Automotive</small>
<span>TVS Racing</span>
</h5>
<p>Digitising the royalty of a racing heritage to increase partnerships and engage the fun base.</p>
<a className="bttn bttn-primary" href="/projects/automotive/tvs-racing/">
Read More
<div className="arrow-dot">
<img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt="" />
</div>
</a>
</a>
</div>
<div className="text-intro three">
<a href="projects/energy/statiq/">
<h5>
<small>Energy</small>
<span>Statiq</span>
</h5>
<p>Bringing convenient and lightning quick EV charging to India with interactive and intuitive design.</p>
<a className="bttn bttn-primary" href="/projects/energy/statiq/">
Read More
<div className="arrow-dot">
<img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt="" />
</div>
</a>
</a>
</div>
<div className="text-intro one">
<a href="projects/retail/healthkart/">
<h5>
<small>Retail</small>
<span>HealthKart</span>
</h5>
<p>Creating an e-commerce platform for health & fitness
products, for people from all walks of life with
inclusive UX.</p>
<a className="bttn bttn-primary" href="/projects/retail/healthkart/">
Read More
<div className="arrow-dot">
<img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt="" />
</div>
</a>
</a>
</div>
<div className="text-intro two">
<a href="projects/iot/noise/">
<h5>
<small>CONSUMER ELECTRONICS</small>
<span>Noise</span>
</h5>
<p>Designing an intuitive wearable experience for the
next generation of smart.</p>
<a className="bttn bttn-primary" href="projects/iot/noise/" >
Read More
<div className="arrow-dot">
<img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt="" />
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
<div className="projects-wrap position-relative">
<Slider {...settings}>
<div>
<figure className="project-thumbnail-phone">
<img loading="lazy" src={tvsracingHomeThumbnail} alt="" />
<div className="text-intro one">
<h5>
<small>Automotive</small>
<span>TVS Racing</span>
</h5>
<p>Digitising the royalty of a racing heritage to increase partnerships and engage the fun base.</p>
<a
className="bttn bttn-primary"
href="/projects/automotive/tvs-racing/"
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
<img loading="lazy" src={statiqHomeThumbnail} alt="" />
<div className="text-intro one">
<h5>
<small>Energy</small>
<span>Statiq</span>
</h5>
<p>Bringing convenient and lightning quick EV charging to India with interactive and intuitive design.</p>
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
<img loading="lazy" src={hkHomeThumbnail} alt="" />
<div className="text-intro one">
<h5>
<small>Retail</small>
<span>HealthKart</span>
</h5>
<p>
Creating an e-commerce platform for health & fitness
products, for people from all walks of life with
inclusive UX.{" "}
</p>
<a
className="bttn bttn-primary"
href="projects/retail/healthkart/"
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
<small>CONSUMER ELECTRONICS</small>
<span>Noise</span>
</h5>
<p>
Designing a wearable experience for the next
generation of smart.
</p>
<a
className="bttn bttn-primary"
href="projects/iot/noise/"
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

<ClientGrid />

<section className="projects-intro-wrapper blur-overlay">
<div className="div-wrap">
<div className="container">
<Tabs
defaultActiveKey="automotive"
className="project-cat-tabs"
activeKey={tabKey}
onSelect={(k) => setTabKey(k)}
>
<Tab eventKey="automotive" title="Automotive">
<h5>
Partnered with one of the nation’s largest automotive
manufacturers, and bolstered test drive bookings through
digital channels by 35%{" "}
</h5>
{/*<a className="bttn bttn-primary bttn-primary-white" href="#">
Uncover the impact
<div className="arrow-dot">
<img loading="lazy"
src={primaryCtaArrow}
className="icon icon-submit"
alt=""
/>
</div>
</a>*/}
</Tab>
<Tab eventKey="media" title="Media">
<h5>
Our work with India’s largest news publishing house drove
their digital subscriptions up by 3.3 times
</h5>
{/*<a className="bttn bttn-primary bttn-primary-white" href="#">
Uncover the impact
<div className="arrow-dot">
<img loading="lazy"
src={primaryCtaArrow}
className="icon icon-submit"
alt=""
/>
</div>
</a>*/}
</Tab>
<Tab eventKey="retail" title="Retail">
<h5>
Increased the cart value of India’s largest online
supplement store by 18% through experience design
</h5>
{/*<a className="bttn bttn-primary bttn-primary-white" href="#">
Uncover the impact
<div className="arrow-dot">
<img loading="lazy"
src={primaryCtaArrow}
className="icon icon-submit"
alt=""
/>
</div>
</a>*/}
</Tab>
<Tab eventKey="education" title="Education">
<h5>
Reimagined the digital presence of one of the largest
private education institute in India, and impacted digital
applications by 47%
</h5>
{/*<a className="bttn bttn-primary bttn-primary-white" href="#">
Uncover the impact
<div className="arrow-dot">
<img loading="lazy"
src={primaryCtaArrow}
className="icon icon-submit"
alt=""
/>
</div>
</a>*/}
</Tab>
<Tab eventKey="gaming" title="Gaming">
<h5>
Boosted signups for a leading digital poker platform by 700%
through gamified onboarding design
</h5>
{/*<a className="bttn bttn-primary bttn-primary-white" href="#">
Uncover the impact
<div className="arrow-dot">
<img loading="lazy"
src={primaryCtaArrow}
className="icon icon-submit"
alt=""
/>
</div>
</a>*/}
</Tab>
<Tab eventKey="healthandwellness" title="Health &amp; Wellness">
<h5>
Experience Design helped gain 100K new users for a new
health & wellness platform, with a Play Store rating of 4.9
</h5>
{/*<a className="bttn bttn-primary bttn-primary-white" href="#">
Uncover the impact
<div className="arrow-dot">
<img loading="lazy"
src={primaryCtaArrow}
className="icon icon-submit"
alt=""
/>
</div>
</a>*/}
</Tab>
<Tab eventKey="bfsi" title="BFSI">
<h5>
Improved digital loan applications by 2.7X for a fast
growing NBFC lending platform through intuitive UX
</h5>
{/*<a className="bttn bttn-primary bttn-primary-white" href="#">
Uncover the impact
<div className="arrow-dot">
<img loading="lazy"
src={primaryCtaArrow}
className="icon icon-submit"
alt=""
/>
</div>
</a>*/}
</Tab>
</Tabs>

<div className="tab--arrows">
<button
className="tab-arrow tab-prev"
onClick={() => handleProjectTabs("prev")}
>
<img loading="lazy" src={primaryArrow} className="icon-arrow icon" alt="" />
</button>
<button
className="tab-arrow tab-next"
onClick={() => handleProjectTabs("next")}
>
<img loading="lazy" src={primaryArrow} className="icon-arrow icon" alt="" />
</button>
</div>
</div>
</div>
</section>
<section className="our-services-wrapper blur-overlay" id="ourServices">
<div className="container position-relative">
<div className="overall-services">
<h3 className="section-heading">Turning ideas to outcomes</h3>
<div
id="testGrad"
className="grad large type-2 grad_img2 testGrad"
></div>
<p className="p-sec our-services-desc">
We host a world where design reigns. Our belief system says that{" "}
effective design is born from combining empathy, data, and
insights. We research, strategize, design and develop to create
experiences that are meant to propel business growth.
</p>
<div id="grad2" className="grad medium type-2 grad_img2"></div>
<div className="work-grid our-services-stats">
<div className="numbers">
<div className="working-days ">
<h5>7+</h5>
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
<a className="bttn bttn-primary" href="/services">
Explore Services
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

<CuratedProjectsLarge title={"The design circle"} />
<CultivatingCulture />
</div>
</>
);
}

const mapStateToProps = (state) => {
return {
blogs: state.blogs.blogList,
};
};

const mapDispatchToProps = (dispatch) => {
return {
fetchBlogs: () => dispatch(fetchBlogs()),
};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
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
