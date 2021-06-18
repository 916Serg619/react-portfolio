import React from 'react'
import profilePic from '../Assets/Profile-pic.jpg';
import Resume from '../Assets/SergioAguirre.Resume.UCSD.pdf';
//import { Navbar } from '../Navbar/index';
import '../Header/Header.css';
import Footer from '../Footer/Footer';

function Header() {
    return (
        /*About, Services, Projects, Contact*/
        <div>
        {/* <Navbar /> */}
        <div className="header-waper">
            <div className="main-info">
            <section className="about" id="about">
        <div className="col-6">
            <h2 className="title" id='about-me'>About Me</h2>
            <div className="about-content">
                <div className="column-left profilePic">
                    <img src={profilePic} className='profilePic' alt="Sergio Aguirre"></img>
                </div>
                <div className="column-right">
                    <p>Hello! My name is Sergio Aguirre. With a background in the Audio/Visual field, paired with my current knowledge of web development, my goal is to help you solidify your brand, company, or product, to be ready for the modern world.</p>
                    <a href={Resume} className='resume'> Resumé</a>
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
  </div>
 </div>
 <Footer />
</div>

    )
}

export default Header
