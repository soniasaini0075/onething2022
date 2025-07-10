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
    FECTH_CONTACT_FORM_REQUEST: "fetch contact form request",
    FECTH_CONTACT_FORM_SUCCESS: "fetch contact form success",
    FECTH_CONTACT_FORM_FAILURE: "fetch contact form failure",

    // Job Form Actions
    FECTH_JOB_FORM_REQUEST: "fetch job form request",
    FECTH_JOB_FORM_SUCCESS: "fetch job form success",
    FECTH_JOB_FORM_FAILURE: "fetch job form failure",

    // Subscribe Form Actions
    FECTH_SUBS_FORM_REQUEST: "fetch subs form request",
    FECTH_SUBS_FORM_SUCCESS: "fetch subs form success",
    FECTH_SUBS_FORM_FAILURE: "fetch subs form failure",
}

export const sendContactFormRequest = () => {
    return {
        type: FormActionTypes.FECTH_CONTACT_FORM_REQUEST
    }
}

export const sendContactFormSuccess = (contactRes = null) => {
    return {
        type: FormActionTypes.FECTH_CONTACT_FORM_SUCCESS,
        payload: {
            contactRes
        }
    }
}

export const sendContactFormFailure = error => {
    return {
        type: FormActionTypes.FECTH_CONTACT_FORM_FAILURE,
        payload: {
            error
        }
    }
}

export const sendContactForm = (formData) => {
    return (dispatch) => {
        dispatch(sendContactFormRequest());
        axios.post(FORM_BASE_URL + gv.CONTACT_FORM_ENDPOINT, formData, CF7_FORM_HEADERS)
        .then(res => {
            dispatch(sendContactFormSuccess(res));
        })
        .catch(error => {
            dispatch(sendContactFormFailure(error));
        })
    }
}


export const sendJobFormRequest = () => {
    return {
        type: FormActionTypes.FECTH_JOB_FORM_REQUEST
    }
}

export const sendJobFormSuccess = (jobRes = null) => {
    return {
        type: FormActionTypes.FECTH_JOB_FORM_SUCCESS,
        payload: {
            jobRes
        }
    }
}

export const sendJobFormFailure = (error = null) => {
    return {
        type: FormActionTypes.FECTH_JOB_FORM_FAILURE,
        payload: {
            error
        }
    }
}

export const sendJobForm = (formData) => {
    return (dispatch) => {
        dispatch(sendJobFormRequest());
        axios.post(FORM_BASE_URL + gv.JOB_FORM_ENDPOINT, formData, CF7_FORM_HEADERS)
        .then(res => {
            dispatch(sendJobFormSuccess(res));
        })
        .catch(error => {
            dispatch(sendJobFormFailure(error));
        })
    }
}

export const sendSubsFormRequest = () => {
    return {
        type: FormActionTypes.FECTH_SUBS_FORM_REQUEST
    }
}

export const sendSubsFormSuccess = (subsRes = null) => {
    return {
        type: FormActionTypes.FECTH_SUBS_FORM_SUCCESS,
        payload: {
            subsRes
        }
    }
}

export const sendSubsFormFailure = (error = null) => {
    return {
        type: FormActionTypes.FECTH_SUBS_FORM_FAILURE,
        payload: {
            error
        }
    }
}

export const sendSubsForm = (formData) => {
    return (dispatch) => {
        dispatch(sendSubsFormRequest());
        axios.post(FORM_BASE_URL + gv.SUBS_FORM_ENDPOINT, formData, CF7_FORM_HEADERS)
        .then(res => {
            dispatch(sendSubsFormSuccess(res));
        })
        .catch(error => {
            dispatch(sendSubsFormFailure(error));
        })
    }
}