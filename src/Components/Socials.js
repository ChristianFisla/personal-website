import GitHub from '../Images/githubtransparent.png';
import LinkedIn from '../Images/linkedintransparent.png';
import Twitter from '../Images/twittertransparent.png';
import YouTube from '../Images/youtubetransparent.png';

export default function Socials() {
  return (
    <div id="links-container">
      <a href="https://github.com/ChristianFisla" target="_blank" className="social-link" >
        <img src={GitHub} alt="GitHub Logo Transparent" className="logos" />
      </a>
      <a href="https://www.linkedin.com/in/christian-fisla-409403215/" target="_blank" className="social-link" >
        <img src={LinkedIn} alt="LinkedIn Logo Transparent" className="logos" />
      </a>
      <a href="https://twitter.com/christian_fisla" target="_blank" className="social-link" >
        <img src={Twitter} alt="Twitter Logo Transparent" className="logos" />
      </a>
      <a href="https://www.youtube.com/channel/UCtJteiV723Zdn1H2b2AkfYA" target="_blank" className="social-link" >
        <img src={YouTube} alt="YouTube Logo Transparent" className="logos" />
      </a>
    </div>
  )
}