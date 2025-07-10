import "./faq.scss";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";

const Faq = () => {
  useEffect(() => {
    addPageMetas(PAGE_METAS.faq.title, PAGE_METAS.faq.desc);
    document.body.classList.add("faq-page");
  }, []);
  let location = useLocation();
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <>
      <Helmet>
        <link rel="preload dns-prefetch canonical" href={`https://www.onething.design${location?.pathname}`}></link>
      </Helmet>
      <div className="faq-page-wrapper page-wrapper">
        <section className="page-heading blur-overlay">
          <div className="container">
            <div className="heading-wrapper">
              <h1>Frequently <br />
              Asked Questions
              </h1>
              <div className="grad type-2 medium gr-box1"></div>
              {/* <div className="grad type-2 small gr-box2"></div> */}
            </div>
          </div>
        </section>
        <section className="faq-accords-wrapper blur-overlay">
          <div className="container">
            {/*<div className="tabs">
              <button className={`tab ${checkActive(1, "active")}`} onClick={() => handleClick(1)}>
               <span>General</span>
              </button>
              <button className={`tab ${checkActive(2, "active")}`} onClick={() => handleClick(2)}>
                <span>Designer</span>
              </button>
            </div>*/}
            <div className={`panel ${checkActive(1, "active")}`}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Why have you named your brand Onething?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Our philosophy is ingrained in being mindful, and focusing
                      at Onething at a time. There may be a hundred problems,
                      but our attention is al
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Do you code?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      No, Onething does not offer that facility yet.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What clients have you worked for?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Onething has successfully managed to work with tons of
                      popular brands and has made a huge difference as well. Our
                      clients include RBL Bank, Airtel, PVR Cinemas, Coca Cola,
                      Zee5, PayTM, and{" "}
                      <a href="https://www.onething.design/projects/">more.</a>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How does your design process work?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Our design process starts with understanding the problem
                      and defining the scope of the project. With insightful
                      discovery workshops and in-depth UX research we create low
                      and high fidelity prototypes and mockups to finally
                      develop design solutions that meet business objectives and
                      satisfy the user.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Would you say that Onething is the best design agency in
                    India?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Yes, indeed we are leading the UI UX design space in the
                      country.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    I am interested in applying to join the Onething family?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      We are always looking for passionate design heads. Head
                      over to our careers page to view the current openings.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    What kind of design is made by you?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      We create all sorts of designs catering to the goals of
                      the project. From abstract to minimal to explorative
                      design, we develop different solutions for different
                      demands.d
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    What are the industries you are expertise in?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      We have successfully designed for 25+ industries including
                      BFSI, Edtech, Fintech, Retail, Automotive, Health &
                      Wellness, FMCG, IoT, and many more.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    What is the timeline for a UX design project?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The timeline of a project is defined by the goals &
                      constraints of the project. Generally the timeline stands
                      between 2-9 months, which can further extend depending on
                      the project requirements.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    How do you build and use user personas?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      User personas are known to be the archetypical users whose
                      goals and other characteristics revolve around the needs
                      of larger user groups. They allow you to have a deep
                      understanding of your target audience. Finally, help the
                      team to find the answers to all the crucial questions.{" "}
                      <br />
                      There are ideally five steps to build user personas:
                      <ol>
                        <li>Gather information about your users.</li>
                        <li>
                          Identify their user behavior patterns from the
                          research data.
                        </li>
                        <li>Design personas and prioritize them.</li>
                        <li>
                          Discover various strategies of interaction and develop
                          user personas UX documentation.
                        </li>
                        <li>
                          Finally, convey your findings to the rest of the team
                          for approval.
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    What types of jobs are there in UX?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      There are a lot of options available for you if you wish
                      to pursue UX. Here is a list of some incredible UX jobs
                      that can be the one for you:
                      <ol>
                        <li>
                          UI Designers
                          <p>
                            User interface is a creative design for software and
                            machines carrying an aim to maximize the user
                            experience to a suitable extent. These designers
                            always focus on the visual aspects of an application
                            and web pages. Photoshop, Illustrator, Fireworks are
                            a few skills you need to develop in order to be a UX
                            designer.{" "}
                          </p>
                        </li>
                        <li>
                          UI Developer
                          <p>
                            Unlike, UI designers, UI developers troubleshoot,
                            maintain, and create code and scripts that construct
                            web pages or applications function in the best way
                            possible. Primarily, you will have to deliver things
                            like CSS, HTML, and JavaScript as a UI developer.
                          </p>
                        </li>
                        <li>
                          Information Architects (IA)
                          <p>
                            IA is known to be a science and art of designing
                            structures of organization in order to present
                            information and further data. They mainly help turn
                            technical and business requirements into planning
                            required documents and create Sitemaps, User Flow
                            Diagrams, Wireframes, Customer Journeys, and more.
                          </p>
                        </li>
                        <li>
                          UX Designers
                          <p>
                            UX Designers are responsible for many roles and are
                            often known to be diplomats at the places. They
                            certainly blend design and research skills in order
                            to make sense of what the end-users need and present
                            their solutions accordingly. They tend to be
                            creative and aim their goals on human behavior to
                            tell you what you are suggested to do and why.{" "}
                          </p>
                        </li>
                        <li>
                          UX Architects
                          <p>
                            UX Architects happen to fall into the category of
                            team leads and are seen participating in social
                            media and content development for projects. They
                            have expertise in providing evangelism to their
                            teams.
                          </p>
                        </li>
                        <li>
                          UX Developers
                          <p>
                            UX Developers possess the same skills as mentioned
                            above while they manage to own the essential coding
                            and development of the site.
                          </p>
                        </li>
                        <li>
                          Project Manager
                          <p>
                            The project managers who specialize in UX are known
                            to be highly organized and are good at coordinating
                            communications, budgets, schedules, and other
                            resources for certain projects.{" "}
                          </p>
                        </li>
                        <li>
                          Interaction Designers
                          <p>
                            These designers specialize in how the end-user
                            interacts with a web page or an application.
                            Interaction designers servers navigation flow
                            charts, diagrams, Flash content, or even prototypes.
                          </p>
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    Product design vs UX design?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Product Designers and UX designers have a few fair
                      differences, especially in their job specs. UX designers
                      devour most of their time developing products preliminary
                      to the launch whereas Product Designers happen to spend
                      most of theirs updating products that have been already
                      launched. <br />
                      During the launch, the UX designer and product designer
                      have similar roles to work on whereas once the product
                      launches UX designers essentially move towards other
                      projects. And product designers keep working on the same
                      product, keeping it up to date, and evolving it from time
                      to time.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15">
                  <Accordion.Header>What is UX in a phone?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      UX (User experience) in a phone refers to the entire
                      experience the user has interacting with any sort of
                      mobile device. These interactions may include anything
                      from apps to the hardware itself.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="16">
                  <Accordion.Header>
                    Can I make changes to the app after it has been launched??
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Yes, updating and improving your application post-launch
                      is not only possible but also essential. <br />
                      <br />
                      When your application is deployed at scale, delivered to
                      multiple concurrent users across the world, on different
                      platforms, there are bound to be issues that arise, bugs
                      that appear, and glitches that hamper the user experience.{" "}
                      <br />
                      <br />
                      In light of the above, it is essential to offer constant
                      and integrated post-launch support to your application
                      through periodic application updates. These application
                      updates can address some of the following:
                      <ol>
                        <li>Fix bugs and glitches.</li>
                        <li>Add new features, remove old features.</li>
                        <li>Make changes to the application's UI.</li>
                        <li>Improve the application’s optimization.</li>
                        <li>
                          Make quality of life improvements to the application.
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="17">
                  <Accordion.Header>
                    Do you provide support to the application after the product
                    launch?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">Yes, we do.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="18">
                  <Accordion.Header>
                    What are the UX design deliverables?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      During the UX design process, the designers tend to create
                      a variety of artifacts and project deliverables. They are
                      known to be part of their UX design methodology. Let’s
                      have a look at a few UX design deliverables:
                      <br />
                      <br />
                      <ol>
                        <li>
                          Technical specifications and business objectives
                        </li>
                        <li>Competitive analysis report</li>
                        <li>UX Research reports and personas</li>
                        <li>Information architecture and sitemap</li>
                        <li>UX Wireframes</li>
                        <li>Interactive Prototypes</li>
                        <li>Visual Design</li>
                        <li>Style Guide and specifications for developers</li>
                        <li>Usage analytics reports and usability testing</li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="21">
                  <Accordion.Header>
                    What are some biggest trends in the UX design industry right
                    now?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The following are the biggest trends in the UX design
                      industry:
                      <ol>
                        <li>Login without password</li>
                        <li>Illustration animations</li>
                        <li>Realistic textures</li>
                        <li>Virtual Reality</li>
                        <li>Surreal product photographs</li>
                        <li>Neomorphism</li>
                        <li>Storytelling</li>
                        <li>Go bold and bright</li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="22">
                  <Accordion.Header>
                    Difference between UI and UX?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      UI design is a minor part of UX design to a given extent.
                      UI happens to focus more on typography and colors. Whereas
                      UX consists of several layers of thought processes
                      including critical and creative thinking. <br />
                      In addition to this, UI consists of all the elements that
                      allow a person to interact with a service or product. On
                      the other hand, UX is what the person interacting with
                      that given service or service takes is separate from the
                      entire experience.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="23">
                  <Accordion.Header>
                    How can good User Experience help businesses?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Tons of studies show that businesses that happen to invest
                      in UX have a cost-effective customer acquisition, support
                      cost, enhanced market share, and more. <br />
                      To enhance user experience, one needs to start by taking
                      notes of varied customer interactions with your service or
                      product. One of the best parts of these notes is that the
                      process unfolds the unseen common problems that need a
                      solution. Further, these solutions prioritize the user’s
                      needs. Hence, they are applied to the concerning prototype
                      products that serve for the same. It is now safely said
                      that UX is responsible for efficiency and speed,
                      therefore, paramount.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="24">
                  <Accordion.Header>
                    How do we know if it’s best to develop a web app or a native
                    app?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      <ul>
                        <li>
                          For businesses trying to build reach, web applications
                          allow for wider distribution through the internet.
                          Thus improving the business’s visibility.
                        </li>
                        <li>
                          Web applications can be distributed through the
                          browser, making them accessible irrespective of the
                          user's device.
                        </li>
                        <li>
                          Native applications can be better optimized for very
                          specific use cases, device types, and screen sizes. If
                          a business is looking to distribute across a very
                          specific device type.
                        </li>
                        <li>
                          Native applications with local installations can be
                          more secure than web applications.
                        </li>
                      </ul>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="25">
                  <Accordion.Header>What does front-end mean?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The front-end of a website is the first thing a user comes
                      across when they visit a website. The responsibility it
                      has on its shoulder is massive. It is mostly responsible
                      for the online experience of the website’s attire and
                      aura. <br />
                      <br /> Although the term may sound technical to you it is
                      simply the interaction you first make with a website and
                      nothing more. In easier terms, frontend is a soul
                      concoction of the look of the website i.e. the graphic
                      design, and the feel i.e. the user interface. Both of
                      these elements are created individually. However, most of
                      the technical work goes into user experience with web
                      languages like HTML, JavaScript, and CSS.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="26">
                  <Accordion.Header>
                    What is a typical UX design process?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The typical UX design process mainly consists of 5 stages
                      i.e. Product definition, Research, Analyze, Design,
                      Design, and Validation.
                      <ol>
                        <li>
                          <b>Product Definition</b>: One of the most significant
                          phases in UX design is Product Definition. As a matter
                          of fact, it is done prior to the product team starting
                          to create the product. This phase sets the groundwork
                          for the end product.{" "}
                        </li>
                        <li>
                          <b>Product Research</b>: Once the idea has a ground to
                          work on, the team moves ahead to ‘research’. User
                          research and market research are centered during this
                          phase. Hence, research happens to be an investment for
                          product designers.{" "}
                        </li>
                        <li>
                          <b>Analysis</b>: The analysis phase focuses on
                          insights that are collected during the research stage.
                          This process is also known to be quite significant as
                          it confirms whether the assumptions about the issues
                          were up to the mark.{" "}
                        </li>
                        <li>
                          <b>Design</b>: The product teams begin to get started
                          with tons of activities. Everything from creating
                          information architect to the endgame, UI design is
                          covered. In addition to this, the design phase happens
                          to be a collaborative and iterative one.{" "}
                        </li>
                        <li>
                          <b>Validation</b>: This step is a significant one in
                          the whole design process. It allows the team to make
                          sense of their design work. Essentially, the
                          validation phase takes a lead after the design is good
                          to go.{" "}
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="27">
                  <Accordion.Header>
                    What are deliverables for UX design?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      For UX Design, deliverables are known to be the items
                      required in order to document the varied given phases of
                      the design process. It is quite apparent that they vary
                      from different projects. However, the deliverables manage
                      to serve the document with the important steps in the
                      entire web design approach. <br />
                      <br /> Moreover, deliverables can be both tangible and
                      massive and on the other hand, they can be in the form of
                      a brief document. Not only this but it can even be
                      referred to as a service. It is safe to say that
                      deliverables are the services or even goods that manage to
                      successfully deem the project as complete.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="28">
                  <Accordion.Header>What is an affinity Map?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      To be specific, affinity mapping is an ideation process
                      that allows the team to put things together, however, in
                      their respective groups based on their affinities. Such
                      groups allow you to extract themes and insights to help
                      you move effectively towards the next phases with ease.{" "}
                      <br />
                      <br /> Furthermore, there are moments where you realize
                      that it is now time to use an affinity map (affinity
                      diagram). To begin with, when there is a need to confront
                      ideas and facts when the problems seem too complex to work
                      on, or when the group suggests doing so.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="29">
                  <Accordion.Header>
                    How can I improve my mobile user experience?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The following are some of the best practices in order to
                      improve your mobile user experience:
                      <ol>
                        <li>
                          Consider using native component in your mobile
                          applications <br /> One of the main reasons why you
                          should do so is that it will help the users understand
                          the know-how of the application. In addition to this,
                          if the users know the native UI elements, it will
                          ideally be easy for them to follow the steps.
                          Furthermore, you can also consider adding transitions,
                          animations, and improvising.{" "}
                        </li>
                        <li>
                          Keep it simple <br /> Try eliminating extraneous
                          elements from the mobile application for the users to
                          have less to care about. Simply, if you lead them
                          directly to their goal, they’d prefer to use the
                          application.{" "}
                        </li>
                        <li>
                          Enhance consistency in your application design <br />{" "}
                          The analysis phase focuses on insights that are
                          collected during the research stage. This process is
                          also known to be quite significant as it confirms
                          whether the assumptions about the issues were up to
                          the mark.{" "}
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="30">
                  <Accordion.Header>
                    How do you design a mobile app?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      In order to design a mobile application successfully,
                      always ensure to create a step-by-step concept so that you
                      don't miss out on anything. That being said, the following
                      are the steps to help you with the design process:
                      <ol>
                        <li>
                          Create a user-flow diagram for individual screens.
                        </li>
                        <li>Draw wireframes.</li>
                        <li>
                          Choose design patterns and other similar color
                          palettes.
                        </li>
                        <li>Create mock-ups.</li>
                        <li>
                          Create an animated app prototype and get it tested by
                          people in order to receive feedback.
                        </li>
                        <li>
                          Finally, give it the required touch to the mock-ups to
                          have the end screens ready, to begin coding.
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="31">
                  <Accordion.Header>
                    What makes a good app design?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The fair difference between a poor app design and a good
                      one is usually its user experience quality. Ease of use,
                      quick loading times, and overall user satisfaction during
                      every single interaction must be an essential part of your
                      design. A satisfying app design is clearly laid out,
                      aesthetically satisfactory, and efficient to use.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="32">
                  <Accordion.Header>
                    What are app design tools?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      It is fair to say that design is one of the most crucial
                      components of app development. You need to cover every
                      aspect in order to make that mobile application a success.
                      Take a look at the following mobile applications
                      development:
                      <ol>
                        <li>Sketch</li>
                        <li>Adobe XD</li>
                        <li>UXPin</li>
                        <li>Proto.io</li>
                        <li>Marvel</li>
                        <li>Axure</li>
                        <li>Figma</li>
                        <li>InVision</li>
                        <li>Origami Studio</li>
                        <li>Fluid UI</li>
                        <li>Zeplin</li>
                        <li>Balsamiq</li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="33">
                  <Accordion.Header>
                    How can I get the right kind of help from the project or
                    issue?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The following are the steps that will render you
                      consistent problem management:
                      <ol>
                        <li>
                          Identify and list the issues down in a document.
                        </li>
                        <li>Report promptly.</li>
                        <li>Ensure to log issues.</li>
                        <li>Assign actions to your team to work on.</li>
                        <li>Keep a track of your progress.</li>
                        <li>Assess the action and its impact.</li>
                        <li>Ratify resolution.</li>
                        <li>Wrap it up.</li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className={`panel ${checkActive(2, "active")}`}>
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Why have you named your brand Onething?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Our philosophy is ingrained in being mindful, and focusing
                      at Onething at a time. There may be a hundred problems,
                      but our attention is al
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Do you code?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      No, Onething does not offer that facility yet.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What clients have you worked for?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Onething has successfully managed to work with tons of
                      popular brands and has made a huge difference as well. Our
                      clients include RBL Bank, Airtel, PVR Cinemas, Coca Cola,
                      Zee5, PayTM, and{" "}
                      <a href="https://www.onething.design/projects/">more.</a>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How does your design process work?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Our design process starts with understanding the problem
                      and defining the scope of the project. With insightful
                      discovery workshops and in-depth UX research we create low
                      and high fidelity prototypes and mockups to finally
                      develop design solutions that meet business objectives and
                      satisfy the user.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Would you say that Onething is the best design agency in
                    India?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Yes, indeed we are leading the UI UX design space in the
                      country.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    I am interested in applying to join the Onething family?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      We are always looking for passionate design heads. Head
                      over to our careers page to view the current openings.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    What kind of design is made by you?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      We create all sorts of designs catering to the goals of
                      the project. From abstract to minimal to explorative
                      design, we develop different solutions for different
                      demands.d
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    What are the industries you are expertise in?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      We have successfully designed for 25+ industries including
                      BFSI, Edtech, Fintech, Retail, Automotive, Health &
                      Wellness, FMCG, IoT, and many more.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    What is the timeline for a UX design project?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The timeline of a project is defined by the goals &
                      constraints of the project. Generally the timeline stands
                      between 2-9 months, which can further extend depending on
                      the project requirements.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    How do you build and use user personas?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      User personas are known to be the archetypical users whose
                      goals and other characteristics revolve around the needs
                      of larger user groups. They allow you to have a deep
                      understanding of your target audience. Finally, help the
                      team to find the answers to all the crucial questions.{" "}
                      <br />
                      There are ideally five steps to build user personas:
                      <ol>
                        <li>Gather information about your users.</li>
                        <li>
                          Identify their user behavior patterns from the
                          research data.
                        </li>
                        <li>Design personas and prioritize them.</li>
                        <li>
                          Discover various strategies of interaction and develop
                          user personas UX documentation.
                        </li>
                        <li>
                          Finally, convey your findings to the rest of the team
                          for approval.
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    What types of jobs are there in UX?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      There are a lot of options available for you if you wish
                      to pursue UX. Here is a list of some incredible UX jobs
                      that can be the one for you:
                      <ol>
                        <li>
                          UI Designers
                          <p>
                            User interface is a creative design for software and
                            machines carrying an aim to maximize the user
                            experience to a suitable extent. These designers
                            always focus on the visual aspects of an application
                            and web pages. Photoshop, Illustrator, Fireworks are
                            a few skills you need to develop in order to be a UX
                            designer.{" "}
                          </p>
                        </li>
                        <li>
                          UI Developer
                          <p>
                            Unlike, UI designers, UI developers troubleshoot,
                            maintain, and create code and scripts that construct
                            web pages or applications function in the best way
                            possible. Primarily, you will have to deliver things
                            like CSS, HTML, and JavaScript as a UI developer.
                          </p>
                        </li>
                        <li>
                          Information Architects (IA)
                          <p>
                            IA is known to be a science and art of designing
                            structures of organization in order to present
                            information and further data. They mainly help turn
                            technical and business requirements into planning
                            required documents and create Sitemaps, User Flow
                            Diagrams, Wireframes, Customer Journeys, and more.
                          </p>
                        </li>
                        <li>
                          UX Designers
                          <p>
                            UX Designers are responsible for many roles and are
                            often known to be diplomats at the places. They
                            certainly blend design and research skills in order
                            to make sense of what the end-users need and present
                            their solutions accordingly. They tend to be
                            creative and aim their goals on human behavior to
                            tell you what you are suggested to do and why.{" "}
                          </p>
                        </li>
                        <li>
                          UX Architects
                          <p>
                            UX Architects happen to fall into the category of
                            team leads and are seen participating in social
                            media and content development for projects. They
                            have expertise in providing evangelism to their
                            teams.
                          </p>
                        </li>
                        <li>
                          UX Developers
                          <p>
                            UX Developers possess the same skills as mentioned
                            above while they manage to own the essential coding
                            and development of the site.
                          </p>
                        </li>
                        <li>
                          Project Manager
                          <p>
                            The project managers who specialize in UX are known
                            to be highly organized and are good at coordinating
                            communications, budgets, schedules, and other
                            resources for certain projects.{" "}
                          </p>
                        </li>
                        <li>
                          Interaction Designers
                          <p>
                            These designers specialize in how the end-user
                            interacts with a web page or an application.
                            Interaction designers servers navigation flow
                            charts, diagrams, Flash content, or even prototypes.
                          </p>
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    Product design vs UX design?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Product Designers and UX designers have a few fair
                      differences, especially in their job specs. UX designers
                      devour most of their time developing products preliminary
                      to the launch whereas Product Designers happen to spend
                      most of theirs updating products that have been already
                      launched. <br />
                      During the launch, the UX designer and product designer
                      have similar roles to work on whereas once the product
                      launches UX designers essentially move towards other
                      projects. And product designers keep working on the same
                      product, keeping it up to date, and evolving it from time
                      to time.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15">
                  <Accordion.Header>What is UX in a phone?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      UX (User experience) in a phone refers to the entire
                      experience the user has interacting with any sort of
                      mobile device. These interactions may include anything
                      from apps to the hardware itself.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="16">
                  <Accordion.Header>
                    Can I make changes to the app after it has been launched??
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Yes, updating and improving your application post-launch
                      is not only possible but also essential. <br />
                      <br />
                      When your application is deployed at scale, delivered to
                      multiple concurrent users across the world, on different
                      platforms, there are bound to be issues that arise, bugs
                      that appear, and glitches that hamper the user experience.{" "}
                      <br />
                      <br />
                      In light of the above, it is essential to offer constant
                      and integrated post-launch support to your application
                      through periodic application updates. These application
                      updates can address some of the following:
                      <ol>
                        <li>Fix bugs and glitches.</li>
                        <li>Add new features, remove old features.</li>
                        <li>Make changes to the application's UI.</li>
                        <li>Improve the application’s optimization.</li>
                        <li>
                          Make quality of life improvements to the application.
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="17">
                  <Accordion.Header>
                    Do you provide support to the application after the product
                    launch?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">Yes, we do.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="18">
                  <Accordion.Header>
                    What are the UX design deliverables?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      During the UX design process, the designers tend to create
                      a variety of artifacts and project deliverables. They are
                      known to be part of their UX design methodology. Let’s
                      have a look at a few UX design deliverables:
                      <br />
                      <br />
                      <ol>
                        <li>
                          Technical specifications and business objectives
                        </li>
                        <li>Competitive analysis report</li>
                        <li>UX Research reports and personas</li>
                        <li>Information architecture and sitemap</li>
                        <li>UX Wireframes</li>
                        <li>Interactive Prototypes</li>
                        <li>Visual Design</li>
                        <li>Style Guide and specifications for developers</li>
                        <li>Usage analytics reports and usability testing</li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                {/* <Accordion.Item eventKey="19">
                  <Accordion.Header>Who will make up the team working on my project?</Accordion.Header>
                  <Accordion.Body>
                     <p className="fs-20">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dignissimos!
                     </p>
                  </Accordion.Body>
               </Accordion.Item>
               <Accordion.Item eventKey="20">
                  <Accordion.Header>What analytics tools and key performance indicators (KPI) have you used to evaluate your design?</Accordion.Header>
                  <Accordion.Body>
                     <p className="fs-20">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dignissimos!
                     </p>
                  </Accordion.Body>
               </Accordion.Item> */}
                <Accordion.Item eventKey="21">
                  <Accordion.Header>
                    What are some biggest trends in the UX design industry right
                    now?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The following are the biggest trends in the UX design
                      industry:
                      <ol>
                        <li>Login without password</li>
                        <li>Illustration animations</li>
                        <li>Realistic textures</li>
                        <li>Virtual Reality</li>
                        <li>Surreal product photographs</li>
                        <li>Neomorphism</li>
                        <li>Storytelling</li>
                        <li>Go bold and bright</li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="22">
                  <Accordion.Header>
                    Difference between UI and UX?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      UI design is a minor part of UX design to a given extent.
                      UI happens to focus more on typography and colors. Whereas
                      UX consists of several layers of thought processes
                      including critical and creative thinking. <br />
                      In addition to this, UI consists of all the elements that
                      allow a person to interact with a service or product. On
                      the other hand, UX is what the person interacting with
                      that given service or service takes is separate from the
                      entire experience.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="23">
                  <Accordion.Header>
                    How can good User Experience help businesses?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      Tons of studies show that businesses that happen to invest
                      in UX have a cost-effective customer acquisition, support
                      cost, enhanced market share, and more. <br />
                      To enhance user experience, one needs to start by taking
                      notes of varied customer interactions with your service or
                      product. One of the best parts of these notes is that the
                      process unfolds the unseen common problems that need a
                      solution. Further, these solutions prioritize the user’s
                      needs. Hence, they are applied to the concerning prototype
                      products that serve for the same. It is now safely said
                      that UX is responsible for efficiency and speed,
                      therefore, paramount.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="24">
                  <Accordion.Header>
                    How do we know if it’s best to develop a web app or a native
                    app?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      <ul>
                        <li>
                          For businesses trying to build reach, web applications
                          allow for wider distribution through the internet.
                          Thus improving the business’s visibility.
                        </li>
                        <li>
                          Web applications can be distributed through the
                          browser, making them accessible irrespective of the
                          user's device.
                        </li>
                        <li>
                          Native applications can be better optimized for very
                          specific use cases, device types, and screen sizes. If
                          a business is looking to distribute across a very
                          specific device type.
                        </li>
                        <li>
                          Native applications with local installations can be
                          more secure than web applications.
                        </li>
                      </ul>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="25">
                  <Accordion.Header>What does front-end mean?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The front-end of a website is the first thing a user comes
                      across when they visit a website. The responsibility it
                      has on its shoulder is massive. It is mostly responsible
                      for the online experience of the website’s attire and
                      aura. <br />
                      <br /> Although the term may sound technical to you it is
                      simply the interaction you first make with a website and
                      nothing more. In easier terms, frontend is a soul
                      concoction of the look of the website i.e. the graphic
                      design, and the feel i.e. the user interface. Both of
                      these elements are created individually. However, most of
                      the technical work goes into user experience with web
                      languages like HTML, JavaScript, and CSS.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="26">
                  <Accordion.Header>
                    What is a typical UX design process?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The typical UX design process mainly consists of 5 stages
                      i.e. Product definition, Research, Analyze, Design,
                      Design, and Validation.
                      <ol>
                        <li>
                          <b>Product Definition</b>: One of the most significant
                          phases in UX design is Product Definition. As a matter
                          of fact, it is done prior to the product team starting
                          to create the product. This phase sets the groundwork
                          for the end product.{" "}
                        </li>
                        <li>
                          <b>Product Research</b>: Once the idea has a ground to
                          work on, the team moves ahead to ‘research’. User
                          research and market research are centered during this
                          phase. Hence, research happens to be an investment for
                          product designers.{" "}
                        </li>
                        <li>
                          <b>Analysis</b>: The analysis phase focuses on
                          insights that are collected during the research stage.
                          This process is also known to be quite significant as
                          it confirms whether the assumptions about the issues
                          were up to the mark.{" "}
                        </li>
                        <li>
                          <b>Design</b>: The product teams begin to get started
                          with tons of activities. Everything from creating
                          information architect to the endgame, UI design is
                          covered. In addition to this, the design phase happens
                          to be a collaborative and iterative one.{" "}
                        </li>
                        <li>
                          <b>Validation</b>: This step is a significant one in
                          the whole design process. It allows the team to make
                          sense of their design work. Essentially, the
                          validation phase takes a lead after the design is good
                          to go.{" "}
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="27">
                  <Accordion.Header>
                    What are deliverables for UX design?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      For UX Design, deliverables are known to be the items
                      required in order to document the varied given phases of
                      the design process. It is quite apparent that they vary
                      from different projects. However, the deliverables manage
                      to serve the document with the important steps in the
                      entire web design approach. <br />
                      <br /> Moreover, deliverables can be both tangible and
                      massive and on the other hand, they can be in the form of
                      a brief document. Not only this but it can even be
                      referred to as a service. It is safe to say that
                      deliverables are the services or even goods that manage to
                      successfully deem the project as complete.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="28">
                  <Accordion.Header>What is an affinity Map?</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      To be specific, affinity mapping is an ideation process
                      that allows the team to put things together, however, in
                      their respective groups based on their affinities. Such
                      groups allow you to extract themes and insights to help
                      you move effectively towards the next phases with ease.{" "}
                      <br />
                      <br /> Furthermore, there are moments where you realize
                      that it is now time to use an affinity map (affinity
                      diagram). To begin with, when there is a need to confront
                      ideas and facts when the problems seem too complex to work
                      on, or when the group suggests doing so.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="29">
                  <Accordion.Header>
                    How can I improve my mobile user experience?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The following are some of the best practices in order to
                      improve your mobile user experience:
                      <ol>
                        <li>
                          Consider using native component in your mobile
                          applications <br /> One of the main reasons why you
                          should do so is that it will help the users understand
                          the know-how of the application. In addition to this,
                          if the users know the native UI elements, it will
                          ideally be easy for them to follow the steps.
                          Furthermore, you can also consider adding transitions,
                          animations, and improvising.{" "}
                        </li>
                        <li>
                          Keep it simple <br /> Try eliminating extraneous
                          elements from the mobile application for the users to
                          have less to care about. Simply, if you lead them
                          directly to their goal, they’d prefer to use the
                          application.{" "}
                        </li>
                        <li>
                          Enhance consistency in your application design <br />{" "}
                          The analysis phase focuses on insights that are
                          collected during the research stage. This process is
                          also known to be quite significant as it confirms
                          whether the assumptions about the issues were up to
                          the mark.{" "}
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="30">
                  <Accordion.Header>
                    How do you design a mobile app?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      In order to design a mobile application successfully,
                      always ensure to create a step-by-step concept so that you
                      don't miss out on anything. That being said, the following
                      are the steps to help you with the design process:
                      <ol>
                        <li>
                          Create a user-flow diagram for individual screens.
                        </li>
                        <li>Draw wireframes.</li>
                        <li>
                          Choose design patterns and other similar color
                          palettes.
                        </li>
                        <li>Create mock-ups.</li>
                        <li>
                          Create an animated app prototype and get it tested by
                          people in order to receive feedback.
                        </li>
                        <li>
                          Finally, give it the required touch to the mock-ups to
                          have the end screens ready, to begin coding.
                        </li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="31">
                  <Accordion.Header>
                    What makes a good app design?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The fair difference between a poor app design and a good
                      one is usually its user experience quality. Ease of use,
                      quick loading times, and overall user satisfaction during
                      every single interaction must be an essential part of your
                      design. A satisfying app design is clearly laid out,
                      aesthetically satisfactory, and efficient to use.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="32">
                  <Accordion.Header>
                    What are app design tools?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      It is fair to say that design is one of the most crucial
                      components of app development. You need to cover every
                      aspect in order to make that mobile application a success.
                      Take a look at the following mobile applications
                      development:
                      <ol>
                        <li>Sketch</li>
                        <li>Adobe XD</li>
                        <li>UXPin</li>
                        <li>Proto.io</li>
                        <li>Marvel</li>
                        <li>Axure</li>
                        <li>Figma</li>
                        <li>InVision</li>
                        <li>Origami Studio</li>
                        <li>Fluid UI</li>
                        <li>Zeplin</li>
                        <li>Balsamiq</li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="33">
                  <Accordion.Header>
                    How can I get the right kind of help from the project or
                    issue?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-20">
                      The following are the steps that will render you
                      consistent problem management:
                      <ol>
                        <li>
                          Identify and list the issues down in a document.
                        </li>
                        <li>Report promptly.</li>
                        <li>Ensure to log issues.</li>
                        <li>Assign actions to your team to work on.</li>
                        <li>Keep a track of your progress.</li>
                        <li>Assess the action and its impact.</li>
                        <li>Ratify resolution.</li>
                        <li>Wrap it up.</li>
                      </ol>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Faq;
