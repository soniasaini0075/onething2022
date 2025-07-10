import "./contact.scss";

import { useEffect, useState, useRef, useLayoutEffect } from "react";

import { connect } from "react-redux";
import { sendContactForm } from "../../redux/actions";
import { useNavigate, NavLink } from "react-router-dom";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
// import errorSVG from "../../assets/img/svg/error-icon.svg";

import usaAddress from "../../assets/img/contact/usa.svg";
import bangaloreAddress from "../../assets/img/contact/bangalore.svg";
import gurgaonAddress from "../../assets/img/contact/gurgaon.svg";

import PageLoader from "../../partials/loaders/page-loader";
import {
  validateEmail,
  validateMobileLength,
  validateNumber,
} from "../../utils/validate";

import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { Helmet } from "react-helmet";
import FormComp from "../../partials/form/form";

const Contact = ({ cursor, contactForm, sendContactForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [msg, setMsg] = useState("");
  const [refer, setRefer] = useState("Select");
  const [loading, setLoading] = useState(true);

  const [isNameError, setNameError] = useState(false);
  const [isEmailEmptyError, setEmailEmptyError] = useState(false);
  const [isEmailValidError, setEmailValidError] = useState(false);
  const [isMsgError, setMsgError] = useState(false);
  const [isReferError, setReferError] = useState(false);
  const [isMobileEmptyError, setMobileEmptyError] = useState(false); // If Mobile is Empty
  const [isMobileLengthValidError, setMobileLengthValidError] = useState(false); // If Mobile length is Not Valid

  const [textareaHeight, setTextAreaHeight] = useState("inherit");

  let nameControl = useRef();
  let emailControl = useRef();
  let msgControl = useRef();
  let mobileControl = useRef();

  useEffect(() => {
    addPageMetas(PAGE_METAS.contact.title, PAGE_METAS.contact.desc);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  let navigate = useNavigate();
  const { contactLoaded, contactLoading } = contactForm;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailEmptyError(false);
    setEmailValidError(false);
    setMsgError(false);
    setMobileEmptyError(false);
    setReferError(false);

    setMobileLengthValidError(false);

    // if (name == "") {
    //   setNameError(true);
    //   nameControl.focus();
    //   return false;
    // }

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

    if (mobile == "") {
      setMobileEmptyError(true);
      mobileControl.focus();
      return false;
    }

    if (!validateMobileLength(mobile)) {
      setMobileLengthValidError(true);
      mobileControl.focus();
      return false;
    }

    if (refer == "") {
      setReferError(true);
      msgControl.focus();
      return false;
    }

    // if (msg == "") {
    //   setMsgError(true);
    //   msgControl.focus();
    //   return false;
    // }

    let formData = new FormData();
    // formData.append("username", name);
    formData.append("email", email);
    formData.append("tel-341", mobile);
    formData.append("reference", refer);
    formData.append("message", msg);
    // formData.append("start", "ASAP");

    // console.log(refer);
    // return false
    sendContactForm(formData);
    // if (contactLoaded) {}
    navigate("/success");
    return loading && <PageLoader />;
  };

  useEffect(() => {
    document.body.classList.add("contact-page");
  }, []);

  useLayoutEffect(() => {
    if (msg != "") {
      setTextAreaHeight(msgControl.scrollHeight);
    } else {
      setTextAreaHeight("inherit");
    }
  }, [msg]);
  // const handleEnter = (event) => {
  //   if (event.key.toLowerCase() === "enter") {
  //     const form = event.target.form;
  //     const index = [...form].indexOf(event.target);
  //     form.elements[index + 1].focus();
  //     event.preventDefault();
  //   }
  // };

  let grad_one = document.getElementById("grad_one");
  if (grad_one != null) {
    grad_one.classList.replace("type-1", "type-3");
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

    let grad_two = document.getElementById("grad_two");

    if (isInViewport(grad_one)) {
      grad_one?.classList.replace("type-1", "type-3");
    } else {
      grad_one?.classList.replace("type-3", "type-1");
    }

    if (isInViewport(grad_two)) {
      grad_two?.classList.replace("type-1", "type-3");
    } else {
      grad_two?.classList.replace("type-3", "type-1");
    }
  });

  return (
    <>
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href="https://www.onething.design/contact"
        ></link>
      </Helmet>
      {loading && <PageLoader />}
      {!loading && (
        <div className="contact-page-wrapper page-wrapper blur-overlay">
          <section className="page-heading">
            <div className="container">
              <div className="heading-wrapper">
                <div className="left_container">
                  <h3>Tell us more</h3>
                  <p>Drop your details and we’ll fix a 30 mins call</p>
                </div>
                <div id="grad_one" className="grad type-1 small gr-box1"></div>
              </div>
            </div>
          </section>
          <section className="contact-form-wrapper">
            <div className="container">
              <div id="grad_two" className="grad type-1 small gr-box1"></div>
              <div className="div-wrap">
            <FormComp title="contact"/>
                <div className="contact-info-details">
                  <div className="full-container">
                    <div className="d-flex flex-column justify-content-end contact-details">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.33329 5.33398H26.6666C28.1333 5.33398 29.3333 6.53398 29.3333 8.00065V24.0007C29.3333 25.4673 28.1333 26.6673 26.6666 26.6673H5.33329C3.86663 26.6673 2.66663 25.4673 2.66663 24.0007V8.00065C2.66663 6.53398 3.86663 5.33398 5.33329 5.33398Z"
                          stroke="url(#paint0_linear_3275_9778)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M29.3333 8L16 17.3333L2.66663 8"
                          stroke="url(#paint1_linear_3275_9778)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_3275_9778"
                            x1="2.66663"
                            y1="16.0007"
                            x2="29.3333"
                            y2="16.0007"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#EF8081" />
                            <stop offset="0.619792" stop-color="#F63132" />
                            <stop offset="1" stop-color="#9F1689" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_3275_9778"
                            x1="2.66663"
                            y1="12.6667"
                            x2="29.3333"
                            y2="12.6667"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#EF8081" />
                            <stop offset="0.619792" stop-color="#F63132" />
                            <stop offset="1" stop-color="#9F1689" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <p className="">Prefer direct mail?</p>
                      <p className="">
                        <a
                          href="mailto:sayhello@onething.design"
                          className="link_"
                        >
                          sayhello@onething.design
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="addresses-wrapper">
            <div className="left_container">
              <div className="address-main left_container">
                <h5>Meet us here</h5>
                <div className="addresses-grid">
                  <div className="address-main">
                    <div className="ad-loc">
                      <img loading="lazy"
                        src={gurgaonAddress}
                        className="icon icon-submit"
                        alt=""
                      />
                      <h5 className="caption var-bold">GURGAON</h5>
                      <address>
                        <strong>Gurugram, India</strong> <br />
                        WeWork Forum, DLF Phase 3, Gurugram,
                        <br />
                        Haryana 122002
                      </address>
                    </div>
                  </div>
                  <NavLink to="/ui-ux-design-company-in-bangalore" className="">
                    <div className="address-main">
                    <div className="ad-loc">
                        <img loading="lazy"
                        src={bangaloreAddress}
                        className="icon icon-submit"
                        alt=""
                      />
                      <h5 className="caption var-bold">BENGALURU</h5>
                      <address>
                        <strong>
                          Bengaluru, India
                          <br />
                        </strong>
                        WeWork Prestige Cube Koramangala, Site No. 26, Laskar,
                        Hosur Rd, Adugodi, Bengaluru,
                        <br />
                        Karnataka 560029
                      </address>
                    </div>
                  </div>
                  </NavLink>
                  <div className="address-main">
                    <div className="ad-loc">
                      <img loading="lazy"
                        src={usaAddress}
                        className="icon icon-submit"
                        alt=""
                      />
                      <h5 className="caption var-bold">USA</h5>
                      <address>
                        <strong>
                          San Fransisco, USA
                          <br />
                        </strong>
                        447 Sutter St Ste 405, PMB1100 San Francisco,
                        <br />
                        CA 94108 <br />
                        Ph: <a href="tel:+1 302 918 5548">+1 302 918 5548</a>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contactForm: state.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendContactForm: (formData) => dispatch(sendContactForm(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
