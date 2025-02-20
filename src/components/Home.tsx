import "./Home.css";
import Underline from "../assets/underline.svg";
import Down from "../assets/down.svg";

export const Home = () => {
  return (
    <div className="home">
      <p>Shafin Ahmed</p>
      <img className="underline" src={Underline} alt="Underline" />
      <div className="down-arrow-container">
        <img className="down-arrow" src={Down} alt="Down Arrow" />
      </div>
    </div>
  );
};
