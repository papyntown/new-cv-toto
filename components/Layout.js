import React from "react";
import Darkmode from "./DarkMode";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <>
            {/* <NavBar /> */}

            <main>{children}</main>
        </>
    );
};

export default Layout;
