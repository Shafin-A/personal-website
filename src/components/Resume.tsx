import "./Resume.css";
import ResumePDF from "../assets/Shafin_Resume.pdf";

export const Resume = () => {
  return (
    <div className="resume">
      <h1>RESUME</h1>
      <div className="resume-content">
        <p>
          DOWNLOAD MY RESUME{" "}
          <a href={ResumePDF} download>
            HERE
          </a>
          .
        </p>
        <p>OR VIEW IT BELOW:</p>
        <div className="resume-container">
          <details>
            <summary>Resume</summary>
            <iframe
              src={ResumePDF}
              title="Shafin's Resume"
              width="100%"
              height="800px"
            />
          </details>
        </div>
      </div>
    </div>
  );
};
