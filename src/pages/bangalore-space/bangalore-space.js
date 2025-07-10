// import "./bangalore-space.scss";


// import React from 'react';
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { Helmet } from 'react-helmet';
// import bannerAbout from "../../assets/img/about/about_banner.webp";
// import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
// import ctaArrow from "../../assets/img/global/grad-arrow.svg";
// import designWithPurpose from "../../assets/img/ods/dwp.webp";
// import resOne from "../../assets/img/services/research-one-y.webp";

// import Testimonials from "../../partials/testimonials/testimonials";
// import Homeprojects from "../../partials/homeprojects/homeprojects";

// const BangaloreSpace = () => {
//   useEffect(() => {
//     document.body.classList.add("bangalorespace-page");
//   }, []);
//   let location = useLocation();
//   return (
//     <>
//     <link
//     rel="preload dns-prefetch canonical"
//     href={`https://www.onething.design${location?.pathname}`}
//     ></link>
//     <Helmet>
//         <meta name="robots" content="noindex" />
//       </Helmet>
//     <div className="bangalorespace-page-wrapper page-wrapper">
//     <section className="bangalorespace-hero-wrap blur-overlay">
//     <div className="div-wrap">
//     <div className="container">
//     <div className="grad type-2 medium gr-box2"></div>
//     <div className="heading-wrapper">
//     <h1 className="newh1">Leading UI UX Design Company in Bangalore</h1>
//     <p className="fs-20">Welcome to Onething Design, an award-winning UI UX design company in Bangalore. We strategize, create and deliver experiences that eliminate friction between human-tech interactions.</p>
//     <div className="cta-wrapper">
//     <a className="bttn bttn-primary" href="/contact/">
//     Let’s Connect
//     <div className="arrow-dot">
//     <img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt=""/>
//     </div>
//     </a>
//     </div>
//     </div>
//     </div>
//     <div className="left_container">
//     <figure className="banner page-banner">
//     <img loading="lazy" src={bannerAbout} alt=""/>
//     </figure>
//     </div>
//     </div>
//     </section>
//     <section className="beyond-classrooms-wrapper blur-overlay">
//     <div className="grad type-2 large gr-box2"></div>
//     <div className="container custom-container">
//     <div className="left_container">
//     <h2 className="section-heading newh2">Our UI UX Design Services in Bangalore</h2>
//     </div>
//     <div className="left_container">
//     <div className="content-grid">
//     <div className="content-div">
//     <div className="accordion-content-area service-accordian">
//     <ul>
//     <li>User Research</li>
//     <li>Strategy</li>
//     <li>Branding</li>
//     <li>Content</li>
//     <li>Experienced Design</li>
//     <li>Development</li>
//     <li>UX Audit</li>
//     </ul>
//     </div>
//     </div>
//     <div className="visual-glance">
//     <figure>
//     <img loading="lazy" src={resOne} className="img-fluid" alt="UI UX Design Services" />
//     </figure>
//     </div>
//     </div>
//     </div>
//     </div>
//     </section>
//     <section className="design-with-purpose-wrapper blur-overlay">
//     <div className="div-wrap">
//     <div className="container">
//     <div className="grad type-2 small gr-box2"></div>
//     <div className="grad type-2 medium gr-box2"></div>
//     <div className="heading-wrapper">
//     <h2 className="newh2 section-heading">We design with purpose, for better conversions</h2>
//     <p>As a forward thinking UI UX design studio in Bangalore, we harness the power of intuitive design, cognitive psychology, and emerging technologies to create seamless and effective digital experiences. The experiences we craft, not only delight users but also intuitively guide them towards the desired action. Hence, our strategy-infused design process directly impacts your bottom line.</p>
//     </div>
//     <figure className="dwp">
//     <img loading="lazy" src={designWithPurpose} className="icon icon-submit"alt=""/>
//     </figure>
//     </div>
//     </div>
//     </section>
//     <Homeprojects/>
//     <div className="whyonething-wrapper">
//     <section className="lets_talk whyonething-sec blur-overlay">
//     <div className="container">
//     <div className="row justify-content-between">
//     <div className="col-md-5">
//     <div className="lets_talk_txt">
//     <h2 className="section-heading">Why choose Onething as a UI UX design company in Bangalore?</h2>
//     </div>
//     <div className="grad small type-3"></div>
//     </div>
//     <div className="col-md-7">
//     <div className="numbers-card content-grid-two content-grid">
//     <ul className="list-unstyled talk_list">
//     <li>
//     <div className="card black_card projects-card">
//     <div className="card_content">
//     <h4>01</h4>
//     <label>Faster turnaround</label>
//     <p>Our optimised processes help your product get to the market faster, without compromising on quality or user experience</p>
//     </div>
//     </div>
//     </li>
//     <li>
//     <div className="card black_card likes-card">
//     <div className="card_content">
//     <h4>03</h4>
//     <label>Cohesive approach</label>
//     <p>We design across all customer touchpoints, ensuring a consistent and omni-channel user experience</p>
//     </div>
//     </div>
//     </li>
//     </ul>
//     <ul className="list-unstyled talk_list">
//     <li>
//     <div className="card black_card clients-card">
//     <div className="card_content">
//     <h4>02</h4>
//     <label>Diverse expertise</label>
//     <p>We bring in a wealth of knowledge and understanding of varied users across industries and domains</p>
//     </div>
//     </div>
//     </li>
//     <li>
//     <div className="card black_card awards-card">
//     <div className="card_content">
//     <h4>04</h4>
//     <label>Partner in success</label>
//     <p>We work closely with you to understand your business goals, ensuring we contribute to your growth and success</p>
//     </div>
//     </div>
//     </li>
//     <li>
//     <div className="card black_card conferences-card">
//     <div className="card_content">
//     <h4>05</h4>
//     <label>Ahead of times</label>
//     <p>Being adept with new-age technologies like AI and data-driven solutions, help us in designing future-proof experiences</p>
//     </div>
//     </div>
//     </li>
//     </ul>
//     </div>
//     </div>
//     </div>
//     </div>
//     </section>
//     </div>
//     <div className="homefaq--main">
//     <div className="faq-page-wrapper page-wrapper">
//     <section className="page-heading blur-overlay">
//     <div className="container">
//     <div className="heading-wrapper custom-heading-wrapper">
//     <h3 className="section-heading">Frequently Asked <br/> Questions
//     </h3>
//     <div className="grad type-2 small gr-box2"></div>
//     </div>
//     </div>
//     </section>
//     <section className="faq-accords-wrapper blur-overlay">
//     <div className="container">
//     <div className="main__">
//     <Accordion defaultActiveKey="0" flush>
//     <Accordion.Item eventKey="0">
//     <Accordion.Header>Why is UI UX design important for my business?</Accordion.Header>
//     <Accordion.Body>
//     <p className="fs-20">UX UI design is vital for your business as it directly impacts how a customer perceives your product. In today’s digital age, users expect easy access and optimised experiences across all devices, making user experience design a crucial aspect in driving business success. Partnering with an experienced UI UX design company ensures that your product aligns with user preferences and behaviors, leading to effective market strategies. A UI UX design company can thus, help you craft tailored strategies that enhance your business's influence and presence in the digital market. Ultimately, investing in UI UX design drives customer satisfaction, improves conversion rates, and sets your business apart from competitors.</p>
//     </Accordion.Body>
//     </Accordion.Item>

//     <Accordion.Item eventKey="1">
//     <Accordion.Header>What services does a UI UX design company in Bangalore offer?</Accordion.Header>
//     <Accordion.Body>
//     <p className="fs-20">A UI UX design company in Bangalore can provide a wide range of services that fall under the umbrella of customer experience design. These services include user research, strategy, branding, content, user experience design, user interface design, and product development. A UI UX design company in Bangalore may also offer UX audit as a service, where the company provides actionable recommendations that can improve the user experience of a product.</p>
//     </Accordion.Body>
//     </Accordion.Item>

//     <Accordion.Item eventKey="2">
//     <Accordion.Header>How do I choose the right UI UX design company in Bangalore?</Accordion.Header>
//     <Accordion.Body>
//     <p className="fs-20">Choosing the right UI UX design company in Bangalore calls for careful evaluation. Start by reviewing the design company’s portfolio to assess their professionalism and expertise. Look for reasons to believe by navigating through their case studies and testimonials. Evaluate their project management skills and check if their processes are optimised for faster go to market. It’s also crucial to consider the costing of the design company and ensure it aligns with their dedication to your project. By evaluating these factors, you can confidently choose the right UI UX design company in Bangalore.</p>
//     </Accordion.Body>
//     </Accordion.Item>

//     <Accordion.Item eventKey="3">
//     <Accordion.Header>Can a UI/UX design company in Bangalore help with redesigning an existing product?</Accordion.Header>
//     <Accordion.Body>
//     <p className="fs-20">Absolutely! A UI UX design company based in Bangalore can provide vital assistance in redesigning an existing product. UI UX design companies have the expertise to understand  needs and goals of users, and are adept in improving the existing user experience. They can also help identify and address any usability issues with the existing product. Their analysis can highlight areas of improvement that might have been overlooked.</p>
//     </Accordion.Body>
//     </Accordion.Item>
//     </Accordion>
//     <div className="cta-wrapper">
//     <a className="bttn bttn-primary" href="/faq/">
//     View More
//     <div className="arrow-dot">
//     <img loading="lazy"
//     src={primaryCtaArrow}
//     className="icon icon-submit"
//     alt=""
//     />
//     </div>
//     </a>
//     </div>
//     </div>
//     </div>
//     </section>
//     </div>
//     </div>
//     <Testimonials />
//     </div>
//     </>
//     );
// };

// export default BangaloreSpace