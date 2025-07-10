import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import primaryArrow from "../../assets/img/global/red-arrow.svg";
import "./industries.scss";

const Industries = () => {
  const [tabKey, setTabKey] = useState("automotive");

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

  return (
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
                manufacturers, and bolstered test drive bookings through digital
                channels by 35%{" "}
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
                Our work with India’s largest news publishing house drove their
                digital subscriptions up by 3.3 times
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
                Increased the cart value of India’s largest online supplement
                store by 18% through experience design
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
                Reimagined the digital presence of one of the largest private
                education institute in India, and impacted digital applications
                by 47%
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
                Experience Design helped gain 100K new users for a new health &
                wellness platform, with a Play Store rating of 4.9
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
                Improved digital loan applications by 2.7X for a fast growing
                NBFC lending platform through intuitive UX
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
  );
};

export default Industries;
