import React from "react";

function Artciles(){
    return(
        <div className="articles">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 left">
                        <img src="/assets/images/medium.jpg" alt="medium-logo" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center right">
                        <div>
                            <h2>Articles</h2>
                            <h5>In my leisure time, I like to write articles and blogs related to programming and few tips and tricks that might help new developer improve their skills.</h5>
                            <button>Medium Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artciles;