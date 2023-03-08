import project from "@/pages/project/[id]";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavBar = () => {
    const router = useRouter();
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <Link
                        className={
                            router.pathname == "/"
                                ? "nav-active hover"
                                : "hover"
                        }
                        href={"/"}>
                        {" "}
                        Présentation{" "}
                    </Link>
                </li>
                <li className="nav-portfolio">
                    Projects
                    <ul className="nav-projects">
                        <li>
                            <Link
                                className={
                                    router.pathname == `/project/1}`
                                        ? "nav-active hover"
                                        : "hover"
                                }
                                href="/project/[id]"
                                as={`/project/1`}>
                                FitForces
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    router.pathname == `/project/2}`
                                        ? "nav-active hover"
                                        : "hover"
                                }
                                href="/project/[id]"
                                as={`/project/2`}>
                                Weather App{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    router.pathname == `/project/3}`
                                        ? "nav-active hover"
                                        : "hover"
                                }
                                href="/project/[id]"
                                as={`/project/3`}>
                                React Movies
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link
                        className={
                            router.pathname == "/about"
                                ? "nav-active hover"
                                : "hover"
                        }
                        href={"/about"}>
                        Me contacter{" "}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
