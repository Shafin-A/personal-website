import "./About.css";
import ShafinAhmed from "../assets/shafin_ahmed.jpg";

export const About = () => {
  return (
    <div className="about">
      <h1>ABOUT ME</h1>
      <div className="about-content">
        <div className="about-text">
          <p>HEY,</p>
          <p>
            MY NAME IS <span className="span-common span-up">SHAFIN</span>
          </p>
          <p>
            I'M A{" "}
            <span className="span-common span-down">SOFTWARE DEVELOPER</span>
          </p>
          <br />
          <p>
            I LIKE TO SOLVE PROBLEMS THROUGH CODE. IF YOU LIKE MY WORK, FEEL
            FREE TO CONTACT ME!
          </p>
        </div>
        <div className="about-image">
          <img src={ShafinAhmed} alt="Shafin Ahmed" />
        </div>
      </div>
    </div>
  );
};
