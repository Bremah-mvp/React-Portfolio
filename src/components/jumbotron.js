import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import image from "../images/mvp.jpeg";
import githubLogo from "../images/GitHub-Mark-120px-plus.png";
import linkedInLogo from "../images/linkedin.png";

const MainSection = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3"> Full Stack Web Developer</h1>
                            <p className="lead">Ready to work with you.</p>

                            <a className="logo" href="https://github.com/Bremah-mvp">
                                <img src={githubLogo} alt="GitHub logo" id="github" />
                            </a>
                            <a className="logo" href="https://www.linkedin.com/in/bremah-lwanga-99b09988/">
                                <img src={linkedInLogo} alt="LinkedIn logo" id="linkedin" />
                            </a>
                            <a className="logo" href="https://bremah-mvp.github.io/mvp-bremen/assets/Resume.pdf" id="cv">
                                CV
                    </a>
                        </Container>
                    </Jumbotron>
                </div>
            </div>
            <div className="row">
                <div id="aboutMeSection">
                    <div className="col-lg-3 col-12">
                        <img src={image} alt="Bremah " id="myPhoto" />
                    </div>
                    <div className="col-12">
                        <div id="aboutMeText">
                            <p>My name is Bremah Lwanga, Am a full stack web developer, graduated from the university of New Hampshire. I am now proficient in React, Angular,Javascript, Bootstrap, Node.js, Express, HTML & CSS, i should say front and backend</p>
                            <p>Am well equiped for designing front-end and a logical brain for tackling back-end, I'd be an essential asset to your team and ready to battle.</p>
                            <p>Aside from programing am also an Information technology specialist with a Bachelors Degree in Information technology</p>
                            <p>Please check out my favorite projects via the navbar above, or even visit my GitHub check out my projects. Can't wait to hear from you.</p>
                        </div>
                        <div id="contact">
                           <p>PHONE: 781 492 2173 </p>
                           <p>Email: mvpbremah@gmail.com</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;