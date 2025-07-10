import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import MouseFollower from "mouse-follower";

import "./cursor.scss";

MouseFollower.registerGSAP(gsap);

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorGradientRef = useRef(null);
  const mouseFollowerRef = useRef(null);

  useEffect(() => {
    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;

    // GSAP ticker for smooth cursor animation
    const ticker = gsap.ticker.add(() => {
      posX += (mouseX - posX) / 25;
      posY += (mouseY - posY) / 25;

      if (cursorRef.current) {
        gsap.set(cursorRef.current, { css: { left: posX, top: posY } });
      }
      if (cursorGradientRef.current) {
        gsap.set(cursorGradientRef.current, { css: { left: posX, top: posY } });
      }
    });

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);

    // Initialize MouseFollower AFTER refs are set
    if (cursorRef.current && !mouseFollowerRef.current) {
      mouseFollowerRef.current = new MouseFollower({
        el: cursorRef.current,
      });

      // Override setImg and setMedia to prevent errors if media container missing or unused
      mouseFollowerRef.current.setImg = () => {};
      mouseFollowerRef.current.setMedia = () => {};
    }

    return () => {
      gsap.ticker.remove(ticker);
      document.removeEventListener("mousemove", onMouseMove);

      // Destroy MouseFollower instance if exists
      if (mouseFollowerRef.current) {
        mouseFollowerRef.current.destroy();
        mouseFollowerRef.current = null;
      }
    };
  }, []);

  // return (
  //   <>
  //     <div className="cursor" ref={cursorRef}>
  //       <div className="media"></div>
  //     </div>
  //     <div className="cursor-follower" ref={cursorGradientRef}>
  //       <div className="position-relative">
  //         <div className="ellipse_2 transition_css"></div>
  //         <div className="ellipse_1 transition_css"></div>
  //         <div className="ellipse_3 transition_css"></div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default Cursor;
