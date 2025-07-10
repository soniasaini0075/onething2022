import "./related-blogs.scss";
import { convertToWebPURL } from "../../utils/global_fun";
// import primaryCtaArrow from "../../assets/img/global/primary-arrow.svg";
// import ctaArrow from "../../assets/img/global/grad-arrow.svg";
// import primaryArrow from "../../assets/img/global/red-arrow.svg";
// import blogsDemo from "../../assets/img/blogs/blog-demo.png";

const RelatedBlogs = ({ relatedBlogs }) => {
  return (
    <>
      <div className="related-blogs-wrapper">
        <section className="related-blogs-main">
          <div className="div-wrap">
            <div className="container">
              <div
                id="grad_one_related_blogs"
                className="grad w small gr-box1"
              ></div>
              <div
                id="grad_two_related_blogs"
                className="grad type-2 small gr-box2"
              ></div>
              <div className="left_container">
                <h2 className="section-heading">Related Blogs</h2>
              </div>
              <div className="top-related-blogs">
                <div className="info-container">
                  <div className="accordion-info">
                    {relatedBlogs.slice(0, 3).map((blog, i) => {
                      return (
                        <a
                          href={"/blogs/" + blog.slug + "/"}
                          className="qodef-m-navigation"
                          key={i}
                        >
                          <div className="qodef-m-title-image-wrapper">
                            <div className="qode-title">
                              <h3
                                className="blog-title"
                                dangerouslySetInnerHTML={{
                                  __html: blog.title.rendered,
                                }}
                              ></h3>
                              <p className="blog-details">
                                <span className="author">
                                  {blog._embedded.author[0].name}
                                </span>
                                -
                                <span className="reading-minutes">
                                  3 mins read
                                </span>
                              </p>
                            </div>
                            <div className="qodef-m-image">
                              <figure>
                                <img
                                  loading="lazy"
                                  src={convertToWebPURL(
                                    blog.jetpack_featured_media_url
                                  )}
                                  alt={blog.title.rendered}
                                />
                              </figure>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default RelatedBlogs;
