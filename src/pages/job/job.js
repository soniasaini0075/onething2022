// import "./job.scss";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import React from 'react';
// import { connect } from "react-redux";
// import { fetchJob, sendJobForm } from "../../redux/actions";

// import {
//   validateEmail,
//   validateMobileLength,
//   validateNumber,
// } from "../../utils/validate";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Carousel from "react-bootstrap/Carousel";
// import ProgressBar from "react-bootstrap/ProgressBar";

// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";

// import rightArrow from "../../assets/img/svg/right-arrow.svg";
// import leftArrow from "../../assets/img/svg/left-arrow.svg";
// import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
// import PageLoader from "../../partials/loaders/page-loader";
// import { Helmet } from "react-helmet";

// const Job = ({ jobState, jobFormState, fetchJob, sendJobForm }) => {
//   const targetDivRef = useRef(null);
//   const { job, loading, loaded } = jobState;
//   const { res, jobLoading, jobLoaded, msg_status } = jobFormState;
//   let { jobSlug } = useParams();
//   const [showText, setShowText] = useState(false);
//   const [formIndex, setFormIndex] = useState(0);

//   // Job Fields
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [refer, setRefer] = useState("");
//   const [whyMsg, setWhyMsg] = useState("");
//   const [exp, setExp] = useState("");
//   const [notice, setNotice] = useState("");
//   const [ctc, setCTC] = useState("");
//   const [expctc, setExpCTC] = useState("");
//   const [portfoliolink, setPortfolioLink] = useState("");
//   const [resumeFile, setResumeFile] = useState(null);

//   // Field Validations
//   const [isNameError, setNameError] = useState(false); // If Name is Empty
//   const [isEmailEmptyError, setEmailEmptyError] = useState(false); // If Email is Empty
//   const [isEmailValidError, setEmailValidError] = useState(false); // If Email is not Valid
//   const [isMobileEmptyError, setMobileEmptyError] = useState(false); // If Mobile is Empty
//   const [isMobileValidError, setMobileValidError] = useState(false); // If Mobile is Not Valid
//   const [isMobileLengthValidError, setMobileLengthValidError] = useState(false); // If Mobile length is Not Valid
//   const [isReferError, setReferError] = useState(false); // If Reference is Empty
//   const [isWhyMsgError, setWhyMsgError] = useState(false); // If Why Msg is Empty
//   const [isExpError, setExpError] = useState(false); // If Exp is Empty
//   const [isNoticeError, setNoticeError] = useState(false); // If Notice is Empty
//   const [isCTCError, setCTCError] = useState(false); // If CTC is Empty
//   const [isExpCTCError, setExpCTCError] = useState(false); // If CTC is Empty
//   const [isResumeError, setResumeError] = useState(false); // If Resume is Empty
//   const [isPortfolioError, setPortfolioError] = useState(false);
//   const [isResumeFormatError, setResumeFormatError] = useState(false); // If Resume is Empty

//   // Form Controls
//   let nameControl = useRef();
//   let emailControl = useRef();
//   let mobileControl = useRef();
//   let referControl = useRef();
//   let whyMsgControl = useRef();
//   let expControl = useRef();
//   let noticeControl = useRef();
//   let ctcControl = useRef();
//   let expCtcControl = useRef();
//   let resumeControl = useRef();
//   let portfolioControl = useRef();
//   const scrollToTargetDiv = () => {
//     if (targetDivRef.current) {
//       targetDivRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };
//   const submitJob = (e) => {
//     e.preventDefault();

//     setNameError(false);
//     setEmailEmptyError(false);
//     setEmailValidError(false);
//     setMobileEmptyError(false);
//     setMobileValidError(false);
//     setMobileLengthValidError(false);
//     setReferError(false);
//     setWhyMsgError(false);
//     setExpError(false);
//     setNoticeError(false);
//     setCTCError(false);
//     setExpCTCError(false);
//     setResumeError(false);
//     setPortfolioError(false);
//     setResumeFormatError(false);
//     if (name == "") {
//       setNameError(true);
//       nameControl.focus();
//       return false;
//     }

//     if (email == "") {
//       setEmailEmptyError(true);
//       emailControl.focus();
//       return false;
//     }

//     if (!validateEmail(email)) {
//       setEmailValidError(true);
//       emailControl.focus();
//       return false;
//     }

//     if (mobile == "") {
//       setMobileEmptyError(true);
//       mobileControl.focus();
//       return false;
//     }

//     if (mobile.length < 10 && mobile.length > 10) {
//       setMobileValidError(true);
//       mobileControl.focus();
//       return false;
//     }

//     if (!validateMobileLength(mobile)) {
//       setMobileLengthValidError(true);
//       mobileControl.focus();
//       return false;
//     }

//     // if (refer == "") {
//     //   setReferError(true);
//     //   referControl.focus();
//     //   return false;
//     // }

//     if (whyMsg == "") {
//       setWhyMsgError(true);
//       whyMsgControl.focus();
//       return false;
//     }

//     // if (exp == "") {
//     //   setExpError(true);
//     //   expControl.focus();
//     //   return false;
//     // }

//     // if (notice == "") {
//     //   setNoticeError(true);
//     //   noticeControl.focus();
//     //   return false;
//     // }

//     if (ctc == "") {
//       setCTCError(true);
//       ctcControl.focus();
//       return false;
//     }

//     if (expctc == "") {
//       setExpCTCError(true);
//       expCtcControl.focus();
//       return false;
//     }

//     if (resumeFile == null) {
//       setResumeError(true);
//       resumeControl.focus();
//       return false;
//     }
//     const allowedFileTypes = [
//       "application/pdf",
//       "image/png",
//       "image/jpeg",
//       "image/jpg",
//       "application/msword",
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     ];
//     if (!allowedFileTypes.includes(resumeFile.type)) {
//       // Handle the case when the file is not a PDF
//       setResumeFormatError(true);
//       resumeControl.focus();
//       return false;
//     }

//     // if (portfoliolink == "") {
//     //   setPortfolioError(true);
//     //   portfolioControl.focus();
//     //   return false;
//     // }

//     const formData = new FormData();
//     formData.append("applicant", name);
//     formData.append("applicant_email", email);
//     formData.append("candidate-number", mobile);
//     formData.append("reference", refer);
//     formData.append("what-makes-you-fit", whyMsg);
//     formData.append("experience", exp);
//     formData.append("notice-period", notice);
//     formData.append("current-ctc", ctc);
//     formData.append("expected-ctc", expctc);
//     formData.append("portfoliolink", portfoliolink);
//     formData.append("file-788", resumeFile);
//     formData.append("job-title", job?.title?.rendered);

//     sendJobForm(formData);
//   };

//   const useFormControls = useCallback((control) => {
//     if (control === "next") {
//       setFormIndex((index) => index + 1);
//       return;
//     }

//     setFormIndex((index) => index - 1);
//   }, []);

//   useEffect(() => {
//     document.body.classList.add("single-job-page");
//     fetchJob(jobSlug);
//     console.log(msg_status, "msg");
//   }, []);

//   useEffect(() => {
//     if (jobLoaded) {
//       let element = document?.getElementById("success-message");
//       element?.scrollIntoView();
//     }
//   }, [jobLoaded]);

//   const location = useLocation();

//   return (
//     <>
//       <Helmet>
//         <link
//           rel="preload dns-prefetch canonical"
//           href={`https://www.onething.design${location.pathname}`}
//         ></link>
//       </Helmet>
//       {job == null && <PageLoader />}
//       {jobLoading && <PageLoader />}
//       {job != null && (
//         <div className="job-page-wrapper page-wrapper">
//           <section className="job-intro">
//             <div className="div-wrap">
//               <div className="container">
//                 <h1 className="title">
//                   {job.title.rendered}
//                   <small className="job-type">{job.acf.position}</small>
//                 </h1>
//                 {!showText && (
//                   <div
//                     className="cta-wrapper"
//                     onClick={() => {
//                       setShowText(!showText);
//                       scrollToTargetDiv();
//                     }}
//                   >
//                     <a className="submit-bttn bttn bttn-primary empasis-apply-button">
//                       Apply Now
//                       <div className="arrow-dot">
//                         <img
//                           loading="lazy"
//                           src={primaryCtaArrow}
//                           className="icon icon-submit"
//                           alt=""
//                         />
//                       </div>
//                     </a>
//                   </div>
//                 )}

//                 <div
//                   className="content-div-job"
//                   dangerouslySetInnerHTML={{ __html: job.content.rendered }}
//                 ></div>
//                 <p style={{ display: "none" }}>
//                   Mail us at{" "}
//                   <a href="mailto:sayhello@onething.design">
//                     sayhello@onething.design
//                   </a>
//                 </p>
//                 {/* {!showText && (
//                 <button
//                 onClick={() => setShowText(!showText)}
//                 type="button"
//                 className="bttn bttn-primary applyButton"
//                 href="#"
//                 >
//                 Apply Now
//                 <div className="arrow-dot">
//                   <img loading="lazy"
//                   src={primaryCtaArrow}
//                   className="icon icon-submit"
//                   alt="Submit Icon"
//                   />
//                 </div>
//               </button>
//               )} */}
//               </div>
//               <input
//                 type="text"
//                 value={`${window.location.href}`}
//                 className="hidden-field"
//               />
//             </div>
//           </section>
//           <div ref={targetDivRef} id="targetDiv">
//             {showText && (
//               <section className="application-form-wrapper">
//                 {msg_status == "" && (
//                   <div className="div-wrap">
//                     <div className="container">
//                       <div className="grad-img ab_grad grad type-2 small"></div>
//                       <div className="grad-img ab_grad grad type-2-reverse medium"></div>
//                       <div className="form-wrapper">
//                         <Form
//                           autoComplete="off"
//                           onSubmit={submitJob}
//                           className="form-design-new"
//                         >
//                           <Form.Group
//                             className="f-control form-basic-name"
//                             controlId="formBasicName"
//                           >
//                             {isNameError && <div className="error--icon"></div>}
//                             <Form.Label>
//                               What’s your name?{" "}
//                               {isNameError && (
//                                 <span className="error-msg name-error">
//                                   Please enter your name
//                                 </span>
//                               )}
//                             </Form.Label>
//                             <Form.Control
//                               ref={(n) => (nameControl = n)}
//                               className={
//                                 name.length > 0
//                                   ? "active jobField jobField-filled"
//                                   : "jobField"
//                               }
//                               type="type"
//                               placeholder="Type your name"
//                               autoComplete="nope"
//                               value={name}
//                               onChange={(e) => setName(e.target.value)}
//                             />
//                           </Form.Group>
//                           <Form.Group
//                             className="f-control form-basic-email"
//                             controlId="formBasicEmail"
//                           >
//                             {(isEmailEmptyError || isEmailValidError) && (
//                               <div className="error--icon"></div>
//                             )}
//                             <Form.Label>
//                               What’s your email ID?{" "}
//                               {isEmailEmptyError && (
//                                 <span className="error-msg mail-error">
//                                   Please enter your email id
//                                 </span>
//                               )}
//                               {isEmailValidError && (
//                                 <span className="error-msg mail-error">
//                                   Please enter a valid email id
//                                 </span>
//                               )}
//                             </Form.Label>
//                             <Form.Control
//                               ref={(em) => (emailControl = em)}
//                               autoComplete="nope"
//                               className={
//                                 email.length > 0
//                                   ? "active jobField jobField-filled"
//                                   : "jobField"
//                               }
//                               type="text"
//                               placeholder="Type your email"
//                               value={email}
//                               onChange={(e) => setEmail(e.target.value)}
//                             />
//                           </Form.Group>
//                           <Form.Group
//                             className="f-control form-basic-email"
//                             controlId="formBasicMobile"
//                           >
//                             {(isMobileEmptyError ||
//                               isMobileValidError ||
//                               isMobileLengthValidError) && (
//                               <div className="error--icon"></div>
//                             )}
//                             <Form.Label>
//                               What’s your mobile number?{" "}
//                               {isMobileEmptyError && (
//                                 <span className="error-msg mail-error">
//                                   Please enter your mobile number
//                                 </span>
//                               )}
//                               {isMobileLengthValidError && (
//                                 <span className="error-msg mail-error">
//                                   Mobile number must be 10 digits!
//                                 </span>
//                               )}
//                               {isEmailValidError && (
//                                 <span className="error-msg mail-error">
//                                   Please enter a valid mobile number
//                                 </span>
//                               )}
//                             </Form.Label>
//                             <Form.Control
//                               ref={(em) => (mobileControl = em)}
//                               className={
//                                 mobile.length > 0
//                                   ? "active jobField jobField-filled"
//                                   : "jobField"
//                               }
//                               type="text"
//                               placeholder="Enter your mobile number"
//                               value={mobile}
//                               onChange={(e) => setMobile(e.target.value)}
//                               onKeyDown={(e) => validateNumber(e)}
//                             />
//                           </Form.Group>

//                           <Form.Group
//                             className="f-control form-basic-portfolio"
//                             controlId="formBasicPortfolio"
//                           >
//                             {isPortfolioError && (
//                               <div className="error--icon"></div>
//                             )}
//                             <Form.Label>
//                               Your Portfolio/Work Samples Link (Optional){" "}
//                               {/* {isPortfolioError && (
//               <span className="error-msg portfolio-error">
//                 Please enter your name
//               </span>
//               )} */}
//                             </Form.Label>
//                             <Form.Control
//                               ref={(n) => (portfolioControl = n)}
//                               className=""
//                               type="type"
//                               placeholder="Type the link"
//                               autoComplete="nope"
//                               value={portfoliolink}
//                               onChange={(e) => setPortfolioLink(e.target.value)}
//                             />
//                           </Form.Group>

//                           <Form.Group
//                             className="f-control form-basic-email"
//                             controlId="formBasicCctc"
//                           >
//                             {isCTCError && <div className="error--icon"></div>}
//                             <Form.Label>
//                               Current CTC{" "}
//                               {isCTCError && (
//                                 <span className="error-msg mail-error">
//                                   Please fill in your Current CTC
//                                 </span>
//                               )}
//                             </Form.Label>
//                             <Form.Control
//                               ref={(em) => (ctcControl = em)}
//                               autoComplete="nope"
//                               className={
//                                 email.length > 0
//                                   ? "active jobField jobField-filled"
//                                   : "jobField"
//                               }
//                               type="text"
//                               placeholder="Enter your Current CTC"
//                               value={ctc}
//                               onChange={(e) => setCTC(e.target.value)}
//                               onKeyDown={(e) => validateNumber(e)}
//                             />
//                           </Form.Group>
//                           <Form.Group
//                             className="f-control form-basic-email"
//                             controlId="formBasicEctc"
//                           >
//                             {isExpCTCError && (
//                               <div className="error--icon"></div>
//                             )}
//                             <Form.Label>
//                               Expected CTC{" "}
//                               {isExpCTCError && (
//                                 <span className="error-msg mail-error">
//                                   Please fill in your Expected CTC
//                                 </span>
//                               )}
//                             </Form.Label>
//                             <Form.Control
//                               ref={(em) => (expCtcControl = em)}
//                               autoComplete="nope"
//                               className={
//                                 email.length > 0
//                                   ? "active jobField jobField-filled"
//                                   : "jobField"
//                               }
//                               type="text"
//                               placeholder="Enter your Expected CTC"
//                               value={expctc}
//                               onChange={(e) => setExpCTC(e.target.value)}
//                               onKeyDown={(e) => validateNumber(e)}
//                             />
//                           </Form.Group>

//                           <Form.Group
//                             className="f-control form-basic-why"
//                             controlId="formBasicWhy"
//                           >
//                             {isWhyMsgError && (
//                               <div className="error--icon"></div>
//                             )}
//                             <Form.Label>
//                               Why do you want to join us?{" "}
//                               {isWhyMsgError && (
//                                 <span className="error-msg mail-error">
//                                   Field can't be empty
//                                 </span>
//                               )}
//                             </Form.Label>
//                             <Form.Control
//                               as="textarea"
//                               rows={1}
//                               ref={(n) => (whyMsgControl = n)}
//                               className={
//                                 whyMsg.length > 0
//                                   ? "active jobField jobField-filled"
//                                   : "jobField"
//                               }
//                               type="text"
//                               placeholder="Tell us why you want to join us"
//                               autoComplete="nope"
//                               value={whyMsg}
//                               onChange={(e) => setWhyMsg(e.target.value)}
//                             />
//                           </Form.Group>
//                           <Form.Group
//                             className="f-control form-basic-resume"
//                             controlId="formBasicEmail"
//                           >
//                             {(isResumeError || isResumeError) && (
//                               <div className="error--icon"></div>
//                             )}
//                             {(isResumeFormatError || isResumeFormatError) && (
//                               <div className="error--icon"></div>
//                             )}
//                             <Form.Label>
//                               Attach Resume{" "}
//                               {isResumeError && (
//                                 <span className="error-msg mail-error">
//                                   Please attach your Resume
//                                 </span>
//                               )}
//                               {isResumeFormatError && (
//                                 <span className="error-msg name-error">
//                                   Please attach valid Resume format
//                                 </span>
//                               )}
//                             </Form.Label>
//                             <input
//                               className="input-file"
//                               type="file"
//                               onChange={(e) => setResumeFile(e.target.files[0])}
//                             />
//                           </Form.Group>
//                           <Button
//                             variant=""
//                             type="submit"
//                             className="submit-bttn bttn bttn-primary"
//                             id="fButtonFormJob"
//                           >
//                             Submit
//                             <div className="arrow-dot">
//                               <img
//                                 loading="lazy"
//                                 src={primaryCtaArrow}
//                                 className="icon icon-submit"
//                                 alt=""
//                               />
//                             </div>
//                           </Button>
//                         </Form>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div
//                   id="success-message"
//                   style={{
//                     background: "#000",
//                     height: "0",
//                     width: "0",
//                     visibility: "hidden",
//                   }}
//                 ></div>
//                 {msg_status != "" && (
//                   <div className="container" id="">
//                     <h5>
//                       We got your application. <br />
//                       We’ll reach out if your profile fits.
//                     </h5>
//                   </div>
//                 )}
//               </section>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     jobState: state.job,
//     jobFormState: state.jobForm,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchJob: (jobSlug) => dispatch(fetchJob(jobSlug)),
//     sendJobForm: (formData) => dispatch(sendJobForm(formData)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Job);
