import './App.css';
import Socials from './Components/Socials.js';
import Zinvestor from './Components/Zinvestor';
import Powerlifting from './Components/Powerlifting';
import Programming from './Components/Programming';

function App() {
  return (
    <>
      <h1 id="name">
        CHRISTIAN
        FISLA
      </h1>
      <h2 id="subtext">
        I enjoy web development, programming, finance, powerlifting, and more. 
      </h2>
      <Socials />
      <h2 id="scroll">
        SCROLL!
      </h2>
      <h1 id="about-me" data-aos="fade-right" data-aos-duration="700">
        ABOUT ME
      </h1>
      <Zinvestor />
      <Powerlifting />
      <Programming />
      <div id="contact-container">
        <h1 id="contact">
          CONTACT
        </h1>
        <h3 className="contact-info" id="resume-text">
          RESUME:&nbsp;
          <a href="https://drive.google.com/file/d/1OioANbJrlvQvng3ZBsXm4rwkZE0qBf9M/view?usp=sharing" id="click-pdf">
          CLICK HERE PDF
          </a>
        </h3>
        <h3 className="contact-info">
          EMAIL: chrisyf2005@gmail.com
        </h3>
      </div>
    </>
  );
}

export default App;