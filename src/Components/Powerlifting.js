import Bench from '../Images/bench.png';
import Squat from '../Images/squat.png';
import Deadlift from '../Images/deadlift.png';

export default function Powerlifting() {
  return (
    <div id="powerlifting-container">
      <div className="tablet" id="powerlifting-tablet" data-aos="flip-up" >
        <img src={Bench} alt="me bench pressing" className="powerlifting-photo" id="bench" />
        <img src={Squat} alt="me squatting" className="powerlifting-photo" id="squat" />
        <img src={Deadlift} alt="me deadlifting" className="powerlifting-photo" id="deadlift"/>
      </div>
      <div data-aos="fade-right" data-aos-duration="700">
        <h2 className="tablet-header" id="powerlifting-title">
          POWERLIFTING
        </h2>
        <h3 className="tablet-subtext" id="powerlifting-subtext">
          OCT 2021 - PRESENT
        </h3>
        <ul id="powerlifting-bullet">
          <li>COACHED MYSELF AT THE START</li>
          <li>TOTAL TRAINING TIME OF &#126;20 HOURS PER WEEK</li>
          <li>REACHED A TRAINING TOTAL OF 1000LBS+ IN THE 66KG WEIGHT CLASS</li>
          <li>SET TO COMPETE JULY 2023</li>
        </ul>
      </div>
    </div>
  )
}