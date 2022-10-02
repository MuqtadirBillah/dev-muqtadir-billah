import React from "react";

function Education(){
    return(
        <div className="education">
            <div className="container">
                <div className="headings">
                    <h2 className="subSectionHeading">Qualification</h2>
                    <h2 className="mainSectionHeading">Education</h2>
                </div>
                <div className="row">
                    <div className="col-12 singleEdu">
                        <h4><i className="fas fa-arrow-right"></i></h4>
                        <h3>Bachelor's in Computer Science</h3>
                        <h4>Iqra University</h4>
                        <p>September 2018 - September 2022</p>
                    </div>
                    <div className="col-12 singleEdu">
                        <h3><i className="fas fa-arrow-right"></i><br />Intermediate</h3>
                        <h4>Govt. Degree Boys College, Gulistan E Jauhar, Karachi</h4>
                        <p>2016 - 2018</p>
                    </div>
                    <div className="col-12 singleEdu">
                        <h3><i className="fas fa-arrow-right"></i><br />Matriculation</h3>
                        <h4>Usman Public School</h4>
                        <p>2016</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;