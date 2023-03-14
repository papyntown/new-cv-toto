import ContactForm from "@/components/ContactForm";
import Darkmode from "@/components/DarkMode";
import Meta from "@/components/Meta";
import NavBar from "@/components/NavBar";
import NavButtons from "@/components/NavButtons";
import React from "react";

const about = () => {
    return (
        <main>
            <Meta
                title={"Contactez-moi"}
                description={
                    "Retrouvez ici toutes les informations pour me contacter"
                }
            />
            <div className="contact">
                <NavBar />
                <Darkmode />
                <NavButtons left={`./project/../React-movies.png`} />
                <ContactForm />
            </div>
        </main>
    );
};

export default about;
