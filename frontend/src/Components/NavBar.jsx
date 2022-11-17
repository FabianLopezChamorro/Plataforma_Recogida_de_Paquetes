import React from "react";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars ms-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#recoger">Recoger</a></li>
                            <li className="nav-item"><a className="nav-link" href="#rastrear">Rastrear</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">Nosotros</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">Equipo</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;