import "./newsletter.scss";
import React from 'react';
import { useState, useRef } from "react";

import { connect } from "react-redux";
import { sendSubsForm } from "../../redux/actions";

import { validateEmail } from "../../utils/validate";

import ctaArrow from "../../assets/img/global/grad-arrow.svg";
import submitArrow from "../../assets/img/global/red-arrow.svg";

const Newsletter = ({ subsFormState, sendSubsForm, heading }) => {
  const [email, setEmail] = useState("");
  const { subsLoaded, subsLoading, msg_status } = subsFormState;
  const [isEmailEmptyError, setEmailEmptyError] = useState(false);
  const [isEmailValidError, setEmailValidError] = useState(false);

  // window.addEventListener('scroll', function(){
  //   var isInViewport = function (elem) {
  //     var bounding = elem?.getBoundingClientRect();
  //     return (
  //       bounding?.top >= 0 &&
  //       bounding?.left >= 0 &&
  //       bounding?.bottom <=
  //       (window?.innerHeight || document?.documentElement?.clientHeight) &&
  //       bounding?.right <=
  //       (window?.innerWidth || document?.documentElement?.clientWidth)
  //       );
  //     };

  //     let newsletter_grad_one = document?.getElementById("newsletter_grad_one");
  //     let newsletter_grad_two = document?.getElementById("newsletter_grad_two");

  //     if (isInViewport(newsletter_grad_one)) {
  //       newsletter_grad_one?.classList.replace("mesh-gradient", "type-3");
  //     } else {
  //       newsletter_grad_one?.classList.replace("type-3", "mesh-gradient");
  //     }
  //     if (isInViewport(newsletter_grad_two)) {
  //       newsletter_grad_two?.classList.replace("type-2", "type-3");
  //     } else {
  //       newsletter_grad_two?.classList.replace("type-3", "type-2");
  //     }
  // })

  let emailControl = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setEmailEmptyError(false);
    setEmailValidError(false);

    if (email == "") {
      setEmailEmptyError(true);
      emailControl.focus();
      return false;
    }

    if (!validateEmail(email)) {
      setEmailValidError(true);
      emailControl.focus();
      return false;
    }

    let formData = new FormData();
    formData.append("subscribe-email", email);

    sendSubsForm(formData);
    emailControl.reset();
  };

  

  return (
    <>
      <div className="newsletter-wrapper">
        <section className="newsletter-main">
          <div className="container">
            <div className="content-grid position-relative">
              {msg_status == "" && (<div className="content">  
                <h3>{heading}</h3>
                  <div className="newsletter-form">
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-group">
                        <div className="position-relative input-wrapper">
                          <input
                            ref={(em) => (emailControl = em)}
                            type="text"
                            className="form-control"
                            id="subscribeEmail"
                            placeholder="Enter your email address"
                            autoComplete="false"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          {isEmailEmptyError && (
                            <span className="error-msg mail-error">
                              Please enter your email id
                            </span>
                          )}
                          {isEmailValidError && (
                            <span className="error-msg mail-error">
                              Please enter a valid email id
                            </span>
                          )}
                          <button type="submit" className="bttn bttn-secondary">
                            <span>Subscribe</span>
                            <img loading="lazy"
                              src={ctaArrow}
                              className="icon icon-submit"
                              alt=""
                            />
                          </button>

                          <p className="message-container success-msg">{msg_status}</p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>)}
              {msg_status != "" && (
                <div>
                  <h5>You have subscribed to our newsletter!</h5>
                </div>
              )}
              <div className="visual-glance">
                <div id="newsletter_grad_one" className="grad mesh-gradient large gr-box1"></div>
                <div id="newsletter_grad_two" className="grad type-2 small gr-box2"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    subsFormState: state.subsForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendSubsForm: (formData) => dispatch(sendSubsForm(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsletter);
