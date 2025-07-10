// import "./blog-details.scss";

// import React from 'react';
// import { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";

// import { Controller, Scene } from "react-scrollmagic";
// import { Tween, Timeline } from "react-gsap";

// import { connect } from "react-redux";
// import { fetchBlog, fetchPodcasts } from "../../redux/actions";

// import Newsletter from "../../partials/newsletter/newsletter";
// import RelatedBlogs from "../../partials/related-blogs/RelatedBlogs";

// // import bannerBig from "../../assets/img/blogs/inner-blog-demo.jpg";
// // import authorImage from "../../assets/img/blogs/user.webp";
// // import contentImage from "../../assets/img/blogs/blog-content-demo.jpg";
// // import twitter from "../../assets/img/icons/twitter.svg";
// // import instagram from "../../assets/img/icons/instagram.svg";
// // import linkedin from "../../assets/img/icons/linkedin.svg";
// import ctaArrow from "../../assets/img/global/grad-arrow.svg";
// import PageLoader from "../../partials/loaders/page-loader";
// import { addPageMetas } from "../../utils/global_fun";
// import { Helmet } from "react-helmet";
// import PreferredPodcast from "./PreferredPodcast";

// const BlogDetails = ({ blogState, fetchBlog, podcastState, fetchPodcasts }) => {
//   const { blog, relatedBlogs, loading } = blogState;
//   const { podcastList, totalPodcastCount, loaded } = podcastState;
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetchPodcasts(page);
//     setPage(page + 1);
//   }, []);

//   let { blogSlug } = useParams();
//   useEffect(() => {
//     document.body.classList.add("blog-details-page", "single-blog-page");
//     fetchBlog(blogSlug);
//     console.log(relatedBlogs, "relatedblogs");
//   }, []);

//   useEffect(() => {
//     if (blog != null) {
//       addPageMetas(
//         blog.yoast_head_json.title,
//         blog.yoast_head_json.description
//       );
//     }
//   }, [blog]);
//   useEffect(() => {
//     const content = document.getElementById("html-content");
//     console.log(content, "content");

//     if (content) {
//       const divwrap = content.getElementsByTagName("img");
//       for (let imageElem of divwrap) {
//         imageElem.src = imageElem.src.replace("api", "dashboard");
//       }
//     }
//   });

//   let location = useLocation();

//   window.addEventListener("scroll", function () {
//     // to add animation to selected element if the element lies in the viewport.
//     var isInViewport = function (elem) {
//       var bounding = elem?.getBoundingClientRect();
//       return (
//         bounding?.top >= 0 &&
//         bounding?.left >= 0 &&
//         bounding?.bottom <=
//           (window?.innerHeight || document?.documentElement?.clientHeight) &&
//         bounding?.right <=
//           (window?.innerWidth || document?.documentElement?.clientWidth)
//       );
//     };

//     let first_grad = document?.getElementById("first_grad");
//     let grad_one_related_blogs = document?.getElementById(
//       "grad_one_related_blogs"
//     );
//     let grad_two_related_blogs = document?.getElementById(
//       "grad_two_related_blogs"
//     );
//     let newsletter_grad_one = document?.getElementById("newsletter_grad_one");
//     let newsletter_grad_two = document?.getElementById("newsletter_grad_two");

//     if (isInViewport(first_grad)) {
//       first_grad?.classList.replace("type-2", "type-3");
//     } else {
//       first_grad?.classList.replace("type-3", "type-2");
//     }
//     if (isInViewport(grad_one_related_blogs)) {
//       grad_one_related_blogs?.classList.replace("w", "type-3");
//     } else {
//       grad_one_related_blogs?.classList.replace("type-3", "w");
//     }
//     if (isInViewport(grad_two_related_blogs)) {
//       grad_two_related_blogs?.classList.replace("type-2", "type-3");
//     } else {
//       grad_two_related_blogs?.classList.replace("type-3", "type-2");
//     }
//     if (isInViewport(newsletter_grad_one)) {
//       newsletter_grad_one?.classList.replace("mesh-gradient", "type-3");
//     } else {
//       newsletter_grad_one?.classList.replace("type-3", "mesh-gradient");
//     }
//     if (isInViewport(newsletter_grad_two)) {
//       newsletter_grad_two?.classList.replace("type-2", "type-3");
//     } else {
//       newsletter_grad_two?.classList.replace("type-3", "type-2");
//     }
//   });

//   return (
//     <>
//       <Helmet>
//         <link
//           rel="preload dns-prefetch canonical"
//           href={`https://www.onething.design${location?.pathname}`}
//         ></link>
//       </Helmet>
//       {blog == null && <PageLoader />}
//       {blog != null && (
//         <div className="single-blog-wrapper page-wrapper">
//           <section className="title-details blur-overlay">
//             <div className="div-wrap">
//               <div className="container">
//                 <div
//                   id="first_grad"
//                   className="grad type-2 small gr-box1"
//                 ></div>
//                 <div className="left-container">
//                   <h1>{blog.title.rendered}</h1>
//                   <p className="blog-details">
//                     <span className="author">
//                       {blog._embedded.author[0].name}
//                     </span>
//                     -<span className="reading-minutes">3 mins read</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <section className="inner-banner-single-blog blur-overlay">
//             <div className="div-wrap">
//               <figure
//                 style={{
//                   background: `url(${blog.jetpack_featured_media_url})`,
//                 }}
//               ></figure>
//             </div>
//           </section>
//           <div className="blur-overlay">
//             <div className="container">
//               <div className="blog-content-main">
//                 <div className="sidebar-blog-details">
//                   <div className="author-details same-mb-64">
//                     <figure>
//                       <img
//                         loading="lazy"
//                         src={blog._embedded.author[0].simple_local_avatar[96]}
//                         className="img-fluid"
//                         alt="Blog Title : Author Name"
//                       />
//                       <figcaption>
//                         <p className="fs-18">
//                           {blog._embedded.author[0].name}
//                           <span>{blog._embedded.author[0].description}</span>
//                         </p>
//                       </figcaption>
//                     </figure>
//                   </div>
//                   <div className="tags-wrapper same-mb-64">
//                     <ul className="tags-list">
//                       {blog._embedded["wp:term"][1].map((tag, i) => {
//                         return (
//                           <li key={tag.id}>
//                             <span className="tag_">{tag.name}</span>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   </div>
//                   {/* <div className="podcast-large-cta">
//                     <a href={`/podcast/${podcastList[0]?.slug}`}>
//                       <div className="latest-podcast">
//                         <span className="tag_ text-initial">Podcast</span>
//                         <p className="fs-20">
//                           {podcastList[0]?.title?.rendered ?? ""}
//                         </p>
//                         <a className="bttn bttn-secondary bttn-secondary-small bttn-secondary-white">
//                           Listen
//                           <img loading="lazy"
//                             src={ctaArrow}
//                             className="icon-arrow icon"
//                             alt=""
//                           />
//                         </a>
//                       </div>
//                     </a>
//                   </div> */}
//                   <PreferredPodcast id={blog.acf.preferred_podcast_title} />
//                 </div>
//                 <div className="single-blog-content">
//                   <div
//                     className="content-div"
//                     id="html-content"
//                     dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="newsletter-imported">
//             <Newsletter
//               heading={"Quit small talk. Indulge in insightful conversations."}
//             />
//           </div>
//           {relatedBlogs.length > 0 && (
//             <RelatedBlogs relatedBlogs={relatedBlogs} />
//           )}
//         </div>
//       )}
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     blogState: state.blog,
//     podcastState: state.podcasts,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchBlog: (blogSlug) => dispatch(fetchBlog(blogSlug)),
//     fetchPodcasts: (pageNo) => dispatch(fetchPodcasts(pageNo)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
