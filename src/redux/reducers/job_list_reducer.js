import { JobsActionTypes } from "../actions/jobs_ac";

// export class BlogReducerState {
//     constructor() {}
// }

const initialState = {
    jobList: [],
    loaded: false,
    loading: false,
    totalJobCount: 0,
    // blogsCount: 0,
    // nextPage: "",
    error: ""
}

const jobListReducer = (state = initialState, action) => {
    switch (action.type) {
        case JobsActionTypes.FETCH_JOBS_REQUEST: {
            return {...state, loading: true};
        }

        case JobsActionTypes.FETCH_JOBS_SUCCESS: {
            // const updatedBlogList = action.payload.isInitial ? action.payload.blogs : state.blogList.concat(action.payload.blogs);
            // const updatedBlogList = action.payload.blogs;
            return {
                ...state,
                jobList: action.payload.jobs,
                totalJobCount: action.payload.totalJobCount,
                loading: false,
                loaded: true,
                error: ""
            }
        }

        case JobsActionTypes.FETCH_JOBS_FAILURE: {
            return {
                loading: false,
                loaded: false,
                jobList: [],
                totalJobCount: 0,
                error: action.payload.error
            }
        }
    
        default: {
            return state;
        }
    }
}

export default jobListReducer;