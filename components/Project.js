import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Project = ({ project }) => {
    const [left, setLeft] = useState();
    const [top, setTop] = useState();
    const [size, setSize] = useState();
    const [plusMinus, setPlusMinus] = useState();
    useEffect(() => {
        // Pour que le useEffect fonction il faut mêtre project.title dans le callback
        // Mais cela nuit au performance et on peut sentir un leger delay entre les pages
        setLeft(Math.floor(Math.random() * 200 + 900) + "px");
        setTop(Math.floor(Math.random() * 200 + 250) + "px");
        setSize("scale(" + (Math.random() + 0.1) + ")");
        setPlusMinus(Math.random() < 0.5 ? 1 : -1);
    }, []);
    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6,
    };
    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 2.5 },
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0.4,
            x: -800,
            transition: { duration: 2.3 },
        },
    };
    const imgAnim = {
        initial: {
            opacity: 0,
            x: Math.random() * 350 * plusMinus,
            x: Math.random() * 120 * plusMinus,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
        },
    };

    return (
        <motion.div
            key={project.title}
            className="project-main"
            initial="initial"
            animate="visible"
            exit={"exit"}
            transition={transition}
            variants={variants}>
            <div className="project-content">
                <h1>{project.title}</h1>
                <p>{project.date}</p>
                <ul className="languages">
                    {project.languages.map((language) => {
                        return <li key={language}>{language}</li>;
                    })}
                </ul>
            </div>
            <motion.div
                initial="initial"
                animate="visible"
                transition={{ duration: 1.5 }}
                variants={imgAnim}
                className="img-content">
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
            </motion.div>
            <span
                className="random-circle"
                style={{ left: left, top: top, transform: size }}></span>
        </motion.div>
    );
};

export default Project;
