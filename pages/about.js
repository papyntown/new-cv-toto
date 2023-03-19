import ContactForm from "@/components/ContactForm";
import Darkmode from "@/components/DarkMode";
import Meta from "@/components/Meta";
import NavBar from "@/components/NavBar";
import NavButtons from "@/components/NavButtons";
import SocialNetwork from "@/components/SocialNetwork";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {
    FaCopy,
    FaHome,
    FaMailBulk,
    FaPhone,
    FaVoicemail,
    FaEnvelope,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const about = () => {
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 150,
        },
    };

    const copied = (e) => {
        toast.info(
            <>
                <FaCopy />
                <span> {`Vous avez copiez : ${e.target.textContent}`}</span>
            </>,
            {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }
        );
    };
    return (
        <motion.div
            exit={"out"}
            animate="in"
            initial="out"
            variants={pageTransition}
            transition={{ duration: 0.5 }}
            className="contact">
            <Meta
                title={"Contactez-moi"}
                description={
                    "Retrouvez ici toutes les informations pour me contacter"
                }
            />
            <NavBar />
            <Darkmode />
            <NavButtons left={`./project/3`} />
            <ContactForm />

            <div className="contact-infos">
                <div className="address">
                    <div className="content">
                        <h4>
                            Adresse <FaHome />
                        </h4>
                        <p>23 Rue Joseph Eril</p>
                        <p>66140 Canet-en-roussillion</p>
                        <p className="deplacement">Déménagement possible</p>
                    </div>
                </div>
                <div className="phone">
                    <div className="content">
                        <h4>
                            Téléphone <FaPhone />
                        </h4>
                        <CopyToClipboard text="0781647637" className="hover">
                            <p onClick={(e) => copied(e)}>07 81 64 76 32</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                    <div className="content">
                        <h4>
                            Email <FaEnvelope />
                        </h4>
                        <CopyToClipboard
                            text="antony.baills66@gmail.com"
                            className="hover">
                            <p onClick={(e) => copied(e)}>
                                antony.baills66@gmail.com
                            </p>
                        </CopyToClipboard>
                    </div>
                </div>
                <SocialNetwork />
                <div className="credits">
                    <p>Baills Antony - 2023</p>
                </div>
            </div>
        </motion.div>
    );
};

export default about;
