import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const SocialNetwork = () => {
    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");
        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px,${
                    e.offsetY - 13
                }px)`;
            });
            link.addEventListener("mouseleave", (e) => {
                link.style.transform = ``;
            });
        });
    };
    return (
        <div className="social-network">
            <ul className="content">
                <a
                    href="https://www.linkedin.com/in/antony-baills-36975724a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={() => anim()}>
                    <li>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{
                                fontSize: 30,
                                color: "blue",
                                opacity: 0.7,
                            }}
                        />
                    </li>
                </a>
                <a
                    href="https://github.com/papyntown"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={() => anim()}>
                    <li>
                        <FontAwesomeIcon
                            icon={faGithub}
                            style={{
                                fontSize: 30,
                                color: "blue",
                                opacity: 0.7,
                            }}
                        />
                    </li>
                </a>
                <a
                    href="./CV_Antony_Baills DEV-WEB.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover"
                    onMouseOver={() => anim()}>
                    <li>
                        <FontAwesomeIcon
                            icon={faFileAlt}
                            style={{
                                fontSize: 30,
                                color: "blue",
                                opacity: 0.7,
                            }}
                        />
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;