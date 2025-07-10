import axios from "axios";
import { GlobalVariable as gv } from "../api_config";

const API_URL = gv.BASE_API_URL + gv.API_SEGMENT;
export const BlogsActionTypes = {
  // For Project List
  FETCH_BLOGS_REQUEST: "fetch blogs request",
  FETCH_BLOGS_SUCCESS: "fetch blogs success",
  FETCH_BLOGS_FAILURE: "fetch blogs failure",
  // FETCH_MORE_BLOGS: "fetch more blogs",

  // For Single Project
  FETCH_BLOG_REQUEST: "fetch blog request",
  FETCH_BLOG_SUCCESS: "fetch blog success",
  FETCH_BLOG_FAILURE: "fetch blog failure",
};

export const fetchBlogsRequest = () => {
  return {
    type: BlogsActionTypes.FETCH_BLOGS_REQUEST,
  };
};

export const fetchBlogsSuccess = (
  blogs = [],
  isInitial = false,
  totalBlogsCount = 0
) => {
  return {
    type: BlogsActionTypes.FETCH_BLOGS_SUCCESS,
    payload: {
      blogs,
      isInitial,
      totalBlogsCount,
    },
  };
};

export const fetchBlogsFailure = (error = null) => {
  return {
    type: BlogsActionTypes.FETCH_BLOGS_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchBlogs = (pageNo, categoryId) => {
  return (dispatch) => {
    // console.log("Fetch Blogs Working");
    let parameter = gv.BLOG_ENDPOINT + "&page=" + pageNo;
    if (categoryId != null) {
      parameter = "/posts?categories=" + categoryId + "&page=" + pageNo;
    }

    // console.log(categoryId);

    // return false;
    dispatch(fetchBlogsRequest());
    axios
      .get(API_URL + parameter + "&orderBy=date&status=publish&_embed=1")
      .then((res) => {
        let totalBlogsCount = res.headers["x-wp-total"];
        let totalPages = res.headers["x-wp-totalpages"];
        dispatch(
          fetchBlogsSuccess(
            res.data,
            pageNo === 1 ? true : false,
            totalBlogsCount
          )
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchBlogsFailure(error));
      });
  };
};

export const fetchBlogRequest = () => {
  return {
    type: BlogsActionTypes.FETCH_BLOG_REQUEST,
  };
};

export const fetchBlogSuccess = (blog = null, relatedBlogs = []) => {
  return {
    type: BlogsActionTypes.FETCH_BLOG_SUCCESS,
    payload: {
      blog,
      relatedBlogs,
    },
  };
};

export const fetchBlogFailure = (error) => {
  return {
    type: BlogsActionTypes.FETCH_BLOG_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchBlog = (blogSlug) => {
  return (dispatch) => {
    // console.log("Fetch Blogs Working");
    dispatch(fetchBlogRequest());
    axios
      .get(API_URL + gv.SINGLE_ENDPOINT + "?slug=" + blogSlug + "&_embed=1")
      .then((res) => {
        console.log(res);
        let blog = res.data[0];
        const RELATED_BLOGS_URL = blog.tags.length
          ? API_URL +
            gv.SINGLE_ENDPOINT +
            "?tags=" +
            blog.tags[0] +
            "&page=1&per_page=4&orderBy=date&status=publish&_embed=1"
          : API_URL +
            gv.BLOG_ENDPOINT +
            "&page=1&per_page=4&orderBy=date&status=publish&_embed=1";
        axios
          .get(RELATED_BLOGS_URL)
          .then((listRes) => {
            let relatedBlogs = listRes.data;
            relatedBlogs = relatedBlogs.filter((blogItem, i) => {
              return blogItem.id != blog.id;
            });
            dispatch(fetchBlogSuccess(blog, relatedBlogs));
          })
          .catch((error) => {
            console.error(error);
            dispatch(fetchBlogFailure(error));
          });
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchBlogFailure(error));
      });
  };
};

// export const fetchMoreBlogs = (pageNo) => {
//     return {
//         type: BlogsActionTypes.FETCH_MORE_BLOGS,
//         page: pageNo
//     }
// }

// export const fetchSingleBlog = (id) => {
//     return {
//         type: "FETCH_SINGLE_BLOG",
//         blog_id: id
//     }
// }
