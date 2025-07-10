import "./clients.scss";

import Ziploan from "../../assets/img/clients/ziploan.svg";
import Airtel from "../../assets/img/clients/airtel.svg";
import Coke from "../../assets/img/clients/coke.svg";
import RoyalEnfield from "../../assets/img/clients/royal-enfield.svg";
import Hero from "../../assets/img/clients/hero.svg";
import Itc from "../../assets/img/clients/itc.svg";
import Jupiter from "../../assets/img/clients/jupiter.svg";
import Kotak from "../../assets/img/clients/kotak.svg";
import Lpu from "../../assets/img/clients/lpu.svg";
import MastersUnion from "../../assets/img/clients/masters-union.svg";
import statiq from "../../assets/img/clients/statiq.svg";
import Boat from "../../assets/img/clients/boat.svg";
import Orix from "../../assets/img/clients/orix.svg";
import LivSpace from "../../assets/img/clients/livspace.svg";
import HT from "../../assets/img/clients/ht.svg";
import Swvl from "../../assets/img/clients/swvl.svg";
import Tvs from "../../assets/img/clients/tvs.svg";

import caseStudyIcon from "../../assets/img/case-study.svg";

const ClientGrid = ({ partnerHeading }) => {
    return (
    <>
    <div className="clientele-wrapper">
        <section className="our-clients blur-overlay" id="ourClients">
            <div className="container">
                <div className="custom-heading-wrapper">
                    <h3 className="section-heading home-heading">{partnerHeading}</h3>
                    <h2>We are a UI UX design company, helping businesses scale through integrated customer experiences.</h2>
                </div>
                <div className="clients-logo-grid">
                    <div className="client_">
                        <figure>
                            <img loading="lazy" src={RoyalEnfield} className="icon icon-client" alt="" />
                        </figure>
                    </div>

                    <div className="client_">
                        <a href="/projects/retail/coca-cola/" data-cursor-img={caseStudyIcon}>
                            <figure>
                                <img loading="lazy" src={Coke} className="icon icon-client" alt="" />
                            </figure>
                        </a>
                    </div>

                    <div className="client_">
                        <a href="/projects/automotive/tvs-racing/" data-cursor-img={caseStudyIcon}>
                            <figure>
                                <img loading="lazy" src={Tvs} className="icon icon-client" alt="" />
                            </figure>
                        </a>
                    </div>

                    <div className="client_">
                        <figure>
                            <img loading="lazy" src={Boat} className="icon icon-client" alt="" />
                        </figure>
                    </div>

                    <div className="client_">
                        <figure>
                            <img loading="lazy" src={Jupiter} className="icon icon-client" alt="" />
                        </figure>
                    </div>

                    <div className="client_">
                        <figure>
                            <img loading="lazy" src={Swvl} className="icon icon-client" alt="" />
                        </figure>
                    </div>

                    <div className="client_">
                        <a href="/projects/enterprise/airtel/" data-cursor-img={caseStudyIcon}>
                            <figure>
                                <img loading="lazy" src={Airtel} className="icon icon-client" alt="" />
                            </figure>
                        </a>
                    </div>

                    <div className="client_">
                        <a href="/projects/bfsi/orix/" data-cursor-img={caseStudyIcon}>
                            <figure>
                                <img loading="lazy" src={Orix} className="icon icon-client" alt="" />
                            </figure>
                        </a>
                    </div>

                    <div className="client_">
                        <figure>
                            <img loading="lazy" src={Ziploan} className="icon icon-client" alt="" />
                        </figure>
                    </div>

                    <div className="client_">
                        <figure>
                            <img loading="lazy" src={Kotak} className="icon icon-client" alt="" />
                        </figure>
                    </div>

                    <div className="client_">
                        <figure>
                            <img loading="lazy" src={Lpu} className="icon icon-client" alt="" />
                        </figure>
                    </div>

                    <div className="client_">
                        <a href="/projects/energy/statiq/" data-cursor-img={caseStudyIcon}>
                            <figure>
                                <img loading="lazy" src={statiq} className="icon icon-client" alt="" />
                            </figure>
                        </a>
                    </div>
                        <div className="client_">
                            <a href="/projects/health-wellness/itc-unikid/" data-cursor-img={caseStudyIcon}>
                                <figure>
                                    <img loading="lazy" src={Itc} className="icon icon-client" alt="" />
                                </figure>
                            </a>
                        </div>
                        <div className="client_">
                            <figure>
                                <img loading="lazy" src={HT} className="icon icon-client" alt="" />
                            </figure>
                        </div>
                        <div className="client_">
                            <figure>
                                <img loading="lazy" src={Hero} className="icon icon-client" alt="" />
                            </figure>
                        </div>
                        <div className="client_">
                            <figure>
                                <img loading="lazy" src={LivSpace} className="icon icon-client" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
        );
    };

    export default ClientGrid;