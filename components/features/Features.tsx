import React from "react";

const Features: React.FC = () => {
    return (
        <div id="features" className="cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="heading">
                            UfficioAffissioni ha tutte le caratteristiche di cui <span>hai bisogno</span>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-icon">
                                <span className="fas fa-headphones-alt"></span>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Consulete pubblicitario</h4>
                                <p>Ti proponiamo un consulente dedicato speciale</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-icon green">
                                <span className="fas fa-desktop"></span>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Applicazione Web</h4>
                                <p>Gestisci le tue affissioni, crea una campagna pubblicitaria ad hoc</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-icon blue">
                                <span className="fas fa-chart-line"></span>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Disponibilità</h4>
                                <p>Con UfficioAffissioni hai le disponibilità degli impianti sempre aggiornati</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;