import React from 'react'

function Header() {
    return (
        /*About, Services, Projects, Contact*/

        
        <div className="header-waper">
            <div className="main-info">
            <section className="about" id="about">
        <div className="col-6">
            <h2 className="title">About Me</h2>
            <div className="about-content">
                <div className="column-left">
                    <img src="Assets/Profile-pic.jpg" alt="Sergio Aguirre"></img>
                </div>
                <div className="column-right">
                    <p>Hello! My name is Sergio Aguirre. With a background in the Audio/Visual field, paired with my current knowledge of web development, my goal is to help you solidify your brand, company, or product, to be ready for the modern world.</p>
                    <a href="Assets/SergioAguirre.Resume.UCSD.pdf">Download Resumé</a>
                </div>
            </div>
        </div>
    </section>
    <section className="services" id="services">
        <div className="max-width">
            <h2 className="title">My Services</h2>
            <div className="service-content">
                <div className="card">
                    <div className="box">
                        <div className="text">Web Design</div>
                        <p>Need a website? Want a personalized app? I am here for all your development needs.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="text">Audio/Visual</div>
                        <p>With years of experience with multiple audio and visual programs, I am here to help make your vision come to life!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="projects" id="projects">
        <div className="max-width">
            <h1 className="title">Projects</h1>
            <h2 className="title">Web Development</h2>
            <div className="proj-content">
                <div className="card">
                    <div className="box">
                        <div className="text">Code Quiz</div>
                        <img src="Assets/CodeQuiz.png" alt="Code Quiz"></img>
                        <a className="link" href="https://916serg619.github.io/CodeQuiz/">Link to Code Quiz</a>
                        <p className="column-right">One of my first projects at UCSD Bootcamp. Users can take a short quiz, see their own score, and can view other top scored from other users.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="text">SDCBeer</div>
                        <img src="Assets/SDCBeer.png" alt="SDCBeer"></img>
                        <a className="link" href="https://xicano619.github.io/Project-B/">Link to Group Project</a>
                        <p>My first group project at UCSD Bootcamp. The idea behind our project centers around breweries in San Diego. The goal was that the user can search nearby breweries, based off a certain region of the county, and from there, the user
                            can make selections and save certain locations to be viewed at another time.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="text">Planner For Planner</div>
                        <img src="Assets/PlannerForPlanner.png" alt="PlannerForPlanner"></img>
                        <a className="link" href="https://project2-serogio.herokuapp.com/">Link to Group Project</a>
                        <p>My second group project at UCSD Bootcamp. Our focus was to create an application for a professional wedding planner that needs a place where they can easily organize details for every one of their weddings/events.</p>
                    </div>
                </div>
            </div>
            <h2 className="title">Videography</h2>
            <div className="proj-content">
                <div className="card">
                    <div className="box">
                        <div className="text">Artist in Residence - TEEKO</div>
                        <img src="Assets/Teeko.png" alt="Teeko"></img>
                        <a href="https://www.youtube.com/watch?v=qV3QVPa-tEk">Link to Video</a>
                        <p>This is short interview of an artist who came to visit the school I was attending, Ex'Pression College of Digital Arts. Filmed and edited by my colleague and me.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="text">Artist in Residence - Freddie Joachim</div>
                        <img src="Assets/FreddiJoachim.png" alt="Freddie Joachim"></img>
                        <a href="https://www.youtube.com/watch?v=6DGurruCvAo">Link to Video</a>
                        <p>This is short interview of an artist who came to visit the school I was attending, Ex'Pression College of Digital Arts. Filmed and edited by my colleague and me.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>   
    <section className="contact" id="contact">
        <div className="max-width">
            <h2 className="title">Contact Me</h2>
            <div className="contact-content">
                <div className="column left">
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
    </section>
 </div>

 

</div>
    )
}

export default Header
