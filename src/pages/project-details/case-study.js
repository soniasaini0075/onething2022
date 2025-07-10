import "./case-study.scss";

import { useState, useEffect } from "react";

import { useLocation, useParams } from "react-router-dom";

import Slider from "react-slick";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { convertToWebPURL } from "../../utils/global_fun";
import { connect } from "react-redux";
import { fetchProject } from "../../redux/actions";

// import caseStudyBanner from "../../assets/img/projects/hero-casestudy.jpg";
// import dragIcon from "../../assets/img/global/drag-btn.svg";
// import userTestimonial from "../../assets/img/user.jpg";
// import designSystem from "../../assets/img/projects/case-study/design-system.jpg";

// import rightSliderArrow from "../../assets/img/global/culture-hover-right.svg";
// import leftSliderArrow from "../../assets/img/global/culture-hover-left.svg";

// import cs1 from "../../assets/img/projects/case-study/1.webp";
// import cs2 from "../../assets/img/projects/case-study/2.webp";
// import cs2_1 from "../../assets/img/projects/case-study/2_1.webp";
// import cs3 from "../../assets/img/projects/case-study/3.jpg";
// import cs4 from "../../assets/img/projects/case-study/4.jpg";
// import cs5 from "../../assets/img/projects/case-study/5.jpg";
// import cs6 from "../../assets/img/projects/case-study/6.webp";
// import cs7 from "../../assets/img/projects/case-study/7.gif";

import gif1 from "../../assets/img/projects/case-study/posable.gif";
import loader from "../../assets/video/api_loader.mp4";

import RelatedCaseStudies from "../../partials/related-casestudies/related-case-studies";
import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas } from "../../utils/global_fun";
import { Helmet } from "react-helmet";

const CaseStudy = ({ projectState, fetchProject }) => {
  const [awardSlider, setAwardSlider] = useState();
  const { project, relatedProjects, loading, loaded } = projectState;
  console.log(project, "proejctss");
  const sliderNext = () => {
    awardSlider.slickNext();
  };

  const sliderPrev = () => {
    awardSlider.slickPrev();
  };

  let { catSlug, caseStudy } = useParams();
  console.log(caseStudy, "case");
  useEffect(() => {
    document.body.classList.add("case-study-single-page");
    fetchProject(caseStudy);
    // fetchBlogs();
  }, []);

  useEffect(() => {
    if (project != null) {
      addPageMetas(
        project.yoast_head_json.title,
        project.yoast_head_json.description
      );
    }
  }, [project]);
  useEffect(() => {
    // const content=document.getElementById('html-content')
    //   if(content){
    //    const divwrap=content.getElementsByTagName('img')
    //    const videoElements=content.getElementsByTagName('video')
    //    for (const imgElements of divwrap) {
    //   console.log(imgElements,"elemfirst")
    //     imgElements.src = convertToWebPURL(imgElements.src)
    //   console.log(convertToWebPURL(imgElements.src),'sssssssss')
    //   console.log(imgElements,"elem")
    //   }
    //   }
  });

  // New Project 2022 Tag Id = 1140

  let location = useLocation();

  return (
    <>
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href={`https://www.onething.design${location.pathname}`}
        ></link>
      </Helmet>
      {project == null && <PageLoader />}
      {project != null && project.categories.includes(1140) && (
        <div className="case-study-page-wrapper page-wrapper">
          {
            <>
              <section className="case-study-hero blur-overlay">
                <div className="div-wrap">
                  <div className="container">
                    <div className="left_container">
                      <div className="case-study-title">
                        <span className="fs-18 gradient-text">
                          {project.title.rendered}
                        </span>
                      </div>
                      <div className="main-title right_container">
                        <h1 className="newh1">{project.acf.project_intro_line}</h1>
                      </div>
                    </div>
                  </div>
                  {console.log(project.acf.poster.url, "content")}
                  <div className="right_container banner-wrap">
                    <figure>
                      <img
                        loading="lazy"
                        src={convertToWebPURL(project.acf.poster.url)}
                        className="img-fluid desktop-banner"
                        alt={project.acf.project_intro_line}
                      />
                      <img
                        loading="lazy"
                        src={convertToWebPURL(project.acf.mobile_banner.url)}
                        className="img-fluid mobile-banner"
                        alt={project.acf.project_intro_line}
                      />
                    </figure>
                  </div>
                </div>
              </section>

              <div
                id="html-content"
                className="content-div blur-overlay"
                dangerouslySetInnerHTML={{
                  __html: project.content.rendered,
                }}
              ></div>
            </>
          }
          {relatedProjects.length > 0 && (
            <RelatedCaseStudies relatedProjects={relatedProjects} />
          )}
        </div>
      )}

      {project != null && !project.categories.includes(1140) && (
        <div className="old-project--style blur-overlay">
          <div className="case-studies-wordpress-dashboard">
            <figure className="cs-wd-banner">
              <img
                loading="lazy"
                src={convertToWebPURL(project.jetpack_featured_media_url)}
                className="img-fluid"
                alt="case-study-banner"
              />
            </figure>
            <div className="container">
              <h1 className="cs-wd-title">{project.title.rendered}</h1>
            </div>
            <div
              className="content-div container"
              dangerouslySetInnerHTML={{ __html: project.content.rendered }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    projectState: state.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (caseStudy) => dispatch(fetchProject(caseStudy)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CaseStudy);

var projectInsights = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3.4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
