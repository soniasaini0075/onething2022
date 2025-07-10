import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "../../redux/actions";

import "./projects.scss";
import Testimonials from "../../partials/testimonials/testimonials";
import PageLoader from "../../partials/loaders/page-loader";

import { addPageMetas, convertToWebPURL } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";

// Images
import caseStudyIcon from "../../assets/img/case-study.svg";
import comingSoonIcon from "../../assets/img/coming-soon.svg";
// import nuegoImg from '../../assets/img/home/new-thumbnails/nuego-th.webp'
import { Helmet } from "react-helmet";

const Projects = ({ projectState, fetchProjects }) => {
  const [isAllProjects, setAllProjectTab] = useState(true);
  const [projectTab, setProjectTab] = useState(0);
  const [y, setY] = useState(window.scrollY);
  const [isStikyMenu, handleStickyMenu] = useState(true);
  const { projectList, undoneProjects, loading, loaded } = projectState;

  let first_grad = document?.getElementById("first_grad");
  let second_grad = document?.getElementById("second_grad");
  if (first_grad != null && second_grad != null) {
    first_grad.classList.replace("mesh-gradient", "type-3");
    second_grad.classList.replace("type-2", "type-3");
  }
  window.addEventListener("scroll", function () {
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

    let third_grad = document.getElementById("third_grad");
    let fourth_grad = document.getElementById("fourth_grad");
    let footerLeftGrad = document.getElementById("firstGrad");
    let footerRightGrad = document.getElementById("secondGrad");
    let footerGrad = document.getElementById("footerGrad");

    if (isInViewport(first_grad)) {
      first_grad?.classList.replace("mesh-gradient", "type-3");
    } else {
      first_grad?.classList.replace("type-3", "mesh-gradient");
    }

    if (isInViewport(second_grad)) {
      second_grad?.classList.replace("type-2", "type-3");
    } else {
      second_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(third_grad)) {
      third_grad?.classList.replace("mesh-gradient", "type-3");
    } else {
      third_grad?.classList.replace("type-3", "mesh-gradient");
    }
    if (isInViewport(fourth_grad)) {
      fourth_grad?.classList.replace("type-1", "type-3");
    } else {
      fourth_grad?.classList.replace("type-3", "type-1");
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

    if (this.window.scrollY > 8834) {
      document.getElementById("firstGrad").style.transform =
        "translateY(227px)";
      document.getElementById("firstGrad").style.transitionDuration = "1500ms";
      document.getElementById("firstGrad").style.visibility = "visible";

      document.getElementById("secondGrad").style.transform =
        "translateY(-181px)";
      document.getElementById("secondGrad").style.transitionDuration = "1500ms";
      document.getElementById("secondGrad").style.visibility = "visible";
    }

    if (window.scrollY > 9379) {
      document.getElementById("footerGrad").style.transform = "translateY(1px)";
      document.getElementById("footerGrad").style.transitionDuration = "1500ms";
      document.getElementById("footerGrad").style.visibility = "visible";
    }
  });

  const fetchProjectsByCat = async (catId, tabId) => {
    let tabLoading = true;
    fetchProjects(catId);
    if (!loading) {
      tabLoading = false;
    }

    if (loaded && !tabLoading) {
      if (catId != null) {
        setAllProjectTab(false);
      } else {
        setAllProjectTab(true);
      }
      setProjectTab(tabId);
    }
    // if (catId != null) {
    //   setAllProjectTab(false);
    // } else {
    //   setAllProjectTab(true);
    // }

    // setProjectTab(tabId);
  };

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y < 100) {
        handleStickyMenu(true);
      } else {
        if (y > window.scrollY) {
          handleStickyMenu(true);
        } else if (y < window.scrollY) {
          handleStickyMenu(false);
        }
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    addPageMetas(PAGE_METAS.projects.title, PAGE_METAS.projects.desc);
    setY(window.scrollY);
    // fetchBlogs();
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    fetchProjects();
    document.body.classList.add("projects-main-page");
    document.querySelector(".mf-cursor-media").style.width = "150px";
    document.querySelector(".mf-cursor-media").style.height = "150px";
    document.querySelector(".mf-cursor-media").style.margin = "-70px 0 0 -70px";
  }, []);

  let location = useLocation();

  return (
    <>
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href="https://www.onething.design/projects"
        ></link>
      </Helmet>
      {/* (projectList.length == 0 && loading) && */}
      {/* {projectList.length == 0 && undoneProjects.length == 0 && loading && (
        <PageLoader />
      )} */}
      <div className="projects-page-wrapper page-wrapper">
        <section
          className={`projects-category-wrapper blur-overlay ${
            isStikyMenu ? "" : "sticky"
          }`}
        >
          <div className="sub-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-white nav-slider">
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <ul className="navbar-nav tabs-main">
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 0 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(null, 0)}
                    >
                      All work
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 1 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(40, 1)}
                    >
                      BFSI
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 6 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1144, 6)}
                    >
                      Retail
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 2 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1142, 2)}
                    >
                      Gaming
                    </button>
                  </li>
                  {/* <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 3 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(39, 3)}
                    >
                      Health Technology
                    </button>
                  </li> */}
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 4 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1143, 4)}
                    >
                      Consumer Electronics
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 5 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(38, 5)}
                    >
                      Enterprise
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 7 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1145, 7)}
                    >
                      Education
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 8 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1146, 8)}
                    >
                      Media
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 9 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(36, 9)}
                    >
                      Automotive &amp; Mobility
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 10 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1156, 10)}
                    >
                      Energy
                    </button>
                  </li>
                  {/*<li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 10 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1147, 10)}
                    >
                      Technology
                    </button>
                  </li>*/}
                  {/*<li className="nav-item">
                    <button
                      className={
                        "nav-link" + (projectTab == 11 ? " active" : "")
                      }
                      onClick={() => fetchProjectsByCat(1148, 11)}
                    >
                      Others
                    </button>
                  </li>*/}
                </ul>
              </div>
            </nav>
          </div>
          {loading && <div className="tab-loader"></div>}
        </section>
        {/* {loading && <div className="loader--empty-sec"></div>} */}
        {/* {loading && (
            <div className="projects-page-wrapper page-wrapper">
              <p>Tabs Changing...</p>
            </div>
          )} */}

        {(projectList.length > 0 || undoneProjects.length > 0) && !loading ? (
          <>
            <section className="page-heading blur-overlay">
              <div className="container">
                <div className="heading-wrapper">
                  {projectTab == 0 && <h1>Designing for measurable success</h1>}
                  {/* {projectTab == 1 && <h1>BFSI</h1>}
                  {projectTab == 2 && <h1>Retail</h1>}
                  {projectTab == 3 && <h1>Healthcare</h1>}
                  {projectTab == 4 && <h1>FMCG</h1>}
                  {projectTab == 5 && <h1>Automotive</h1>}
                  {projectTab == 6 && <h1>Education</h1>}
                  {projectTab == 7 && <h1>MRO</h1>}
                  {projectTab == 8 && <h1>Fintech</h1>}
                  {projectTab == 9 && <h1>Others</h1>} */}
                  <div
                    id="second_grad"
                    className="grad type-2 small gr-box1"
                  ></div>
                  <div
                    id="first_grad"
                    className="grad type-2 mesh-gradient medium gr-box2"
                  ></div>
                </div>
              </div>
            </section>
            {isAllProjects && projectList.length > 0 && (
              <>
                <section className="projects-listing-wrap blur-overlay">
                  <div className="container">
                    {projectList.length > 0 && (
                      <>
                        {projectList[0] != undefined && (
                          <>
                            <div className="row no-gutter">
                              <div className="col-md-7">
                                <a
                                  href={
                                    "/projects/" +
                                    projectList[0].category__slug +
                                    "/" +
                                    projectList[0].slug +
                                    "/"
                                  }
                                  className="card img_card"
                                  data-cursor-img={caseStudyIcon}
                                >
                                  <div className="tile tile-fns">
                                    <div
                                      className="tileImage tile-fts"
                                      style={{
                                        backgroundImage: `url(${convertToWebPURL(
                                          projectList[0]
                                            .jetpack_featured_media_url
                                        )})`,
                                      }}
                                    ></div>
                                  </div>
                                  <div className="card-body">
                                    <h6>
                                      {projectList[0].title.rendered}
                                      <small>
                                        {projectList[0].category__title}
                                      </small>
                                    </h6>
                                    <p>{projectList[0].acf.client_motto}</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </>
                        )}
                        {projectList[1] != undefined && (
                          <div className="row no-gutter mt_18em flex-row-reverse">
                            <div className="col-md-4 cust_col ryt_card">
                              <a
                                href={
                                  "/projects/" +
                                  projectList[1].category__slug +
                                  "/" +
                                  projectList[1].slug +
                                  "/"
                                }
                                className="card img_card"
                                data-cursor-img={caseStudyIcon}
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "320px" }}
                                >
                                  <div
                                    className="tileImage tile-tns"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        projectList[1]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {projectList[1].title.rendered}
                                    <small>
                                      {projectList[1].category__title}
                                    </small>
                                  </h6>
                                  <p>{projectList[1].acf.client_motto}</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        )}
                        {projectList[2] != undefined && (
                          <div className="row no-gutter">
                            <div className="col-md-7 col-10">
                              <a
                                href={
                                  "/projects/" +
                                  projectList[2].category__slug +
                                  "/" +
                                  projectList[2].slug +
                                  "/"
                                }
                                className="card img_card"
                                data-cursor-img={caseStudyIcon}
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "588px" }}
                                >
                                  <div
                                    className="tileImage tile-tns"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        projectList[2]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {projectList[2].title.rendered}
                                    <small>
                                      {projectList[2].category__title}
                                    </small>
                                  </h6>
                                  <p>{projectList[2].acf.client_motto}</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        )}
                        {projectList[3] != undefined && (
                          <div className="row no-gutter flex-row-reverse">
                            <div className="col-md-10">
                              <a
                                href={
                                  "/projects/" +
                                  projectList[3].category__slug +
                                  "/" +
                                  projectList[3].slug +
                                  "/"
                                }
                                className="card img_card"
                                data-cursor-img={caseStudyIcon}
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "902px" }}
                                >
                                  <div
                                    className="tileImage tile-ffs"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        projectList[3]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {projectList[3].title.rendered}
                                    <small>
                                      {projectList[3].category__title}
                                    </small>
                                  </h6>
                                  <p>{projectList[3].acf.client_motto}</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </section>
                <section className="solutions-we-provide-wrap blur-overlay">
                  <div className="container position-relative">
                    <div className="overall-services">
                      <h2 className="section-heading">Pixels for people</h2>
                      <p className="p-sec">
                        We are an established UI Company, creating functional,
                        data informed, intuitive and interactive user
                        experiences, connecting brands to people.
                      </p>
                      <div
                        id="third_grad"
                        className="grad mesh-gradient small gr-box1"
                      ></div>
                      <div
                        id="fourth_grad"
                        className="grad type-1 medium gr-box2"
                      ></div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="project-listing-continued">
                      <>
                        {projectList[4] != undefined && (
                          <div className="row no-gutter flex-row-reverse">
                            <div className="col-md-5">
                              <a
                                href={
                                  "/projects/" +
                                  projectList[4].category__slug +
                                  "/" +
                                  projectList[4].slug +
                                  "/"
                                }
                                className="card img_card"
                                data-cursor-img={caseStudyIcon}
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "480px" }}
                                >
                                  <div
                                    className="tileImage tile-fns"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        projectList[4]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {projectList[4].title.rendered}
                                    <small>
                                      {projectList[4].category__title}
                                    </small>
                                  </h6>
                                  <p>{projectList[4].acf.client_motto}</p>
                                </div>
                              </a>
                            </div>
                          </div>
                        )}
                        {/* First Coming Soon Project */}
                        {undoneProjects[0] != undefined && (
                          <div className="row no-gutter no-gutter mt_18em">
                            <div className="col-md-4 cust_col6-8">
                              <div
                                className="card img_card"
                                data-cursor-img={comingSoonIcon}
                              >
                                <div
                                  className="tile"
                                  style={{ maxWidth: "362px" }}
                                >
                                  <div
                                    className="tileImage tile-fff"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        undoneProjects[0]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {undoneProjects[0].title.rendered}
                                    <small>
                                      {undoneProjects[0].category__title}
                                    </small>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Second Coming Soon Project */}
                        {undoneProjects[1] != undefined && (
                          <div className="row no-gutter mt_18em flex-row-reverse">
                            <div className="col-md-4">
                              <div
                                className="card img_card"
                                data-cursor-img={comingSoonIcon}
                              >
                                <div className="tile">
                                  <div
                                    className="tileImage tile-tns"
                                    style={{
                                      backgroundImage: `url(${convertToWebPURL(
                                        undoneProjects[1]
                                          .jetpack_featured_media_url
                                      )})`,
                                    }}
                                  ></div>
                                </div>
                                <div className="card-body">
                                  <h6>
                                    {undoneProjects[1].title.rendered}
                                    <small>
                                      {undoneProjects[1].category__title}
                                    </small>
                                  </h6>
                                  <p>{undoneProjects[1].acf.client_motto}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    </div>
                  </div>
                </section>
                <Testimonials />
                <section className="our-clients-company-wrap blur-overlay">
                  <div className="container">
                    <>
                      {projectList[5] != undefined && (
                        <div className="row no-gutter">
                          <div className="col-md-7">
                            <a
                              href={
                                "/projects/" +
                                projectList[5].category__slug +
                                "/" +
                                projectList[5].slug +
                                "/"
                              }
                              className="card img_card"
                              data-cursor-img={caseStudyIcon}
                            >
                              <div className="tile tile-fns">
                                <div
                                  className="tileImage tile-fts"
                                  style={{
                                    backgroundImage: `url(${convertToWebPURL(
                                      projectList[5].jetpack_featured_media_url
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="card-body">
                                <h6>
                                  {projectList[5].title.rendered}
                                  <small>
                                    {projectList[5].category__title}
                                  </small>
                                </h6>
                                <p>{projectList[5].acf.client_motto}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                      {projectList[6] != undefined && (
                        <div className="row no-gutter mt_18em flex-row-reverse">
                          <div className="col-md-4 cust_col ryt_card">
                            <a
                              href={
                                "/projects/" +
                                projectList[6].category__slug +
                                "/" +
                                projectList[6].slug +
                                "/"
                              }
                              className="card img_card"
                              data-cursor-img={caseStudyIcon}
                            >
                              <div
                                className="tile"
                                style={{ maxWidth: "320px" }}
                              >
                                <div
                                  className="tileImage tile-tns"
                                  style={{
                                    backgroundImage: `url(${convertToWebPURL(
                                      projectList[6].jetpack_featured_media_url
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="card-body">
                                <h6>
                                  {projectList[6].title.rendered}
                                  <small>
                                    {projectList[6].category__title}
                                  </small>
                                </h6>
                                <p>{projectList[6].acf.client_motto}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                      {projectList[7] != undefined && (
                        <div className="row no-gutter">
                          <div className="col-md-7 col-10">
                            <a
                              href={
                                "/projects/" +
                                projectList[7].category__slug +
                                "/" +
                                projectList[7].slug +
                                "/"
                              }
                              className="card img_card"
                              data-cursor-img={caseStudyIcon}
                            >
                              <div
                                className="tile"
                                style={{ maxWidth: "588px" }}
                              >
                                <div
                                  className="tileImage tile-tns"
                                  style={{
                                    backgroundImage: `url(${convertToWebPURL(
                                      projectList[7].jetpack_featured_media_url
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="card-body">
                                <h6>
                                  {projectList[7].title.rendered}
                                  <small>
                                    {projectList[7].category__title}
                                  </small>
                                </h6>
                                <p>{projectList[7].acf.client_motto}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                      {projectList[8] != undefined && (
                        <div className="row no-gutter flex-row-reverse">
                          <div className="col-md-10">
                            <a
                              href={
                                "/projects/" +
                                projectList[8].category__slug +
                                "/" +
                                projectList[8].slug +
                                "/"
                              }
                              className="card img_card"
                              data-cursor-img={caseStudyIcon}
                            >
                              <div
                                className="tile"
                                style={{ maxWidth: "902px" }}
                              >
                                <div
                                  className="tileImage tile-ffs"
                                  style={{
                                    backgroundImage: `url(${convertToWebPURL(
                                      projectList[8].jetpack_featured_media_url
                                    )})`,
                                  }}
                                ></div>
                              </div>
                              <div className="card-body">
                                <h6>
                                  {projectList[8].title.rendered}
                                  <small>
                                    {projectList[8].category__title}
                                  </small>
                                </h6>
                                <p>{projectList[8].acf.client_motto}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                </section>
              </>
            )}
            {!isAllProjects && (
              <>
                <section className="projects-listing-wrap blur-overlay">
                  <div className="container">
                    {projectList.length > 0 && (
                      <>
                        {projectList.map((project, i) => {
                          return (
                            <React.Fragment key={i}>
                              {i % 4 == 0 && (
                                <div className="row no-gutter">
                                  <div className="col-md-7">
                                    <a
                                      href={
                                        "/projects/" +
                                        project.category__slug +
                                        "/" +
                                        project.slug +
                                        "/"
                                      }
                                      className="card img_card"
                                      data-cursor-img={caseStudyIcon}
                                    >
                                      <div className="tile tile-fns">
                                        <div
                                          className="tileImage tile-fts"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>{project.acf.client_motto}</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                              {(i % 4) - 1 == 0 && (
                                <div className="row no-gutter mt_18em flex-row-reverse">
                                  <div className="col-md-4 cust_col ryt_card">
                                    <a
                                      href={
                                        "/projects/" +
                                        project.category__slug +
                                        "/" +
                                        project.slug +
                                        "/"
                                      }
                                      className="card img_card"
                                      data-cursor-img={caseStudyIcon}
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "320px" }}
                                      >
                                        <div
                                          className="tileImage tile-tns"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>{project.acf.client_motto}</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                              {(i % 4) - 2 == 0 && (
                                <div className="row no-gutter">
                                  <div className="col-md-7 col-10">
                                    <a
                                      href={
                                        "/projects/" +
                                        project.category__slug +
                                        "/" +
                                        project.slug +
                                        "/"
                                      }
                                      className="card img_card"
                                      data-cursor-img={caseStudyIcon}
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "588px" }}
                                      >
                                        <div
                                          className="tileImage tile-tns"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>{project.acf.client_motto}</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                              {(i % 4) - 3 == 0 && (
                                <div className="row no-gutter flex-row-reverse">
                                  <div className="col-md-10">
                                    <a
                                      href={
                                        "/projects/" +
                                        project.category__slug +
                                        "/" +
                                        project.slug +
                                        "/"
                                      }
                                      className="card img_card"
                                      data-cursor-img={caseStudyIcon}
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "902px" }}
                                      >
                                        <div
                                          className="tileImage tile-ffs"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>{project.acf.client_motto}</p>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </>
                    )}
                    {undoneProjects.length > 0 && (
                      <>
                        {undoneProjects.map((project, i) => {
                          // let projectLength = projectList.length > 10 ? 10 : projectList.length;
                          let comming_soon_index = projectList.length + i;
                          return (
                            <React.Fragment key={i}>
                              {comming_soon_index % 4 == 0 && (
                                <div className="row no-gutter">
                                  <div className="col-md-7">
                                    <div
                                      className="card img_card"
                                      data-cursor-img={comingSoonIcon}
                                    >
                                      <div className="tile tile-fns">
                                        <div
                                          className="tileImage tile-fts"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>
                                          Coming Soon
                                          {/* {project.acf.client_motto} */}
                                          {/* <NavLink
                                            to=""
                                            className="nav-link active always-active"
                                          >
                                            View Case Study
                                          </NavLink> */}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {(comming_soon_index % 4) - 1 == 0 && (
                                <div className="row no-gutter mt_18em flex-row-reverse">
                                  <div className="col-md-4 cust_col ryt_card">
                                    <div
                                      className="card img_card"
                                      data-cursor-img={caseStudyIcon}
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "320px" }}
                                      >
                                        <div
                                          className="tileImage tile-tns"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>Coming Soon</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {(comming_soon_index % 4) - 2 == 0 && (
                                <div className="row no-gutter">
                                  <div className="col-md-7 col-10">
                                    <div
                                      className="card img_card"
                                      data-cursor-img={caseStudyIcon}
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "588px" }}
                                      >
                                        <div
                                          className="tileImage tile-tns"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>Coming Soon</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {(comming_soon_index % 4) - 3 == 0 && (
                                <div className="row no-gutter flex-row-reverse">
                                  <div className="col-md-10">
                                    <div
                                      className="card img_card"
                                      data-cursor-img={caseStudyIcon}
                                    >
                                      <div
                                        className="tile"
                                        style={{ maxWidth: "902px" }}
                                      >
                                        <div
                                          className="tileImage tile-ffs"
                                          style={{
                                            backgroundImage: `url(${convertToWebPURL(
                                              project.jetpack_featured_media_url
                                            )})`,
                                          }}
                                        ></div>
                                      </div>
                                      <div className="card-body">
                                        <h6>
                                          {project.title.rendered}
                                          <small>
                                            {project.category__title}
                                          </small>
                                        </h6>
                                        <p>Coming Soon</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </>
                    )}
                  </div>
                </section>
              </>
            )}
            {projectList.length > 9 && isAllProjects && (
              <section className="more-projects-wrapper blur-overlay">
                <div className="container">
                  <h3 className="section-heading">More projects</h3>
                  <ul className="list-unstyled other-projects-list">
                    {projectList.slice(9).map((project, i) => {
                      return (
                        <li key={i}>
                          <a
                            href={
                              "/projects/" +
                              project.category__slug +
                              "/" +
                              project.slug +
                              "/"
                            }
                          >
                            <p className="fs-20">
                              <span>{project.title.rendered}</span>
                            </p>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            )}
            {projectList.length > 10 && !isAllProjects && (
              <section className="more-projects-wrapper blur-overlay">
                <div className="container">
                  <h3 className="section-heading">More projects</h3>
                  <ul className="list-unstyled other-projects-list">
                    {projectList.slice(10).map((project, i) => {
                      return (
                        <li key={i}>
                          <a
                            href={
                              "/projects/" +
                              project.category__slug +
                              "/" +
                              project.slug +
                              "/"
                            }
                          >
                            <p className="fs-20">
                              <span>{project.title.rendered}</span>
                            </p>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            )}
          </>
        ) : (
          <>
            <section className="page-heading blur-overlay">
              <div className="container">
                <div className="heading-wrapper">
                  <h1>Designing for measurable success</h1>

                  {/* {projectTab == 1 && <h1>BFSI</h1>}              //FALLBACK SECTION
                  {projectTab == 2 && <h1>Retail</h1>}
                  {projectTab == 3 && <h1>Healthcare</h1>}
                  {projectTab == 4 && <h1>FMCG</h1>}
                  {projectTab == 5 && <h1>Automotive</h1>}
                  {projectTab == 6 && <h1>Education</h1>}   //fallback
                  {projectTab == 7 && <h1>MRO</h1>}
                  {projectTab == 8 && <h1>Fintech</h1>}
                  {projectTab == 9 && <h1>Others</h1>} */}
                  <div
                    id="second_grad"
                    className="grad type-2 small gr-box1"
                  ></div>
                  <div
                    id="first_grad"
                    className="grad type-2 mesh-gradient medium gr-box2"
                  ></div>
                </div>
              </div>
            </section>
            {/* {isAllProjects && projectList.length > 0 && (                
              <> */}
            <section className="projects-listing-wrap blur-overlay">
              <div className="container">
                {/* {projectList.length > 0 && ( */}
                {/* <>
                        {projectList[0] != undefined && ( */}
                {/* <> */}
                <div className="row no-gutter">
                  <div className="col-md-7">
                    <a
                      href={"/projects/"}
                      className="card img_card"
                      data-cursor-img={caseStudyIcon}
                    >
                      <div className="tile tile-fns">
                        <div
                          className="tileImage tile-fts shimmer-effect"
                          // style={{
                          //   backgroundImage: `url(${nuegoImg})`,//imagestatic
                          // }}
                          style={{ backgroundColor: "#eaeaea" }}
                        ></div>
                      </div>
                      <div className="card-body">
                        <h6>
                          Nuego
                          <small>AUTOMOTIVE AND MOBILITY</small>
                        </h6>
                        <p>
                          Crafting a premium, sustainable, and seamless bus
                          booking experience for intercity commute.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* {projectList[1] != undefined && ( */}
                <div className="row no-gutter mt_18em flex-row-reverse">
                  <div className="col-md-4 cust_col ryt_card">
                    <a
                      href={"/projects/"}
                      className="card img_card"
                      data-cursor-img={caseStudyIcon}
                    >
                      <div className="tile" style={{ maxWidth: "320px" }}>
                        <div
                          className="tileImage tile-tns"
                          // style={{
                          //   backgroundImage: `url(${projectList[1].jetpack_featured_media_url})`,
                          // }}
                          style={{ backgroundColor: "#eaeaea" }}
                        ></div>
                      </div>
                      <div className="card-body">
                        <h6>
                          Healthkart
                          <small>RETAIL</small>
                        </h6>
                        <p>
                          Refining a health-focused ecommerce platform, catering
                          to various personas, and making fitness fun through
                          gamification.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* )} */}
                {/* {projectList[2] != undefined && ( */}
                <div className="row no-gutter">
                  <div className="col-md-7 col-10">
                    <a
                      href={"/projects/"}
                      className="card img_card"
                      data-cursor-img={caseStudyIcon}
                    >
                      <div className="tile" style={{ maxWidth: "588px" }}>
                        <div
                          className="tileImage tile-tns"
                          // style={{
                          //   backgroundImage: `url(${projectList[2].jetpack_featured_media_url})`,
                          // }}
                          style={{ backgroundColor: "#eaeaea" }}
                        ></div>
                      </div>
                      <div className="card-body">
                        <h6>
                          Prescinto
                          <small>ENERGY</small>
                        </h6>
                        <p>
                          Simplifying the complex user flows of a solar energy
                          monitoring platform.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                {/* {projectList[3] != undefined && ( */}
                <div className="row no-gutter flex-row-reverse">
                  <div className="col-md-10">
                    <a
                      href={"/projects/"}
                      className="card img_card"
                      data-cursor-img={caseStudyIcon}
                    >
                      <div className="tile" style={{ maxWidth: "902px" }}>
                        <div
                          className="tileImage tile-ffs"
                          // style={{
                          //   backgroundImage: `url(${projectList[3].jetpack_featured_media_url})`,
                          // }}
                          style={{ backgroundColor: "#eaeaea" }}
                        ></div>
                      </div>
                      <div className="card-body">
                        <h6>
                          Airtel
                          <small>ENTERPRISE</small>
                        </h6>
                        <p>
                          An enterprise grade solution, designed to streamline
                          communications between businesses, and customers.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section className="solutions-we-provide-wrap blur-overlay">
              <div className="container position-relative">
                <div className="overall-services">
                  <h2 className="section-heading">Pixels for people</h2>
                  <p className="p-sec">
                    We are an established UI Company, creating functional, data
                    informed, intuitive and interactive user experiences,
                    connecting brands to people.
                  </p>
                  <div
                    id="third_grad"
                    className="grad mesh-gradient small gr-box1"
                  ></div>
                  <div
                    id="fourth_grad"
                    className="grad type-1 medium gr-box2"
                  ></div>
                </div>
              </div>
              <div className="container">
                <div className="project-listing-continued">
                  <>
                    {projectList[4] != undefined && (
                      <div className="row no-gutter flex-row-reverse">
                        <div className="col-md-5">
                          <a
                            href={
                              "/projects/" +
                              projectList[4].category__slug +
                              "/" +
                              projectList[4].slug +
                              "/"
                            }
                            className="card img_card"
                            data-cursor-img={caseStudyIcon}
                          >
                            <div className="tile" style={{ maxWidth: "480px" }}>
                              <div
                                className="tileImage tile-fns"
                                style={{
                                  backgroundImage: `url(${convertToWebPURL(
                                    projectList[4].jetpack_featured_media_url
                                  )})`,
                                }}
                              ></div>
                            </div>
                            <div className="card-body">
                              <h6>
                                {projectList[4].title.rendered}
                                <small>{projectList[4].category__title}</small>
                              </h6>
                              <p>{projectList[4].acf.client_motto}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    )}
                    {/* First Coming Soon Project */}
                    {undoneProjects[0] != undefined && (
                      <div className="row no-gutter no-gutter mt_18em">
                        <div className="col-md-4 cust_col6-8">
                          <div
                            className="card img_card"
                            data-cursor-img={comingSoonIcon}
                          >
                            <div className="tile" style={{ maxWidth: "362px" }}>
                              <div
                                className="tileImage tile-fff"
                                style={{
                                  backgroundImage: `url(${convertToWebPURL(
                                    undoneProjects[0].jetpack_featured_media_url
                                  )})`,
                                }}
                              ></div>
                            </div>
                            <div className="card-body">
                              <h6>
                                {undoneProjects[0].title.rendered}
                                <small>
                                  {undoneProjects[0].category__title}
                                </small>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Second Coming Soon Project */}
                    {undoneProjects[1] != undefined && (
                      <div className="row no-gutter mt_18em flex-row-reverse">
                        <div className="col-md-4">
                          <div
                            className="card img_card"
                            data-cursor-img={comingSoonIcon}
                          >
                            <div className="tile">
                              <div
                                className="tileImage tile-tns"
                                style={{
                                  backgroundImage: `url(${convertToWebPURL(
                                    undoneProjects[1].jetpack_featured_media_url
                                  )})`,
                                }}
                              ></div>
                            </div>
                            <div className="card-body">
                              <h6>
                                {undoneProjects[1].title.rendered}
                                <small>
                                  {undoneProjects[1].category__title}
                                </small>
                              </h6>
                              <p>{undoneProjects[1].acf.client_motto}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>
            </section>
            <Testimonials />
            <section className="our-clients-company-wrap blur-overlay">
              <div className="container">
                <>
                  {projectList[5] != undefined && (
                    <div className="row no-gutter">
                      <div className="col-md-7">
                        <a
                          href={
                            "/projects/" +
                            projectList[5].category__slug +
                            "/" +
                            projectList[5].slug +
                            "/"
                          }
                          className="card img_card"
                          data-cursor-img={caseStudyIcon}
                        >
                          <div className="tile tile-fns">
                            <div
                              className="tileImage tile-fts"
                              style={{
                                backgroundImage: `url(${convertToWebPURL(
                                  projectList[5].jetpack_featured_media_url
                                )})`,
                              }}
                            ></div>
                          </div>
                          <div className="card-body">
                            <h6>
                              {projectList[5].title.rendered}
                              <small>{projectList[5].category__title}</small>
                            </h6>
                            <p>{projectList[5].acf.client_motto}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  {projectList[6] != undefined && (
                    <div className="row no-gutter mt_18em flex-row-reverse">
                      <div className="col-md-4 cust_col ryt_card">
                        <a
                          href={
                            "/projects/" +
                            projectList[6].category__slug +
                            "/" +
                            projectList[6].slug +
                            "/"
                          }
                          className="card img_card"
                          data-cursor-img={caseStudyIcon}
                        >
                          <div className="tile" style={{ maxWidth: "320px" }}>
                            <div
                              className="tileImage tile-tns"
                              style={{
                                backgroundImage: `url(${convertToWebPURL(
                                  projectList[6].jetpack_featured_media_url
                                )})`,
                              }}
                            ></div>
                          </div>
                          <div className="card-body">
                            <h6>
                              {projectList[6].title.rendered}
                              <small>{projectList[6].category__title}</small>
                            </h6>
                            <p>{projectList[6].acf.client_motto}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  {projectList[7] != undefined && (
                    <div className="row no-gutter">
                      <div className="col-md-7 col-10">
                        <a
                          href={
                            "/projects/" +
                            projectList[7].category__slug +
                            "/" +
                            projectList[7].slug +
                            "/"
                          }
                          className="card img_card"
                          data-cursor-img={caseStudyIcon}
                        >
                          <div className="tile" style={{ maxWidth: "588px" }}>
                            <div
                              className="tileImage tile-tns"
                              style={{
                                backgroundImage: `url(${convertToWebPURL(
                                  projectList[7].jetpack_featured_media_url
                                )})`,
                              }}
                            ></div>
                          </div>
                          <div className="card-body">
                            <h6>
                              {projectList[7].title.rendered}
                              <small>{projectList[7].category__title}</small>
                            </h6>
                            <p>{projectList[7].acf.client_motto}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                  {projectList[8] != undefined && (
                    <div className="row no-gutter flex-row-reverse">
                      <div className="col-md-10">
                        <a
                          href={
                            "/projects/" +
                            projectList[8].category__slug +
                            "/" +
                            projectList[8].slug +
                            "/"
                          }
                          className="card img_card"
                          data-cursor-img={caseStudyIcon}
                        >
                          <div className="tile" style={{ maxWidth: "902px" }}>
                            <div
                              className="tileImage tile-ffs"
                              style={{
                                backgroundImage: `url(${convertToWebPURL(
                                  projectList[8].jetpack_featured_media_url
                                )})`,
                              }}
                            ></div>
                          </div>
                          <div className="card-body">
                            <h6>
                              {projectList[8].title.rendered}
                              <small>{projectList[8].category__title}</small>
                            </h6>
                            <p>{projectList[8].acf.client_motto}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  )}
                </>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    projectState: state.projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: (catId) => dispatch(fetchProjects(catId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
