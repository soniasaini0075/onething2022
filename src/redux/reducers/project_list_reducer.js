import { ProjectsActionTypes } from "../actions/project_ac";

// export class BlogReducerState {
//     constructor() {}
// }

const initialState = {
    projectList: [],
    undoneProjects: [],
    loaded: false,
    loading: false,
    // blogsCount: 0,
    // nextPage: "",
    error: ""
}

const projectListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ProjectsActionTypes.FETCH_PROJECTS_REQUEST: {
            console.log("Project Request Working");
            return {...state, loading: true};
        }

        case ProjectsActionTypes.FETCH_PROJECTS_SUCCESS: {
            console.log("Project Success");
            // const updatedProjectList = state.projectList.concat(action.payload.projects);
            const updatedProjectList = action.payload.projects.filteredProjects;
            return {
                ...state,
                projectList: updatedProjectList,
                undoneProjects: action.payload.projects.undoneProjects,
                loading: false,
                loaded: true,
                error: ""
            }
        }

        case ProjectsActionTypes.FETCH_PROJECTS_FAILURE: {
            console.log("Project Failure");
            return {
                loading: false,
                loaded: false,
                projectList: [],
                undoneProjects: [],
                error: action.payload.error
            }
        }
    
        default: {
            return state;
        }
    }
}

export default projectListReducer;