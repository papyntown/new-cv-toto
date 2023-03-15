import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const MainContent = () => {
    return (
        <div className="home-main">
            <div className="main-content">
                <div className="head">
                    <motion.div
                        drag
                        dragConstraints={{
                            left: -250,
                            top: -200,
                            right: 950,
                            bottom: 250,
                        }}
                        className="img-cv-contain">
                        <Image
                            src={`./To_cv.jpg`}
                            alt={"Photo de Antony Baills"}
                            width={100}
                            height={100}
                            className="img-cv"
                        />
                    </motion.div>
                    <div className="title">
                        <motion.h1
                            drag
                            dragConstraints={{
                                left: -250,
                                top: -200,
                                right: 950,
                                bottom: 250,
                            }}>
                            Baills Antony
                        </motion.h1>
                        <motion.h2
                            drag
                            dragConstraints={{
                                left: -250,
                                top: -200,
                                right: 950,
                                bottom: 250,
                            }}>
                            Developpeur Web
                        </motion.h2>
                    </div>
                </div>

                <motion.div
                    drag
                    dragConstraints={{
                        left: -250,
                        top: -350,
                        right: 950,
                        bottom: 150,
                    }}
                    className="description">
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
                </motion.div>
            </div>
        </div>
    );
};

export default MainContent;
