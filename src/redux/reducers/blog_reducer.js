import { BlogsActionTypes } from "../actions/blogs_ac";

// export class BlogReducerState {
//     constructor() {}
// }

const initialState = {
    blog: null,
    relatedBlogs: [],
    loaded: false,
    loading: false,
    // blogsCount: 0,
    // nextPage: "",
    error: ""
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case BlogsActionTypes.FETCH_BLOG_REQUEST: {
            return {...state, loading: true};
        }

        case BlogsActionTypes.FETCH_BLOG_SUCCESS: {
            return {
                ...state,
                blog: action.payload.blog,
                relatedBlogs: action.payload.relatedBlogs,
                loading: false,
                loaded: true,
                error: ""
            }
        }

        case BlogsActionTypes.FETCH_BLOG_FAILURE: {
            return {
                loading: false,
                loaded: false,
                blog: null,
                relatedBlogs: [],
                error: action.payload.error
            }
        }
    
        default: {
            return state;
        }
    }
}

export default blogReducer;