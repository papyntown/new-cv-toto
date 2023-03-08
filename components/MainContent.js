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
                        J'espère que ce CV en ligne, où vous pourrez trouver
                        certains de mes projets React et Next.js, suscitera
                        votre intérêt. J'ai travaillé dur pour développer mes
                        compétences en développement web et pour créer des
                        projets qui démontrent mes capacités. J'ai
                        particulièrement apprécié travailler avec React et
                        Next.js, car ce sont des technologies qui offrent une
                        grande flexibilité et une grande évolutivité. J'ai hâte
                        de partager mes projets avec vous et de discuter de la
                        manière dont mes compétences pourraient être mises à
                        profit dans votre entreprise. Merci de prendre le temps
                        de parcourir mon CV en ligne et j'espère avoir bientôt
                        de vos nouvelles.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
