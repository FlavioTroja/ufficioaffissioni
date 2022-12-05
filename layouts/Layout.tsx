import React, {ReactNode} from "react";
import NavbarPage from "../components/navbar/Navbar";
import FooterPage from "../components/footer/Footer";
import Head from "next/head";

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Ufficio Affissioni</title>
                <meta name="description" content="Richiedi un preventivo per affiggere manifesti nella tua città attraverso il portale ufficio affissioni" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <NavbarPage />
            {children}
            <FooterPage />
        </>
    )
}

export default Layout;
