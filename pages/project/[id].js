import NavBar from "@/components/NavBar";
import NavButtons from "@/components/NavButtons";
import React from "react";
import { useRouter } from "next/router";
import Darkmode from "@/components/DarkMode";

const project = () => {
    const router = useRouter();
    const id = parseInt(router.query.id); // convertir en nombre entier
    const nextId = id;
    return (
        <div className="project">
            <NavBar />
            <Darkmode />
            <NavButtons
                left={id > 1 ? `/project/${nextId - 1}` : "/"}
                right={`/project/${nextId + 1}`}
            />
        </div>
    );
};

export default project;

// export const getStaticProps = async (context) => {};
// export const getStaticPaths = async () => {};
