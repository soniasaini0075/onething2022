import { ProjectsActionTypes } from "../actions/project_ac";

// export class BlogReducerState {
//     constructor() {}
// }

const initialState = {
    project: null,
    loaded: false,
    loading: false,
    relatedProjects: [],
    // blogsCount: 0,
    // nextPage: "",
    error: ""
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProjectsActionTypes.FETCH_PROJECT_REQUEST: {
            return {...state, loading: true};
        }

        case ProjectsActionTypes.FETCH_PROJECT_SUCCESS: {
            return {
                ...state,
                project: action.payload.project,
                relatedProjects: action.payload.relatedProjects,
                loading: false,
                loaded: true,
                error: ""
            }
        }

        case ProjectsActionTypes.FETCH_PROJECT_FAILURE: {
            return {
                loading: false,
                loaded: false,
                project: null,
                relatedProjects: [],
                error: action.payload.error
            }
        }
    
        default: {
            return state;
        }
    }
}

export default projectReducer;