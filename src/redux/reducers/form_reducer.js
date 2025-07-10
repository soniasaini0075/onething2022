import { FormActionTypes } from "../actions/form_ac";

const initialState = {
    contactLoaded: false,
    contactLoading: false,
    msg_status: "",
    res: null,
    error: ""
}

const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case FormActionTypes.FECTH_CONTACT_FORM_REQUEST: {
            return {...state, contactLoading: true}
        }

        case FormActionTypes.FECTH_CONTACT_FORM_SUCCESS: {
            return {
                ...state,
                res: action.payload.contactRes,
                msg_status: "Messsge Sent",
                contactLoaded: true,
                contactLoading: false,
                error: ""
            }
        }

        case FormActionTypes.FECTH_CONTACT_FORM_FAILURE: {
            return {
                ...state,
                res: action.payload.error,
                msg_status: "Messsge Error",
                contactLoaded: true,
                contactLoading: false,
                error: ""
            }
        }

        default: {
            return state;
        }
    }
}

export default formReducer;