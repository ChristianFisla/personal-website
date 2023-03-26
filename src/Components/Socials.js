import GitHub from '../Images/githubtransparent.png';
import Discord from '../Images/discordtransparent.png';
import Twitter from '../Images/twittertransparent.png';
import YouTube from '../Images/youtubetransparent.png';

export default function Socials() {
  return (
    <div id="links-container">
      <a href="https://github.com/ChristianFisla" className="social-link" >
        <img src={GitHub} alt="GitHub Logo Transparent" className="logos" />
      </a>
      <a href="https://discordapp.com/users/christiann#6668" className="social-link" >
        <img src={Discord} alt="Discord Logo Transparent" className="logos" />
      </a>
      <a href="https://twitter.com/christian_fisla" className="social-link" >
        <img src={Twitter} alt="Twitter Logo Transparent" className="logos" />
      </a>
      <a href="https://www.youtube.com/channel/UCtJteiV723Zdn1H2b2AkfYA" className="social-link" >
        <img src={YouTube} alt="YouTube Logo Transparent" className="logos" />
      </a>
    </div>
  )
}