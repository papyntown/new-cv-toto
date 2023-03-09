import React from "react";
import Image from "next/image";
const MainContent = () => {
    return (
        <div className="home-main">
            <div className="main-content">
                <div className="head">
                    <div className="img-cv-contain">
                        <Image
                            src={`./To_cv.jpg`}
                            alt={"Photo de Antony Baills"}
                            width={100}
                            height={100}
                            className="img-cv"
                        />
                    </div>
                    <div className="title">
                        <h1>Baills Antony</h1>
                        <h2>Developpeur Web</h2>
                    </div>
                </div>

                <div className="description">
                    <p>
                        Mon CV en ligne présente mes projets en React et Next.js
                        pour démontrer mes compétences en développement web.
                        J'apprécie particulièrement travailler avec ces
                        technologies pour leur flexibilité et évolutivité.
                        J'espère que mes projets susciteront votre intérêt et
                        j'ai hâte de discuter de mes compétences avec vous.
                        Merci d'avoir parcouru mon CV en ligne et j'attends avec
                        impatience votre réponse.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
