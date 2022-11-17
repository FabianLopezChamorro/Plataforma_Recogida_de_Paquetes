import React from "react";

function Header() {
    return (
        <header className="masthead">
            <div className="container">
                <div className="masthead-subheading">Bienvenido a InstaYa</div>
                <div className="masthead-heading text-uppercase">Será un placer servirte</div>
                <a className="btn btn-primary btn-xl text-uppercase" href="#about">Conoce más sobre nosotros</a>
            </div>
        </header>
    );
}

export default Header;