import { useEffect, useRef } from "react";
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";

// Libraries
import Slider from "react-slick";
import { gsap } from "gsap";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
// import { TextPlugin } from "gsap/TextPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";

// Partials
import Header from "./partials/header/header";
import Footer from "./partials/footer/footer";
import Cursor from "./widgets/cursor/cursor";

const App = () => {
  const boxRef = useRef();
  const containerRef = useRef(null)
  useEffect(() => {
    // gsap.to(boxRef.current, { rotation: "+=90" });
    gsap.to(boxRef.current, {rotation: "360"});
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
      // onLocationChange={scroll => scroll.scrollTo(0, { duration: 0, disableLerp: true })} // If you want to reset the scroll position to 0 for example
      // onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on 
    >
      <div className="App" data-scroll-container ref={containerRef}>
        {/* <Cursor /> */}
        <BrowserRouter basename={'/'}>

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <Home /> */}
        {/* <div className="box" ref={boxRef}>Hello</div> */}
      </div>
    </LocomotiveScrollProvider>
  );
}

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
