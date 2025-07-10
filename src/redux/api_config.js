"use strict";

// Latest Project ID = 1140

// let project_ids = [6, 36, 38, 39, 40, 1142, 1143, 1144, 1145, 1146, 1147, 1148]
let project_ids = [430, 1140];

// Form IDS [contact, job, newsletter]
let FormIds = [3167, 3166, 3169, 7748, 7754]

export const GlobalVariable = Object.freeze({
    BASE_API_URL: "https://dashboard.onething.design",
    // BASE_API_URL: "http://localhost/Projects/onething-staging-wp",
    API_SEGMENT: "/wp-json/wp/v2",
    FORM_SEGMENT: "/wp-json/contact-form-7/v1/contact-forms/",
    SINGLE_ENDPOINT: "/posts",
    BLOG_ENDPOINT: "/posts?categories=2",
    PROJECT_ENDPOINT: "/posts?categories=" + project_ids.join(",") + "&per_page=100&orderBy=date",
    JOB_ENDPOINT: "/jobs",
    PODCAST_ENDPOINT: "/podcast",
    CATEGORIES_ENDPOINT: "/categories",
    CONTACT_FORM_SUBMIT: "https://contact-api.onething.design/api/submit-form",
    CONTACT_FORM_ENDPOINT: FormIds[0] + "/feedback",
    JOB_FORM_ENDPOINT: FormIds[1] + "/feedback",
    SUBS_FORM_ENDPOINT: FormIds[2] + "/feedback",
    ODS_FORM_ENDPOINT: FormIds[3] + "/feedback",
    ODS_REGISTER_FORM_ENDPOINT: FormIds[4] + "/feedback"
});

export const addFormatedDateToArray = (array) => {
    let arrayList = array;
    arrayList.forEach((item, i) => {
        let date = new Date(item.date);

        // podcasts[i].published_date = date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' });
        arrayList[i].published_date = date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric' });
    });
    return arrayList;
}