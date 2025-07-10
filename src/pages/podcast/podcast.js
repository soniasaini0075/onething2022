import "./podcast.scss";
import { useState, useEffect, useRef } from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";
import React from 'react';
import { connect } from "react-redux";
import { fetchPodcast } from "../../redux/actions";

import Newsletter from "../../partials/newsletter/newsletter";
// import InstagramFeed from "../../partials/instagram-feed/instagramFeed";

import arrowDown from "../../assets/img/podcast/down.svg";
import youTubeLogo from "../../assets/img/podcast/channel/youtube-full.svg";
import applePodcast from "../../assets/img/podcast/channel/ios-podcasts.svg";
import googlePodcast from "../../assets/img/podcast/channel/google-podcasts.svg";
import spotifyPodcast from "../../assets/img/podcast/channel/spotify-podcasts.svg";
import youTubePodcast from "../../assets/img/podcast/channel/yt-podcasts.svg";
// import podcast1 from "../../assets/img/podcast/podcast1.webp";
import podcastPlay from "../../assets/img/podcast/play.svg";
import PageLoader from "../../partials/loaders/page-loader";
import { addPageMetas, convertToWebPURL } from "../../utils/global_fun";
import { Helmet } from "react-helmet";

const Podcast = ({ podcastState, fetchPodcast }) => {
  const [showInfo, handleShowInfo] = useState(false);
  const [isTranscriptOpen, setTranscriptOpen] = useState(false);
  const [transcriptHeight, setTranscriptHeight] = useState(480);
  const { podcast, relatedPodcast, loading, loaded } = podcastState;
  // const { podcastList } = podcastListState;
  let { podcastSlug } = useParams();

  let transcriptBox = useRef();

  const handleTranscript = () => {
    if (!isTranscriptOpen) {
      setTranscriptHeight(transcriptBox.scrollHeight);
      // transcriptBox.style.height = transcriptBox.scrollHeight
    } else {
      setTranscriptHeight(480);
    }
    setTranscriptOpen(!isTranscriptOpen);
  };

  useEffect(() => {
    document.body.classList.add("podcast-single-page");
    fetchPodcast(podcastSlug);
    document.querySelector(".mf-cursor-media").style.width = "150px";
    document.querySelector(".mf-cursor-media").style.height = "150px";
    document.querySelector(".mf-cursor-media").style.margin = "-70px 0 0 -70px";
  }, []);
  // useEffect(()=>{
  //   const content=document.getElementById('html-content')
  //     if(content){
  //      const divwrap=content.getElementsByTagName('img')
  //   console.log(content,divwrap,"content")

  //     //  const videoElements=content.getElementsByTagName('video')

  //      for (const imgElements of divwrap) {
  //       imgElements.src = convertToWebPURL(imgElements.src)
  //     }
  //     }})

  useEffect(() => {
    if (podcast != null) {
      addPageMetas(
        podcast.yoast_head_json.title,
        podcast.yoast_head_json.description
      );
    }
  }, [podcast]);

  let location = useLocation();

  return (
    <>
      <Helmet>
        <title>Podcast</title>
        <link
          rel="preload dns-prefetch canonical"
          href={`https://www.onething.design${location?.pathname}`}
        ></link>
      </Helmet>
      {podcast == null && <PageLoader />}
      {podcast != null && (
        <div className="podcast-detail-page-wrapper page-wrapper">
          <section className="title-podcast-wrapper blur-overlay">
            <div className="div-wrap">
              <div className="container">
                <div className="heading-wrapper">
                  <div className="grad type-2 small gr-box1"></div>
                  <div className="breadcrumb-main">
                    <p className="breadcrum-details left_container">
                      <NavLink to="/" className="page-breadcrumb">
                        Home
                      </NavLink>
                      <span className="slashes">/</span>
                      <NavLink to="/podcast" className="page-breadcrumb">
                        Podcasts
                      </NavLink>
                      <span className="slashes">/</span>
                      <a
                        href="javascript:void(0)"
                        className="post-title-breadcrum"
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: podcast.title.rendered,
                          }}
                        ></span>
                      </a>
                    </p>
                  </div>
                  <h3 className="left_container">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: podcast.title.rendered,
                      }}
                    ></span>
                  </h3>
                  <p className="publish-details left_container">
                    <span className="episode-number">
                      {podcast.acf.episode_number}
                    </span>{" "}
                    -{" "}
                    <span className="episode-date">
                      {podcast.published_date}
                    </span>
                  </p>
                </div>
                <img
                  loading="lazy"
                  src={podcast.acf["listing-feature-image"].url}
                  className="podcast-banner"
                  alt=""
                />
                <div className="podcast-embbedd">
                  <iframe
                    src={podcast.acf.podcast_audio}
                    frameBorder="0"
                    allowFullScreen=""
                    controls
                    loading="lazy"
                    autoplay="0"
                  ></iframe>
                </div>
              </div>
              <div className="container">
                <div className="podcast--main">
                  <div className="podcast-content-main">
                    <div className="sidebar-podcast-details">
                      <div className="podcast-people-wrap">
                        <div className="podcast-guest naming-pods">
                          <p className="p-span">
                            Special Guest:
                            <span>{podcast.acf.special_guest}</span>
                          </p>
                        </div>
                        <div className="podcast-host naming-pods">
                          <p className="p-span">
                            Hosted by:
                            <span>{podcast.acf.hosted_by}</span>
                          </p>
                        </div>
                      </div>
                      <div className="podcast-sidebar-channel-listing">
                        <p className="p-span">Tune into:</p>
                        <ul>
                          <li>
                            <a
                              href="https://podcasts.apple.com/podcast/id1565301034"
                              target="_blank" rel="noreferrer"
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
                                    <span>Apple Podcasts</span>
                                  </p>
                                </figcaption>
                              </figure>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNzYxNDU5LnJzcw=="
                              target="_blank" rel="noreferrer"
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
                                    <span>Google Podcasts</span>
                                  </p>
                                </figcaption>
                              </figure>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://open.spotify.com/show/1bFew0EsLhxbfPjswN8syn"
                              target="_blank" rel="noreferrer"
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
                                    <span>Spotify</span>
                                  </p>
                                </figcaption>
                              </figure>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.youtube.com/channel/UC-W601M2PO8qJhwgnlm66Vg"
                              target="_blank" rel="noreferrer"
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
                                    <span>YouTube</span>
                                  </p>
                                </figcaption>
                              </figure>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* <div className="recommended-project-tab">
          <figure>
            <img loading="lazy"
            src={podcastSingleBanner}
            className="podcast-banner"
            alt=""
            />
            <figcaption>
              <p>
                View case study
                <span>
                  <img loading="lazy"
                  src={arrowDown}
                  className="down-icon icon"
                  alt=""
                  />
                </span>
              </p>
            </figcaption>
          </figure>
        </div> */}
                    </div>
                    <div className="single-podcast-content">
                      <div className="content-div">
                        <div
                          id="html-content"
                          className="synopsis"
                          dangerouslySetInnerHTML={{
                            __html: podcast.acf.synopsis,
                          }}
                        ></div>

                        <a
                          href="https://www.youtube.com/channel/UC-W601M2PO8qJhwgnlm66Vg"
                          target="_blank" rel="noreferrer"
                          className="watch-bttn"
                        >
                          <span>Now watch us on</span>
                          <img
                            loading="lazy"
                            src={youTubeLogo}
                            className="channel-branding icon"
                            alt=""
                          />
                        </a>
                        {/* <h4>Meet the speakers</h4>
          <div className="wp-cols">
            <div className="wp-col">
              <p className="bio">
                Allowing learners to learn from proven industry
                professionals, and practitioners.
              </p>
              <figure>
                <img loading="lazy"
                src={podcastSingleBanner}
                className="author-img icon"
                alt=""
                />
                <figcaption>
                  <p className="designation">
                    Venky Hariharan
                    <span>UX Lead</span>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="wp-col">
              <p className="bio">
                Allowing learners to learn from proven industry
                professionals, and practitioners.
              </p>
              <figure>
                <img loading="lazy"
                src={podcastSingleBanner}
                className="author-img icon"
                alt=""
                />
                <figcaption>
                  <p className="designation">
                    Venky Hariharan
                    <span>UX Lead</span>
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="wp-col">
              <p className="bio">
                Allowing learners to learn from proven industry
                professionals, and practitioners.
              </p>
              <figure>
                <img loading="lazy"
                src={podcastSingleBanner}
                className="author-img icon"
                alt=""
                />
                <figcaption>
                  <p className="designation">
                    Venky Hariharan
                    <span>UX Lead</span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div> */}
                        <div className="main-podcast-content">
                          {podcast.content.rendered != "" && (
                            <div
                              className="transcript"
                              dangerouslySetInnerHTML={{
                                __html: podcast.content.rendered,
                              }}
                              style={{ height: transcriptHeight + "px" }}
                              ref={(tr) => (transcriptBox = tr)}
                            ></div>
                          )}
                          {podcast.content.rendered != "" && (
                            <button
                              className="expanding-transcript-bttn"
                              onClick={handleTranscript}
                            >
                              {!isTranscriptOpen && (
                                <span>Expand full transcript</span>
                              )}
                              {isTranscriptOpen && <span>Show Less</span>}{" "}
                              <img
                                loading="lazy"
                                src={arrowDown}
                                className={
                                  "down-icon icon" +
                                  (isTranscriptOpen ? " icon-rotate" : "")
                                }
                                alt=""
                              />
                            </button>
                          )}
                        </div>
                        {podcast.acf.video_podcast.rendered != "" && (
                          <div className="podcast-video-wrapper">
                            <div class="wrapper">
                              <div class="video-grid">
                                <div class="frames">
                                  {podcast.acf.video_podcast.rendered !==
                                    "" && (
                                    <iframe
                                      src={podcast.acf.video_podcast}
                                      modestbranding="1"
                                      showinfo="0"
                                    ></iframe>
                                  )}
                                  {podcast.acf.video_podcast_2.rendered !==
                                    "" && (
                                    <iframe
                                      src={podcast.acf.video_podcast_2}
                                    ></iframe>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {relatedPodcast.length > 0 && (
            <section className="recommendation-podcast-wrapper blur-overlay">
              <div className="div-wrap">
                <div className="container">
                  <div className="heading-wrapper">
                    <h2 className="right_container section-heading">
                      Recommendations
                    </h2>
                    <div className="grad type-2 small gr-box1"></div>
                  </div>
                  <div className="podcast-card-listing-wrapper">
                    {relatedPodcast.slice(0, 2).map((podcastItem, i) => {
                      return (
                        <div className="podcast-card" key={i}>
                          <a href={"/podcast/" + podcastItem.slug}>
                            <figure>
                              <img
                                loading="lazy"
                                src={
                                  podcastItem._embedded["wp:featuredmedia"][0]
                                    .source_url
                                }
                                className="podcast-banner"
                                alt=""
                              />
                              <figcaption>
                                <p className="episode-number tags_">
                                  {podcastItem.acf.episode_number}
                                </p>
                                <p className="published-date">
                                  {podcastItem.published_date}
                                </p>
                                <h5 className="title-podcast">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: podcastItem.title.rendered,
                                    }}
                                  ></span>
                                </h5>
                                <p className="author-name">
                                  {podcastItem.acf.speaker_name}
                                </p>
                                <a className="bttn bttn-secondary">
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
                </div>
              </div>
            </section>
          )}
          {/* <InstagramFeed /> */}
          <div className="newsletter-imported">
            <Newsletter
              heading={
                "Because sometimes listening can make all the difference"
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    podcastState: state.podcast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPodcast: (podcastSlug) => dispatch(fetchPodcast(podcastSlug)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Podcast);
