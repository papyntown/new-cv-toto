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
                        <div className="head-span">
                            <h3>{project.title}</h3>
                            <div className="languages-logo">
                                {project.languages.map((icon) => (
                                    <Image
                                        key={icon}
                                        src={`../language/${icon}.svg`}
                                        alt={`Icon language ${icon}`}
                                        width={100}
                                        height={100}
                                        className="img"
                                    />
                                ))}
                            </div>
                        </div>
                        <p>{project.infos}</p>
                    </span>
                    <Image
                        src={`../${project.img}`}
                        alt={`Img du projet ${project.title}`}
                        width={100}
                        height={100}
                        className="img"
                    />
                </div>
                <div className="button-container">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover">
                        <span className="button">Voir le Site</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
