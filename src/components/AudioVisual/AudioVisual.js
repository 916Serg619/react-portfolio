import React from 'react';
import '../../App.css';
import '../WebDev/WebDev.css';
import teeko from '../Assets/Teeko.png';
import freddie from '../Assets/FreddiJoachim.png';
import Footer from '../Footer/Footer';


function AudioVisual() {
    return (
        <div>
            <section className="projects" id="projects">
        <div className="max-width">
            <h2 className="title">Videography</h2>
            <div className="proj-content">
                <div className="card">
                    <div className="box">
                        <div className="text">Artist in Residence - TEEKO</div>
                        <img src={teeko} alt="Teeko"></img>
                        <a href="https://www.youtube.com/watch?v=qV3QVPa-tEk">Link to Video</a>
                        <p>This is short interview of an artist who came to visit the school I was attending, Ex'Pression College of Digital Arts. Filmed and edited by my colleague and me.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="text">Artist in Residence - Freddie Joachim</div>
                        <img src={freddie} alt="Freddie Joachim"></img>
                        <a href="https://www.youtube.com/watch?v=6DGurruCvAo">Link to Video</a>
                        <p>This is short interview of an artist who came to visit the school I was attending, Ex'Pression College of Digital Arts. Filmed and edited by my colleague and me.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    <Footer />
        </div>
    )
}

export default AudioVisual;
