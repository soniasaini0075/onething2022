import "./testimonials.scss";

import { useState } from "react";
import Slider from "react-slick";

import testimonialsImageOne from "../../assets/img/global/testimonial-one.webp";
import testimonialsImageTwo from "../../assets/img/global/testimonial-two.webp";
import testimonialsImageThree from "../../assets/img/global/testimonial-three.webp";
import rightArrow from "../../assets/img/svg/right-arrow.svg";
import leftArrow from "../../assets/img/svg/left-arrow.svg";

function Testimonials() {
    const [navLeft, setNavLeft] = useState();
    const [navRight, setNavRight] = useState();

    const sliderPrev = () => {
        navRight.slickPrev();
    }

    const sliderNext = () => {
        navRight.slickNext();
    }

    return (
    <>
    <div className="testimonials-section-wrapper">
        <section className="testimonials-section">
            <div className="container">
                <div className="row m-0">
                    <div className="col-md-4">
                        <Slider className="testimonials-img-slider" {...settings} asNavFor={navRight} ref={(sliderLeft) => setNavLeft(sliderLeft)}>
                        <div>
                                <figure>
                                    <img loading="lazy" src={testimonialsImageTwo} className="img-fluid" alt="Testimonial Onething" />
                                </figure>
                            </div>
                            
                            
                            <div>
                                <figure>
                                    <img loading="lazy" src={testimonialsImageThree} className="img-fluid" alt="Testimonial Onething" />
                                </figure>
                            </div>
                            <div>
                                <figure>
                                    <img loading="lazy" src={testimonialsImageOne} className="img-fluid" alt="Testimonial Onething" />
                                </figure>
                            </div>
                        </Slider>
                    </div>
                    <div className="col-md-8">
                        <Slider className="testimonials-text-slider" {...testimonialsTest} asNavFor={navLeft} ref={(sliderRight) => setNavRight(sliderRight)}>
                        <div>
                                <p>
                                The team was easy to communicate to and understood our brief well. Subsequently, our Project Lead was effective in communicating / maintaining the project timelines, while we also connected regularly to discuss the progress/updates.
                                </p>
                                <p className="fs-20 testifier-details">
                                    Aabir Chatterjee, <br /><span>Product Manager, Coca-Cola Company</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                Onething’s understanding of customer experience at various touch points makes it easier for a large scale brand like TVS to envision them as a long term design partner.
                                </p>
                                <p className="fs-20 testifier-details">
                                Saurabh Khullar, <br /><span>Head CX, Digital & AI , TVS Motor Company</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                Effective communication was maintained throughout and post the project.  Onething team constantly focused on expanding our horizon of curating  a thought-provoking experience. 
                                </p>
                                <p className="fs-20 testifier-details">
                                Pratham Mittal, <br /><span>Founder at Masters’ Union</span>
                                </p>
                            </div>
                        </Slider>
                        <ul className="list-unstyled d-flex custom_arrows">
                            <li className="prev" onClick={sliderPrev}>
                                <img loading="lazy" src={leftArrow} className="img-fluid" alt="Left Arrow" />
                            </li>
                            <li className="next" onClick={sliderNext}>
                                <img loading="lazy" src={rightArrow} className="img-fluid" alt="Right Arrow" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
    );
}

export default Testimonials;

var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

var testimonialsTest = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

