import ZiLogo from '../Images/zilogo.png';
import YTDash from '../Images/ytdash.png';
import Thumbnail1 from '../Images/thumbnail1.png';
import Thumbnail2 from '../Images/thumbnail2.png';
import Thumbnail3 from '../Images/thumbnail3.png';

export default function Zinvestor() {
  return (
    <div id="zinvestor-container">
      <div className="tablet" id="zinvestor-tablet" data-aos="flip-up" >
        <img src={ZiLogo} alt="zinvestor logo" id="zinvestor-logo-tablet" />
        <img src={YTDash} alt="zinvestor youtube dashboard" id="zinvestor-dash" />
        <img src={Thumbnail1} alt="zinvestor thumbnail" className="zinvestor-thumbnail" id="zinvestor-thumbnail1" />
        <img src={Thumbnail2} alt="zinvestor thumbnail" className="zinvestor-thumbnail" id="zinvestor-thumbnail2" />
        <img src={Thumbnail3} alt="zinvestor thumbnail" className="zinvestor-thumbnail" id="zinvestor-thumbnail3" />
      </div>
      <div data-aos="fade-left" data-aos-duration="700">
        <h2 className="tablet-header" id="zinvestor-title">
          Z INVESTOR
        </h2>
        <h3 className="tablet-subtext" id="zinvestor-subtext">
          JUN 2021 - PRESENT
        </h3>
        <ul id="zinvestor-bullet">
          <li>COFOUNDED A CANADIAN BASED INVESTING EDUCATION BRAND</li>
          <li>SCRIPTED, EDITED, FILMED AND PUBLISHED INTERVIEWS WITH FAMOUS INVESTORS AND STOCK MARKET TUTORIALS</li>
          <li>REACHED &#62;100K VIEWERS AND &#62;400 TOTAL VIDEO WATCH HOURS</li>
        </ul>
      </div>
    </div>
  )
}