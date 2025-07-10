import "./curated-projects-large.scss";

import Newsletter from "../newsletter/newsletter";

import whiteArrow from "../../assets/img/global/white-arrow.svg";
import playIcon from "../../assets/img/global/play.svg";
import playDarkIcon from "../../assets/img/podcast/play-dark.svg";
import submitArrow from "../../assets/img/global/red-arrow.svg";
import podcastBackgroundOne from "../../assets/img/podcast/large-podcast-bg1.webp";
import podcastBackgroundTwo from "../../assets/img/podcast/large-podcast-bg2.webp";
import podcastBackgroundThree from "../../assets/img/podcast/large-podcast-bg3.webp";
import podcastBackgroundFour from "../../assets/img/podcast/large-podcast-bg4.webp";
import podcastBackgroundFive from "../../assets/img/podcast/large-podcast-bg5.webp";
import podcastImage from "../../assets/img/podcast/large-podcast-img1.webp";
import podcastImage4 from "../../assets/img/podcast/large-podcast-img4.webp";
import podcastImage5 from "../../assets/img/podcast/large-podcast-img5r.webp";
import tinyPot from "../../assets/img/podcast/tiny-2-pod.webp";
import flipkartLogo from "../../assets/img/podcast/flipkart.webp";
import onethingLogo from "../../assets/img/podcast/onething-s-logo.webp";
import schbangLogo from "../../assets/img/podcast/schbang-logo.webp";

const CuratedProjectsLarge = ({ title }) => {
  return (
    <>
      <div className="curated-large-wrapper">
        <section className="curated-content d-md-block d-none">
          <div className="container">
            <h3 className="section-heading home-heading">{title}</h3>
            <div className="curated-cards">
              <div
                className="card bg-violet custom-card podcast_lg_cards position-relative"
                style={{ backgroundImage: `url(${podcastBackgroundOne})` }}
              >
                <figure>
                  <img loading="lazy" src={podcastImage} className="podcast-img2" alt="" />
                </figure>
                <a
                  className="z-indx"
                  href="/podcast/e-commerce-for-the-next-billion-with-bharath-ram-flipkart/"
                >
                  <div className="card-body">
                    <div className="d-flex jc-sb">
                      <span className="badge trans-badge">Latest Podcast</span>
                      <img loading="lazy"
                        src={flipkartLogo}
                     
                        className="icon icon-share"
                        alt=""
                      />
                    </div>
                    <div className="podcast_mx-wdth large-ban">
                      <div className="text">
                        <span className="txt-an-grad">E-Commerce</span> for the{" "}
                        <br />
                        Next Billion
                      </div>
                      <div className="in-flx">
                        <a>
                          <img loading="lazy"
                            src={playDarkIcon}
                            className="icon icon-share"
                            alt=""
                            height="auto"
                            width="100%"
                          />
                        </a>
                        <p className="vd_ply">
                          <b>Bharath Ram</b> (SVP Growth, Flipkart) <b>&amp;</b>{" "}
                          <br />
                          <b>Divanshu</b> (Co-Founder, Onething)
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card bg-red custom-card podcast_sm_cards position-relative">
                <a href="https://www.onething.design/blogs/pagination-vs-infinite-scroll-which-is-better/">
                  <div className="card-body">
                    <div className="d-flex">
                      <span className="badge trans-badge">Blogs</span>
                    </div>
                    <div className="podcast_mx-wdth">
                      <div className="text">Pagination vs Infinite Scroll</div>
                      <div className="d-flex justify-content-between">
                        <a className="bttn bttn-secondary bttn-secondary-white">
                          <span>Read More</span>
                          <img loading="lazy"
                            src={whiteArrow}
                            className="icon icon-share"
                            alt=""
                          />
                        </a>
                        <span className="read-minutes">9 mins read</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card bg-sky-blue custom-card podcast_sm_cards position-relative">
                <a href="/static/media/EdTech-Whitepaper.a3c7e9c7b917c9584743.pdf">
                  <div className="card-body">
                    <div className="d-flex">
                      <span className="badge trans-badge">Whitepaper</span>
                    </div>
                    <div className="podcast_mx-wdth">
                      <div className="text" style={{ width: "90%" }}>
                        Designing for Edtech
                        <br /> Platforms
                      </div>
                      <div className="d-flex justify-content-between">
                        <a className="bttn bttn-secondary bttn-secondary-white">
                          <span>Download</span>
                          <img loading="lazy"
                            src={whiteArrow}
                            className="icon icon-share"
                            alt=""
                          />
                        </a>
                        <span className="read-minutes">9 mins read</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="card bg-violet custom-card podcast_sm_cards position-relative"
                style={{ backgroundImage: `url(${podcastBackgroundFive})` }}
              >
                <figure>
                  <img loading="lazy" src={podcastImage5} className="podcast-img2" alt="" />
                </figure>
                <a
                  href="/podcast/future-of-brands-in-web-3-0-with-akshay-schbang%EF%BF%BC/"
                  className="z-indx"
                >
                  <div className="card-body">
                    <div className="d-flex jc-sb">
                      <span className="badge trans-badge">Podcast</span>
                      <img loading="lazy"
                        src={schbangLogo}
                       
                        className="icon icon-share"
                        alt=""
                      />
                    </div>
                    <div className="podcast_mx-wdth fs-26">
                      <div className="text">
                        Future of <br />
                        Brands <br />
                        in <span className="txt-entUX-grad">Web 3.0</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <a className="bttn bttn-secondary bttn-secondary-white">
                          <span>Explore</span>
                          <img loading="lazy"
                            src={whiteArrow}
                            className="icon icon-share"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              {/*<div
                className="card bg-violet custom-card podcast_sm_cards position-relative"
                style={{ backgroundImage: `url(${podcastBackgroundFour})` }}
              >
                <figure>
                  <img loading="lazy" src={podcastImage4} className="podcast-img2" alt="" />
                </figure>
                <a href="/podcast/decoding-the-direct-to-consumer-landscape-with-arjun-vaidya-dr-vaidyas/" className="z-indx">
                  <div className="card-body">
                    <div className="d-flex jc-sb">
                      <span className="badge trans-badge">Podcast</span>
                      <img loading="lazy" src={tinyPot} className="icon icon-share" alt="" />
                    </div>
                    <div className="podcast_mx-wdth fs-26">
                      <h5>
                        Decoding the <br />{" "}
                        <span className="txt-DtC-grad">Direct to Consumer</span>{" "}
                        Landscape
                      </h5>
                      <div className="d-flex justify-content-between">
                        <a
                          className="bttn bttn-secondary bttn-secondary-white"
                        >
                          <span>Explore</span>
                          <img loading="lazy"
                            src={whiteArrow}
                            className="icon icon-share"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>*/}

              <div className="card custom-card podcast_email bg-white">
                {/*<form action="">
                    <div className="form-group">
                        <div className="position-relative input-wrapper">
                            <input type="email" className="form-control" id="subscribeEmail" placeholder="Enter your email address" />
                            <button type="submit" className="btn arrow_bttn">
                                <span><img loading="lazy" src={submitArrow} className="icon icon-submit" alt="" /></span>
                            </button>
                        </div>
                    </div>
                </form>*/}
                <Newsletter heading={"Subscribe to our newsletter"} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CuratedProjectsLarge;
