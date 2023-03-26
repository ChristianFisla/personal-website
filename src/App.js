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
      <h1 id="about-me" data-aos="fade-right" data-aos-duration="700">
        ABOUT ME
      </h1>
      <Zinvestor />
      <Powerlifting />
      <Programming />
    </>
  );
}

export default App;