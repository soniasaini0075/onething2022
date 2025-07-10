import "./homefaq.scss";
import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";

function HomeFaq() {
    return (
    <>
    <div className="homefaq--main">
        <div className="faq-page-wrapper page-wrapper blur-overlay">
            <section className="page-heading blur-overlay">
              <div className="container">
                    <div className="heading-wrapper custom-heading-wrapper">
                      <h3 className="section-heading home-heading">FAQs</h3>
                      <div className="grad type-2 small gr-box2"></div>
                    </div>
                </div>
            </section>
        <section className="faq-accords-wrapper blur-overlay">
        <div className="container">
            <div className="main__">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is a UI UX design agency?</Accordion.Header>
                        <Accordion.Body>
                            <p className="fs-20">A UI UX design agency specialises in enhancing the interaction between users and digital products. They are often hired by companies to make their digital presence more accessible, enjoyable, and efficient for intended users.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What services do UI/UX design agencies offer?</Accordion.Header>
                        <Accordion.Body>
                            <p className="fs-20">UI/UX design agencies offer many services under the umbrella of customer experience design like user experience design, user interface design, motion design, service design, design engineering, etc.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How do I choose the right UI UX design agency for my business?</Accordion.Header>
                        <Accordion.Body>
                            <p className="fs-20">Choosing the right <strong>UI UX design agency</strong> is a strategic decision that directly impacts how customers will percieve your product. It takes a systematic approach that involves evaluating the agency's track record, expertise, and culture against business needs and goals.</p>
                            <p className="fs-20">You should start by examining the agency's portfolio, and verify if they are adaptable and proficient across diverse industries. Prioritize an agency that takes a user-first approach, and crafts experiences that solve a purpose. Also remember, that while working with a <strong>UX design agency</strong>, seamless communication is of key importance. The agency must actively collaborate with you, encouraging feedback and updates on project progression. Consider and seek out client testimonials and reviews to validate reliability and professionalism of the agency. Lastly, align their service cost with your budget. At the end it's all about finding the right balance between cost and value delivered by the design agency.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>How long does it take to complete a UI/UX design project?</Accordion.Header>
                        <Accordion.Body>
                            <p className="fs-20">There is no specific timeline, as different projects have their own unique requirements basis which the duration is evaluated. However it may usually vary from 3 months to 1 year.</p>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Why do I need a UI UX design company for my business?</Accordion.Header>
                        <Accordion.Body>
                            <p className="fs-20">A <strong>UI UX design company</strong> like Onething Design does more than just creating screens; it shapes your business' digital narrative. The company's keen understanding of user behaviors and needs can inform a product strategy that can lead to increased customer engagement and loyalty. What sets a design company apart is its ability to adapt to the ever-evolving digital landscape. UX design companies are always on the pulse of new technologies and trends, ensuring your business doesn't just keep up but stays ahead of the curve. Collaborating with a design company also facilitates innovation. Their fresh perspective can help uncover new opportunities for growth to drive your business forward. The company offers an external and objective perspective, pinpointing potential UX issues and offer actionable solutions. Hence, hiring the right UI UX design company, enhances the overall efficiency and effectiveness of your digital platforms.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div className="cta-wrapper">
                    <a className="bttn bttn-primary" href="/faq/">
                      View More
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
    </div>
</section>
</div>
</div>
</>
);
}

export default HomeFaq;