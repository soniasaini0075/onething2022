import { FormActionTypes } from "../actions/form_ac";

const initialState = {
    subsLoaded: false,
    subsLoading: false,
    msg_status: "",
    res: null,
    error: ""
}

const subsFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case FormActionTypes.FECTH_SUBS_FORM_REQUEST: {
            return {...state, subsLoading: true}
        }

        case FormActionTypes.FECTH_SUBS_FORM_SUCCESS: {
            return {
                ...state,
                res: action.payload.subsRes,
                msg_status: "You have successfully subscribed",
                subsLoaded: true,
                subsLoading: false,
                error: ""
            }
        }

        case FormActionTypes.FECTH_SUBS_FORM_FAILURE: {
            return {
                ...state,
                res: action.payload.error,
                msg_status: "There is some error in subscribing you.",
                subsLoaded: true,
                subsLoading: false,
                error: ""
            }
        }

        default: {
            return state;
        }
    }
}

export default subsFormReducer;