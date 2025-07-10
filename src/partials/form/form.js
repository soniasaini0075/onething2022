import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import SelectField from "./SelectField";
import { connect } from "react-redux";
import { sendContactForm } from "../../redux/actions";
import { useNavigate, NavLink } from "react-router-dom";
import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
import darkArrow from "../../assets/img/global/grey-arrow.svg";
import './form.scss'
import {
    validateEmail,
    validateMobileLength,
    validateNumber,
  } from "../../utils/validate";
import PageLoader from "../../partials/loaders/page-loader";

const FormComp = ({ cursor, contactForm, sendContactForm,title }) => {
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
  
    // useEffect(() => {
    //   addPageMetas(PAGE_METAS.contact.title, PAGE_METAS.contact.desc);
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 500);
    // }, []);

 
 
  
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
      formData.append("username", name);
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
        <div className="container">
        <Form
          className="contactForm"
          id="mainContactForm"
          onSubmit={handleFormSubmit}
        >
          
          <Form.Group
            className="f-control form-basic-name"
            controlId="formBasicName"
          >
            {isNameError && <div className="error--icon"></div>}
           
            {isNameError && (
                <span className="error-msg name-error">
                  Your name
                </span>
              )}
            <fieldset className="form-group">

            <Form.Control
              ref={(n) => (nameControl = n)}
              className={name.length > 0 ? "active" : ""}
              type="type"
              placeholder=""
              // onBlur={()=>blurInput("form-basic-name")}
              // onFocus={()=>focusInput("form-basic-name")}
              autoComplete="off"
              autofocus="on"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
    <label for="exampleInputEmail1">Full Name</label>
</fieldset>
          </Form.Group> 

          <Form.Group
            className="f-control form-basic-email"
            controlId="formBasicEmail"
          >
         
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
            <fieldset className="form-group">

            <Form.Control
              ref={(em) => (emailControl = em)}
              className={
                [isEmailEmptyError, isEmailValidError].includes(true)
                  ? "err"
                  : email.length > 0
                  ? "active"
                  : ""
              }
              type="text"
              placeholder=""
              // onBlur={()=>blurInput("form-basic-email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <label for="exampleInputEmail1">Work Email</label>
</fieldset>

          </Form.Group>

          <Form.Group
            className="f-control form-basic-mobile"
            controlId="formBasicMobile"
          >
            {/* <Form.Label>
            Phone number
            
            </Form.Label> */}
            {isMobileEmptyError && (
                <span className="error-msg">Your number</span>
              )}
              {isMobileLengthValidError && (
                <span className="error-msg">
                  Mobile number must be 15 digits!
                </span>
              )}
                <fieldset className="form-group">
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
              placeholder=""
              value={mobile}
              // onFocus={()=>focusInput("formBasicMobile")}
              // onBlur={()=>blurInput("formBasicMobile")}

              // autoComplete="off"
              onChange={(e) => setMobile(e.target.value)}
              // onKeyDown={(e) => validateNumber(e)}
            />
             <label for="exampleInputEmail1">Phone Number</label>
</fieldset>

          </Form.Group>
        
           
          <Form.Group
            className="f-control form-basic-message-one"
            controlId="formBasicMessage"
          >
            {isMsgError && <div className="error--icon"></div>}
            {/* <Form.Label>
            Tell us more
            
            </Form.Label> */}
            {isMsgError && (
                <span className="error-msg text-error">
                  Tell us what services you are looking for?
                </span>
              )}
            {/* <Form.Control
            className={msg.length > 0 ? "active" : ""}
            type="text"
            placeholder="Start typing..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            /> */}
                <fieldset className="form-group">

            <Form.Control
              className={
                isMsgError ? "err" : msg.length > 0 ? "active" : ""
              }
              ref={(ms) => (msgControl = ms)}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder=""
              as="textarea"
              aria-label="With textarea"
              
              // onFocus={()=>focusInput("formBasicMessage")}
              // onBlur={()=>blurInput("formBasicMessage")}

              style={title==='contact'?({
                height: textareaHeight,
                minHeight: "180px",
                resize: "none",
                
              }):({
                height: textareaHeight,
                minHeight: "120px",
                resize: "none",
                color:"#fff;"
              })}
            />
                <label for="exampleInputEmail1">Project Details</label>
</fieldset>
          </Form.Group>
          <span className="nudge">
            {/* This info helps our business team prepare better for the
            first call. */}
          </span> 
          {/* <div className="main-select">
<ul className="select">
  <li>
    <input className="select_close" type="radio" name="awesomeness" id="awesomeness-close" value=""/>
    <span className="select_label select_label-placeholder">Awesomeness Level</span>
  </li>

  <li className="select_items">
    <input className="select_expand" type="radio" name="awesomeness" id="awesomeness-opener"/>
    <label className="select_closeLabel" for="awesomeness-close"></label>

    <ul className="select_options">
      <li className="select_option">
        <input className="select_input" type="radio" name="awesomeness" id="awesomeness-ridiculous"/>
        <label className="select_label" for="awesomeness-ridiculous">ridiculous</label>
      </li>

      <li className="select_option">
        <input className="select_input" type="radio" name="awesomeness" id="awesomeness-reasonable"/>
        <label className="select_label" for="awesomeness-reasonable">reasonable</label>
      </li>

      <li className="select_option">
        <input className="select_input" type="radio" name="awesomeness" id="awesomeness-lacking"/>
        <label className="select_label" for="awesomeness-lacking">lacking</label>
      </li>

      <li className="select_option">
        <input className="select_input" type="radio" name="awesomeness" id="awesomeness-awesomeless"/>
        <label className="select_label" for="awesomeness-awesomeless">awesomeless</label>
      </li>
    </ul>

    <label className="select_expandLabel" for="awesomeness-opener"></label>
  </li>
</ul>
</div> */}
          {!contactLoading && (
            <Button
              variant=""
              type="submit"
              className="bttn bttn-primary"
              style={title!=='contact'?({marginTop:"0rem",border:"1px solid rgba(255, 255, 255, 0.40)",color:"#fff"}):({})}
            >
              Submit
              <div className="arrow-dot">
                <img loading="lazy"
                  src={title=='contact'?primaryCtaArrow:darkArrow}
                  className="icon icon-submit invert"
                  alt=""
                />
              </div>
            </Button>
          )}
          {contactLoading && (
            <Button variant="" className="bttn bttn-primary" disabled>
              Loading...
            </Button>
          )}
        </Form>
      </div>

    )
}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(FormComp);