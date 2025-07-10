import axios from "axios";
import { addFormatedDateToArray, GlobalVariable as gv } from "../api_config";

const PODCAST_API_URL = gv.BASE_API_URL + gv.API_SEGMENT + gv.PODCAST_ENDPOINT;
const ALL_PODCAST_API_URL =
  gv.BASE_API_URL + gv.API_SEGMENT + gv.PODCAST_ENDPOINT + "?per_page=100";

export const PodcastsActionTypes = {
  // For Project List
  FETCH_PODCASTS_REQUEST: "fetch podcasts request",
  FETCH_PODCASTS_SUCCESS: "fetch podcasts success",
  FETCH_PODCASTS_FAILURE: "fetch podcasts failure",
  // FETCH_MORE_PODCASTS: "fetch more podcasts",

  // For Single Project
  FETCH_PODCAST_REQUEST: "fetch podcast request",
  FETCH_PODCAST_SUCCESS: "fetch podcast success",
  FETCH_PODCAST_FAILURE: "fetch podcast failure",
};

export const fetchPodcastsRequest = () => {
  return {
    type: PodcastsActionTypes.FETCH_PODCASTS_REQUEST,
  };
};

export const fetchPodcastsSuccess = (
  podcasts = [],
  isInitial = false,
  totalPodcastCount = 0
) => {
  return {
    type: PodcastsActionTypes.FETCH_PODCASTS_SUCCESS,
    payload: {
      podcasts,
      isInitial,
      totalPodcastCount,
    },
  };
};

export const fetchPodcastsFailure = (error) => {
  return {
    type: PodcastsActionTypes.FETCH_PODCASTS_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchPodcasts = (pageNo, count = 5) => {
  return (dispatch) => {
    console.log("Fetch Podcasts Working");
    let parameter = "?page=" + pageNo + "&per_page=" + count;
    // if(categoryId != null) {
    //     parameter += "&category=" + categoryId;
    // }
    dispatch(fetchPodcastsRequest());
    console.log(PODCAST_API_URL, "podcast");
    axios
      .get(
        PODCAST_API_URL +
          parameter +
          "&status=publish&orderBy=date&_embed=1&acf_format=standard"
      )
      .then((res) => {
        console.log("Podcasts", res);
        let podcasts = res.data;
        let totalPodcastCount = res.headers["x-wp-total"];
        let totalPages = res.headers["x-wp-totalpages"];

        // podcasts.forEach((podcast, i) => {
        //     let date = new Date(podcast.date);

        //     // podcasts[i].published_date = date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' });
        //     podcasts[i].published_date = date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' });
        // });

        podcasts = addFormatedDateToArray(podcasts);
        dispatch(
          fetchPodcastsSuccess(
            podcasts,
            pageNo === 1 ? true : false,
            totalPodcastCount
          )
        );
      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchPodcastsFailure(error));
      });
  };
};

export const fetchPodcastRequest = () => {
  return {
    type: PodcastsActionTypes.FETCH_PODCAST_REQUEST,
  };
};

export const fetchPodcastSuccess = (podcast = null, relatedPodcast = []) => {
  return {
    type: PodcastsActionTypes.FETCH_PODCAST_SUCCESS,
    payload: {
      podcast,
      relatedPodcast,
    },
  };
};

export const fetchPodcastFailure = (error) => {
  return {
    type: PodcastsActionTypes.FETCH_PODCAST_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchPodcast = (podcastSlug) => {
  console.log(PODCAST_API_URL, "slugsss");

  return (dispatch) => {
    dispatch(fetchPodcastRequest());
    axios
      .get(
        PODCAST_API_URL +
          "?slug=" +
          podcastSlug +
          "&_embed=1&acf_format=standard"
      )
      .then((res) => {
        let podcast = res.data[0];
        const podcastTags = podcast["tags"];
        const RELATED_PODCASTS_URL = podcastTags.length
          ? PODCAST_API_URL +
            "?tags=" +
            podcastTags[0] +
            "&page=1&per_page=3&status=publish&orderBy=date&_embed=1&acf_format=standard"
          : PODCAST_API_URL +
            "?page=1&per_page=3&status=publish&orderBy=date&_embed=1&acf_format=standard";
        let date = new Date(podcast.date);
        podcast.published_date = date.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        console.log(podcastTags[0], "tag0");
        console.log(PODCAST_API_URL, "podcasturl");

        axios
          .get(RELATED_PODCASTS_URL)
          .then((listRes) => {
            let relatedPodcast = listRes.data;
            relatedPodcast = addFormatedDateToArray(relatedPodcast);
            relatedPodcast = relatedPodcast.filter((podcastItem, i) => {
              return podcastItem.id != podcast.id;
            });
            dispatch(fetchPodcastSuccess(podcast, relatedPodcast));
          })
          .catch((error) => {
            console.error(error);
            dispatch(fetchPodcastFailure(error));
          });
      })
      .catch((error) => {
        console.error(error);

        dispatch(fetchPodcastFailure(error));
      });
  };
};

export const fetchPodcastforBlog = async (slug) => {
  try {
    const res = await axios.get(ALL_PODCAST_API_URL);

    return res.data.find((item) => item.id === slug);
  } catch (error) {
    console.log(error, "errrorrr");

    // dispatch(fetchPodcastFailure(error));
  }
};

// export const fetchMoreBlogs = (pageNo) => {
//     return {
//         type: PodcastsActionTypes.FETCH_MORE_BLOGS,
//         page: pageNo
//     }
// }

// export const fetchSingleBlog = (id) => {
//     return {
//         type: "FETCH_SINGLE_BLOG",
//         blog_id: id
//     }
// }
