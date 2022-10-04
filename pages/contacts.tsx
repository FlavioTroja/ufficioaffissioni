import React from "react";
import {NextPage} from "next";
import Head from "next/head";

const Contacts: NextPage = () => {
    return (
        <>
            <Head>
                <title>Contatti</title>
                <meta name="description" content="Richiedi informazioni attraverso in nostro centralino. Una persona ti risponderà subito." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Contatti</h1>
        </>
    )
}

export default Contacts;
