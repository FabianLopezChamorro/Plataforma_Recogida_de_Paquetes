import React from "react";

function Contacto() {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contactanos</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                {/* * * * * * * * * * * * * * * **/}
                {/* * * SB Forms Contact Form * **/}
                {/* * * * * * * * * * * * * * * **/}
                {/* This form is pre-integrated with SB Forms.*/}
                {/* To make this form functional, sign up at*/}
                {/* https://startbootstrap.com/solution/contact-forms*/}
                {/* to get an API token!*/}
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                {/* Name input*/}
                                <input className="form-control" id="name" type="text" placeholder="Nombre *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="name:required">Se require nombre.</div>
                            </div>
                            <div className="form-group">
                                {/* Email address input*/}
                                <input className="form-control" id="email" type="email" placeholder="Email *" data-sb-validations="required,email" />
                                <div className="invalid-feedback" data-sb-feedback="email:required">Se require Email.</div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email no valido.</div>
                            </div>
                            <div className="form-group mb-md-0">
                                {/* Phone number input*/}
                                <input className="form-control" id="phone" type="tel" placeholder="Celular *" data-sb-validations="required" />
                                <div className="invalid-feedback" data-sb-feedback="phone:required">Se require un número de celular.</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                {/* Message input*/}
                                <textarea className="form-control" id="message" placeholder="Dejanos tu mensaje *" data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">Se requiere mensaje.</div>
                            </div>
                        </div>
                    </div>
                    {/* Submit success message*/}
                    {/**/}
                    {/* This is what your users will see when the form*/}
                    {/* has successfully submitted*/}
                    <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center text-white mb-3">
                            <div className="fw-bolder">Mensaje enviado correctamente!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    {/* Submit error message*/}
                    {/**/}
                    {/* This is what your users will see when there is*/}
                    {/* an error submitting the form*/}
                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                    {/* Submit Button*/}
                    <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Enviar Mensaje</button></div>
                </form>
            </div>
        </section>
    );
}

export default Contacto;