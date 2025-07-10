import "./blogs.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../redux/actions";
import { fetchBlogsRequest } from "../../redux/actions/blogs_ac";
import { useDispatch } from "react-redux";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CuratedProjectsLarge from "../../partials/curated-large/CuratedProjectsLarge";
import CultivatingCulture from "../../partials/culture/cultivatingCulture";
import Newsletter from "../../partials/newsletter/newsletter";
// import InstagramFeed from "../../partials/instagram-feed/instagramFeed";
import downloadIcon from "../../assets/img/global/download.svg";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import ctaArrow from "../../assets/img/global/grad-arrow.svg";
import primaryArrow from "../../assets/img/global/red-arrow.svg";
// import blogsBanner from "../../assets/img/blogs/blogs-banner.webp";
// import blogsDemo from "../../assets/img/blogs/blog-demo.webp";
import whitepaper1 from "../../assets/img/blogs/blog-whitepaper-1.webp";
import whitepaper2 from "../../assets/img/blogs/blog-whitepaper-2.webp";
import readIcon from "../../assets/img/read-cursor.svg";
import PageLoader from "../../partials/loaders/page-loader";

import { addPageMetas, convertToWebPURL } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";

import whitepaper1File from "../../assets/img/blogs/EdTech-Whitepaper.pdf";
import whitepaper2File from "../../assets/img/blogs/Connected-Mobility.pdf";
import { GlobalVariable as gv } from "../../redux/api_config";

import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const API_URL = gv.BASE_API_URL + gv.API_SEGMENT;

const Blogs = ({ blogState, fetchBlogs }) => {
  const [page, setPage] = useState(1);
  const [catID, setCatID] = useState(null);
  const { blogList, totalBlogsCount, loading } = blogState;
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [totalBlogData, setTotalBlogData] = useState([]);
  const [isTotalBlogsFetching, setIsTotalBlogsFetching] = useState(false);

  let grad_one = document?.getElementById("grad_one");
  let grad_two = document?.getElementById("grad_two");

  if (grad_one != null && grad_two != null) {
    grad_one.classList.replace("mesh-gradient", "type-3");
    grad_two.classList.replace("type-2", "type-3");
  }

  window.addEventListener("scroll", function () {
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
    let grad_three = document?.getElementById("grad_three");
    let grad_four = document?.getElementById("grad_four");
    let grad_five = document?.getElementById("grad_five");
    let grad_six = document?.getElementById("grad_six");
    let seventh_grad = document?.getElementById("seventh_grad");
    let eighth_grad = document?.getElementById("eighth_grad");
    let newsletter_grad_one = document?.getElementById("newsletter_grad_one");
    let newsletter_grad_two = document?.getElementById("newsletter_grad_two");

    if (isInViewport(grad_one)) {
      grad_one?.classList.replace("mesh-gradient", "type-3");
    } else {
      grad_one?.classList.replace("type-3", "mesh-gradient");
    }

    if (isInViewport(grad_two)) {
      grad_two?.classList.replace("type-2", "type-3");
    } else {
      grad_two?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(grad_three)) {
      grad_three?.classList.replace("mesh-gradient", "type-3");
    } else {
      grad_three?.classList.replace("type-3", "mesh-gradient");
    }

    if (isInViewport(grad_four)) {
      grad_four?.classList.replace("type-2", "type-3");
    } else {
      grad_four?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(grad_five)) {
      grad_five?.classList.replace("type-2", "type-3");
    } else {
      grad_five?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(grad_six)) {
      grad_six?.classList.replace("mesh-gradient", "type-3");
    } else {
      grad_six?.classList.replace("type-3", "mesh-gradient");
    }

    if (isInViewport(seventh_grad)) {
      seventh_grad?.classList.replace("type-2", "type-3");
    } else {
      seventh_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(eighth_grad)) {
      eighth_grad?.classList.replace("type-2", "type-3");
    } else {
      eighth_grad?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(newsletter_grad_one)) {
      newsletter_grad_one?.classList.replace("mesh-gradient", "type-3");
    } else {
      newsletter_grad_one?.classList.replace("type-3", "mesh-gradient");
    }

    if (isInViewport(newsletter_grad_two)) {
      newsletter_grad_two?.classList.replace("type-2", "type-3");
    } else {
      newsletter_grad_two?.classList.replace("type-3", "type-2");
    }
  });

  const handleFetchBlogs = () => {
    fetchBlogs(page, catID);
    setPage(page + 1);
  };

  const getBlogsByCat = (catId) => {
    fetchBlogs(1, catId);
    setCatID(catId);
    setPage(2);
  };

  useEffect(() => {
    addPageMetas(PAGE_METAS.blogs.title, PAGE_METAS.blogs.desc);
    document.body.classList.add("blogs-page");
    fetchBlogs(page);
    setPage(page + 1);
    document.querySelector(".mf-cursor-media").style.width = "150px";
    document.querySelector(".mf-cursor-media").style.height = "150px";
    document.querySelector(".mf-cursor-media").style.margin = "-70px 0 0 -70px";
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = totalBlogData?.filter((value) => {
      return value?.title?.rendered
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });

    if (wordEntered != "") {
      setErrorMessage(false);
    }

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    const newFilter = totalBlogData?.filter((value) => {
      return value?.title?.rendered
        .toLowerCase()
        .includes(wordEntered.toLowerCase());
    });

    if (!isTotalBlogsFetching) {
      if (wordEntered != "") {
        setErrorMessage(false);
      }

      if (wordEntered === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    }
  }, [isTotalBlogsFetching]);

  const fetchAllPaginateData = async (currentPage = 1, combineData = []) => {
    try {
      let totalPages = 3;
      setIsTotalBlogsFetching(true);
      const fetchURL =
        API_URL + gv.BLOG_ENDPOINT + "&page=" + currentPage + "&per_page=100";

      const response = await axios.get(fetchURL);

      // console.log(response);
      const { data } = response;

      // Combine data on each recursion and return it at the end
      combineData = combineData.concat(data);

      if (currentPage < totalPages) {
        currentPage++;
        console.debug(currentPage, "of", totalPages, "pages");

        // Slow down requests so as not to DOS the API
        await new Promise((resolve) => setTimeout(resolve, 50));

        return await fetchAllPaginateData(currentPage, combineData);
      }

      // Send big data back
      setTotalBlogData(combineData);
      setIsTotalBlogsFetching(false);
      return combineData;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    totalBlogData !== [] && fetchAllPaginateData(1);
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
      {blogList.length == 0 && <PageLoader />}
      {blogList.length > 0 && (
        <div className="blogs-page-wrapper page-wrapper">
          <section className="page-heading blur-overlay">
            <div className="container">
              <div className="heading-wrapper">
                <div className="left_container">
                  <h1>
                    Go ahead,
                    <br /> read our minds
                  </h1>
                </div>
                <div id="grad_two" className="grad type-2 small gr-box1"></div>
                <div
                  id="grad_one"
                  className="grad mesh-gradient medium gr-box2"
                ></div>
              </div>
            </div>
            <section className="search--wrapper left_container">
              <div className="search left_container">
                <div>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search by keyword"
                    value={wordEntered}
                    onChange={handleFilter}
                    onBlur={(e) => {
                      if (wordEntered != "") {
                        setErrorMessage(false);
                      }
                    }}
                  />
                </div>
                <button
                  className="icon-class"
                  onClick={() => {
                    if (wordEntered == "") {
                      setErrorMessage(true);
                    } else {
                      setErrorMessage(false);
                    }
                  }}
                >
                  {wordEntered != "" && isTotalBlogsFetching ? (
                    <div class="loader-wrapper">
                      <div class="loader"></div>
                    </div>
                  ) : (
                    <NavLink
                      to="/search"
                      state={{
                        word: wordEntered,
                        filteredData: filteredData,
                        catID: catID,
                        page: page,
                        totalBlogData: totalBlogData,
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 22.9395L15.8661 14.8056C17.1945 13.2369 18 11.2119 18 9.00001C18 4.0371 13.9629 0 9.00001 0C4.03715 0 0 4.0371 0 9.00001C0 13.9629 4.0371 18 9.00001 18C11.2119 18 13.2369 17.1945 14.8056 15.8661L22.9395 24L24 22.9395ZM9.00001 16.5C4.86475 16.5 1.50002 13.1353 1.50002 9.00001C1.50002 4.86475 4.86475 1.50002 9.00001 1.50002C13.1353 1.50002 16.5 4.86475 16.5 9.00001C16.5 13.1353 13.1353 16.5 9.00001 16.5Z"
                          fill="white"
                        />
                      </svg>
                    </NavLink>
                  )}
                </button>
              </div>
              {errorMessage && (
                <div className="error-msg">
                  <p style={{ fontWeight: "bold" }}>Error Message</p>
                </div>
              )}
              {console.log(filteredData, "filtereddd")}
              {filteredData?.length != 0 && (
                <div className="dataResult">
                  {filteredData?.map((value, key) => {
                    return (
                      <a
                        className="dataItem"
                        href={"/blogs/" + value?.slug + "/"}
                      >
                        <p>{value?.title?.rendered} </p>
                      </a>
                    );
                  })}
                </div>
              )}
            </section>
          </section>
          <div className="blogs-listing-wrapper blur-overlay">
            <section className="banner-image-section">
              <div className="div-wrap right_container">
                <div className="featured-blog">
                  <figure>
                    <img
                      loading="lazy"
                      src={blogList[0]?.jetpack_featured_media_url}
                      className="img-fluid"
                      alt={blogList[0]?.title.rendered}
                    />
                    <figcaption>
                      <h5
                        dangerouslySetInnerHTML={{
                          __html: blogList[0]?.title?.rendered,
                        }}
                      ></h5>
                      <p className="blog-details">
                        <span className="author">
                          {blogList[0]?._embedded.author[0]?.name}
                        </span>
                        -<span className="reading-minutes">3 mins read</span>
                      </p>
                      <a
                        className="bttn bttn-secondary bttn-secondary-small gradient-text"
                        href={"/blogs/" + blogList[0]?.slug + "/"}
                      >
                        Read the blog
                        <img
                          loading="lazy"
                          src={primaryArrow}
                          className="icon-arrow icon"
                          alt=""
                        />
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
            <section className="other-blog-listing-wrap">
              <div className="div-wrap">
                <div className="container">
                  <div
                    id="grad_three"
                    className="grad mesh-gradient small gr-box1"
                  ></div>
                  <div
                    id="grad_four"
                    className="grad type-2 small gr-box2"
                  ></div>
                  <div className="left_container lf_c">
                    <h2 className="section-heading">
                      Design, learn &amp;
                      <br /> grow together
                    </h2>
                  </div>
                  <div className="blogs-main-tab-wrapper">
                    <div className="ful-container">
                      {/* <Tabs
                        defaultActiveKey="all"
                        className="blogs-cat-tabs tabs-main"
                      >
                        <Tab eventKey="all" title="All">
                          <div className="info-container">
                            <div className="accordion-info">
                              {blogList.map((blog, i) => {
                                return (
                                  <a
                                    href={"/blogs/" + blog.slug + "/"}
                                    className="qodef-m-navigation"
                                    data-cursor-img={readIcon}
                                    key={i}
                                  >
                                   <div className="qodef-m-title-image-wrapper">
                                      <div className="qode-title">
                                        <h3
                                          className="blog-title"
                                          dangerouslySetInnerHTML={{
                                            __html: blog.title.rendered,
                                          }}
                                        ></h3>
                                        <p className="blog-details">
                                          <span className="author">
                                            {blog._embedded.author[0].name}
                                          </span>
                                          -
                                          <span className="reading-minutes">
                                            3 mins read
                                          </span>
                                        </p>
                                      </div>
                                      <div className="qodef-m-image">
                                        <figure>
                                          <img loading="lazy"
                                            src={
                                              blog.jetpack_featured_media_url
                                            }
                                            alt={blog.title.rendered}
                                          />
                                        </figure>
                                      </div>
                                    </div>
                                  </a>
                                );
                              })}
                              <button
                                type="button"
                                className="bttn bttn-secondary"
                                onClick={handleFetchBlogs}
                              >
                                Load more
                                <img loading="lazy"
                                  src={ctaArrow}
                                  className="icon-arrow icon"
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="bfsi" title="BFSI">
                          <h1>Tab BFSI</h1>
                        </Tab>
                        <Tab eventKey="education" title="Education">
                          <h1>Tab Education</h1>
                        </Tab>
                        <Tab eventKey="healthcare" title="Healthcare">
                          <h1>Tab Healthcare</h1>
                        </Tab>
                        <Tab eventKey="entertainment" title="Entertainment">
                          <h1>Tab Entertainment</h1>
                        </Tab>
                      </Tabs> */}
                      <ul
                        className="blogs-cat-tabs tabs-main nav nav-tabs"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            type="button"
                            onClick={() => getBlogsByCat(null)}
                          >
                            All
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            type="button"
                            onClick={() => getBlogsByCat(1150)}
                          >
                            UX Design
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            type="button"
                            onClick={() => getBlogsByCat(1155)}
                          >
                            Product design
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            type="button"
                            onClick={() => getBlogsByCat(1154)}
                          >
                            Business
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            type="button"
                            onClick={() => getBlogsByCat(1152)}
                          >
                            Research
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            type="button"
                            onClick={() => getBlogsByCat(1153)}
                          >
                            Industry trends
                          </button>
                        </li>
                        <li className="nav-item">
                          <button
                            className="nav-link"
                            type="button"
                            onClick={() => getBlogsByCat(1141)}
                          >
                            Art &amp; Culture
                          </button>
                        </li>
                      </ul>
                      {loading && <div className="tab-loader"></div>}
                      <div className="blogs--content-box">
                        <div className="info-container">
                          <div className="accordion-info">
                            {blogList?.map((blog, i) => {
                              return (
                                <a
                                  href={"/blogs/" + blog?.slug + "/"}
                                  className="qodef-m-navigation"
                                  data-cursor-img={readIcon}
                                  key={i}
                                >
                                  <div className="qodef-m-title-image-wrapper">
                                    <div className="qode-title">
                                      <h3
                                        className="blog-title"
                                        dangerouslySetInnerHTML={{
                                          __html: blog?.title?.rendered,
                                        }}
                                      ></h3>
                                      <p className="blog-details">
                                        <span className="author">
                                          {blog?._embedded?.author[0]?.name}
                                        </span>
                                        -
                                        <span className="reading-minutes">
                                          3 mins read
                                        </span>
                                      </p>
                                    </div>
                                    <div className="qodef-m-image">
                                      <figure>
                                        <img
                                          loading="lazy"
                                          src={blog?.jetpack_featured_media_url}
                                          alt={blog?.title?.rendered}
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                </a>
                              );
                            })}
                            {!loading && blogList?.length < totalBlogsCount && (
                              <button
                                type="button"
                                className="bttn bttn-secondary"
                                style={{ marginTop: "80px" }}
                                onClick={handleFetchBlogs}
                              >
                                Load more
                                <img
                                  loading="lazy"
                                  src={ctaArrow}
                                  className="icon-arrow icon"
                                  alt=""
                                />
                              </button>
                            )}
                            {loading && blogList?.length < totalBlogsCount && (
                              <button
                                type="button"
                                disabled
                                className="bttn bttn-secondary"
                                style={{ marginTop: "80px" }}
                              >
                                Loading...
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <section className="whitepapers-wrap-div blur-overlay">
            <div className="div-wrap">
              <div className="container position-relative">
                <div
                  id="grad_six"
                  className="grad mesh-gradient small gr-box1"
                ></div>
                <div id="grad_five" className="grad type-2 small gr-box2"></div>
                <div className="text-intro left_container right_container">
                  <h2 className="section-heading">Whitepapers</h2>
                </div>
                <div className="whitepapers-listing">
                  <div className="whitepaper_">
                    <div className="whitepaper-content">
                      <figure className="position-relative featured-image">
                        <img loading="lazy" src={whitepaper2} alt="" />
                        <figcaption>
                          <h6 className="var-medium">
                            Designing for Connected Mobility
                            <small>4 mins read</small>
                          </h6>
                          <a
                            className="bttn bttn-secondary gradient-text"
                            href={whitepaper2File}
                            download="whitepaper2File.pdf"
                            target="_blank" rel="noreferrer"
                            rel="noopener noreferrer"
                          >
                            Download
                            <img
                              loading="lazy"
                              src={downloadIcon}
                              className="icon-arrow icon"
                              alt=""
                            />
                          </a>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div className="whitepaper_">
                    <div className="whitepaper-content">
                      <figure className="position-relative featured-image">
                        <img loading="lazy" src={whitepaper1} alt="" />
                        <figcaption>
                          <h6 className="var-medium">
                            Designing for EdTech platforms
                            <small>2 mins read</small>
                          </h6>
                          <a
                            className="bttn bttn-secondary gradient-text"
                            href={whitepaper1File}
                            download="whitepaper1File.pdf"
                            target="_blank" rel="noreferrer"
                            rel="noopener noreferrer"
                          >
                            Download
                            <img
                              loading="lazy"
                              src={downloadIcon}
                              className="icon-arrow icon"
                              alt=""
                            />
                          </a>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <CuratedProjectsLarge title={"Other Resources"} />
          {/* <section className="instagram-feed-wrapper">
            <div className="div-wrap">
              <InstagramFeed
                token="IGQVJVTlBZAcG5LQV9RN3pwZAnZARSlB4Q241NzEycjRDVmdXYzl4ZADVrTWxfVWhuUjNTb2tMWm0wcnFjU1FqUWVhWEV3RUwycm5GMnV1UTNrUVZAxWkY2RUJ0enFxdjBNTFZABYmJIWjF2WXVtQUJWaVZAvWAZDZD"
                counter="6"
              />
            </div>
          </section> */}
          <div className="newsletter-imported">
            <Newsletter
              heading={"Quit small talk. Indulge in insightful conversations."}
            />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    blogState: state.blogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlogs: (page, catId) => dispatch(fetchBlogs(page, catId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
