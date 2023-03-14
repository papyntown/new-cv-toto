import { useEffect, useState } from "react";

function Darkmode() {
    const [isDarkMode, setIsDarkMode] = useState(
        typeof window !== "undefined" &&
            localStorage.getItem("isDarkMode") === "true"
    );
    useEffect(() => {
        const elements = document.querySelectorAll(
            "body,a, .button, h1, p, h3, .random-circle, .project, .home , .navigation, .img-cv, .contact"
        );

        function toggleDarkMode() {
            if (isDarkMode) {
                elements.forEach((element) => {
                    element.classList.add("dark-mode");
                    element.classList.remove("light-mode");
                });
            } else {
                elements.forEach((element) => {
                    element.classList.add("light-mode");
                    element.classList.remove("dark-mode");
                });
            }
        }

        toggleDarkMode();
    }, [isDarkMode]);

    function handleToggle() {
        const newValue = !isDarkMode;
        setIsDarkMode(newValue);
        localStorage.setItem("isDarkMode", newValue);
    }

    return (
        <div className={`toggle ${isDarkMode ? "dark-mode" : ""}`}>
            <label>
                <input
                    type="checkbox"
                    onChange={handleToggle}
                    checked={isDarkMode}
                />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default Darkmode;
