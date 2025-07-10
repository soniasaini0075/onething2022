import "./privacy.scss";

import React from 'react';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Privacy = () => {
  useEffect(() => {
    document.body.classList.add("privacy-page");
  }, []);
  let location = useLocation();
  return (
    <>
      <Helmet>
        <link
          rel="preload dns-prefetch canonical"
          href={`https://www.onething.design${location?.pathname}`}
        ></link>
      </Helmet>
      <div className="privacy-page-wrapper page-wrapper">
        <section className="page-heading blur-overlay">
          <div className="container">
            <div className="heading-wrapper">
              <h1>Our Privacy Policy</h1>
              <div className="grad type-2 small gr-box2"></div>
            </div>
          </div>
        </section>
        <section className="terms-content-wrapper blur-overlay">
          <div className="div-wrap">
            <div className="container">
              <div className="privacy-content content">
                <p>
                  This Privacy Policy describes 1thing Design &amp; Innovation
                  Private Limited, a UI design company's policies and procedures
                  on the collection and use and disclosure of the Information
                  provided by the Users and visitors of the Website (together
                  referred to as the “Users”). The Company shall not use the
                  User’s information in any manner except as provided under this
                  Privacy Policy. Every User who accesses the Website agrees to
                  be bound by the terms of this Privacy Policy.
                </p>
                <p>
                  Interpretation: In this Privacy Policy, references to “You”,
                  “Your”, “User” shall mean the end user accessing the Website
                  or the Services and “We”, “Us” and “Our” shall mean the
                  Company, its affiliates and partners.
                </p>

                <h5>Why this Privacy Policy?</h5>
                <p>This privacy policy is published in compliance of:</p>
                <ul>
                  <li>Section 43A Of The Information Technology Act, 2000</li>
                  <li>
                    Regulation 4 Of The Information Technology (Reasonable
                    Security Practices And Procedures And Sensitive Personal
                    Information) Rules, 2011 (The “SPI Rules”) And
                  </li>
                  <li>
                    Regulation 3(1) Of The Information Technology
                    (Intermediaries Guidelines) Rules, 2011.
                  </li>
                </ul>

                <h5>What is Personal Information?</h5>
                <p>
                  “Personal information” is defined under the SPI Rules to mean
                  any information that relates to a natural person, which,
                  either directly or indirectly, in combination with other
                  information available or likely to be available with a body
                  corporate, is capable of identifying such a natural person.
                  Information that is freely available in the public domain or
                  accessible under the Right to Information Act, 2005 or any
                  other law will not be regarded as sensitive personal data or
                  information. The spi rules further define “sensitive personal
                  data or information” of a person to mean personal information
                  about that person relating to:
                </p>
                <ul>
                  <li>Passwords</li>
                  <li>
                    Financial Information Such As Bank Accounts, Credit And
                    Debit Card Details Or Other Payment Instrument Details
                  </li>
                  <li>Physical, Physiological And Mental Health Condition</li>
                  <li>Sexual Orientation</li>
                  <li>Medical Records And History</li>
                  <li>Biometric Information</li>
                  <li>Information Received By Body Corporate Under</li>
                  <li>Lawful Contract Or Otherwise</li>
                  <li>Visitor Details As Provided At The Time Of</li>
                  <li>Registration Or Thereafter And</li>
                  <li>Call Data Records.</li>
                </ul>

                <h5>Information we collect</h5>
                <p>
                  We collect Information through our Website to provide better
                  services and results to our Users. Information is collected by
                  the details provided by User and the data collected by the
                  usage of the services. Details provided by User shall include
                  Personal Information like name, address (residential or
                  email), contact number, and other such data which is required
                  for the efficient use of the services provided by the Company.
                  In general, the user can browse the Website without revealing
                  any Personal Information. Although once Personal Information
                  is provided, the identity of the User is not anonymous
                  anymore. Where possible, we indicate which fields are required
                  and which fields are optional. Our User always has the option
                  of not providing Information by choosing not to use a
                  particular service or feature. Other Information collected
                  includes device information i.e. from which device is the
                  services being used. This shall include the hardware model,
                  operating system, unique identification number associated with
                  the device etc.
                </p>

                <h5>Usage of the collected Information</h5>
                <p>
                  The Information collected is constantly used to provide
                  personally relevant features and improve the services for our
                  Users. With such pool of information, it is easier for us to
                  understand the current trends in the market, according to
                  which we cater our services. Such information helps us to come
                  with content that provides a better User experience, thereby
                  creating better satisfaction and increasing the user base of
                  our Website. User discretion is asked before using such
                  information for any other purposes than those set out in this
                  Policy. Although the information which is shared by the User
                  themselves through us shall not be considered as making
                  private information public.
                </p>

                <h5>Sharing of Personal Information</h5>
                <p>
                  Disclosure may be necessary to provide Users access to our
                  Services, to comply with our legal obligations, to enforce our
                  User Agreement, to prevent, detect, mitigate, and investigate
                  fraudulent or illegal activities related to our Services. Such
                  Personal Information, when shared with third parties, shall be
                  subject to strict confidentiality agreements.
                </p>

                <p>
                  We may disclose personal information if required to do so by
                  law or in the good faith belief that such disclosure is
                  reasonably necessary to respond to subpoenas, court orders, or
                  other legal process. We may disclose Personal Information to
                  law enforcement offices, third party rights owners, or others
                  in the good faith belief that such disclosure is reasonably
                  necessary to enforce our Terms or Privacy Policy. We and our
                  affiliates will share / sell some or all of your personal
                  information with another business entity should we (or our
                  assets) plan to merge with, or be acquired by that business
                  entity, or re-organization, amalgamation, restructuring of
                  business. Should such a transaction occur that other business
                  entity (or the new combined entity) will be required to follow
                  this privacy policy with respect to your Personal Information.
                </p>

                <h5>Securing Information</h5>
                <p>
                  In order to secure the information provided to us by our
                  users, we review the processing and storage practices along
                  with the information collected to guard against unauthorized
                  access into the data collected in our systems. Furthermore,
                  user information is protected by subjecting our Employees and
                  Agents who process such information to strict confidentiality
                  agreements, where if they fail to comply with it, such non
                  compliance shall lead to heavy penalties or legal proceedings,
                  depending upon the gravity of the situation.
                </p>

                <h5>Choice/Opt-Out</h5>
                <p>
                  We provide all our users with the opportunity to opt-out of
                  receiving promotional, marketing-related communications from
                  us in general, after setting up an account. User may remove
                  their personal information by unsubscribing or deleting their
                  account from our Website.
                </p>

                <h5>Consent</h5>
                <p>
                  By using the Website and by providing personal information,
                  the user consents to the collection and use of the information
                  disclosed by them in accordance with this Privacy Policy,
                  including but not limited to their consent for sharing their
                  information as per this privacy policy. Our Website offers
                  publicly accessible blogs or community forums. You should be
                  aware that any information you provide in these areas may be
                  read, collected, and used by others who access them.
                </p>

                <p>
                  This document is an electronic record in terms of existing and
                  applicable Information Technology laws and the amended
                  provisions thereto pertaining to electronic records in various
                  allied statutes as amended pursuant to the Information
                  Technology laws. This electronic record has been generated by
                  a computer system and does not require any authentication.
                  From time to time, the Company may change this internet
                  privacy policy. The effective date of this policy, as stated
                  below, indicates the last time this policy was revised or
                  materially changed. Checking the effective date below allows
                  you to determine whether there have been changes since the
                  last time you reviewed the policy.
                </p>

                <p>
                  Effective date of this policy: This policy was last updated on
                  01/05/2020.
                </p>
              </div>
              <div className="policies-content content"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Privacy;
