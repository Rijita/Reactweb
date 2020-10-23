import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import angel from "./Images/angel.png";

const Home = () => {

    return (
    <Common
    title="You have Landed on Right Place."
    name="A Step to Rise Your Self."
       imgsrc={angel}
       visit="/service"
       btname="Get Started"
        
    />
    )

}
export default Home;
