import React from "react";
import Art from "./Art";
import Articles from "./Articles";
import ContactSection from "./ContactSection";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import HomeHero from "./HomeHero";
import Navigation from "./Navigation";
import Technologies from "./Technologies";
import TestimonialsUpdated from "./TestimonialsUpdated";
import Work from "./Work";

function Home(){
    return(
        <>
            <div className="homepage">
                <Navigation />
                <HomeHero />
                <Technologies />
                <Education />
                <Experience />
                <Work />
                {/* <TestimonialsUpdated /> */}
                <Articles />
                <Art />
                <ContactSection />
                <Footer />
            </div>
        </>
    )
}

export default Home;