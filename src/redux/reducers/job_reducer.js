import { JobsActionTypes } from "../actions/jobs_ac";

// export class BlogReducerState {
//     constructor() {}
// }

const initialState = {
    job: null,
    loaded: false,
    loading: false,
    // blogsCount: 0,
    // nextPage: "",
    error: ""
}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case JobsActionTypes.FETCH_JOB_REQUEST: {
            return {...state, loading: true};
        }

        case JobsActionTypes.FETCH_JOB_SUCCESS: {
            return {
                ...state,
                job: action.payload.job,
                loading: false,
                loaded: true,
                error: ""
            }
        }

        case JobsActionTypes.FETCH_JOB_FAILURE: {
            return {
                loading: false,
                loaded: false,
                job: null,
                error: action.payload.error
            }
        }
    
        default: {
            return state;
        }
    }
}

export default jobReducer;