import Image from "next/image";
import React from "react";

const Project = ({ project }) => {
    return (
        <div className="project-main">
            <div className="project-content">
                <h1>{project.title}</h1>
                <p>{project.date}</p>
                <ul className="languages">
                    {project.languages.map((language) => {
                        return <li key={language}>{language}</li>;
                    })}
                </ul>
            </div>
            <div className="img-content">
                <div className="img-container hover">
                    <span>
                        <h3>{project.title}</h3>
                        <p>{project.infos}</p>
                    </span>
                    <Image
                        src={`../${project.img}`}
                        alt={`Img du projet ${project.title}`}
                        width={100}
                        height={100}
                        className="project-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default Project;
