import './Contact.css';
import seaweed from '../assets/seaweed.png';
import fish2 from '../assets/fish2.png';

function Contact() {

    return (
        <section className='contact-section'>
            <p className='contact-info'>
                <span className='contact'> Contact: </span><br />
                Megan Crotteau <br />
                Denver, CO <br />
                megan.crotteau@gmail.com <br />
            </p>
            <img className='seaweed' src={seaweed} alt='seaweed'/>
            <img className='fish2' src={fish2} alt='seaweed'/>
        </section>
    )
}

export default Contact;