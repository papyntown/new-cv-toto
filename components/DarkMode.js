import { useEffect, useState } from "react";

function Darkmode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        // je prend tous élement que je veux modifier et leur ajoute ma classe
        const elements = document.querySelectorAll(
            "body,a, .button, h1, p, h3, .random-circle, .project, .home , .navigation, .img-cv"
        );
        function toggleDarkMode() {
            elements.forEach((element) => {
                if (isDarkMode) {
                    // Si le mode sombre est activé, j'ajoute la classe "dark-mode"
                    element.classList.add("dark-mode");
                    // Et je retire la classe "light-mode"
                    element.classList.remove("light-mode");
                } else {
                    // Sinon, j'ajoute la classe "light-mode"
                    element.classList.add("light-mode");
                    // Et je retire la classe "dark-mode"
                    element.classList.remove("dark-mode");
                }
            });
        }
        toggleDarkMode();
    }, [isDarkMode]);

    function handleToggle() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className={`toggle ${isDarkMode ? "dark-mode" : ""}`}>
            <label>
                <input type="checkbox" onChange={handleToggle} />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default Darkmode;
