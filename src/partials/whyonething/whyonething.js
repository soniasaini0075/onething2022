import { useState } from "react";

import "./whyonething.scss";


const WhyOneThing = () => {
    return (
    <>
        <div className="whyonething-wrapper">
            <section className="lets_talk whyonething-sec blur-overlay">
                <div className="container">
                  <div className="row justify-content-between">
                    <div className="col-md-5">
                      <div className="lets_talk_txt">
                        <h2 className="section-heading">Why choose Onething as a UI UX design studio?</h2>
                      </div>
                      <div className="grad small type-3"></div>
                    </div>
                    <div className="col-md-7">
                      <div className="numbers-card content-grid-two content-grid">
                        <ul className="list-unstyled talk_list">
                          <li>
                            <div className="card black_card projects-card">
                              <div className="card_content">
                                <h4>01</h4>
                                <label>Faster go-to market</label>
                                <p>Our processes are optimised to meet tight deadlines</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="card black_card likes-card">
                              <div className="card_content">
                                <h4>03</h4>
                                <label>Flexible engagement models</label>
                                <p>We understand that no two working relationships are same</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="card black_card conferences-card">
                              <div className="card_content">
                                <h4>05</h4>
                                <label>Driven by results</label>
                                <p>Balancing your business goals while maintaining user delight</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <ul className="list-unstyled talk_list">
                          <li>
                            <div className="card black_card clients-card">
                              <div className="card_content">
                                <h4>02</h4>
                                <label>Industry-wide experience</label>
                                <p>We are adept with domain nuances and design with perspective in mind</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="card black_card awards-card">
                              <div className="card_content">
                                <h4>04</h4>
                                <label>Omni-channel approach</label>
                                <p>Building a unified digital narrative for your brand</p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="card black_card years-card">
                              <div className="card_content">
                                <h4>06</h4>
                                <label>Competitive edge</label>
                                <p>We design to keep your business ahead of the curve</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
          </section>
        </div>
    </>
    );
}

export default WhyOneThing;