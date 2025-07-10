import "./instagram-feed.scss";

import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";

function Instagramfeed() {
  return (
    <>
      <div className="instagram-feed-wrapper">
        <section className="instagram-feed-wrapper">
          <div className="div-wrap">
            <InstagramFeed
              token="IGQWRQVDJXd2dUZAXdjVXR3VG1GMVkxUzllUTRDZAmJ4T1h5OVJfdFdZALUxCVmtpalNWTXhYVm0yV04xZA1pFTVppUGViaXVtYlBsU3pfbzA0anpvRVNDVUJXV0c0ajI0X1JyYTZAzUDE5ZAk02RXA4UWhLUll6bjNNeVkZD"
              counter="5"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Instagramfeed;
