import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {

    if (window.location.pathname === "/services") {
      navigate("/ui-ux-design-services");
    } else if (
      window.location.pathname === "/category/featured_blog" ||
      window.location.pathname === "/category/process_blogs"
    ) {
      navigate("/blogs");
    } else if (
      window.location.pathname === "/category/featured_projects" ||
      window.location.pathname === "/category/projects/automotive" ||
      window.location.pathname === "/category/projects/bfsi" ||
      window.location.pathname === "/category/projects/enterprise" ||
      window.location.pathname === "/category/projects/consumer_products" ||
      window.location.pathname === "/category/projects/healthcare" ||
      window.location.pathname === "/category/projects" ||
      window.location.pathname ===
        "/blogs/10-things-to-consider-when-designing-ux-for-apps"
    ) {
      navigate("/projects");
    } else if (window.location.pathname === "/category/uncategorized") {
      navigate("/");
    }
  }, [navigate]);

  return <></>;
};

export default Redirect;
