import React from "react";
import Common from "./Common";
import about from "./Images/about.png";

const About = () => {

    return(
       <Common
       title="Connect to Create an Amazing Website."
       name="Design and Develop Your Site Today."
       imgsrc={about}
       visit="/contact"
       btname="Contact Now"
        />
    )

}
export default About;
