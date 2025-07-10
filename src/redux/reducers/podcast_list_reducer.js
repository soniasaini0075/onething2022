import { PodcastsActionTypes } from "../actions/podcasts_ac";

// export class BlogReducerState {
//     constructor() {}
// }

const initialState = {
    podcastList: [],
    loaded: false,
    loading: false,
    totalPodcastCount: 0,
    // blogsCount: 0,
    // nextPage: "",
    error: ""
}

const podcastListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PodcastsActionTypes.FETCH_PODCASTS_REQUEST: {
            console.log("Loading Podcast");
            return {...state, loading: true};
        }

        case PodcastsActionTypes.FETCH_PODCASTS_SUCCESS: {
            const updatedPodcastList = action.payload.isInitial ? action.payload.podcasts : state.podcastList.concat(action.payload.podcasts);
            // const updatedPodcastList = action.payload.blogs;

            console.log("Podcasts payload", updatedPodcastList);
            return {
                ...state,
                podcastList: updatedPodcastList,
                totalPodcastCount: action.payload.totalPodcastCount,
                loading: false,
                loaded: true,
                error: ""
            }
        }

        case PodcastsActionTypes.FETCH_PODCASTS_FAILURE: {
            // rest_post_invalid_page_number
            console.log(action.payload.error);
            return {
                loading: false,
                loaded: false,
                totalPodcastCount: 0,
                podcastList: [],
                error: action.payload.error
            }
        }
    
        default: {
            return state;
        }
    }
}

export default podcastListReducer;