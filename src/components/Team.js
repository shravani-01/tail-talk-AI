// import { FullPageChat } from "flowise-embed-react";
import { React } from 'react';
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import '../App.css';
import mohsin from '../images/mohsin.png';
import sharanya from '../images/sharanya.png';
import shra from '../images/shravani.png';
import simran from '../images/simran.png';
import tech from '../images/tech-stack.png';
import './Home.css';
import './Team.css';




const Team = () => {


    
  return (
    <div>
        <Fade>
    <div className='team-container'>
      {/* <h1>TEAM WORK MAKES THE DREAM WORK.</h1> */}
     
    </div>
    </Fade>
    <div>
      <h2 className='team-header'>Meet the Team</h2>
    </div>


<Row className="align-items-center content teamintro my-4">
    {/* <Fade left> */}
<Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
                {/* <Fade bottom duration='1200'> */}
                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Shravani Hariprasad</h2>
                        <br></br>
                        {/* <br></br> */}
                        <img src={shra} alt="Right Image" className="about-image shravaniimg" />
                        {/* <br></br>
                        <br></br> */}
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='https://www.linkedin.com/in/shravani-hariprasad-507280177/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='https://github.com/shravani-01'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                                          </div>
                </div>
                {/* </Fade> */}
            </div>
        </div>
    </Col>
    

    <Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
            {/* <Fade bottom duration='2000'>  */}

                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Sharanya Akkone</h2>
                        {/* <br></br> */}
                        {/* <br></br> */}
                        <img src={sharanya} alt="Right Image" className="about-image shravaniimg" />
                        {/* <br></br>
                        <br></br> */}
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='/'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                     
                    </div>
                </div>
                {/* </Fade > */}

            </div>
        </div>
    </Col>
    {/* </Row>
    <Row className="align-items-center content teamintro my-4"> */}
    <Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
            {/* <Fade bottom duration='2800'> */}

                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Simran Solanki</h2>
                        {/* <br></br> */}
                        {/* <br></br> */}
                        <img src={simran} alt="Right Image" className="about-image shravaniimg" />
                        {/* <br></br>
                        <br></br> */}
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='/'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                       
                    </div>
                </div>
                {/* </Fade > */}

            </div>
        </div>
    </Col>

    <Col md={4} className="text-center order-md-2 member">
        <div className='about-container'>
            <div className="about-content">
            {/* <Fade bottom duration='2800'> */}

                <div className="about-card about-right animate">
                    <div className="about-text">
                      <br></br>
                        <h2>Mohsin Ali</h2>
                        {/* <br></br> */}
                        {/* <br></br> */}
                        <img src={mohsin} alt="Right Image" className="about-image shravaniimg" />
                        {/* <br></br>
                        <br></br> */}
                        <div className='profile-icons'>
                            <Link
                                className='social-icon-link linkedin'
                                to='/'
                                target='_blank'
                                aria-label='Linked In'
                            >
                                <i className="fa-brands fa-linkedin"></i>
                            </Link>
                            <Link
                                className='social-icon-link github'
                                to='/'
                                target='_blank'
                                aria-label='GitHub'
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </div>
                       
                    </div>
                </div>
                {/* </Fade > */}

            </div>
        </div>
    </Col>
   
   
</Row>
{/* </Fade> */}
<div className='workflow'>
                {/* Workflow Flowchart */}
                <Row className="align-items-center content">
                    <Col className="text-center mx-auto">
                        <br></br>
                        <br></br>
                        <h2>Know the Tech</h2>
                        <Fade  duration='1200'>
                        <img className="img-fluid" style={{ width: '60%' }} src={tech} alt="Workflow Flowchart" />
                        </Fade>
                        <br></br>
                    </Col>
                    <br></br>
                </Row>
            </div>


    </div>
  );
}

export default Team;
