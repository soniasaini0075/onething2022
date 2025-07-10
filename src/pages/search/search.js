import "./search.scss";
import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { fetchBlogs } from "../../redux/actions";
import { useState } from "react";
import {convertToWebPURL} from '../../utils/global_fun'
import { connect } from "react-redux";
import readIcon from "../../assets/img/read-cursor.svg";
import ctaArrow from "../../assets/img/global/grad-arrow.svg";
import { GlobalVariable as gv } from "../../redux/api_config";
import axios from "axios";
import { Helmet } from "react-helmet";

const API_URL = gv.BASE_API_URL + gv.API_SEGMENT;

const Search = (props) => {
  let location = useLocation();
  const [page, setPage] = useState(location?.state?.page);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataFlag, setFilteredDataFlag] = useState([]);
  const [wordEntered, setWordEntered] = useState(location?.state?.word ?? "");
  const [totalBlogData, setTotalBlogData] = useState([]);

  const { blogList, totalBlogsCount, loading } = props?.blogState;

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

  });


  const handleFetchBlogs = () => {
    props?.fetchBlogs(page, null);
    setPage(page + 1);
  };

  useEffect(() => {
    document.body.classList.add("search-page");
    props?.fetchBlogs(1, null);
    setTotalBlogData(location?.state?.totalBlogData)
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = totalBlogData.filter((value) => {
      return value?.title?.rendered
      .toLowerCase()
      .includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
      setFilteredDataFlag(false);
    } else {
      setFilteredData(newFilter);
      setFilteredDataFlag(true);
    }
  };

  return (
  <>
   <Helmet>
        <link rel="preload dns-prefetch canonical" href={`https://www.onething.design${location?.pathname}`}></link>
    </Helmet>
  <section className="page-heading blur-overlay">
    <div className="container">
      <div className="heading-wrapper">
        <div className="left_container">
          <div className="breadcrumb-main">
            <p className="breadcrum-details">
              <NavLink to="/" className="page-breadcrumb">Home</NavLink>
              <span className="slashes">/</span>
              <NavLink to="/blogs" className="page-breadcrumb">Blogs</NavLink>
              <span className="slashes">/</span>
              <a href="javascript:void(0)" className="post-title-breadcrum">
                <span>Search Results</span>
              </a>
            </p>
          </div>
          <h1 className="main-text">Search results</h1>
        </div>
        <div id="grad_two" className="grad type-2 small gr-box1"></div>
        <div id="grad_one" className="grad mesh-gradient medium gr-box2"></div>
      </div>
    </div>
    <div className="container">
      <div className="search left_container">
        <div className="div-main">
          <div className="search-icon">
            <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M20 19.1162L13.2217 12.338C14.3288 11.0307 15 9.34328 15 7.50001C15 3.36425 11.6357 0 7.50001 0C3.36429 0 0 3.36425 0 7.50001C0 11.6358 3.36425 15 7.50001 15C9.34328 15 11.0307 14.3288 12.338 13.2217L19.1162 20L20 19.1162ZM7.50001 13.75C4.05396 13.75 1.25001 10.9461 1.25001 7.50001C1.25001 4.05396 4.05396 1.25001 7.50001 1.25001C10.9461 1.25001 13.75 4.05396 13.75 7.50001C13.75 10.9461 10.9461 13.75 7.50001 13.75Z"
            fill="#E53617"
            />
          </svg>
        </div>
        <input
        type="text"
        className="search-input"
        placeholder="Search by keyword"
        defaultValue={location?.state?.wordEntered}
        value={wordEntered}
        onChange={handleFilter}
        />
        <button className="icon-class">
          <svg
          width="22"
          height="16"
          viewBox="0 0 22 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M16.5602 9.33333L11.7868 14.12L13.6668 16L21.6668 8L13.6668 0L11.7868 1.88L16.5602 6.66667H0.333496V9.33333H16.5602Z"
          fill="white"
          />
        </svg>
      </button>
    </div>

  </div>
</div>
<div className="container">
  <div className="search-results left_container">
    <div className="pd-container">
      <p>Search Results for:&nbsp;</p>
      <p className="keyword-searched">{`${
        wordEntered != "" ? wordEntered : "Related Blogs"
      }`}</p>
    </div>
  </div>
</div>


<div className="blogs--content-box">
  <div className="info-container">
    <div className="accordion-info">
      {wordEntered == location?.state?.word &&
      location?.state?.filteredData?.map((blog, i) => {
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
              <span className="reading-minutes">3 mins read</span>
            </p>
          </div>
          <div className="qodef-m-image">
            <figure>
              <img loading="lazy"
              src={convertToWebPURL(blog?.jetpack_featured_media_url)}
              alt={blog?.title?.rendered}
              />
            </figure>
          </div>
        </div>
      </a>
      );
    })}
    {blogList.length < totalBlogsCount &&
    wordEntered != location?.state?.word &&
    !filteredDataFlag &&
    blogList.map((blog, i) => {
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
            <span className="reading-minutes">3 mins read</span>
          </p>
        </div>
        <div className="qodef-m-image">
          <figure>
            <img loading="lazy"
            src={convertToWebPURL(blog?.jetpack_featured_media_url)}
            alt={blog?.title?.rendered}
            />
          </figure>
        </div>
      </div>
    </a>
    );
  })}
  {filteredDataFlag &&
  filteredData.map((blog, i) => {
    return (
    <a
    href={"/blogs/" + blog?.slug + "/"}
    target="_blank" rel="noreferrer"
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
          <span className="reading-minutes">3 mins read</span>
        </p>
      </div>
      <div className="qodef-m-image">
        <figure>
          <img loading="lazy"
          src={convertToWebPURL(blog?.jetpack_featured_media_url)}
          alt={blog?.title?.rendered}
          />
        </figure>
      </div>
    </div>
  </a>
  );
})}
{!loading &&
!filteredDataFlag &&
blogList.length < totalBlogsCount && (
<button
type="button"
className="bttn bttn-secondary"
style={{ marginTop: "48px", border: "none" }}
onClick={handleFetchBlogs}
>
Load more
<img loading="lazy" src={ctaArrow} className="icon-arrow icon" alt="" />
</button>
)}
{loading && blogList.length < totalBlogsCount && (
<button
type="button"
disabled
className="bttn bttn-secondary"
style={{ marginTop: "48px", border: "none" }}
>
Loading...
</button>
)}
</div>
</div>
</div>
</section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
