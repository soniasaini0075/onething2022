import "./industries.scss";

import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import industryBanner from "../../assets/img/industry/industry-landing/banner.png";
import img1 from "../../assets/img/industry/industry-landing/img1.png";
import img2 from "../../assets/img/industry/industry-landing/img2.png";
import img3 from "../../assets/img/industry/industry-landing/img3.png";
import img4 from "../../assets/img/industry/industry-landing/img4.png";
import img5 from "../../assets/img/industry/industry-landing/img5.png";
import primaryRight from "../../assets/img/industry/industry-landing/right.png";
import hdfc from "../../assets/img/industry/industry-landing/hdfc.svg";
import swvl from "../../assets/img/industry/industry-landing/swvl.svg";
import alAnsari from "../../assets/img/industry/industry-landing/al-ansari.svg";
import rbl from "../../assets/img/industry/industry-landing/rbl2.svg";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


const Industries = () => {
  const tooltip = <Tooltip id="button-tooltip">Coming soon..</Tooltip>;
  useEffect(() => {
    document.body.classList.add("industries-landing-page");
  }, []);
  let location = useLocation();
  return (
  <>
  <Helmet>
    <link rel="preload dns-prefetch canonical" href={`https://www.onething.design${location?.pathname}`}></link>
  </Helmet>
  <div className="industries-page-wrapper page-wrapper blur-overlay">
    <section className="page-heading blur-overlay">
      <div className="container">
        <div className="heading-wrapper">
          <h1 className="left_container newh1">
            Scaling businesses<br/> across industries
          </h1>
          <div className="banner-wrapper">
            <figure>
              <img loading="lazy" src={industryBanner} className="img-fluid" alt="Industries Banner" />
            </figure>
          </div>
          <div id="grad_one_left" className="grad type-2 small gr-box2"></div>
          <div id="grad_two_right" className="grad type-2 small gr-box"></div>
        </div>
      </div>
    </section>
    <section className="industry-intro-wrapper blur-overlay">
      <div className="wrapp_">
        <div className="container">
          <div id="third_grad" className="grad-img ab_grad grad type-2 small"></div>
          <div className="content left_container">
            <p className="intro-text">Unifying customer experiences for a broad range of domains from BFSI, Retail, to Enterprise solutions.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="related-industries-posts blur-overlay">
          <div className="container">
            {/* <div className="heading-wrapper">
              <h3 class="section-heading">{Data?.component_heading}</h3>
            </div> */}
            <div className="post-listing">
              {/* {
                    Data.components.map((item)=>( */}

              <div className="project-industry type--1">
                <a
                  // href={`/projects/${title}/${Data?.components[0].heading.toLowerCase().replace(/\s+/g, '-')}`}
                  // href={Data?.components[0].link}
                >
                  <figure>
                    <img
                      loading="lazy"
                      src={img1}
                      className="project-thumbnail"
                      alt=""
                    />
                    <div className="second-section">
                    <figcaption>
                      <h6 className="var-bold">BFSI</h6>
                      <p>Accelerating growth for financial products</p>
                      <p className="industry-desc">We simplify finance to enrich the way users interact with money.</p>
               
                 {/* <img src={clients} className="client-img"></img> */}
                 <div className="client-div">
                  <img src={hdfc}/>
                  <img src={rbl} className="rbl-logo"/>
                  <img src={alAnsari}/>
                 </div>
                
                 <a className="bttn bttn-primary" href="/bfsi" >
                 Read more
                    <div className="arrow-dot">
                      <img loading="lazy"
                        src={primaryCtaArrow}
                        className="icon icon-submit"
                        alt=""
                      />
                    </div>
                  </a>
                 
                                 </figcaption>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="project-industry type--2">
                <a
                  // href={`/projects/${title}/${Data?.components[0].heading.toLowerCase().replace(/\s+/g, '-')}`}
                  // href={Data?.components[0].link}
                >
                  <figure>
                    <img
                      loading="lazy"
                      src={img2}
                      className="project-thumbnail"
                      alt=""
                    />
                    <div className="second-section">
                    <figcaption>
                      <h6 className="var-bold">Retail</h6>
                      <p>Amplifying user experiences modern marketplaces</p>
                      <p className="industry-desc">We enrich buying journeys to convert browsers into loyal customers.</p>
               
                      <div className="client-div">
                  <img src={hdfc}/>
                  <img src={swvl}/>
                  <img src={alAnsari}/>
                 </div>
                 <a className="bttn bttn-primary" href="/retail" >
                 Read more
                    <div className="arrow-dot">
                      <img loading="lazy"
                        src={primaryCtaArrow}
                        className="icon icon-submit"
                        alt=""
                      />
                    </div>
                  </a>
                                 </figcaption>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="project-industry type--3">
                <a
                  // href={`/projects/${title}/${Data?.components[0].heading.toLowerCase().replace(/\s+/g, '-')}`}
                  // href={Data?.components[0].link}
                >
                  <figure>
                    <img
                      loading="lazy"
                      src={img3}
                      className="project-thumbnail"
                      alt=""
                    />
                    <div className="second-section">
                    <figcaption>
                      <h6 className="var-bold">Enterprise</h6>
                      <p>Catalyzing efficiency with Enterprise grade solutions</p>
                      <p className="industry-desc">We design industry agnostic products that streamline complex processes to enhance outputs.</p>
               
                      <div className="client-div">
                  <img src={hdfc}/>
                  <img src={swvl}/>
                  <img src={alAnsari}/>
                 </div>
                 <a className="bttn bttn-primary" href="/enterprise" >
                 Read more
                    <div className="arrow-dot">
                      <img loading="lazy"
                        src={primaryCtaArrow}
                        className="icon icon-submit"
                        alt=""
                      />
                    </div>
                  </a>
                                 </figcaption>
                    </div>
                  </figure>
                </a>
              </div>
              <div className="project-industry type--4">
                <a
                  // href={`/projects/${title}/${Data?.components[0].heading.toLowerCase().replace(/\s+/g, '-')}`}
                  // href={Data?.components[0].link}
                >
                  <figure>
                    <img
                      loading="lazy"
                      src={img4}
                      className="project-thumbnail"
                      alt=""
                    />
                    <div className="second-section">
                    <figcaption>
                      <h6 className="var-bold">Consumer Durables</h6>
                      <p>UX for the age of smart connectivity</p>
                      <p className="industry-desc">We bridge the gap between smart technology and everyday electronics.</p>
               
                      <div className="client-div">
                  <img src={hdfc}/>
                  <img src={swvl}/>
                  <img src={alAnsari}/>
                 </div>
                 <OverlayTrigger placement="top" overlay={tooltip}>
                 <a className="bttn bttn-primary" href="#" >
                 Read more
                    <div className="arrow-dot">
                      <img loading="lazy"
                        src={primaryCtaArrow}
                        className="icon icon-submit"
                        alt=""
                      />
                    </div>
                  </a>
                  </OverlayTrigger>
                                 </figcaption>
                    </div>
                  </figure>
                </a>
              </div>
             
        
          <div className="project-industry type--5">
                <a
                  // href={`/projects/${title}/${Data?.components[0].heading.toLowerCase().replace(/\s+/g, '-')}`}
                  // href={Data?.components[0].link}
                >
                  <figure>
                    <img
                      loading="lazy"
                      src={img5}
                      className="project-thumbnail"
                      alt=""
                    />
                    <div className="second-section">
                    <figcaption>
                      <h6 className="var-bold">Automotive</h6>
                      <p>Steering the future of automotive experiences</p>
                      <p className="industry-desc">We create new-age digital solutions for brands across the mobility spectrum.</p>
               
                      <div className="client-div">
                  <img src={hdfc}/>
                  <img src={swvl}/>
                  <img src={alAnsari}/>
                 </div>
                 <OverlayTrigger placement="top" overlay={tooltip}>
                 <a className="bttn bttn-primary"  href="#"  >
                 Read more
                    <div className="arrow-dot">
                      <img loading="lazy"
                        src={primaryCtaArrow}
                        className="icon icon-submit"
                        alt=""
                      />
                    </div>
                  </a>
                  </OverlayTrigger>
                                 </figcaption>
                    </div>
                  </figure>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="next-big-thing">
          <div className="content-section">
        <h3>Let’s design the next big thing together!</h3>
        <a href="/contact">
        <p>Work with us</p>
        <img src={primaryRight}/>
        </a>
        </div>
        <div className="grad-div">
        <div id="grad_one_left" className="grad type-2 small gr-box2"></div>
          <div id="grad_two_right" className="grad type-2 small gr-box"></div>
          </div>
        </section>
  </div>
  </>
  );
};
export default Industries;