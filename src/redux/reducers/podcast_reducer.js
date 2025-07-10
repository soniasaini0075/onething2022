import { PodcastsActionTypes } from "../actions/podcasts_ac";

// export class BlogReducerState {
//     constructor() {}
// }

const initialState = {
    podcast: null,
    relatedPodcast: [],
    loaded: false,
    loading: false,
    // blogsCount: 0,
    // nextPage: "",
    error: ""
}

const podcastReducer = (state = initialState, action) => {
    switch (action.type) {
        case PodcastsActionTypes.FETCH_PODCAST_REQUEST: {
            return {...state, loading: true};
        }

        case PodcastsActionTypes.FETCH_PODCAST_SUCCESS: {
            console.log("Related Podcast Success", action.payload.relatedPodcast);
            return {
                ...state,
                podcast: action.payload.podcast,
                relatedPodcast: action.payload.relatedPodcast,
                loading: false,
                loaded: true,
                error: ""
            }
        }

        case PodcastsActionTypes.FETCH_PODCAST_FAILURE: {
            return {
                loading: false,
                loaded: false,
                podcast: null,
                relatedPodcast: [],
                error: action.payload.error
            }
        }
    
        default: {
            return state;
        }
    }
}

export default podcastReducer;