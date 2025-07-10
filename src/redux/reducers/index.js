import { combineReducers } from "redux";
import blogListReducer from "./blog_list_reducer";
import blogReducer from "./blog_reducer";
import formReducer from "./form_reducer";
import projectListReducer from "./project_list_reducer";
import projectReducer from "./project_reducer";
import podcastListReducer from "./podcast_list_reducer";
import podcastReducer from "./podcast_reducer";
import jobReducer from "./job_reducer";
import jobListReducer from "./job_list_reducer";
import jobFormReducer from "./job_form_reducer";
import subsFormReducer from "./subs_form_reducer";
import odsFormReducer from "./ods_form_reducer";

const rootReducer = combineReducers({
    blog: blogReducer,
    blogs: blogListReducer,
    projects: projectListReducer,
    project: projectReducer,
    form: formReducer,
    podcasts: podcastListReducer,
    podcast: podcastReducer,
    job: jobReducer,
    jobs: jobListReducer,
    jobForm: jobFormReducer,
    subsForm: subsFormReducer,
    odsForm: odsFormReducer,
});

export default rootReducer;