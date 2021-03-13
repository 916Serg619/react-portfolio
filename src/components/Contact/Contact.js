import React from 'react'

function Contact() {
    return (
        <div>
             <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="card">
            <div className="contact-content">
                <div className="contact-details">
                    <div className="text">Get in Touch</div>
                    <p>Feel free to reach me by phone or email. Add me on Github and LinkDn.</p>
                    <div className="icons">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Sergio Aguirre</div>
                            </div>
                            <div className="row">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <div className="head">Email</div>
                                    <div className="sub-title">sergioaguirre916@gmail.com</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fas fa-phone"></i>
                                <div className="info">
                                    <div className="head">Phone</div>
                                    <div className="sub-title">916-807-0916</div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-code-branch"></i>
                                    <div className="info">
                                        <div className="head">Github</div>
                                        <a href="https://github.com/916Serg619">Github</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-info-circle"></i>
                                    <div className="info">
                                        <div className="head">LinkDn</div>
                                        <a href="https://www.linkedin.com/in/sergio-aguirre-1a47a462/">LinkDn</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Contact;
