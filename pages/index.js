import Darkmode from "@/components/DarkMode";
import MainContent from "@/components/MainContent";
import Meta from "@/components/Meta";
import NavBar from "@/components/NavBar";
import NavButtons from "@/components/NavButtons";
import SocialNetwork from "@/components/SocialNetwork";
import React from "react";
import { motion } from "framer-motion";

const index = () => {
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            x: 100,
            transition: { duration: 0.3 },
        },
    };
    return (
        <div>
            <Meta />
            <motion.div
                initial="initial"
                animate="visible"
                exit={"exit"}
                variants={variants}
                className="home">
                <NavBar />
                <Darkmode />
                <SocialNetwork />
                <MainContent />
                <NavButtons right={`/project/1`} />
            </motion.div>
        </div>
    );
};

export default index;
