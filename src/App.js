import { useEffect, useRef, Suspense,lazy} from "react";
import { Outlet, Switch, BrowserRouter, Routes, Route } from "react-router-dom";

// Libraries
import Slider from "react-slick";
import { gsap } from "gsap";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
// import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MouseFollower from "mouse-follower";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { INDUSTRY_DATA } from "./data/industryData";

import Scrollbar from "smooth-scrollbar";

import AOS from "aos";
import "aos/dist/aos.css";

// Components
import PageNotFound from "./pages/pagenotfound/error";
import PageLoader from "./partials/loaders/page-loader";
// Partials
import Header from "./partials/header/header";
import Footer from "./partials/footer/footer";
import Cursor from "./widgets/cursor/cursor";
import LinesBehindLayout from "./partials/lines-behind-layout/LinesBehindLayout";
import ScrollToTop from "./partials/scroll-to-top/scroll-to-top";
import LocomotiveScroll from "locomotive-scroll";
import OnethingDesignSchool from "./pages/onethingDesignSchool/onethingDesignSchool";
import BangaloreSpace from "./pages/bangalore-space/bangalore-space";
import OdsForm from "./pages/onethindDesignForm/odsForm";
import OdsRegisterForm from "./pages/ods-register-form/odsRegisterForm";
import AllIndustries from "./partials/All industries/all_industries";

import Careers from "./pages/careers/careers";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import CaseStudy from "./pages/project-details/case-study";
import Faq from "./pages/faq/faq";
import Success from "./pages/success/success";
import Job from "./pages/job/job";
import Blogs from "./pages/blogs/blogs";
import BlogDetails from "./pages/blog-details/blogDetail";
import TermsConditions from "./pages/terms-conditions/terms-conditions";
import Privacy from "./pages/privacy/privacy";
import Services from "./pages/services/services";
import RedirectPage from "./partials/Redirect-page/redirect";
import Podcasts from "./pages/podcasts/podcasts";
// import Retail from "./pages/retail/retail";
// import HealthWellness from "./pages/health-wellness/healthWellness";
// import Bfsi from "./pages/bfsi/bfsi";
// import Energy from "./pages/energy/energy";
// import Enterprise from "./pages/enterprise/enterprise";
import Podcast from "./pages/podcast/podcast";
import Search from "./pages/search/search";
import Audit from "./pages/ux-audit/uxAudit";
import Industries from "./pages/industry-landing/industries";
import Landing from "./pages/landing-page/landingPage";





const App = () => {
  // const Home=lazy(()=>import("./pages/home/home"))
  // const About = lazy(() => import('./pages/about/about'));
  // const Contact=lazy(()=>import('./pages/contact/contact'))
  // const Projects=lazy(()=>import("./pages/projects/projects"))
  // const CaseStudy=lazy(()=>import("./pages/project-details/case-study"))
  // const Faq=lazy(()=>import("./pages/faq/faq"))
  // const Success=lazy(()=>import("./pages/success/success"))
  // const Careers=lazy(()=>import('./pages/careers/careers'))
  
  // const Job =lazy(()=>import("./pages/job/job"))
  // const Blogs=lazy(()=>import("./pages/blogs/blogs"))
  // const BlogDetails=lazy(()=>import("./pages/blog-details/blogDetail"))
  // const TermsConditions=lazy(()=>import('./pages/terms-conditions/terms-conditions'))
  // const Privacy=lazy(()=>import("./pages/privacy/privacy"))
  // const Services=lazy(()=>import( "./pages/services/services"))
  // const RedirectPage=lazy(()=>import("./partials/Redirect-page/redirect"))
  // const Podcasts=lazy(()=>import("./pages/podcasts/podcasts"))
  // const Retail=lazy(()=>import("./pages/retail/retail"))
  // const HealthWellness=lazy(()=>import("./pages/health-wellness/healthWellness"))
  // const Bfsi=lazy(()=>import('./pages/bfsi/bfsi'))
  // const Energy=lazy(()=>import('./pages/energy/energy'))
  // const Enterprise=lazy(()=>import('./pages/enterprise/enterprise'))
  // const Podcast=lazy(()=>import("./pages/podcast/podcast"))

  // const Search=lazy(()=>import('./pages/search/search'))
  // const Audit=lazy(()=>import("./pages/ux-audit/uxAudit"))
  // const Industries=lazy(()=>import("./pages/industry-landing/industries"))
  // const Landing=lazy(()=>import("./pages/landing-page/landingPage"))
  
  
  
  useEffect(() => {
    window.scroll({behavior:'smooth'})
  }, [])


  const boxRef = useRef();
  const containerRef = useRef(null);
  MouseFollower.registerGSAP(gsap);
  const cursor = new MouseFollower();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    // const locoScroll = new LocomotiveScroll({
    //   el: document?.querySelector(".App"),
    //   smooth: true,
    // });
    // gsap.to(boxRef.current, { rotation: "+=90" });
    // gsap.to(boxRef.current, {rotation: "360"});
    // const locoScroll = new locomotiveScroll({
    //   el: containerRef.current,
    //   smooth: true,
    //   overwrite: "auto",
    //   multiplier: 1,
    // })
    // locoScroll.on("scroll", () => {
    //   console.log("Scrolling");
    // });
    // AOS.init();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div ref={containerRef} data-scroll-container className="">
      <Cursor />
      {/* onething2022 */}
      <BrowserRouter basename={"/"}>
        <ScrollToTop />
        <Suspense fallback={<PageLoader/>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<Home appRef={containerRef} cursor={cursor} />}
            />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route
              path="projects/:catSlug/:caseStudy"
              element={<CaseStudy />}
            />
            <Route path="contact" element={<Contact cursor={cursor} />} />
            <Route path="faq" element={<Faq />} />
            <Route path="success" element={<Success />} />
            <Route path="careers" element={<Careers />} />
            <Route path="jobs/:jobSlug" element={<Job />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:blogSlug" element={<BlogDetails />} />
            <Route path="terms-conditions" element={<TermsConditions />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="ux-audit" element={<Audit />} />
            <Route path="ui-ux-design-services" element={<Services />} />
            <Route path="school" element={<OnethingDesignSchool />} />
            <Route path="ui-ux-design-company-in-bangalore" element={<BangaloreSpace />} />
            <Route path="school" element={<OnethingDesignSchool />} />
            <Route path="become-mentor" element={<OdsForm />} />
            <Route path="register" element={<OdsRegisterForm />} />
            <Route path="podcast" element={<Podcasts />} />
            <Route path="retail" element={<AllIndustries title="retail" Data={INDUSTRY_DATA.retail} />} />
            <Route path="health-and-wellness" element={<AllIndustries title="health_and_wellness" Data={INDUSTRY_DATA.health_and_wellness} />} />
            <Route path="bfsi" element={<AllIndustries title="bfsi" Data={INDUSTRY_DATA.bfsi} />} />
            <Route path="energy" element={<AllIndustries title="energy" Data={INDUSTRY_DATA.energy} />} />
            <Route path="enterprise" element={<AllIndustries title="enterprise" Data={INDUSTRY_DATA.enterprise} />} />
            <Route path="search" element={<Search />} />
            <Route path="podcast/:podcastSlug" element={<Podcast />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="ui-ux-design-agency" element={<Landing />} />
            <Route path="industries" element={<Industries />} />
            <Route path="category/featured_blog" element={<RedirectPage />} />
            <Route path="services" element={<RedirectPage />} />

            <Route path="category/featured_projects" element={<RedirectPage />} />
            <Route path="category/process_blogs" element={<RedirectPage />} />
            <Route path="category/projects/automotive" element={<RedirectPage />} />
            <Route path="category/projects/bfsi" element={<RedirectPage />} />
            <Route path="category/projects/enterprise" element={<RedirectPage />} />
            <Route path="category/projects/consumer_products" element={<RedirectPage />} />
            <Route path="category/projects/healthcare" element={<RedirectPage />} />
            <Route path="category/uncategorized" element={<RedirectPage />} />
            <Route path="category/projects" element={<RedirectPage />} />
            <Route path="blogs/10-things-to-consider-when-designing-ux-for-apps" element={<RedirectPage />} />
            <Route path="category/uncategorized" element={<RedirectPage />} />

          </Route>
          {/*{window.location.pathname !== '/ui-ux-design-agency' && <Footer /> }*/}
        </Routes>
        </Suspense>
      </BrowserRouter>
      {/*<Home />*/}
      {/*<div className="box" ref={boxRef}>Hello</div>*/}
    </div>
  );
};

const Layout = () => {
  const containerRef = useRef(null);
  return (
    <>
    {
      window.location.pathname==='/ui-ux-design-agency'? 
      '':<Header />}
      <LinesBehindLayout />
      <Outlet />
      {
      window.location.pathname==='/ui-ux-design-agency'? 
      '':<Footer />}
    </>
  );
};

export default App;
