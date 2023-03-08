import Head from "next/head";
import React from "react";

const Meta = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="descritption" content={description} />
        </Head>
    );
};
Meta.defaultProps = {
    title: "Portfolio Baills Antony",
    description: "Voici mon cv avec mon portofolio",
};

export default Meta;
