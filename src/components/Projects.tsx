import "./Projects.css";
import { Details } from "./Details";
import DiscordStorage from "../assets/DiscordStorage.png";
import { GithubLogo } from "@phosphor-icons/react";
import ValStats from "../assets/ValStats.png";
import { Link } from "@phosphor-icons/react";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="projects-container">
        <Details summary="DiscordStrorage">
          <div className="details-content">
            <div className="details-text">
              <p>
                DiscordStorage is a web application that allows users to manage
                files and folders using a Discord server as the backend storage.
                It provides a user-friendly interface to upload, download, and
                manage files and folders.
              </p>
            </div>
            <div className="details-image">
              <img src={DiscordStorage} alt="Image for DiscordStorage" />
            </div>
            <div className="details-links">
              <a
                href="https://github.com/Shafin-A/DiscordStorage"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo size={32} color="rgb(3, 54, 5)" />
              </a>
            </div>
          </div>
        </Details>
        <Details summary="ValStats">
          <div className="details-content">
            <div className="details-text">
              <p>
                A fullstack website for VALORANT player statistics inspired by
                websites like Blitz.gg and Tracker.gg. The website uses
                HenrikDev's unnoffical API to fetch match data and display it in
                a user-friendly interface. It also allows users to sign up and
                comment directly on player profiles!
              </p>
            </div>
            <div className="details-image">
              <img src={ValStats} alt="Image for ValStats" />
            </div>
            <div className="details-links">
              <a
                href="https://github.com/Shafin-A/val-stats"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo size={32} color="rgb(3, 54, 5)" />
              </a>
              <a
                href="https://github.com/Shafin-A/val-stats-server"
                target="_blank"
                rel="noreferrer"
              >
                <GithubLogo size={32} color="rgb(3, 54, 5)" />
              </a>
              <a
                href="https://val-stats.fly.dev/"
                target="_blank"
                rel="noreferrer"
              >
                <Link size={32} color="rgb(3, 54, 5)" />
              </a>
            </div>
          </div>
        </Details>
      </div>
    </div>
  );
};
