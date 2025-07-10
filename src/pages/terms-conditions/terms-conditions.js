import { useEffect } from "react";

import { addPageMetas } from "../../utils/global_fun";
import { PAGE_METAS } from "../../data/data";
import React from 'react';
import "./terms-conditions.scss";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const TermsConditions = () => {
  useEffect(() => {
    addPageMetas(PAGE_METAS.terms.title, PAGE_METAS.terms.desc);
    document.body.classList.add("terms-page");
  }, []);

  let location = useLocation();


  return (
    <>
    <Helmet>
        <link rel="preload dns-prefetch canonical" href={`https://www.onething.design${location?.pathname}`}></link>
    </Helmet>
      <div className="terms-conditions-page-wrapper page-wrapper">
        <section className="page-heading blur-overlay">
          <div className="container">
            <div className="heading-wrapper">
              <h1>Terms & Conditions</h1>
              <div className="grad type-2 small gr-box2"></div>
            </div>
          </div>
        </section>
        <section className="terms-content-wrapper blur-overlay">
          <div className="div-wrap">
            <div className="container">
              <div className="terms-content content">
                <p>
                  The These Terms of Use (“Terms of Use”) have been drafted in
                  accordance with the provisions of Rule 3 (1) of the
                  Information Technology (Intermediaries guidelines) Rules, 2011
                  that require publishing the rules and regulations, privacy
                  policy and Terms of Use for access or usage of
                  https://onething.design/.
                </p>

                <h5>About Us</h5>
                <p>
                  The domain name https://onething.design (hereinafter referred
                  to as "Website") owned and managed by 1thing Design &
                  Innovation Private Limited, a private limited company limited
                  by shares incorporated in India under the Companies Act, 2013,
                  and having its registered office at First Floor, Plot No. 2,
                  100 ft Rd New Delhi, Opp Corporation Bank, MG Road, Ghitorni
                  India – 110030 (hereinafter referred to as “Company”).
                </p>
                <p>
                  The company is an in and out ui design agency based in Gurgaon
                  and Bengaluru. The Company basically designs across all
                  platforms from websites and online tools to mobile apps,
                  software, and basically just about anything that demands user
                  interface.
                </p>

                <h5>Terms of Use</h5>
                <p>
                  ACCESSING, BROWSING OR OTHERWISE USING THE WEBSITE INDICATES
                  YOUR ACCEPTANCE TO ALL THE TERMS AND CONDITIONS HEREIN. PLEASE
                  READ THESE TERMS OF USE CAREFULLY BEFORE PROCEEDING. IF YOU DO
                  NOT AGREE WITH THE SAME, PLEASE DO NOT USE THIS WEBSITE. For
                  the purpose of these Terms of Use, wherever the context so
                  requires "You" or "User" shall mean any natural or legal
                  person visits our platform, either just for the purpose of
                  browsing the Website or engages to buy our products &
                  services. This Website allows the User to surf the Website.
                  The term "We", "Us", "Our" shall mean Company.
                </p>

                <p>
                  Your use of the Website and services and tools are governed by
                  the following terms and conditions ("Terms of Use") as
                  applicable to the Website including the applicable policies
                  which are incorporated herein by way of reference. If You
                  transact on the Website, You shall be subject to the policies
                  that are applicable to the Website for such transaction. By
                  mere use of the Website, You shall be contracting with Company
                  and these terms and conditions including the policies
                  constitute your binding obligations, with the Website. Any new
                  features or tools which are added to the current store shall
                  also be subject to the Terms of Use. We reserve the right to
                  update, change or replace any part of these Terms of Use by
                  posting updates and/or changes to Our Website. It is your
                  responsibility to check this page periodically for changes.
                </p>

                <h5>Eligibility to use</h5>
                <p>
                  By agreeing to these Terms of Use, you represent that you are
                  persons who can form legally binding contracts under Indian
                  Contract Act, 1872. Persons who are "incompetent to contract"
                  within the meaning of the Indian Contract Act, 1872 including
                  minors, un-discharged insolvents etc. are not eligible to use
                  the Website. As a minor, if you wish to use or transact on
                  Website, such use or transaction may be made by your legal
                  guardian or parents on the Website. Company reserves the right
                  to refuse You access to the Website if it is brought to
                  Company's notice or if it is discovered that you are under the
                  age of 18 years. By visiting Company Website or accepting
                  these Terms of Use, You represent and warrant to Company that
                  You are 18 years of age or older and that You have the right,
                  authority and capacity to use the Website and agree to and
                  abide by these Terms of Use. You also represent and warrant to
                  the Company that You will use the Website in a manner
                  consistent with any and all applicable laws and regulations.
                </p>

                <h5>Privacy and Information Protection</h5>
                <p>
                  ACCESSING, BROWSING OR OTHERWISE USING THE WEBSITE INDICATES
                  YOUR ACCEPTANCE TO ALL THE TERMS AND CONDITIONS HEREIN. PLEASE
                  READ THESE TERMS OF USE CAREFULLY BEFORE PROCEEDING. IF YOU DO
                  NOT AGREE WITH THE SAME, PLEASE DO NOT USE THIS WEBSITE.Please
                  review our Privacy Policy, which also governs your visit to
                  this Site, to understand our internal policies and practices.
                  The personal information/data provided to us by you during the
                  course of usage of http://onething.design/ will be treated as
                  strictly confidential and in accordance with the Privacy
                  Policy and applicable laws and regulations. If You object to
                  your information being transferred or used, please do not use
                  the website.
                </p>

                <h5>Charges for using the Website</h5>
                <p>
                  Company does not charge any fee for browsing the Website.
                  Company reserves the right to change its Fee Policy from time
                  to time. In particular, Company may at its sole discretion
                  introduce new services and modify some or all of the existing
                  services offered on the Website. In such an event Company
                  reserves the right to introduce fees for the new services
                  offered or amend/introduce fees for existing services, as the
                  case may be. Changes to the Fee Policy shall be posted on the
                  Website and such changes shall automatically become effective
                  immediately after they are posted on the Website. Unless
                  otherwise stated, all fees shall be quoted in Indian Rupees.
                </p>

                <h5>Rights of use</h5>
                <p>
                  Company grants you limited rights to access and make personal
                  use of this website, but not to download (other than page
                  caching) or modify it, or any portion of it. These rights do
                  not include any commercial use of this website or its
                  contents; any collection and use of any content, descriptions,
                  or prices; any derivative use of this website or its contents;
                  any downloading or copying of account information for the
                  benefit of a third-party; or any use of data mining, robots,
                  or similar data gathering and extraction tools.
                </p>

                <p>
                  This website or any portion of this website (including but not
                  limited to any copyrighted material, trademarks, or other
                  proprietary information) may not be reproduced, duplicated,
                  copied, sold, resold, visited, distributed or otherwise
                  exploited for any commercial purpose.
                </p>

                <h5>Your Conduct</h5>
                <p>
                  You must not use the Website in any way that causes, or is
                  likely to cause, the Website or access to it to be
                  interrupted, damaged or impaired in any way. You understand
                  that you, and not Company, are responsible for all electronic
                  communications and content sent from your computer to us and
                  you must use the Website for lawful purposes only. You must
                  not use the Website for any of the following:
                </p>
                <ul>
                  <li>
                    For Fraudulent Purposes, Or In Connection With A Criminal
                    Offense Or Other Unlawful Activity;
                  </li>
                  <li>
                    To Send, Use Or Reuse Any Material That Does Not Belong To
                    You; Or Is Illegal, Offensive (Including But Not Limited To
                    Material That Is Sexually Explicit Content Or Which Promotes
                    Racism, Bigotry, Hatred Or Physical Harm), Deceptive,
                    Misleading, Abusive, Indecent, Harassing, Blasphemous,
                    Defamatory, Libelous, Obscene, Pornographic, Pedophilic Or
                    Menacing; Ethnically Objectionable, Disparaging Or In Breach
                    Of Copyright, Trademark, Confidentiality, Privacy Or Any
                    Other Proprietary Information Or Right; Or Is Otherwise
                    Injurious To Third Parties; Or Relates To Or Promotes Money
                    Laundering Or Gambling; Or Is Harmful To Minors In Any Way;
                    Or Impersonates Another Person; Or Threatens The Unity,
                    Integrity, Security Or Sovereignty Of India Or Friendly
                    Relations With Foreign States; Or Objectionable Or Otherwise
                    Unlawful In Any Manner Whatsoever; Or Which Consists Of Or
                    Contains Software Viruses, Political Campaigning, Commercial
                    Solicitation, Chain Letters, Mass Mailings Or Any "Spam”; Or
                    Violates Any Law For The Time Being In Force; Or Deceives Or
                    Misleads The Addressee About The Origin Of Such Messages Or
                    Communicates Any Information Which Is Grossly Offensive Or
                    Menacing In Nature;
                  </li>
                  <li>
                    To Not Make Any Unauthorized Commercial Use Of This Website
                    Or Service And You May Not Resell This Service Or Assign
                    Your Rights Or Obligations Under These Terms Of Usage. You
                    May Not Reverse Engineer Any Part Of This Website Or
                    Service.
                  </li>
                  <li>
                    For Any Act That Causes, Or May Be Likely To Cause Damage Or
                    Impairment To The Website Or In Any Manner Harms The Company
                    Or Any Other Person Or Entity (As Determined By The Company
                    In Its Sole Discretion) Or Interrupt Free Access To It In
                    Any Way
                  </li>
                  <li>Medical Records And History</li>
                  <li>Biometric Information</li>
                  <li>
                    Information Received By Body Corporate Under Lawful Contract
                    Or Otherwise
                  </li>
                  <li>
                    Visitor Details As Provided At The Time Of Registration Or
                    Thereafter And
                  </li>
                  <li>Call Data Records.</li>
                </ul>
              </div>
              <div className="policies-content content">
                <h3>Policies</h3>

                <h5>Disclaimer of Warranties and Liabilities</h5>
                <p>
                  We expressly disclaim any warranties or representations
                  (express or implied) in respect of quality, suitability,
                  accuracy, reliability, completeness, timeliness, performance,
                  safety, merchantability, fitness for a particular purpose, or
                  legality of the products listed or displayed or the content
                  (including product information and/or specifications) on the
                  Website. While we have taken precautions to avoid inaccuracies
                  in content, this Website, all content, information, software,
                  products, services and related graphics are provided as is,
                  without warranty of any kind.
                </p>

                <h5>Indemnity and Release</h5>
                <p>
                  You shall indemnify and hold harmless Company, its
                  subsidiaries, affiliates and their respective officers,
                  directors, agents and employees, from any claim or demand, or
                  actions including reasonable attorney's fees, made by any
                  third party or penalty imposed due to or arising out of your
                  breach of these Conditions of Use or any document incorporated
                  by reference, or your violation of any law, rules, regulations
                  or the rights of a third party. You hereby expressly release
                  Company and/or its affiliates and/or any of its officers and
                  representatives from any cost, damage, liability or other
                  consequence of any of the actions/inactions of the vendors and
                  specifically waiver any claims or demands that you may have in
                  this behalf under any statute, contract or otherwise.
                </p>

                <h5>Communications</h5>
                <p>
                  When you visit https://onething.design/ or send e-mails to us,
                  you are communicating with us electronically. We may
                  communicate with you by e-mail, SMS, phone call or by posting
                  notices on the website or by any other mode of communication.
                  For contractual purposes, you consent to receive
                  communications including SMS, e-mail or phone calls from us.
                </p>

                <h5>Losses</h5>
                <p>
                  We will not be responsible for any business loss (including
                  loss of profits, revenue, contracts, anticipated savings,
                  data, goodwill or wasted expenditure) or any other indirect or
                  consequential loss that is not reasonably foreseeable to both
                  you and us when you commenced using the website.
                </p>

                <h5>Alteration of Service or Amendments to the Conditions</h5>
                <p>
                  We will not be responsible for any business loss (including
                  loss of profits, revenue, contracts, anticipated savings,
                  data, goodwill or wasted expenditure) or any other indirect or
                  consequential loss that is not reasonably foreseeable to both
                  you and us when you commenced using the website.
                </p>

                <h5>Events beyond our reasonable control</h5>
                <p>
                  We will not be held responsible for any delay or failure to
                  comply with our obligations under these conditions if the
                  delay or failure arises from any cause which is beyond our
                  reasonable control. This condition does not affect your
                  statutory rights.
                </p>

                <h5>Waiver</h5>
                <p>
                  If you breach these conditions and we take no action, we will
                  still be entitled to use our rights and remedies in any other
                  situation where you breach these conditions.
                </p>

                <h5>Governing law and Jurisdiction</h5>
                <p>
                  These conditions are governed by and construed in accordance
                  with the laws of India. You agree, as we do, to submit to the
                  exclusive jurisdiction of the courts at New Delhi.IN NO EVENT
                  SHALL 1thing Design & Innovation PRIVATE LIMITED BE LIABLE FOR
                  ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF
                  ANY KIND IN CONNECTION WITH THESE TERMS OF USE, EVEN IF USER
                  HAS BEEN INFORMED IN ADVANCE OF THE POSSIBILITY OF SUCH
                  DAMAGES.
                </p>

                <h5>Severability & Waiver Contact Information</h5>
                <p>
                  If any provision of this Terms of Use is held to be invalid or
                  unenforceable, such provision shall be struck and the
                  remaining provisions shall be enforced.
                </p>

                <h5>Contact Information</h5>
                <p>
                  This site is owned and operated by 1thing Design & Innovation
                  Private Limited. If You have any have any question, issue,
                  complaint regarding any of our Services, please contact
                  info@onething.design. se Terms of Use (“Terms of Use”) have
                  been drafted in accordance with the provisions of Rule 3 (1)
                  of the Information Technology (Intermediaries guidelines)
                  Rules, 2011 that require publishing the rules and regulations,
                  privacy policy and Terms of Use for access or usage of
                  https://onething.design/.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default TermsConditions;
