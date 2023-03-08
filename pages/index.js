import MainContent from "@/components/MainContent";
import Meta from "@/components/Meta";
import SocialNetwork from "@/components/SocialNetwork";
import React from "react";

const index = () => {
    return (
        <div>
            <Meta />
            <div className="home">
                <SocialNetwork />
                <MainContent />
            </div>
        </div>
    );
};

export default index;
