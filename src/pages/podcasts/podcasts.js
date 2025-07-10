import "./podcasts.scss";
import { useState } from "react";
import { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Slider from "react-slick";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import thoughtcast from "../../assets/img/podcast/thoughtcast.svg";
import applePodcast from "../../assets/img/podcast/channel/ios-podcasts.svg";
import googlePodcast from "../../assets/img/podcast/channel/google-podcasts.svg";
import spotifyPodcast from "../../assets/img/podcast/channel/spotify-podcasts.svg";
import podcastQoute from "../../assets/img/podcast/podcast-qoute.svg";
import youTubePodcast from "../../assets/img/podcast/channel/yt-podcasts.svg";
import youTubeLogo from "../../assets/img/podcast/channel/youtube-full.svg";
import podcastPlay from "../../assets/img/podcast/play.svg";
import podcastPlayWhite from "../../assets/img/podcast/play-white.svg";
import downArrow from "../../assets/img/podcast/down.svg";
import mhepodcast1 from "../../assets/img/podcast/mhe-pod1.webp";
import mhepodcast2 from "../../assets/img/podcast/mhe-pod2.webp";
import mhepodcast3 from "../../assets/img/podcast/mhe-pod3.webp";
// import htmpodcast1 from "../../assets/img/podcast/htm-pod-img1.webp";
// import htmpodcast2 from "../../assets/img/podcast/htm-pod-img2.webp";
// import htmpodcast3 from "../../assets/img/podcast/htm-pod-img3.webp";
// import podcast1 from "../../assets/img/podcast/podcast1.webp";
import Newsletter from "../../partials/newsletter/newsletter";
// import InstagramFeed from "../../partials/instagram-feed/instagramFeed";
import rightSliderArrow from "../../assets/img/global/culture-hover-right.svg";
import leftSliderArrow from "../../assets/img/global/culture-hover-left.svg";
import arrowVector from "../../assets/img/podcast/arrow-vector.svg";
import exploreButton from "../../assets/img/podcast/explore.svg";

import { connect } from "react-redux";
import { fetchPodcasts } from "../../redux/actions";
import PageLoader from "../../partials/loaders/page-loader";

import { addPageMetas, convertToWebPURL } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Podcasts = ({ podcastState, fetchPodcasts }) => {
  const [page, setPage] = useState(1);
  const [newRelease, setNewRelease] = useState();
  const { podcastList, loading, totalPodcastCount, loaded } = podcastState;

  let grad_one = document?.getElementById("grad_one");
  let grad_two = document?.getElementById("grad_two");

  if (grad_one != null && grad_two != null) {
    grad_one.classList.replace("type-2", "type-3");
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
    let grad_seven = document?.getElementById("grad_seven");
    let grad_eight = document?.getElementById("grad_eight");
    let newsletter_grad_one = document?.getElementById("newsletter_grad_one");
    let newsletter_grad_two = document?.getElementById("newsletter_grad_two");

    if (isInViewport(grad_one)) {
      grad_one?.classList.replace("type-2", "type-3");
    } else {
      grad_one?.classList.replace("type-3", "type-2");
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
      grad_four?.classList.replace("mesh-gradient", "type-3");
    } else {
      grad_four?.classList.replace("type-3", "mesh-gradient");
    }

    if (isInViewport(grad_five)) {
      grad_five?.classList.replace("mesh-gradient", "type-3");
    } else {
      grad_five?.classList.replace("type-3", "mesh-gradient");
    }

    if (isInViewport(grad_six)) {
      grad_six?.classList.replace("type-2", "type-3");
    } else {
      grad_six?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(grad_seven)) {
      grad_seven?.classList.replace("type-2", "type-3");
    } else {
      grad_seven?.classList.replace("type-3", "type-2");
    }

    if (isInViewport(grad_eight)) {
      grad_eight?.classList.replace("type-2", "type-3");
    } else {
      grad_eight?.classList.replace("type-3", "type-2");
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

  const nrsliderNext = () => {
    newRelease.slickNext();
  };
  const nrsliderPrev = () => {
    newRelease.slickPrev();
  };
  const [conversationSlider, setConversationSlider] = useState();
  const sliderNext = () => {
    conversationSlider.slickNext();
  };
  const sliderPrev = () => {
    conversationSlider.slickPrev();
  };

  const handleFetchBlogs = () => {
    // if(podcastList.length < totalPodcastCount) {

    // }
    fetchPodcasts(page);
    setPage(page + 1);
  };

  useEffect(() => {
    addPageMetas(PAGE_METAS.podcast_list.title, PAGE_METAS.podcast_list.desc);
    document.body.classList.add("podcast-listing-page");
    fetchPodcasts(page);
    setPage(page + 1);
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
          href={`https://www.onething.design${location?.pathname}`}
        ></link>
      </Helmet>
      {/* {podcastList.length == 0 && loading && <PageLoader />} */}
      {/* {loading && <PageLoader />} */}
      {podcastList.length == 0 && <PageLoader />}
      <div className="podcasts-page-wrapper page-wrapper">
        <section className="page-heading blur-overlay">
          <div className="container">
            <div className="heading-wrapper">
              <div className="left_container">
                <img
                  loading="lazy"
                  src={thoughtcast}
                  className="thoughtcast icon"
                  alt=""
                />
                <h1>
                  Thoughtcast, <br /> stories unsaid
                </h1>
                <div className="channel-listing-wrapper">
                  <p className="p-span tune-into">Tune into:</p>
                  <ul>
                    <li>
                      <a
                        href="https://podcasts.apple.com/podcast/id1565301034"
                        target="_blank"
                      >
                        <figure>
                          <img
                            loading="lazy"
                            src={applePodcast}
                            className="channel-branding icon"
                            alt=""
                          />
                          <figcaption>
                            <p>
                              Listen on
                              <span>Apple Podcasts</span>
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNzYxNDU5LnJzcw=="
                        target="_blank"
                      >
                        <figure>
                          <img
                            loading="lazy"
                            src={googlePodcast}
                            className="channel-branding icon"
                            alt=""
                          />
                          <figcaption>
                            <p>
                              Listen on
                              <span>Google Podcasts</span>
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://open.spotify.com/show/1bFew0EsLhxbfPjswN8syn"
                        target="_blank"
                      >
                        <figure>
                          <img
                            loading="lazy"
                            src={spotifyPodcast}
                            className="channel-branding icon"
                            alt=""
                          />
                          <figcaption>
                            <p>
                              Listen on
                              <span>Spotify</span>
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/channel/UC-W601M2PO8qJhwgnlm66Vg"
                        target="_blank"
                      >
                        <figure>
                          <img
                            loading="lazy"
                            src={youTubePodcast}
                            className="channel-branding icon"
                            alt=""
                          />
                          <figcaption>
                            <p>
                              Watch us on
                              <span>YouTube</span>
                            </p>
                          </figcaption>
                        </figure>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="grad_two" className="grad type-2 small gr-box1"></div>
              <div id="grad_one" className="grad type-2 medium gr-box1"></div>
            </div>
          </div>
        </section>
        {podcastList.length > 0 && (
          <section className="new-releases-wrapper blur-overlay">
            <div className="div-wrap">
              <div className="full-container">
                <div className="slider-conversation-wrapper image-slider-wrap">
                  <Slider
                    className="conversation_slider"
                    {...newReleaseSettings}
                    ref={(newRelease) => setNewRelease(newRelease)}
                  >
                    {podcastList.slice(0, 3).map((podcast, i) => {
                      // let date = new Date(podcast.date);

                      return (
                        <div key={i}>
                          <a
                            href={"/podcast/" + podcast.slug}
                            data-cursor-img={exploreButton}
                          >
                            <div className="conversation_card">
                              <figure>
                                <figcaption>
                                  <h6 class="fs-20">
                                    <span class="tags_">NEW RELEASE</span>
                                    <small class="published-date">
                                      {podcast.published_date}
                                    </small>
                                  </h6>
                                  <h4>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: podcast.title.rendered,
                                      }}
                                    ></span>
                                    <small class="designation">
                                      {podcast.acf.special_guest} with{" "}
                                      {podcast.acf.hosted_by}
                                    </small>
                                  </h4>
                                </figcaption>
                                <img
                                  loading="lazy"
                                  src={
                                    podcast._embedded["wp:featuredmedia"][0]
                                      .source_url
                                  }
                                  className="conversation-banner"
                                  alt=""
                                />
                              </figure>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                  </Slider>
                  <div
                    className="image-slider-overlay-bttn slider-half left-slider-bttn"
                    data-cursor-img={leftSliderArrow}
                    onClick={nrsliderPrev}
                  ></div>
                  <div
                    className="image-slider-overlay-bttn slider-half right-slider-bttn"
                    data-cursor-img={rightSliderArrow}
                    onClick={nrsliderNext}
                  ></div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="podcast-brief-content blur-overlay">
          <div className="div-wrap">
            <div className="container">
              <div
                id="grad_three"
                className="grad mesh-gradient small gr-box1"
              ></div>
              <p className="left_container brief-content">
                Our podcast focuses on design & entrepreneurship, serving up
                inspiring conversations about what goes behind creating the
                world's greatest products and businesses, the principles and
                culture of design, creativity, technology and leadership.
                Witness the most powerful voices of industry get into an
                actionable conversation with Divanshu, Co-founder, Onething.
              </p>
            </div>
          </div>
        </section>
        <section className="in-conversation-wrap blur-overlay">
          <div className="div-wrap">
            <div className="buttons-headings container">
              <h3 className="section-heading">Most heard episodes</h3>
              <div className="buttons-wrapper">
                <div
                  className="image-slider-overlay-bttn bttn-div"
                  onClick={sliderPrev}
                >
                  <img
                    loading="lazy"
                    src={arrowVector}
                    className="icon icon-right"
                    alt=""
                  />
                </div>
                <div
                  className="image-slider-overlay-bttn bttn-div"
                  onClick={sliderNext}
                >
                  <img
                    loading="lazy"
                    src={arrowVector}
                    className="icon icon-left"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="left_container">
              <div className="slider-conversation-wrapper">
                <Slider
                  className="conversation_slider"
                  {...settings}
                  ref={(conversationSlider) =>
                    setConversationSlider(conversationSlider)
                  }
                >
                  <div>
                    <div className="conversation_card">
                      <a href="/podcast/3-mistakes-we-made-from-the-entrepreneurs-guidebook/">
                        <figure>
                          <figcaption>
                            <h6 class="fs-20">
                              Manik Arora
                              <small class="designation">
                                Co-Founder &amp; Design Director
                              </small>
                            </h6>
                            <h5>
                              <small className="gradient-text">
                                3 Mistakes We Made – From the Entrepreneurs
                                Guidebook
                              </small>
                              <img
                                loading="lazy"
                                src={podcastQoute}
                                className="channel-branding icon"
                                alt=""
                              />
                              In a business, you have to trust others, let them
                              make mistakes, let them fall, because we're there
                              for them.
                            </h5>
                            <a class="bttn bttn-secondary">
                              <img
                                loading="lazy"
                                src={podcastPlayWhite}
                                className="play-icon icon"
                                alt=""
                              />
                              <span>Listen Now</span>
                            </a>
                          </figcaption>
                          <img
                            loading="lazy"
                            src={mhepodcast1}
                            className="conversation-banner"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="conversation_card">
                      <a href="/podcast/global-design-deep-dive-exploring-modern-design-with-lollypop/">
                        <figure>
                          <figcaption>
                            <h6 class="fs-20">
                              Anil Reddy
                              <small class="designation">
                                Founder &amp; Global Design Director | Lollypop
                                Design Studio
                              </small>
                            </h6>
                            <h5>
                              <small className="gradient-text">
                                Global Design Deep-Dive: Exploring Modern
                                Design, with Lollypop
                              </small>
                              <img
                                loading="lazy"
                                src={podcastQoute}
                                className="channel-branding icon"
                                alt=""
                              />
                              It feels like India has become a design
                              destination now.
                            </h5>
                            <a class="bttn bttn-secondary">
                              <img
                                loading="lazy"
                                src={podcastPlayWhite}
                                className="play-icon icon"
                                alt=""
                              />
                              <span>Listen Now</span>
                            </a>
                          </figcaption>
                          <img
                            loading="lazy"
                            src={mhepodcast2}
                            className="conversation-banner"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="conversation_card">
                      <a href="/podcast/exploring-clarity-chaos-in-a-creative-agency/">
                        <figure>
                          <figcaption>
                            <h6 class="fs-20">
                              Kunel and Sayantan
                              <small class="designation">
                                Founder and Senior Partner | Animal
                              </small>
                            </h6>
                            <h5>
                              <small className="gradient-text">
                                Exploring Clarity & Chaos In A Creative Agency
                              </small>
                              <img
                                loading="lazy"
                                src={podcastQoute}
                                className="channel-branding icon"
                                alt=""
                              />
                              The work that goes out essentially gets us the
                              kind of work that we want. It's almost like a
                              circular flow of things.
                            </h5>
                            <a class="bttn bttn-secondary">
                              <img
                                loading="lazy"
                                src={podcastPlayWhite}
                                className="play-icon icon"
                                alt=""
                              />
                              <span>Listen Now</span>
                            </a>
                          </figcaption>
                          <img
                            loading="lazy"
                            src={mhepodcast3}
                            className="conversation-banner"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                </Slider>
                <div
                  className="image-slider-overlay-bttn slider-half left-slider-bttn"
                  data-cursor-img={leftSliderArrow}
                  onClick={sliderPrev}
                ></div>
                <div
                  className="image-slider-overlay-bttn slider-half right-slider-bttn"
                  data-cursor-img={rightSliderArrow}
                  onClick={sliderNext}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured-podcast-wrap blur-overlay">
          <div className="div-wrap">
            <div className="container">
              <div className="content-container">
                <div
                  id="grad_five"
                  className="grad mesh-gradient medium gr-box1"
                ></div>
                <div
                  id="grad_four"
                  className="grad mesh-gradient small gr-box1"
                ></div>
                <p className="left_container right_container brief-content">
                  Every episode unfolds a new world of discussions. From
                  interesting and alternate takes on UX practices to
                  conversations about mental health in work spaces, this podcast
                  touches many less talked about essentials.
                </p>
              </div>
              <div className="youtube-wrapper">
                <h3>
                  E-Commerce for the Next Billion
                  <small>
                    <p>Bharath Ram with Divanshu Thakral</p>
                  </small>
                </h3>
                <div className="fromyouTube">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/AiVPT8KjOM4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>
                    <a href="https://www.youtube.com/channel/UC-W601M2PO8qJhwgnlm66Vg">
                      <span>Follow us on</span>
                      <img
                        loading="lazy"
                        src={youTubeLogo}
                        className="channel-branding icon"
                        alt=""
                      />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="podcast-main-listing-wrap blur-overlay">
          <div className="div-wrap">
            <div className="container">
              <div className="heading-wrapper">
                <div id="grad_six" className="grad type-2 small gr-box1"></div>
                <h2 className="right_container section-heading">
                  Hear the method to madness
                </h2>
                <div
                  id="grad_seven"
                  className="grad type-2 medium gr-box1"
                ></div>
              </div>
              <Tabs
                defaultActiveKey="all"
                className="podcast-cat-tabs tabs-main"
              >
                <Tab eventKey="all" title="All">
                  <div className="podcast-card-listing-wrapper">
                    {podcastList.map((podcast, i) => {
                      return (
                        <div className="podcast-card" key={i}>
                          <a href={"/podcast/" + podcast.slug}>
                            <figure>
                              <img
                                loading="lazy"
                                src={
                                  podcast._embedded["wp:featuredmedia"][0]
                                    .source_url
                                }
                                className="podcast-banner"
                                alt=""
                              />
                              <figcaption>
                                <p class="episode-number tags_">
                                  {podcast.acf.episode_number}
                                </p>
                                <p class="published-date">
                                  {podcast.published_date}
                                </p>
                                <h5 class="title-podcast">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: podcast.title.rendered,
                                    }}
                                  ></span>
                                </h5>
                                <p class="author-name">
                                  {podcast.acf.special_guest} with{" "}
                                  {podcast.acf.hosted_by}
                                </p>
                                <a class="bttn bttn-secondary">
                                  <img
                                    loading="lazy"
                                    src={podcastPlay}
                                    className="play-icon icon"
                                    alt=""
                                  />
                                  <span>Listen Now</span>
                                </a>
                              </figcaption>
                            </figure>
                          </a>
                        </div>
                      );
                    })}
                  </div>
                  {podcastList.length < totalPodcastCount && (
                    <div class="pagination-wrap">
                      {!loading && (
                        <button
                          class="bttn bttn-secondary"
                          type="button"
                          onClick={handleFetchBlogs}
                        >
                          <span>View More</span>
                          <img
                            loading="lazy"
                            src={downArrow}
                            className="play-icon icon"
                            alt=""
                          />
                        </button>
                      )}
                      {loading && (
                        <button class="bttn bttn-secondary" disabled>
                          <span>Loading...</span>
                        </button>
                      )}
                    </div>
                  )}
                </Tab>
                <Tab eventKey="bfsi" title="BFSI">
                  <h1>All</h1>
                </Tab>
                <Tab eventKey="education" title="Education">
                  <h1>Design</h1>
                </Tab>
                <Tab eventKey="healthcare" title="Healthcare">
                  <h1>Business</h1>
                </Tab>
                <Tab eventKey="entertainment" title="Entertainment">
                  <h1>Culture</h1>
                </Tab>
              </Tabs>
            </div>
          </div>
        </section>
        {/* <InstagramFeed /> */}
        <div className="newsletter-imported">
          <Newsletter
            heading={"Because sometimes listening can make all the difference"}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    podcastState: state.podcasts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPodcasts: (pageNo) => dispatch(fetchPodcasts(pageNo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);
var settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.3,
  slidesToScroll: 1,
  centerMode: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
var newReleaseSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "200px",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
        centerPadding: "0",
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: false,
        centerPadding: "0",
      },
    },
  ],
};
