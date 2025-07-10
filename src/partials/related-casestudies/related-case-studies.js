import "./related-case-studies.scss";

import projectArrow from "../../assets/img/svg/right-arrow.svg";

const RelatedCaseStudies = ({ relatedProjects }) => {
  return (
    <>
      <div className="related-projects-wrapper">
        <section className="related-projects-main">
          <div className="div-wrap">
            <div className="container">
              <h3 className="section-heading">Other Projects</h3>
              <ul className="related-projects-list">
                {relatedProjects.slice(0, 2).map((project, i) => {
                  let categories = project._embedded["wp:term"][0];
                  //  let projectUrl = project._embedded["wp:term"][0];
                  let primaryCat = {};
                  categories.forEach((cat, k) => {
                    if (cat.id != 1140 && cat.id != 430) {
                      primaryCat = cat;
                    }
                  });
                  console.log("related project", primaryCat);
                  return (
                    <li key={i}>
                      <a
                        href={
                          "/projects/" +
                          primaryCat.slug +
                          "/" +
                          project.slug +
                          "/"
                        }
                      >
                        <h5>{project.title.rendered}</h5>
                        <figure>
                          <img loading="lazy"
                            src={projectArrow}
                            className="icon-arrow icon"
                            alt=""
                          />
                        </figure>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default RelatedCaseStudies;
