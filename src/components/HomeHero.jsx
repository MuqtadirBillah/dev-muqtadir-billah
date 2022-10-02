import React from "react";

function HomeHero(){
    return(
        <div className="homeHero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h1 className="subSectionHeading">Muqtadir Billah</h1>
                        <h2 className="mainSectionHeading">MERN Stack website developer</h2>
                        <p>A total of 5 billion people around the world use the internet today – equivalent to 63 percent of the world's total population.<br /><br />As the number of users increases, more ideas and opportunities enter the internet world. Being a computer science graduate, I am always curious about technological innovations and the benefits we get from them. I identify myself as a beginner in the information and technology field having sound knowledge of website design, website development, and client interaction. I like to engage myself in problems that will eventually get solved and teach me something new.<br /><br />I work as a Full-time website developer and in my leisure time, I freelance on multiple platforms like Fiverr and Upwork. I am a 5-star rated Fiverr seller and expect to achieve a Level One seller badge.<br /><br />You can visit my LinkedIn profile. Alternatively you also send me an email at abbasimuqtadir@gmail.com<br /><br />🔭 I’m currently working as a Website Developer<br />🌱 I’m currently learning & practicing MERN Stack development<br />👯 I’m looking to collaborate on Website Development projects<br />💬 Ask me about web development<br />📫 How to reach me: email me at <a href="mailto:abbasimuqtadir@gmail.com" style={{textDecoration: 'none', color: 'blue'}}>abbasimuqtadir@gmail.com</a><br />⚡ I am also learning Digital Art! You can check me Art on my <a href="https://www.instagram.com/muqtadirbillahmusab/" target="_blank" style={{textDecoration: 'none', color: '#C22B84'}}>Instagram</a></p>
                        <a href="mailto:abbasimuqtadir@gmial.com"><button className="sendMailBut">Send Email</button></a>
                        <a target="_blank" href="https://drive.google.com/file/d/1GAtf2F8AEhCPPUrVu2ODwGMpOulK-s3c/view?usp=sharing"><button className="resumeBut">Resume</button></a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center imgCol">
                        <img src="/assets/images/developer.jpg" alt="developer image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeHero;