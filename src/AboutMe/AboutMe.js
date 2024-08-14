import './AboutMe.css';
import blueSquares from '../assets/blue-squares.png';
import bulbs from '../assets/bulbs.png';
import squiggle from '../assets/yellow-squiggle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {

    return (
        // <section className='about-me' style={{ backgroundImage: `url(${blueSquares})` }}>
        <section className='about-me'>
            <article className='about-intro'>
                <div>
                    <h2>Hi, Welcome!</h2>
                    <p className='description'>
                        I'm <span className='name'>Megan Crotteau</span>. <br />
                        Frontend engineer, biologist, & amateur origami-ist.
                    </p>
                </div>
                <div className='about-contact'>
                    <a href='https://www.linkedin.com/in/megancrotteau/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon
                            className='icon'
                            icon={faLinkedin}
                            style={{ fontSize: '50px', padding: '5px' }}
                        />
                    </a>
                    <a href='https://github.com/crotteau' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon
                            className='icon'
                            icon={faGithub}
                            style={{ fontSize: '50px', padding: '5px' }}
                        />
                    </a>
                    <a href='https://drive.google.com/file/d/1dmLRoSbM9xn-IIrSXvtvJOjuwq8TGnJb/view?usp=drive_link' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon
                            className='icon'
                            icon={faFile}
                            style={{ fontSize: '50px', padding: '5px' }}
                        />
                    </a>
                </div>
            </article>
            <img className='bulbs' src={bulbs} alt='globular-bulbs' />
        </section>
    )
}

export default AboutMe;