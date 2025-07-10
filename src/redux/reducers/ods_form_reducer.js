import { FormActionTypes } from "../actions/odsFrom_ac";

const initialState = {
    odsLoaded: false,
    odsLoading: false,
    msg_status: "",
    res: null,
    error: ""
}

const odsFormReducer = (state = initialState, action) => {
    switch(action.type) {
        case FormActionTypes.FECTH_ODS_FORM_REQUEST: {
            return {...state, contactLoading: true}
        }

        case FormActionTypes.FECTH_ODS_FORM_SUCCESS: {
            return {
                ...state,
                res: action.payload.contactRes,
                msg_status: "Messsge Sent",
                odsLoaded: true,
                odsLoading: false,
                error: ""
            }
        }

        case FormActionTypes.FECTH_ODS_FORM_FAILURE: {
            return {
                ...state,
                res: action.payload.error,
                msg_status: "Messsge Error",
                odsLoaded: true,
                odsLoading: false,
                error: ""
            }
        }

        default: {
            return state;
        }
    }
}

export default odsFormReducer;