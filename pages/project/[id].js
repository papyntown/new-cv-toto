import NavBar from "@/components/NavBar";
import NavButtons from "@/components/NavButtons";
import React from "react";
import { useRouter } from "next/router";
import Darkmode from "@/components/DarkMode";
import { projectsData } from "@/data/projectsData";
import Project from "@/components/Project";
import Meta from "@/components/Meta";

const project = ({ project }) => {
    const router = useRouter();
    const id = parseInt(router.query.id); // convertir en nombre entier
    const nextId = id;
    return (
        <div className="project">
            <Meta title={project.title} description={project.infos} />
            <NavBar />
            <Darkmode />
            <Project project={project} />
            <NavButtons
                left={id > 1 ? `/project/${nextId - 1}` : "/"}
                right={`/project/${nextId + 1}`}
            />
        </div>
    );
};

export default project;

export const getStaticProps = async (context) => {
    // Le -1 car je suis dans un tableau est donc 1 c'est le 0
    const project = projectsData[context.params.id - 1];

    return {
        props: {
            project,
        },
    };
};
export const getStaticPaths = async () => {
    const projects = projectsData;
    // Préparer les id dans un objet path {id:1 , id;2}
    const ids = projects.map((project) => project.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));

    return {
        paths,
        fallback: false,
    };
};
