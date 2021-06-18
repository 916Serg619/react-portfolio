import React from 'react';
import '../../App.css';
import './WebDev.css';
import codeQuiz from '../Assets/CodeQuiz.png';
import sdcBeer from '../Assets/SDCBeer.png';
import plannerPic from '../Assets/PlannerForPlanner.png';
import Footer from '../Footer/Footer';

function WebDev() {
    return (
        <div>
              <section className="projects" id="projects">
        <div className="max-width">
            <h1 className="title">Projects</h1>
            <h2 className="title">Web Development</h2>
            <div className="proj-content">
                <div className="card">
                    <div className="box">
                        <div className="text">Code Quiz</div>
                        <img src={codeQuiz} alt="Code Quiz"></img>
                        <a className="link" href="https://916serg619.github.io/CodeQuiz/">Link to Code Quiz</a>
                        <p className="column-right">One of my first projects at UCSD Bootcamp. Users can take a short quiz, see their own score, and can view other top scored from other users.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="text">SDCBeer</div>
                        <img src={sdcBeer} alt="SDCBeer"></img>
                        <a className="link" href="https://xicano619.github.io/Project-B/">Link to Group Project</a>
                        <p>My first group project at UCSD Bootcamp. The idea behind our project centers around breweries in San Diego. The goal was that the user can search nearby breweries, based off a certain region of the county, and from there, the user
                            can make selections and save certain locations to be viewed at another time.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="text">Planner For Planner</div>
                        <img src={plannerPic} alt="PlannerForPlanner"></img>
                        <a className="link" href="https://project2-serogio.herokuapp.com/">Link to Group Project</a>
                        <p>My second group project at UCSD Bootcamp. Our focus was to create an application for a professional wedding planner that needs a place where they can easily organize details for every one of their weddings/events.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>  
        <Footer />
        </div>
    )
}

export default WebDev;
