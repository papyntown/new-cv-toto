import Image from "next/image";
import React, { useEffect, useState } from "react";

const Project = ({ project }) => {
    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const [size, setSize] = useState();
    useEffect(() => {
        // Pour que le useEffect fonction il faut mêtre project.title dans le callback
        // Mais cela nuit au performance et on peut sentir un leger delay entre les pages
        setLeft(Math.floor(Math.random() * 200 + 900) + "px");
        setTop(Math.floor(Math.random() * 200 + 250) + "px");
        setSize("scale(" + (Math.random() + 0.1) + ")");
    }, []);
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
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer">
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
                </a>
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
            <span
                className="random-circle"
                style={{ left: left, top: top, transform: size }}></span>
        </div>
    );
};

export default Project;
