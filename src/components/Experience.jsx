import React from "react";

function Experience(){
    return(
        <div className="experience">
            <div className="container">
                <div className="headings">
                    <h2 className="subSectionHeading">Experience</h2>
                    <h2 className="mainSectionHeading">Work Experience</h2>
                </div>
                <div className="row">
                    <div className="col-12 singleEdu">
                        <h4><i className="fas fa-building"></i></h4>
                        <h3>Website Developer</h3>
                        <h4>Digitrends</h4>
                        <p>2021 - Present</p>
                    </div>
                    <div className="col-12 singleEdu">
                        <h3><i className="fas fa-building"></i><br />Website Developer Intern</h3>
                        <h4>Empire Online Ventures</h4>
                        <p>April 2021 - June 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;