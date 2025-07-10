import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ history }) {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // console.log("Scroll To Top Working");
        window.scrollTo(0, 0);
    }, [pathname]);

  return (null);
}

export default ScrollToTop;