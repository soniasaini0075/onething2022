import "./ux-audit.scss";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";

import ctaArrow from "../../assets/img/global/grad-arrow.svg";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import auditBanner from "../../assets/img/ux-audit/audit-banner.webp";
import serviceAuditBanner from "../../assets/img/ux-audit/audit-services.webp";

const Audit = () => {
  useEffect(() => {
    addPageMetas(PAGE_METAS.audit.title, PAGE_METAS.audit.desc);
    document.body.classList.add("ux-audit-page");
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
  <div className="ux-audit-wrapper page-wrapper">
    <section className="page-heading blur-overlay">
      <div className="container">
        <div className="heading-wrapper">
          <div className="left_container">
            <h1 className="newh1">UX Audit Services; <br/>
              Reach your product’s<br/> ultimate potential
            </h1>
            <div className="col-md-3 col-7 buttons-wrapper">
              <a className="bttn bttn-primary" href="/contact/">
                Get a report in 7 days
                <div className="arrow-dot">
                  <img loading="lazy" src={primaryCtaArrow} className="icon icon-submit" alt="" />
                </div>
              </a>
            </div>
          </div>
          <div className="banner-wrapper-sub">
            <figure>
              <img loading="lazy" src={auditBanner} className="banner page-banner" alt="" />
            </figure>
          </div>
          <div className="grad type-2 medium gr-box1"></div>
          <div className="grad type-2 small gr-box2"></div>
        </div>
      </div>
    </section>
    <section className="what-ux-audit-wrapper blur-overlay">
      <div className="div-wrap">
        <div className="container">
          {/*<div className="grad type-2 medium gr-box1"></div>*/}
          <div className="left_container">
            <h2 className="newh2 section-heading">
              What is UX Audit?
            </h2>
            <p className="fs-20">A UX Audit is a strategic analysis of your digital product. The primary goal is to identify existing usability issues that are hampering your growth metrics, and provide actionable resolutions.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="why-ux-audit-wrapper blur-overlay">
      <div className="div-wrap">
        <div className="container">
          <div className="grad type-2 medium gr-box1"></div>
          <div className="right_container">
            <h2 className="newh2 section-heading">
              Why UX Audit?
            </h2>
            <p className="fs-20">We believe identification of gaps is the first step towards innovation. A <a className="gradient-text" href="https://www.onething.design/blogs/conducting-a-ux-audit-a-step-by-step-guide/" target="_blank">UX Audit</a> dissects the layers of user interactions, design components, and navigational flows to bring out – not only what’s not working, but what’s missing.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="when-ux-audit-wrapper blur-overlay">
      <div className="div-wrap">
        <div className="container">
          <div className="grad type-2 medium gr-box1"></div>
          <div className="grad type-2 small gr-box2"></div>
          <div className="left_container">
            <div className="when-grid">
              <div className="left_container">
                <h2 className="section-heading newh2">
                  When does a company require UX Audit?
                </h2>
                <div className="content-grid">
                  <div className="grid">
                    <span>01</span>
                    <p className="fs-20">When customer preferences are evolving</p>
                  </div>
                  <div className="grid">
                    <span>02</span>
                    <p className="fs-20">When a brand decides to tap into new markets</p>
                  </div>
                  <div className="grid">
                    <span>03</span>
                    <p className="fs-20">When a product integrates with a larger ecosystem</p>
                  </div>
                  <div className="grid">
                    <span>04</span>
                    <p className="fs-20">When the competitive landscape is shifting towards newer technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="ux-audit-services-wrapper blur-overlay">
      <div className="div-wrap">
        <div className="services-content">
          <div className="grad type-2 medium gr-box2"></div>
          <div className="services-content-sub left_container">
            <div class="main-container">
              <div class="left_container">
                <h2 className="section-heading newh2">UX audit services</h2>
                <div className="service-accordian">
                  <ul className="tags one">
                    <li><h3 className="newh3-li">Usability Analysis</h3></li>
                    <li><h3 className="newh3-li">User Journey Mapping</h3></li>
                    <li><h3 className="newh3-li">Heuristics Evaluation</h3></li>
                    <li><h3 className="newh3-li">Competitor Benchmarking</h3></li>
                  </ul>
                  <ul className="tags two">
                    <li><h3 className="newh3-li">User Pain Points</h3></li>
                    <li><h3 className="newh3-li">Product Roadmap</h3></li>
                    <li><h3 className="newh3-li">Potential Opportunities</h3></li>
                    <li><h3 className="newh3-li">Improvement Recommendations</h3></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services-audit-banner-content">
          <div className="grad type-2 large gr-box2"></div>
          <figure>
            <img loading="lazy" src={serviceAuditBanner} className="banner section-banner" alt="" />
          </figure>
        </div>
      </div>
    </section>
    <div className="whyonething-wrapper whyonething-audit">
      <section className="lets_talk whyonething-sec blur-overlay">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5">
              <div className="lets_talk_txt">
                <h2 className="section-heading">Why Choose Onething for UX Audit Services?</h2>
              </div>
              {/*<div className="grad small type-3"></div>*/}
            </div>
            <div className="col-md-7">
              <div className="numbers-card content-grid-two content-grid">
                <ul className="list-unstyled talk_list">
                  <li>
                    <div className="card black_card projects-card">
                      <div className="card_content">
                        <h4>01</h4>
                        <label>Holistic approach</label>
                        <p>A comprehensive approach considering various aspects to make sure that all customer touchpoints are looked at</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card black_card likes-card">
                      <div className="card_content">
                        <h4>03</h4>
                        <label>Data driven insights</label>
                        <p>UX audit report backed by extensive data analysis and user feedback to ensure that our suggestions are grounded in evidence</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="list-unstyled talk_list">
                  <li>
                    <div className="card black_card clients-card">
                      <div className="card_content">
                        <h4>02</h4>
                        <label>Problem focussed</label>
                        <p>Customizable UX audit services where businesses can choose the specific areas of improvements</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card black_card awards-card">
                      <div className="card_content">
                        <h4>04</h4>
                        <label>Quick turnaround</label>
                        <p>Most UX audits are completed within 1-2 weeks giving businesses a quick but extensive peak into their product’s UX</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card black_card conferences-card">
                      <div className="card_content">
                        <h4>05</h4>
                        <label>Domain expertise</label>
                        <p>We possess a keen understanding of various domains and industries that make us adept in catering to different audiences</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="demo--strip toshow">
        <div className="container">
          <div className="content-grid position-relative">
            <div className="content">
              <h3 className="section-heading">
                Uncover areas of improvement!
              </h3>
              <div className="cta-wrapper">
                <a className="bttn bttn-secondary" href="/contact">
                  <span>Book your UX Audit</span>
                  <img loading="lazy" src={ctaArrow} className="icon-arrow icon" alt="" />
                </a>
              </div>
            </div>
            <div className="visual-glance">
              <div className="grad type-2 large gr-box1"></div>
              <div className="grad type-2 small gr-box2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  </>
  );
};
export default Audit;














