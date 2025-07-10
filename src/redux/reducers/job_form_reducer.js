import { FormActionTypes } from "../actions/form_ac";

const initialState = {
    jobLoaded: false,
    jobLoading: false,
    msg_status: "",
    res: null,
    error: ""
}

const jobFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case FormActionTypes.FECTH_JOB_FORM_REQUEST: {
            return {...state, jobLoading: true}
        }

        case FormActionTypes.FECTH_JOB_FORM_SUCCESS: {
            return {
                ...state,
                res: action.payload.jobRes,
                msg_status: "Messsge Sent",
                jobLoaded: true,
                jobLoading: false,
                error: ""
            }
        }

        case FormActionTypes.FECTH_JOB_FORM_FAILURE: {
            return {
                ...state,
                res: action.payload.error,
                msg_status: "Messsge Error",
                jobLoaded: true,
                jobLoading: false,
                error: ""
            }
        }

        default: {
            return state;
        }
    }
}

export default jobFormReducer;