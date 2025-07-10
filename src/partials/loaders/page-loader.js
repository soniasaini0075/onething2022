import "./page-loader.scss";
import loader from "../../assets/img/loader_final.webm";
import React from 'react';
const PageLoader = () => {
  return (
    <>
      <div className="api--loader-wrap">
        <div className="api--loader">
          {/* <img loading="lazy" src={loader} alt="" /> */}
          <video autoPlay={true} muted={true} height={100} width={100} loop={true}>
            <source src={loader} />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default PageLoader;
