import { BlogsActionTypes } from "../actions/blogs_ac";

// export class BlogReducerState {
//     constructor() {}
// }

const initialState = {
    blogList: [],
    loaded: false,
    loading: false,
    totalBlogsCount: 0,
    // blogsCount: 0,
    // nextPage: "",
    error: ""
}

const blogListReducer = (state = initialState, action) => {
    switch (action.type) {
        case BlogsActionTypes.FETCH_BLOGS_REQUEST: {
            return {...state, loading: true};
        }

        case BlogsActionTypes.FETCH_BLOGS_SUCCESS: {
            const updatedBlogList = action.payload.isInitial ? action.payload.blogs : state.blogList.concat(action.payload.blogs);
            // const updatedBlogList = action.payload.blogs;
            return {
                ...state,
                blogList: updatedBlogList,
                totalBlogsCount: action.payload.totalBlogsCount,
                loading: false,
                loaded: true,
                error: ""
            }
        }

        case BlogsActionTypes.FETCH_BLOGS_FAILURE: {
            return {
                loading: false,
                loaded: false,
                blogList: [],
                totalBlogsCount: 0,
                error: action.payload.error
            }
        }
    
        default: {
            return state;
        }
    }
}

export default blogListReducer;