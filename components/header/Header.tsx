import React from "react";
import Image from "next/image";

const HeaderPage: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="text-container mt-5">
                            <h1 className="h1-large">
                                La moneta più importante che abbiamo
                                <span> è il tempo</span>
                            </h1>
                            <p className="p-large">
                                Ufficio Affissioni gestisce le tue affissioni comunali per te. Richiedi subito un preventivo per affiggere manifesti nella tua città.
                            </p>
                            <button className="btn-solid-lg">Dimmi di più</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Image
                            className="img-fluid w-auto h-auto"
                            src="/images/header.png"
                            width={500}
                            height={500}
                            alt="Ufficio Affissioni Della tua città"
                            priority />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderPage;
