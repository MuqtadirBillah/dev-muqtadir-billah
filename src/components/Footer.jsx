import React from "react";

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 left">
                        <img src="/assets/images/image.png" alt="" />
                        <h4>Muqtadir Billah Musab Abbasi</h4>
                        <h5>MERN Stack Developer</h5>
                        <div className="capsuleDiv">
                            <span className="capsule">React.js</span>
                            <span className="capsule">Node.js</span>
                            <span className="capsule">Express.js</span>
                        </div>
                        <div className="capsuleDiv">
                            <span className="capsule">Mongodb</span>
                            <span className="capsule">MySQL</span>
                            <span className="capsule">Next.js</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 right">
                        <h3>Socials</h3>
                        <a href="https://github.com/MuqtadirBillah"><button><i className="fab fa-github"></i></button></a>
                        <a href="https://www.linkedin.com/in/muqtadir-billah-musab-abbasi/"><button><i className="fab fa-linkedin linkedin"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;