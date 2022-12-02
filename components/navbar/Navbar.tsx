import React from "react";
import Link from "next/link";

const NavbarPage: React.FC = () => {
    return (
        <nav id="myNavbar" className="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div className="container">
                <a className="navbar-brand logo-text">UfficioAffissioni</a>
                <button className="navbar-toggler p-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse offcanvas-collapse" id="navbarMain">
                    <ul className="navbar-nav ms-auto navbar-nav-scroll">
                        <li className="nav-item">
                            <Link href="/#richiedi-preventivo" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/#details" className="nav-link">
                                Dettagli
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contacts" className="nav-link">
                                Contattaci
                            </Link>
                        </li>
                    </ul>
                    <span className="nav-item">
                        <Link href="#richiedi-preventivo" className="btn-outline-sm">
                            Richiedi Preventivo
                        </Link>
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default NavbarPage;
