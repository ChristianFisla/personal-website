import KOTitleScreen from '../Images/kotitlescreen.png';
import GameplayImage from '../Images/gameplayImage.png';
import TextReader from '../Images/textReader.png';

export default function Programming() {
  return (
    <div id="programming-container">
      <div className="tablet" id="programming-tablet" data-aos="flip-up">
        <img src={KOTitleScreen} alt="Title screen for my 2D Dungeon Crawler Java Game" className="programming-photo" id="title-screen" />
        <img src={GameplayImage} alt="Gameplay screenshot about my 2D Dungeon Crawler Java Game" className="programming-photo" id="gameplay-image" />
        <img src={TextReader} alt="Text frequency program made in Java" className="programming-photo" id="text-reader" />
      </div>
      <div data-aos="fade-left" data-aos-duration="700">
        <h2 className="tablet-header" id="programming-title">
          PROGRAMMING
        </h2>
        <h3 className="tablet-subtext" id="programming-subtext">
          FEB 2020 - PRESENT
        </h3>
        <ul id="programming-bullet">
          <li>TAUGHT MYSELF HTML, CSS, JS, AND REACT</li>
          <li>FLUENT IN PYTHON, JAVA, AND JAVASCRIPT</li>
          <li>&#62;3 YEARS OF ACADEMIC CODING EXPERIENCE</li>
          <li>DEVELOPED A 2D DUNGEON CRAWLER GAME IN JAVA WITH &#62;3000 LINES</li>
        </ul>
      </div>
    </div>
  )
}