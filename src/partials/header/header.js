import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation, Outlet, Link } from "react-router-dom";
import "./header.scss";
// Images
import logoIcon from "../../assets/img/logo/logo.webp";
import odsLogo from "../../assets/img/logo/odsLogo.svg";
import menuPodcastIcon from "../../assets/img/svg/org_ply.svg";
import menuBlogIcon from "../../assets/img/svg/org_chat.svg";
import hamGrad1 from "../../assets/img/menu/hum_grd1.webp";
import hamGrad2 from "../../assets/img/menu/hum_grd2.webp";

const Header = () => {
  const [isMenuActive, menuActiveHandle] = useState(false);
  const [isMenuTriggered, setTriggered] = useState(false);

  const [isStikyMenu, handleStickyMenu] = useState(true);

  const [y, setY] = useState(window.scrollY);

  const handleMenu = () => {
    if (!isMenuTriggered) {
      setTriggered(true);
      document.body.style.overflowY = "hidden";
    } else {
      setTriggered(false);
      document.body.style.overflowY = "auto";
    }
    menuActiveHandle(!isMenuActive);
  };

  const closeMenu = () => {
    document.body.style.overflowY = "auto";
    menuActiveHandle(false);
  };

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y < 100) {
        handleStickyMenu(true);
      } else {
        if (y > window.scrollY) {
          handleStickyMenu(true);
        } else if (y < window.scrollY) {
          handleStickyMenu(false);
          setTimeout(() => {
            handleStickyMenu(true);
          }, 500);

          // clearTimeout(scrollTimeout);
        }
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);

    // scroll.on('call', function() {
    //    console.log("scroling");
    // });
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);

  return (
    <>
      <header className={`header ${isStikyMenu ? "" : "sticky"}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom-0">
          <Link className="navbar-brand" aria-label="navbar-brand" to="/">
            {/*<img loading="lazy" src={logoIcon} alt="Onething Design" />*/}
            <img loading="lazy" src={useLocation().pathname == "/school" ? odsLogo : logoIcon} alt="" />
            <span>onething design Studio</span>
          </Link>

          {/* {!isMenuActive && (
            <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenu}
            >
            <span className="navbar-toggler-icon"></span>
          </button>
          )} */}
          <div className="cm-wrap">
            <NavLink
              to="/contact"
              className="cm-contact nav-link active always-active" onClick={closeMenu}
            >
              Get in touch
            </NavLink>
            <button
              className={
                "humberger_trigger mobile" + (isMenuActive ? " triggered" : "")
              }
              type="button"
              aria-label="menu-button"
              onClick={handleMenu}
            >
              <span className="bar"></span>
            </button>
          </div>
          {/* {isMenuActive && (
<button
className="navbar-toggler"
type="button"
onClick={handleMenu}
>
<span className="bar"></span>
</button>
)} */}
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul
  className={`navbar-nav ms-auto hum_menu ${
    isMenuActive ? "active" : ""
  }`}
  >
  <li className="nav-item">
    <NavLink to="/about" className="nav-link">
      About
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/projects" className="nav-link">
      Projects
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/ui-ux-design-services" className="nav-link">
      Services
    </NavLink>
  </li>
  <li className="nav-item">
    <NavLink
    to="/contact"
    className="nav-link active always-active"
    style={{textTransform: 'none'}}
    >
    Get in touch
  </NavLink>
</li>
<li className="nav-item">
  {
    <button
    className={
      "humberger_trigger" + (isMenuActive ? " triggered" : "")
    }
    aria-label="menu-button"
    type="button"
    onClick={handleMenu}
    >
    <span className="bar"></span>
  </button>
  // !isMenuActive ?
  // <img loading="lazy" className="humberger_btn" onClick={() => menuActiveHandle(true)} src={hamBurger} alt="humberger-icon" /> :
  // <img loading="lazy" class="close_btn" onClick={closeMenu} src={closeBtn} alt="close-icon" />
}
</li>
</ul>
</div>
</nav>
<div
className={`humberger_grad ${
  isMenuActive ? "active" : isMenuTriggered ? "inactive" : ""
}`}
></div>
<div className={`hamberger-menu ${isMenuActive ? "active" : ""}`}>
  <div className="centered_txt">
    <div className="container position-relative">
      <div className="row justify-content-end tp_menu_list">
        <div className="col-md-6">
          <ul className="list-unstyled menu_list">
            <li>
              <Link to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/projects" onClick={closeMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/ui-ux-design-services" onClick={closeMenu}>Services</Link>
            </li>
            <li>
              <Link to="/careers" onClick={closeMenu}>Careers</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3 cst_col_3">
          <div className="sub_menu">
            <div className="industries-menu">
              <h6>INDUSTRIES</h6>
              <ul className="list-unstyled industries_menu_list">
                <li>
                  <a href="/bfsi">BFSI</a>
                </li>
                <li>
                  <a href="/retail">
                    Retail
                  </a>
                </li>
                <li>
                  <a href="/health-and-wellness">
                    Health Technology
                  </a>
                </li>
                <li>
                  <a href="/enterprise">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="/energy">Energy</a>
                </li>
                <span>Coming Soon</span>
                <div className="coming-soon-listing">
                <li>
                  <a href="#">
                    Media
                  </a>
                </li>
                <li>
                  <a href="#">Automotive</a>
                </li>
                </div>
              </ul>
            </div>
            <div className="curated-menu">
              <h6>Curated</h6>
              <ul className="list-unstyled curated_menu_list">
                <li>
                  <Link to="/podcast" onClick={closeMenu}>
                  <img loading="lazy" src={menuPodcastIcon}   alt="play-icon" />
                  Thoughtcast
                </Link>
              </li>
              <li>
                <Link to="/blogs" onClick={closeMenu}>
                <img loading="lazy" src={menuBlogIcon}  alt="play-icon" />
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row blw_txt">
    <div className="col-md-12">
      <div className="d-flex flex-wrap content-grid">
        <span className="cpy_rgt_txt">
          © {date} Onething. All rights reserved.
        </span>
        <ul className="list-unstyled d-flex flex-wrap hamberger_social_links ml-auto">
          <li>
            <a
            href="https://www.linkedin.com/company/onething-design/"
            target="_blank" rel="noreferrer"
            >
            <svg
            className="linkedin svg-icon"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.1055 12.4272C10.1055 11.8114 10.3501 11.2209 10.7855 10.7855C11.2209 10.3501 11.8114 10.1055 12.4272 10.1055H35.5707C35.8759 10.105 36.1781 10.1647 36.4602 10.2811C36.7422 10.3976 36.9985 10.5686 37.2144 10.7842C37.4303 10.9999 37.6015 11.256 37.7183 11.5379C37.8351 11.8198 37.8951 12.122 37.8949 12.4272V35.5707C37.8953 35.8759 37.8354 36.1782 37.7188 36.4603C37.6022 36.7423 37.4311 36.9986 37.2154 37.2145C36.9996 37.4304 36.7434 37.6016 36.4614 37.7183C36.1794 37.8351 35.8772 37.8951 35.572 37.8949H12.4272C12.1222 37.8949 11.8202 37.8349 11.5384 37.7181C11.2566 37.6013 11.0006 37.4302 10.785 37.2145C10.5694 36.9988 10.3984 36.7427 10.2818 36.4609C10.1652 36.179 10.1053 35.877 10.1055 35.572V12.4272ZM21.105 20.7008H24.868V22.5905C25.4112 21.5042 26.8006 20.5265 28.8886 20.5265C32.8916 20.5265 33.8402 22.6903 33.8402 26.6604V34.0145H29.7893V27.5648C29.7893 25.3038 29.2461 24.028 27.8667 24.028C25.953 24.028 25.1573 25.4036 25.1573 27.5648V34.0145H21.105V20.7008ZM14.1577 33.8415H18.2099V20.5265H14.1577V33.8402V33.8415ZM18.7897 16.1838C18.7973 16.5307 18.7356 16.8757 18.6081 17.1985C18.4806 17.5213 18.2899 17.8153 18.0472 18.0634C17.8046 18.3115 17.5148 18.5086 17.1949 18.6432C16.875 18.7777 16.5315 18.8471 16.1844 18.8471C15.8374 18.8471 15.4938 18.7777 15.1739 18.6432C14.8541 18.5086 14.5643 18.3115 14.3216 18.0634C14.0789 17.8153 13.8882 17.5213 13.7607 17.1985C13.6333 16.8757 13.5715 16.5307 13.5792 16.1838C13.5942 15.5028 13.8752 14.8547 14.3622 14.3783C14.8491 13.902 15.5032 13.6353 16.1844 13.6353C16.8656 13.6353 17.5197 13.902 18.0067 14.3783C18.4936 14.8547 18.7747 15.5028 18.7897 16.1838V16.1838Z"
            fill="url(#paint0_linear_1701_4217)"
            />
            <defs>
              <linearGradient
              id="paint0_linear_1701_4217"
              x1="10.1055"
              y1="24.0002"
              x2="37.8949"
              y2="24.0002"
              gradientUnits="userSpaceOnUse"
              >
              <stop stopColor="#EF8081" />
              <stop offset="0.619792" stopColor="#F63132" />
              <stop offset="1" stopColor="#9F1689" />
            </linearGradient>
          </defs>
        </svg>
      </a>
    </li>
    <li>
      <a
      href="https://www.instagram.com/onething.design/"
      target="_blank" rel="noreferrer"
      >
      <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
      d="M23.9978 19.1975C21.3537 19.1975 19.1958 21.3553 19.1958 23.9995C19.1958 26.6437 21.3537 28.8015 23.9978 28.8015C26.642 28.8015 28.7999 26.6437 28.7999 23.9995C28.7999 21.3553 26.642 19.1975 23.9978 19.1975ZM38.4003 23.9995C38.4003 22.011 38.4183 20.0405 38.3066 18.0555C38.1949 15.75 37.669 13.7038 35.9831 12.0179C34.2935 10.3284 32.251 9.80602 29.9454 9.69434C27.9569 9.58267 25.9864 9.60068 24.0015 9.60068C22.0129 9.60068 20.0424 9.58267 18.0575 9.69434C15.7519 9.80602 13.7058 10.332 12.0198 12.0179C10.3303 13.7074 9.80797 15.75 9.6963 18.0555C9.58462 20.0441 9.60263 22.0146 9.60263 23.9995C9.60263 25.9844 9.58462 27.9585 9.6963 29.9435C9.80797 32.249 10.3339 34.2952 12.0198 35.9811C13.7094 37.6706 15.7519 38.193 18.0575 38.3047C20.046 38.4163 22.0165 38.3983 24.0015 38.3983C25.99 38.3983 27.9605 38.4163 29.9454 38.3047C32.251 38.193 34.2971 37.667 35.9831 35.9811C37.6726 34.2916 38.1949 32.249 38.3066 29.9435C38.4219 27.9585 38.4003 25.988 38.4003 23.9995ZM23.9978 31.388C19.9091 31.388 16.6093 28.0882 16.6093 23.9995C16.6093 19.9108 19.9091 16.611 23.9978 16.611C28.0866 16.611 31.3864 19.9108 31.3864 23.9995C31.3864 28.0882 28.0866 31.388 23.9978 31.388ZM31.689 18.0339C30.7344 18.0339 29.9634 17.263 29.9634 16.3084C29.9634 15.3537 30.7344 14.5828 31.689 14.5828C32.6436 14.5828 33.4145 15.3537 33.4145 16.3084C33.4148 16.535 33.3704 16.7596 33.2838 16.969C33.1972 17.1785 33.0701 17.3689 32.9098 17.5291C32.7495 17.6894 32.5591 17.8165 32.3497 17.9031C32.1402 17.9898 31.9157 18.0342 31.689 18.0339Z"
      fill="url(#paint0_linear_1701_4219)"
      />
      <defs>
        <linearGradient
        id="paint0_linear_1701_4219"
        x1="9.60156"
        y1="23.9995"
        x2="38.4019"
        y2="23.9995"
        gradientUnits="userSpaceOnUse"
        >
        <stop stopColor="#EF8081" />
        <stop offset="0.619792" stopColor="#F63132" />
        <stop offset="1" stopColor="#9F1689" />
      </linearGradient>
    </defs>
  </svg>
</a>
</li>
<li>
  <a
  href="https://open.spotify.com/show/1bFew0EsLhxbfPjswN8syn"
  target="_blank" rel="noreferrer"
  >
  <svg
  className="spotify svg-icon"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
  d="M23.9965 9.59961C16.0597 9.59961 9.60254 16.058 9.60254 23.9948C9.60254 31.9388 16.0597 38.3996 23.9965 38.3996C31.9405 38.3996 38.4025 31.9376 38.4025 23.9948C38.4025 16.058 31.9405 9.59961 23.9965 9.59961ZM16.6921 29.2844C18.3402 28.7795 20.054 28.5215 21.7777 28.5188C24.6745 28.5188 27.5341 29.2532 30.0481 30.6428C30.1981 30.7244 30.3337 30.9932 30.3961 31.3292C30.4561 31.6652 30.4321 32.0096 30.3337 32.1884C30.2874 32.2735 30.2246 32.3485 30.149 32.4091C30.0734 32.4697 29.9866 32.5147 29.8935 32.5414C29.8004 32.5682 29.7029 32.5763 29.6067 32.5651C29.5105 32.554 29.4174 32.5238 29.3329 32.4764C27.4864 31.4634 25.4552 30.8316 23.3598 30.6185C21.2645 30.4053 19.1477 30.6152 17.1349 31.2356C17.0425 31.2655 16.9451 31.2767 16.8484 31.2685C16.7516 31.2604 16.6574 31.2331 16.5713 31.1882C16.4852 31.1433 16.4089 31.0817 16.3468 31.007C16.2847 30.9324 16.2381 30.8461 16.2097 30.7532C16.0813 30.3332 16.3465 29.3972 16.6921 29.2844ZM16.0645 23.9804C17.9264 23.4746 19.8472 23.2183 21.7765 23.2184C25.2493 23.2184 28.6969 24.0584 31.7485 25.6496C31.9633 25.7576 32.1205 25.9424 32.1925 26.168C32.2289 26.2819 32.2422 26.402 32.2314 26.5211C32.2207 26.6402 32.1863 26.756 32.1301 26.8616C31.8577 27.3944 31.5385 27.7532 31.3381 27.7532C31.1919 27.7526 31.048 27.7172 30.9181 27.65C28.0972 26.1772 24.96 25.4136 21.7777 25.4252C20.0077 25.4217 18.2452 25.6578 16.5385 26.1272C16.4247 26.1583 16.3058 26.1667 16.1887 26.1519C16.0716 26.1371 15.9586 26.0994 15.8561 26.0409C15.7535 25.9824 15.6636 25.9042 15.5912 25.811C15.5189 25.7177 15.4657 25.6111 15.4345 25.4972C15.3001 24.9908 15.6085 24.1052 16.0645 23.9804V23.9804ZM15.9025 20.5172C15.7675 20.5519 15.6269 20.5594 15.4889 20.5395C15.3509 20.5195 15.2182 20.4724 15.0985 20.4009C14.9787 20.3294 14.8744 20.2349 14.7914 20.1228C14.7084 20.0108 14.6484 19.8834 14.6149 19.748C14.4673 19.1504 14.8405 18.4568 15.3829 18.32C17.4751 17.8047 19.6218 17.5432 21.7765 17.5412C25.9165 17.5412 29.8837 18.4724 33.5653 20.3096C33.8183 20.4354 34.0109 20.6565 34.101 20.9242C34.191 21.192 34.171 21.4846 34.0453 21.7376C33.8737 22.0832 33.5017 22.4552 33.0913 22.4552C32.9304 22.4546 32.7715 22.419 32.6257 22.3508C29.2592 20.662 25.5429 19.7881 21.7765 19.7996C19.8145 19.7996 17.8381 20.0408 15.9025 20.5172V20.5172Z"
  fill="url(#paint0_linear_1701_4221)"
  />
  <defs>
    <linearGradient
    id="paint0_linear_1701_4221"
    x1="9.60254"
    y1="23.9996"
    x2="38.4025"
    y2="23.9996"
    gradientUnits="userSpaceOnUse"
    >
    <stop stopColor="#EF8081" />
    <stop offset="0.619792" stopColor="#F63132" />
    <stop offset="1" stopColor="#9F1689" />
  </linearGradient>
</defs>
</svg>
</a>
</li>
<li>
  <a
  href="https://www.youtube.com/channel/UC-W601M2PO8qJhwgnlm66Vg"
  target="_blank" rel="noreferrer"
  >
  <svg width="38" height="42" viewBox="0 0 46 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.6131 14.1886V18.9899C45.5828 19.3251 45.54 19.6603 45.523 19.9965C45.4071 22.303 45.252 24.6042 44.8071 26.8778C44.3069 29.434 42.8072 31.0523 40.2778 31.6559C39.3755 31.8707 38.4375 31.9893 37.5103 32.0366C33.9876 32.2158 30.464 32.4182 26.9386 32.4779C23.308 32.5394 19.6748 32.4565 16.0424 32.4128C12.7221 32.3727 9.40895 32.2265 6.11004 31.8012C3.40494 31.4517 1.4363 29.714 0.859434 27.0508C0.400262 24.9315 0.213027 22.7747 0.162206 20.6161C0.098011 17.878 0.056106 15.1337 0.17558 12.3992C0.267414 10.2781 0.519736 8.14983 0.884399 6.05637C1.34625 3.40209 3.01888 1.79097 5.67316 1.29168C6.83402 1.07324 8.01895 0.940389 9.19853 0.879761C12.2621 0.721948 15.3274 0.564136 18.3945 0.520447C21.9519 0.470518 25.5103 0.522231 29.0686 0.56681C32.5958 0.610499 36.1167 0.767419 39.6225 1.20698C42.1519 1.52438 44.2115 3.23714 44.7028 5.73896C45.063 7.57565 45.2163 9.45513 45.4241 11.3195C45.5302 12.2708 45.5534 13.2319 45.614 14.1886H45.6131ZM18.2054 23.2535C22.1811 20.9897 26.088 18.7643 30.0646 16.4996C26.0693 14.2252 22.1623 12.0006 18.2054 9.74846V23.2535Z" fill="black"/>
  </svg>
</a>
</li>
<li>
  <a
  href="https://dribbble.com/onething-design"
  target="_blank" rel="noreferrer"
  >
  <svg
  className="dribble svg-icon"
  width="48"
  height="48"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <path
  d="M24.001 10C16.2688 10 10.001 16.2678 10.001 24C10.001 31.7322 16.2688 38 24.001 38C31.7332 38 38.001 31.7322 38.001 24C38.001 16.2678 31.7332 10 24.001 10ZM24.001 12.0286C27.0509 12.0286 29.8348 13.1696 31.9488 15.047C30.3955 17.0959 28.0358 18.4602 25.6712 19.3835C24.3326 16.9456 22.8324 14.6001 21.1807 12.3625C22.1045 12.1398 23.0514 12.0277 24.0017 12.0286H24.001ZM18.9078 13.1626C20.4688 15.4978 21.9808 17.6629 23.3619 20.1136C19.8689 21.0187 15.9216 21.5619 12.2753 21.571C13.0439 17.8414 15.5492 14.7446 18.9078 13.1633V13.1626ZM33.2767 16.4316C35.0066 18.5456 35.9582 21.1894 35.9724 23.9209C33.2032 23.3749 30.4494 23.2321 27.6452 23.5149C27.3302 22.7288 26.948 21.9819 26.5819 21.1769C28.999 20.2018 31.5834 18.533 33.2767 16.4309V16.4316ZM24.3342 21.9658C24.6338 22.6028 24.981 23.279 25.3072 23.9699C21.4082 25.6891 17.2607 27.9865 15.1082 32.0143C13.0418 29.7276 11.9405 26.7299 12.0352 23.6493C16.2107 23.6297 20.3092 23.1075 24.3342 21.9658V21.9658ZM30.6608 25.2299C32.4029 25.2303 34.1379 25.4538 35.8233 25.8949C35.5634 27.5163 34.9727 29.0668 34.088 30.4501C33.2032 31.8335 32.0433 33.0199 30.6804 33.9358C30.0378 31.0133 29.4253 28.2168 28.3424 25.3972C29.1099 25.2854 29.8845 25.2292 30.6601 25.2292L30.6608 25.2299ZM35.8856 25.4469C35.8772 25.5155 35.8695 25.5827 35.8597 25.6499C35.8695 25.582 35.8779 25.5148 35.8856 25.4469ZM26.1276 25.9439C27.2308 28.795 28.0967 31.952 28.6777 35.0243C27.1987 35.6518 25.6083 35.9742 24.0017 35.9721C21.3402 35.9759 18.754 35.0888 16.6552 33.4521C18.8231 29.9353 22.181 27.2739 26.1269 25.9446L26.1276 25.9439Z"
  fill="url(#paint0_linear_1701_4225)"
  />
  <defs>
    <linearGradient
    id="paint0_linear_1701_4225"
    x1="10.001"
    y1="24"
    x2="38.001"
    y2="24"
    gradientUnits="userSpaceOnUse"
    >
    <stop stopColor="#EF8081" />
    <stop offset="0.619792" stopColor="#F63132" />
    <stop offset="1" stopColor="#9F1689" />
  </linearGradient>
</defs>
</svg>
</a>
</li>
</ul>
</div>
</div>
</div>
<div className="grad-img hum_grad1 grad">
  <img loading="lazy" src={hamGrad1} alt="grad-img" />
</div>
<div className="grad-img hum_grad2 grad">
  <img loading="lazy" src={hamGrad2} alt="grad-img" />
</div>
</div>
</div>
</div>
</header>
<div className="setheight"></div>
</>
);
};
export default Header;
