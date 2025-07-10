import "./preferredPodcast.scss";
import { fetchPodcastforBlog } from "../../redux/actions";
import { useEffect, useState } from "react";
import ctaArrow from "../../assets/img/global/grad-arrow.svg";
import { useLocation } from "react-router-dom";

const PreferredPodcast = ({ id }) => {
  const [data, setData] = useState();
  const location = useLocation();
  useEffect(() => {
    if (!data) {
      fetchPodcastforBlog(id)
        .then((podcastData) => {
          setData(podcastData);
        })
        .catch((error) => {
          console.error("Error fetching podcast data:", error);
        });
    }
  }, [id]);

  return (
    <>
      {data ? (
        <div className="podcast-large-cta">
          <a href={`/podcast/${data.slug}`}>
            <div class="latest-podcast">
              <span className="tag_ text-initial">Podcast</span>
              <p
              // className="fs-20"
              >
                {data?.yoast_head_json?.title ?? ""}
              </p>
              <a className="bttn bttn-secondary bttn-secondary-small bttn-secondary-white">
                Listen
                <img
                  loading="lazy"
                  src={ctaArrow}
                  className="icon-arrow icon"
                  alt=""
                />
              </a>
            </div>
          </a>
        </div>
      ) : location.pathname === "/blogs/dashboard-design-how-to-prototype/" ||
        location.pathname ===
          "/blogs/pagination-vs-infinite-scroll-which-is-better/" ||
        location.pathname === "/blogs/dashboard-design/" ? (
        <div className="podcast-large-cta">
          <a href={`/podcast/biking-in-the-ev-revolution`}>
            <div class="latest-podcast">
              <span className="tag_ text-initial">We Can Help</span>
              <p className="fs-20">Are you building a product?</p>
              <a
                className="bttn bttn-secondary bttn-secondary-small bttn-secondary-white"
                href="/contact"
              >
                Get in touch
                <img
                  loading="lazy"
                  src={ctaArrow}
                  className="icon-arrow icon"
                  alt=""
                />
              </a>
            </div>
          </a>
        </div>
      ) : (
        <div className="podcast-large-cta">
          <a href={`/podcast/biking-in-the-ev-revolution`}>
            <div class="latest-podcast">
              <span className="tag_ text-initial">Podcast</span>
              <p className="fs-20">Biking in the EV Resolution</p>
              <a className="bttn bttn-secondary bttn-secondary-small bttn-secondary-white">
                Listen
                <img
                  loading="lazy"
                  src={ctaArrow}
                  className="icon-arrow icon"
                  alt=""
                />
              </a>
            </div>
          </a>
        </div>
      )}
    </>
  );
};
export default PreferredPodcast;
