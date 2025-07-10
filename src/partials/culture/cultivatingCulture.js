import { useState } from "react";
import Slider from "react-slick";

import "./cultivating-culture.scss";

import cultivatingCultureSmall1 from "../../assets/img/culture/1-small.webp";
import cultivatingCultureSmall2 from "../../assets/img/culture/2-small.webp";
import cultivatingCultureSmall3 from "../../assets/img/culture/3-small.webp";
import cultivatingCultureBig1 from "../../assets/img/culture/1-big.webp";
import cultivatingCultureBig2 from "../../assets/img/culture/2-big.webp";
import cultivatingCultureBig3 from "../../assets/img/culture/3-big.webp";

import { gsap } from "gsap";

import leftSliderArrow from "../../assets/img/global/culture-hover-left.svg";
import rightSliderArrow from "../../assets/img/global/culture-hover-right.svg";

const CultivatingCulture = () => {
    const [navLeft, setNavLeft] = useState();
    const [navRight, setNavRight] = useState();

    const sliderPrev = () => {
        navRight.slickPrev();
    }

    const sliderNext = () => {
        navRight.slickNext();
    }

    const leftImageSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        cssEase: "ease-out"
    };
    const rightImageSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        cssEase: "ease-out",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                arrow: false,
                dots: true,
                autoplay: true,
                infinite: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrow: false,
                dots: true,
                autoplay: true,
                infinite: true,
              },
            },
          ],
    };
   
    return (
    <>
    <div className="cultivate--wrapper--main">
        <section className="cultivating-culture-wrapper blur-overlay">
            <div className="container">
                <div className="row no-gutter culture-intro">
                    <div className="col-md-4">
                        <div id="thirdLast" className="grad type-2-reverse large gr-box"></div>
                    </div>
                    <div className="col-md-8">
                        <div className="culture-heading">
                           <h2 className="section-heading">Cultivating culture</h2>
                           <p className="culture-brief">We’re much more than a UI/UX design studio. It’s our collective spirit, creativity, and strive for perfection which define us. From cultivating bonds which stretch far beyond the workplace, to sustainably giving back to the community, we’re fostering something far greater than the sum of our parts.</p>
                       </div>
                   </div>
               </div>
           </div>
           <div className="left_container">
               <div className="no-gutter row slider-row">
                <div className="col-md-4">
                    <div className="image-slider-wrap left-image-slider-wrap">
                        <Slider
                        className="left-image-slider our-culture-slider"
                        {...leftImageSlider}
                        asNavFor={navRight}
                        ref={(sliderLeft) => setNavLeft(sliderLeft)}>
                        <div>
                            <div className="reveal">
                                <figure className="slide-cell slick-culture-left reveal-image reveal-image-left">
                                    <img loading="lazy" src={cultivatingCultureSmall1} className="Culture : Onething" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div className="reveal">
                                <figure className="slide-cell slick-culture-left reveal-image reveal-image-left">
                                    <img loading="lazy" src={cultivatingCultureSmall2} className="Culture : Onething" alt="" />
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div className="reveal">
                                <figure className="slide-cell slick-culture-left reveal-image reveal-image-left">
                                    <img loading="lazy" src={cultivatingCultureSmall3} className="Culture : Onething" alt="" />
                                </figure>
                            </div>
                        </div>
                    </Slider>
                    <div className="image-slider-overlay-bttn left-slider-bttn" data-cursor-img={leftSliderArrow} onClick={sliderPrev}></div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="image-slider-wrap right-image-slider-wrap">
                    <Slider
                    className="right-image-slider our-culture-slider"
                    {...rightImageSlider}
                    asNavFor={navLeft}
                    ref={(sliderRight) => setNavRight(sliderRight)}>
                    <div>
                        <div className="reveal">
                            <figure className="slide-cell slick-culture-right reveal-image reveal-image-left">
                                <img loading="lazy" src={cultivatingCultureBig1} className="Culture : Onething" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="reveal">
                            <figure className="slide-cell slick-culture-right reveal-image reveal-image-left">
                                <img loading="lazy" src={cultivatingCultureBig2} className="Culture : Onething" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div>
                        <div className="reveal">
                            <figure className="slide-cell slick-culture-right reveal-image reveal-image-left">
                                <img loading="lazy" src={cultivatingCultureBig3} className="Culture : Onething" alt="" />
                            </figure>
                        </div>
                    </div>
                </Slider>
                <div className="image-slider-overlay-bttn right-slider-bttn" data-cursor-img={rightSliderArrow} onClick={sliderNext}></div>
            </div>
        </div>
    </div>
</div>
</section>
</div>
</>
);
}

export default CultivatingCulture;