import axios from "axios";
import { GlobalVariable as gv } from "../api_config";

const JOBS_URL = gv.BASE_API_URL + gv.API_SEGMENT + gv.JOB_ENDPOINT;

export const JobsActionTypes = {
    // For Job List
    FETCH_JOBS_REQUEST: "fetch jobs request",
    FETCH_JOBS_SUCCESS: "fetch jobs success",
    FETCH_JOBS_FAILURE: "fetch jobs failure",

    // For Job Details
    FETCH_JOB_REQUEST: "fetch job request",
    FETCH_JOB_SUCCESS: "fetch job success",
    FETCH_JOB_FAILURE: "fetch job failure",
}

export const fetchJobsRequest = () => {
    return {
        type: JobsActionTypes.FETCH_JOBS_REQUEST
    }
}

export const fetchJobsSuccess = (jobs = [], totalJobCount = 0) => {
    return {
        type: JobsActionTypes.FETCH_JOBS_SUCCESS,
        payload: {
            jobs,
            totalJobCount
        }
    }
}

export const fetchJobsFailure = (error = null) => {
    return {
        type: JobsActionTypes.FETCH_JOBS_FAILURE,
        payload: {
            error
        }
    }
}

export const fetchJobs = () => {
    return (dispatch) => {
        dispatch(fetchJobsRequest());
        axios.get(JOBS_URL + "?status=publish")
            .then(res => {
                let totalBlogsCount = res.headers["x-wp-total"];
                dispatch(fetchJobsSuccess(res.data, totalBlogsCount));
            })
            .catch(error => {
                dispatch(fetchJobsFailure(error));
            })
    }
}


export const fetchJobRequest = () => {
    return {
        type: JobsActionTypes.FETCH_JOB_REQUEST
    }
}

export const fetchJobSuccess = job => {
    return {
        type: JobsActionTypes.FETCH_JOB_SUCCESS,
        payload: {
            job
        }
    }
}

export const fetchJobFailure = (error = null) => {
    return {
        type: JobsActionTypes.FETCH_JOB_FAILURE,
        payload: {
            error
        }
    }
}

export const fetchJob = jobSlug => {
    return (dispatch) => {
        dispatch(fetchJobRequest());
        axios.get(JOBS_URL + "?slug=" + jobSlug)
            .then(res => {
                dispatch(fetchJobSuccess(res.data[0]));
            })
            .catch(error => {
                dispatch(fetchJobFailure(error));
            })
    }
}