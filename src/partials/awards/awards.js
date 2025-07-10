import "./awards.scss";

import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import award1 from "../../assets/img/about/awards/award1.webp";
import award2 from "../../assets/img/about/awards/award2.webp";
import award3 from "../../assets/img/about/awards/award3.webp";
import award4 from "../../assets/img/about/awards/award4.webp";
import award5 from "../../assets/img/about/awards/award5.svg";
import landingAward1 from "../../assets/img/about/awards/landingAwards1.png";
import landingAward2 from "../../assets/img/about/awards/landingAwards2.png";
import landingAward3 from "../../assets/img/about/awards/landingAward3.png";
import landingAward4 from "../../assets/img/about/awards/landingAwards4.png";

import rightSliderArrow from "../../assets/img/global/culture-hover-right.svg";
import leftSliderArrow from "../../assets/img/global/culture-hover-left.svg";

function Awards({title}) {
    const [awardSlider, setAwardSlider] = useState();
    const sliderNext = () => {
        awardSlider.slickNext();
    };
    const sliderPrev = () => {
        awardSlider.slickPrev();
    };

    return (
    <>
    <div className="awards_slider--main">
        <section className="impact-section awards_slider">
            <div className="left_container">
                <h4 className="section-heading home-heading">Bringing glory home</h4>
                <div className="image-slider-wrap">
                    {title==='landing'?
                    <Slider
                    className="impact_slider extra-slide-slider-12"
                    {...landingSettings}
                    ref={(awardSlider) => setAwardSlider(awardSlider)}
                    >
                    <div>
                        <div className="impact_card award_img1">
                            <h6>DNA Paris Design Awards</h6>
                            <p>Winners in UI Design category</p>
                            <img loading="lazy"
                            src={landingAward1}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="impact_card award_img1">
                            <h6>Kyoorius Award Winner 2021</h6>
                            <p>Kyoorius Baby Blue Elephant</p>
                            <img loading="lazy"
                            src={landingAward2}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="impact_card award_img2">
                            <h6>Top UX Agencies India 2021</h6>
                            <p>Rating on clutch 4.8/5</p>
                            <img loading="lazy"
                            src={landingAward3}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="impact_card award_img3">
                            <h6>India’s Best Design Awards</h6>
                            <p>Best Design Studio 2020 & 2021</p>
                            <img loading="lazy"
                            src={landingAward4}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div>
                    
                </Slider>:
                  title === 'contact' ? (
                    <Slider
                    className="impact_slider extra-slide-slider-12"
                    {...settings}
                    ref={(awardSlider) => setAwardSlider(awardSlider)}
                    >
                    <div>
                        <div className="impact_card award_img1">
                            <h6>DNA Paris Design Awards</h6>
                            <p>Winners in UI Design category</p>
                            <img loading="lazy"
                            src={award5}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="impact_card award_img1">
                            <h6>Kyoorius Award Winner 2023</h6>
                            <p>Kyoorius Baby Blue Elephant</p>
                            <img loading="lazy"
                            src={award1}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div>
                    {/* <div>
                        <div className="impact_card award_img2">
                            <h6>Top UX Agencies India 2021</h6>
                            <p>Rating on clutch 4.8/5</p>
                            <img loading="lazy"
                            src={award2}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div> */}
                    {/* <div>
                        <div className="impact_card award_img3">
                            <h6>India’s Best Design Awards</h6>
                            <p>Best Design Studio 2020 & 2021</p>
                            <img loading="lazy"
                            src={award3}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div> */}
                    {/* <div>
                        <div className="impact_card award_img4">
                            <h6>Silicon India</h6>
                            <p>Company of the year 2020</p>
                            <img loading="lazy"
                            src={award4}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    </div> */}
                </Slider>
                  ) : <Slider
                    className="impact_slider home-track extra-slide-slider-12"
                    {...settings}
                    ref={(awardSlider) => setAwardSlider(awardSlider)}
                    >
                    {/* <div> */}
                        <div className="impact_card home-award award_img1">
                            <h6>sDNA Paris Design Awards</h6>
                            <p>Winners in UI Design category</p>
                            <img loading="lazy"
                            src={award5}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    {/* </div> */}
                    {/* <div> */}
                        <div className="impact_card home-award award_img1">
                            <h6>Kyoorius Award Winner 2023</h6>
                            <p>Kyoorius Baby Blue Elephant</p>
                            <img loading="lazy"
                            src={award1}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    {/* </div> */}
                    {/* <div> */}
                        <div className="impact_card home-award award_img2">
                            <h6>Top UX Agencies India 2021</h6>
                            <p>Rating on clutch 4.8/5</p>
                            <img loading="lazy"
                            src={award2}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    {/* </div> */}
                    {/* <div> */}
                        <div className="impact_card home-award award_img3">
                            <h6>India’s Best Design Awards</h6>
                            <p>Best Design Studio 2020 & 2021</p>
                            <img loading="lazy"
                            src={award3}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    {/* </div> */}
                    {/* <div> */}
                        <div className="impact_card home-award award_img4">
                            <h6>Silicon India</h6>
                            <p>Company of the year 2020</p>
                            <img loading="lazy"
                            src={award4}
                            className="img-fluid award-img"
                            alt="Awards"
                            />
                        </div>
                    {/* </div> */}
                </Slider>}
                <div className="image-slider-overlay-bttn slider-half left-slider-bttn" data-cursor-img={leftSliderArrow} onClick={sliderPrev}
                ></div>
                <div className="image-slider-overlay-bttn slider-half right-slider-bttn" data-cursor-img={rightSliderArrow} onClick={sliderNext}
                ></div>
            </div>
        </div>
    </section>
</div>
</>
);
}

export default Awards;
var landingSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true, 
  autoplaySpeed: 3000, 
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
        slidesToShow: 2,
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
    slidesToShow: 2,
    slidesToScroll: 2,
   
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
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };