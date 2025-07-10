import axios from "axios";
import { GlobalVariable as gv } from "../api_config";

// import { MailService } from "@sendgrid/mail";

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey("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");

const FORM_BASE_URL = gv.BASE_API_URL + gv.FORM_SEGMENT;
const CF7_FORM_HEADERS = {
    headers: {
        "Content-Type": "multipart/form-data"
    }
}

export const FormActionTypes = {
    // Contact Form Actions
    FECTH_ODS_FORM_REQUEST: "fetch contact form request",
    FECTH_ODS_FORM_SUCCESS: "fetch contact form success",
    FECTH_ODS_FORM_FAILURE: "fetch contact form failure",

    // ODS Register Form Actions
    FECTH_ODS_REGISTER_FORM_REQUEST: "fetch register form request",
    FECTH_ODS_REGISTER_FORM_SUCCESS: "fetch register form success",
    FECTH_ODS_REGISTER_FORM_FAILURE: "fetch register form failure",

    // Subscribe Form Actions
    FECTH_SUBS_FORM_REQUEST: "fetch subs form request",
    FECTH_SUBS_FORM_SUCCESS: "fetch subs form success",
    FECTH_SUBS_FORM_FAILURE: "fetch subs form failure",
}

export const sendOdsFormRequest = () => {
    return {
        type: FormActionTypes.FECTH_ODS_FORM_REQUEST
    }
}

export const sendOdsFormSuccess = (odsResponse = null) => {
    return {
        type: FormActionTypes.FECTH_ODS_FORM_SUCCESS,
        payload: {
            odsResponse
        }
    }
}

export const sendOdsFormFailure = error => {
    return {
        type: FormActionTypes.FECTH_ODS_FORM_FAILURE,
        payload: {
            error
        }
    }
}

//ODS Register Form

export const sendOdsRegisterFormRequest = () => {
    return {
        type: FormActionTypes.FECTH_ODS_REGISTER_FORM_REQUEST
    }
}

export const sendOdsRegisterFormSuccess = (odsResponse = null) => {
    return {
        type: FormActionTypes.FECTH_ODS_REGISTER_FORM_SUCCESS,
        payload: {
            odsResponse
        }
    }
}

export const sendOdsRegisterFormFailure = error => {
    return {
        type: FormActionTypes.FECTH_ODS_REGISTER_FORM_FAILURE,
        payload: {
            error
        }
    }
}

export const sendOdsForm = (formData) => {
    console.log(FORM_BASE_URL + gv.ODS_FORM_ENDPOINT, formData, CF7_FORM_HEADERS,"formm")
    return (dispatch) => {
        dispatch(sendOdsFormRequest());
        axios.post(FORM_BASE_URL + gv.ODS_FORM_ENDPOINT, formData, CF7_FORM_HEADERS)
            .then(res => {
                dispatch(sendOdsFormSuccess(res));
            })
            .catch(error => {
                dispatch(sendOdsFormFailure(error));
            })
    }
}

export const sendOdsRegisterForm = (formData) => {
    return (dispatch) => {
        dispatch(sendOdsRegisterFormRequest());
        axios.post(FORM_BASE_URL + gv.ODS_REGISTER_FORM_ENDPOINT, formData, CF7_FORM_HEADERS)
            .then(res => {
                dispatch(sendOdsRegisterFormFailure(res));
            })
            .catch(error => {
                dispatch(sendOdsRegisterFormFailure(error));
            })
    }
}


// export const sendJobFormRequest = () => {
//     return {
//         type: FormActionTypes.FECTH_JOB_FORM_REQUEST
//     }
// }

// export const sendJobFormSuccess = (jobRes = null) => {
//     return {
//         type: FormActionTypes.FECTH_JOB_FORM_SUCCESS,
//         payload: {
//             jobRes
//         }
//     }
// }

// export const sendJobFormFailure = (error = null) => {
//     return {
//         type: FormActionTypes.FECTH_JOB_FORM_FAILURE,
//         payload: {
//             error
//         }
//     }
// }

// export const sendJobForm = (formData) => {
//     return (dispatch) => {
//         console.log(formData);
//         dispatch(sendJobFormRequest());
//         axios.post(FORM_BASE_URL + gv.JOB_FORM_ENDPOINT, formData, CF7_FORM_HEADERS)
//             .then(res => {
//                 dispatch(sendJobFormSuccess(res));
//             })
//             .catch(error => {
//                 dispatch(sendJobFormFailure(error));
//             })
//     }
// }

// export const sendSubsFormRequest = () => {
//     return {
//         type: FormActionTypes.FECTH_SUBS_FORM_REQUEST
//     }
// }

// export const sendSubsFormSuccess = (subsRes = null) => {
//     return {
//         type: FormActionTypes.FECTH_SUBS_FORM_SUCCESS,
//         payload: {
//             subsRes
//         }
//     }
// }

// export const sendSubsFormFailure = (error = null) => {
//     return {
//         type: FormActionTypes.FECTH_SUBS_FORM_FAILURE,
//         payload: {
//             error
//         }
//     }
// }

// export const sendSubsForm = (formData) => {
//     return (dispatch) => {
//         dispatch(sendSubsFormRequest());
//         axios.post(FORM_BASE_URL + gv.SUBS_FORM_ENDPOINT, formData, CF7_FORM_HEADERS)
//             .then(res => {
//                 dispatch(sendSubsFormSuccess(res));
//             })
//             .catch(error => {
//                 dispatch(sendSubsFormFailure(error));
//             })
//     }
// }