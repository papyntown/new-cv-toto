import Link from "next/link";
import React from "react";

const NavButtons = (props) => {
    return (
        <div className="scroll-bottom">
            {props.left && (
                <Link
                    className="left hover"
                    href={props.left == "/" ? "/" : "/project/[id]"}
                    as={props.left}>
                    <span>&#10092;</span>
                </Link>
            )}
            {props.right && (
                <Link
                    className="right hover"
                    href="/project/[id]"
                    as={props.right}>
                    <span>&#10093;</span>
                </Link>
            )}
        </div>
    );
};

export default NavButtons;
