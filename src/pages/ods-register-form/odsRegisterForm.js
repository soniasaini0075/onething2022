import "./odsRegisterForm.scss";

import { useEffect, useState, useRef, useLayoutEffect } from "react";

import { connect } from "react-redux";
import { sendOdsRegisterForm } from "../../redux/actions/odsFrom_ac";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import errorSVG from "../../assets/img/svg/error-icon.svg";

import usaAddress from "../../assets/img/contact/usa.svg";
import bangaloreAddress from "../../assets/img/contact/bangalore.svg";
import gurgaonAddress from "../../assets/img/contact/gurgaon.svg";

import PageLoader from "../../partials/loaders/page-loader";
import {
    ValidateAge,
  validateEmail,
  validateMobileLength,
  validateNumber,
} from "../../utils/validate";

import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import { Helmet } from "react-helmet";

const OdsRegisterForm = ({ cursor, odsRegisterForm, sendOdsRegisterForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [msg, setMsg] = useState("");
  const [age, setAge] = useState("");
  const [highestQualification, setHighestQualification] = useState("");
  const [workExp, setWorkExp] = useState("");
  const [loading, setLoading] = useState(true);

  const [isNameError, setNameError] = useState(false);
  const [isEmailEmptyError, setEmailEmptyError] = useState(false);
  const [isEmailValidError, setEmailValidError] = useState(false);
  const [isMsgError, setMsgError] = useState(false);
  const [isAgeError, setAgeError] = useState(false);
  const [isHighestQualiError, setHighestQualiError] = useState(false);
  const [isWorkExpError, setWorkExpError] = useState(false);
  const [isMobileEmptyError, setMobileEmptyError] = useState(false); // If Mobile is Empty
  const [isMobileLengthValidError, setMobileLengthValidError] = useState(false); // If Mobile length is Not Valid
  const [isAgeNumberError, setAgeNumberError] = useState(false); // If Mobile length is Not Valid

  const [textareaHeight, setTextAreaHeight] = useState("inherit");

  let nameControl = useRef();
  let emailControl = useRef();
  let msgControl = useRef();
  let mobileControl = useRef();
  let ageControl = useRef();
  let qualificationControl = useRef();
  let workExpControl = useRef();

  useEffect(() => {
    addPageMetas(PAGE_METAS.contact.title, PAGE_METAS.contact.desc);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  let navigate = useNavigate();
  const { odsLoaded, odsLoading } = odsRegisterForm;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailEmptyError(false);
    setEmailValidError(false);
    setMsgError(false);
    setMobileEmptyError(false);
    setAgeError(false);
    setHighestQualiError(false);
    setWorkExpError(false);

    setMobileLengthValidError(false);
    setAgeNumberError(false);

    if (name == "") {
      setNameError(true);
      nameControl.focus();
      return false;
    }

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
    if (age == "") {
        setAgeError(true);
        ageControl.focus();
        return false;
      }

    if (!ValidateAge(age)) {
      setAgeNumberError(true);
      ageControl.focus();
      return false;
    }
    if (highestQualification == "") {
      setHighestQualiError(true);
      qualificationControl.focus();
      return false;
    }
    
    if (workExp !== "" && !ValidateAge(workExp)) {
      setWorkExpError(true);
      workExpControl.focus();
      return false;
    }

    let formData = new FormData();
    formData.append("text-379", name);
    formData.append("email-312", email);
    formData.append("tel-752", mobile);
    formData.append("text-924", age);
    formData.append("text-385", highestQualification);
    formData.append("text-700", workExp);

    // console.log(refer);
    // return false
    sendOdsRegisterForm(formData);
    // if (contactLoaded) {}
    navigate("/success", {state: {from: "registerForm"}});
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
                    <div className="divider"></div>
                  <div className="titleWrap">
                    <h3>Let’s find the right program for you </h3>
                  </div>
                  <p>Help us know you better</p>
                </div>
                <div id="grad_one" className="grad type-1 small gr-box1"></div>
              </div>
            </div>
          </section>
          <section className="contact-form-wrapper">
            <div className="container">
              <div id="grad_two" className="grad type-1 small gr-box1"></div>
              <div className="div-wrap">
                <div className="left_container right_container">
                  <Form
                    className="contactForm"
                    id="mainContactForm"
                    onSubmit={handleFormSubmit}
                  >
                    <Form.Group
                      className="f-control form-basic-name"
                      controlId="formBasicName"
                    >
                      {/* {isNameError && <div className="error--icon"></div>} */}
                      <Form.Label>
                        Name
                        {isNameError && (
                          <span className="error-msg name-error">
                            Your Name
                          </span>
                        )}
                      </Form.Label>
                      <Form.Control
                        ref={(n) => (nameControl = n)}
                        // className={name.length > 0 ? "active" : ""}
                        className={
                          isNameError ? "err" : name.length > 0 ? "active" : ""
                        }
                        type="type"
                        placeholder="John Doe"
                        // autoComplete="off"
                        autofocus="on"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      className="f-control form-basic-email"
                      controlId="formBasicEmail"
                    >
                      {/* {(isEmailEmptyError || isEmailValidError) && (
                        <div className="error--icon"></div>
                      )} */}
                      <Form.Label>
                        Email ID
                        {isEmailEmptyError && (
                          <span className="error-msg mail-error">
                            Your email address
                          </span>
                        )}
                        {isEmailValidError && (
                          <span className="error-msg mail-error">
                            Please enter a valid email id
                          </span>
                        )}
                      </Form.Label>
                      <Form.Control
                        ref={(em) => (emailControl = em)}
                        // autoComplete="off"
                        className={
                          [isEmailEmptyError, isEmailValidError].includes(true)
                            ? "err"
                            : email.length > 0
                            ? "active"
                            : ""
                        }
                        type="text"
                        placeholder="johndoe@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      className="f-control form-basic-mobile"
                      controlId="formBasicMobile"
                    >
                      <Form.Label>
                        Contact Number
                        {/* {isMobileError && <div className="error--icon"></div>} */}
                        {isMobileEmptyError && (
                          <span className="error-msg">Your number</span>
                        )}
                        {isMobileLengthValidError && (
                          <span className="error-msg">
                            Mobile number must be 10 digits!
                          </span>
                        )}
                      </Form.Label>
                      <Form.Control
                        className={
                          [
                            isMobileEmptyError,
                            isMobileLengthValidError,
                          ].includes(true)
                            ? "err"
                            : mobile.length > 0
                            ? "active"
                            : ""
                        }
                        type="text"
                        ref={(mo) => (mobileControl = mo)}
                        placeholder="9999888877"
                        value={mobile}
                        // autoComplete="off"
                        onChange={(e) => setMobile(e.target.value)}
                        onKeyDown={(e) => validateNumber(e)}
                      />
                    </Form.Group>
                    <Form.Group
                      className="f-control form-basic-mobile"
                      controlId="studentage"
                    >
                      <Form.Label>
                        Age
                        {/* {isMobileError && <div className="error--icon"></div>} */}
                        {isAgeError && (
                          <span className="error-msg">Enter your Age</span>
                        )}
                        {isAgeNumberError && (
                          <span className="error-msg">
                            Age must be a number!
                          </span>
                        )}
                      </Form.Label>
                      <Form.Control
                        className={
                          [
                            isMobileEmptyError,
                            //  isAgeNumberError,
                          ].includes(true)
                            ? "err"
                            : age.length > 0
                            ? "active"
                            : ""
                        }
                        id="studentage"
                        type="text"
                        ref={(mo) => (ageControl = mo)}
                        placeholder="21"
                        value={age}
                        // autoComplete="off"
                        onChange={(e) => setAge(e.target.value)}
                        onKeyDown={(e) => validateNumber(e)}
                      />
                    </Form.Group>

                    <Form.Group
                      className="f-control form-basic-name"
                      controlId="formBasicQualification"
                    >
                      {/* {isNameError && <div className="error--icon"></div>} */}
                      <Form.Label>
                        Highest Qualification
                        {isHighestQualiError && (
                          <span className="error-msg name-error">
                            Enter your Highest Qualification
                          </span>
                        )}
                      </Form.Label>
                      <Form.Control
                        ref={(n) => (qualificationControl = n)}
                        // className={name.length > 0 ? "active" : ""}
                        className={
                          isHighestQualiError ? "err" : highestQualification.length > 0 ? "active" : ""
                        }
                        type="type"
                        placeholder="B.Sc Human Computer Interaction"
                        // autoComplete="off"
                        autofocus="on"
                        value={highestQualification}
                        onChange={(e) => setHighestQualification(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      className="f-control form-basic-name"
                      controlId="formBasicExperience"
                    >
                      {/* {isNameError && <div className="error--icon"></div>} */}
                      <Form.Label>
                        Work Experience <span className="optional">(optional)</span>
                        {isWorkExpError && (
                          <span className="error-msg name-error">
                            Work Exp. Must be a number.
                          </span>
                        )}
                      </Form.Label>
                      <Form.Control
                        ref={(n) => (workExpControl = n)}
                        // className={name.length > 0 ? "active" : ""}
                        className={
                          workExp.length > 0 ? "active" : ""
                        }
                        type="type"
                        placeholder="2+ yrs"
                        // autoComplete="off"
                        autofocus="on"
                        value={workExp}
                        onChange={(e) => setWorkExp(e.target.value)}
                        onKeyDown={(e) => validateNumber(e)}
                        maxLength="2"
                      />
                    </Form.Group>
                    
                    <span className="nudge">
                      {/* This info helps our business team prepare better for the
                      first call. */}
                    </span>
                    {/* <div class="main-select">
          <ul class="select">
            <li>
              <input class="select_close" type="radio" name="awesomeness" id="awesomeness-close" value=""/>
              <span class="select_label select_label-placeholder">Awesomeness Level</span>
            </li>

            <li class="select_items">
              <input class="select_expand" type="radio" name="awesomeness" id="awesomeness-opener"/>
              <label class="select_closeLabel" for="awesomeness-close"></label>

              <ul class="select_options">
                <li class="select_option">
                  <input class="select_input" type="radio" name="awesomeness" id="awesomeness-ridiculous"/>
                  <label class="select_label" for="awesomeness-ridiculous">ridiculous</label>
                </li>

                <li class="select_option">
                  <input class="select_input" type="radio" name="awesomeness" id="awesomeness-reasonable"/>
                  <label class="select_label" for="awesomeness-reasonable">reasonable</label>
                </li>

                <li class="select_option">
                  <input class="select_input" type="radio" name="awesomeness" id="awesomeness-lacking"/>
                  <label class="select_label" for="awesomeness-lacking">lacking</label>
                </li>

                <li class="select_option">
                  <input class="select_input" type="radio" name="awesomeness" id="awesomeness-awesomeless"/>
                  <label class="select_label" for="awesomeness-awesomeless">awesomeless</label>
                </li>
              </ul>

              <label class="select_expandLabel" for="awesomeness-opener"></label>
            </li>
          </ul>
        </div> */}
                    {!odsLoading && (
                      <Button
                        variant=""
                        type="submit"
                        className="bttn bttn-primary"
                      >
                        Submit
                        <div className="arrow-dot">
                          <img loading="lazy"
                            src={primaryCtaArrow}
                            className="icon icon-submit"
                            alt=""
                          />
                        </div>
                      </Button>
                    )}
                    {odsLoading && (
                      <Button variant="" className="bttn bttn-primary" disabled>
                        Loading...
                      </Button>
                    )}
                  </Form>
                </div>
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
    odsRegisterForm: state.form,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendOdsRegisterForm: (formData) => dispatch(sendOdsRegisterForm(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OdsRegisterForm);
