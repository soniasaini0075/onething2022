import axios from "axios";
import { GlobalVariable as gv } from "../api_config";

export const ProjectsActionTypes = {
  // For Project List
  FETCH_PROJECTS_REQUEST: "fetch projects request",
  FETCH_PROJECTS_SUCCESS: "fetch projects success",
  FETCH_PROJECTS_FAILURE: "fetch projects failure",

  // For Single Project
  FETCH_PROJECT_REQUEST: "fetch project request",
  FETCH_PROJECT_SUCCESS: "fetch project success",
  FETCH_PROJECT_FAILURE: "fetch project failure",
};

export const fetchProjectsRequest = () => {
  return {
    type: ProjectsActionTypes.FETCH_PROJECTS_REQUEST,
  };
};

export const fetchProjectsSuccess = (projects = null) => {
  return {
    type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: {
      projects,
    },
  };
};

export const fetchProjectsFailure = (error) => {
  return {
    type: ProjectsActionTypes.FETCH_PROJECTS_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchProjects = (categoryId) => {
  return (dispatch) => {
    let parameter = gv.PROJECT_ENDPOINT + "&status=publish";
    if (categoryId != null) {
      parameter =
        "/posts?categories=" + categoryId + "&per_page=100&status=publish";
    }

    dispatch(fetchProjectsRequest());
    axios
      .get(gv.BASE_API_URL + gv.API_SEGMENT + parameter + "&_embed=1")
      .then((res) => {
        let projects = res.data;
        // let categoryIds = [];
        let filteredProjects = [];
        let undoneProjects = [];
        projects.forEach((project, i) => {
          let categories = project._embedded["wp:term"][0];
          categories.forEach((cat, j) => {
            if (
              project.categories.includes(cat.id) &&
              ![430, 109, 1140].includes(cat.id)
            ) {
              projects[i].category__title = cat.name;
              projects[i].category__slug = cat.slug;
            }
          });

          if (project.acf.is_case_study_link) {
            filteredProjects.push(project);
          } else {
            undoneProjects.push(project);
          }
          // let categories = project.categories;
          // categories.splice(categories.indexOf(430), 1);
          // categories.indexOf(109) > -1 ?? categories.splice(categories.indexOf(109), 1);
          // ?include=6,109,430
        });

        // axios.get(gv.BASE_API_URL + gv.API_SEGMENT + gv.CATEGORIES_ENDPOINT + "/?include=" + categoryIds.join(","))
        //     .then(catRes => {
        //         console.log(catRes.data);
        //         filteredProjects.forEach((project, i) => {
        //             catRes.data.forEach((cat, j) => {
        //                 if(project.categories.includes(cat.id) && ![430, 109].includes(cat.id)) {
        //                     filteredProjects[i].category__title = cat.name;
        //                     filteredProjects[i].category__slug = cat.slug;
        //                 }
        //             });
        //         });
        //         undoneProjects.forEach((project, i) => {
        //             catRes.data.forEach((cat, j) => {
        //                 if(project.categories.includes(cat.id) && ![430, 109].includes(cat.id)) {
        //                     undoneProjects[i].category__title = cat.name;
        //                     undoneProjects[i].category__slug = cat.slug;
        //                 }
        //             });
        //         });

        //         //projects[i].category_title = catRes.data.name
        //         dispatch(fetchProjectsSuccess({
        //             filteredProjects,
        //             undoneProjects
        //         }));
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         dispatch(fetchProjectsFailure(error));
        //     });
        dispatch(
          fetchProjectsSuccess({
            filteredProjects,
            undoneProjects,
          })
        );
        // console.log(projects);
        //dispatch(fetchProjectsSuccess(projects));
      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchProjectsFailure(error));
      });
  };
};

export const fetchProjectRequest = () => {
  return {
    type: ProjectsActionTypes.FETCH_PROJECT_REQUEST,
  };
};

export const fetchProjectSuccess = (project = null, relatedProjects = []) => {
  return {
    type: ProjectsActionTypes.FETCH_PROJECT_SUCCESS,
    payload: {
      project,
      relatedProjects,
    },
  };
};

export const fetchProjectFailure = (error) => {
  return {
    type: ProjectsActionTypes.FETCH_PROJECT_FAILURE,
    payload: {
      error,
    },
  };
};

export const fetchProject = (projectSlug) => {
  return (dispatch) => {
    dispatch(fetchProjectRequest);
    axios
      .get(
        "https://dashboard.onething.design" +
          gv.API_SEGMENT +
          gv.SINGLE_ENDPOINT +
          "?slug=" +
          projectSlug +
          "&_embed=1&acf_format=standard"
      )

      .then((res) => {
        let project = res.data[0];
        // let categoryId = 11;

        // project.categories

        axios
          .get(
            gv.BASE_API_URL +
              gv.API_SEGMENT +
              "/posts?categories=430,1140&per_page=3&status=publish&orderBy=date&_embed=1&acf_format=standard"
          )
          .then((listRes) => {
            let relatedProjects = listRes.data;
            relatedProjects = relatedProjects.filter((prejectItem, i) => {
              return prejectItem.id != project.id;
            });
            dispatch(fetchProjectSuccess(project, relatedProjects));
          })
          .catch((error) => {
            console.error(error);
            dispatch(fetchProjectFailure(error));
          });

        // axios.get(gv.BASE_API_URL + gv.API_SEGMENT + gv.CATEGORIES_ENDPOINT + "/?include=" + project.categories.join(","))
        //     .then(catRes => {
        //         console.log(catRes.data);
        //         catRes.data.forEach((cat, j) => {
        //             if(project.categories.includes(cat.id) && ![430, 109].includes(cat.id)) {
        //                 project.category__title = cat.name;
        //                 project.category__slug = cat.slug;
        //             }
        //         });

        //         //projects[i].category_title = catRes.data.name
        //         dispatch(fetchProjectSuccess(project));
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         dispatch(fetchProjectsFailure(error));
        //     });

        // axios.get()
        //     .then(mediaRes => {
        //         console.log("Media Response", mediaRes);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         dispatch(fetchProjectsFailure(error));
        //     })
      })
      .catch((error) => {
        console.error(error);
        dispatch(fetchProjectFailure(error));
      });
  };
};

// export const fetchMoreBlogs = (pageNo) => {
//     return {
//         type: BlogsActionTypes.FETCH_MORE_BLOGS,
//         page: pageNo
//     }
// }

// export const fetchSingleBlog = (id) => {
//     return {
//         type: "FETCH_SINGLE_BLOG",
//         blog_id: id
//     }
// }
