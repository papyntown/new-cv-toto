import Darkmode from "@/components/DarkMode";
import MainContent from "@/components/MainContent";
import Meta from "@/components/Meta";
import NavBar from "@/components/NavBar";
import SocialNetwork from "@/components/SocialNetwork";
import React from "react";

const index = () => {
    return (
        <div>
            <Meta />
            <div className="home">
                {/* <NavBar /> */}
                <Darkmode />
                <SocialNetwork />
                <MainContent />
            </div>
        </div>
    );
};

export default index;
