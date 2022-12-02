import {NextPage} from "next";
import Link from "next/link";

const FooterPage: NextPage = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-col first">
                            <h6>UfficioAffissioni</h6>
                            <p>Inizia da subito a risparmiare il tuo tempo</p>
                        </div>
                        <div className="footer-col second">
                            <h6>Link utili</h6>
                            <ul className="list-unstyled li-space-lg p-small">
                                <li>Importanti: Termini e Condizioni, Privacy Policy</li>
                                <li>Guide: Manifesti comunali nella tua città; Regolamento Affissioni Comunali</li>
                                <li>Supporto: <Link href="/#richiedi-preventivo">Richiedi Preventivo</Link>, <Link href="/contacts">Contattaci</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col third">
                            <span className="fa-stack">
                                <Link href="/">

                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>

                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link href="/">

                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>

                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link href="/">

                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-pinterest-p fa-stack-1x"></i>

                                </Link>
                            </span>
                            <span className="fa-stack">
                                <Link href="/">

                                    <i className="fas fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>

                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterPage;
