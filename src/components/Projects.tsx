import "./Projects.css";
import { Details } from "./Details";
import DiscordStorage from "../assets/DiscordStorage.png";
import { GithubLogo } from "@phosphor-icons/react";

export const Projects = () => {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="projects-container">
        <Details summary="DiscordStrorage">
          <p>
            DiscordStorage is a web application that allows users to manage
            files and folders using a Discord server as the backend storage. It
            provides a user-friendly interface to upload, download, and manage
            files and folders.
          </p>
          <a
            href="https://github.com/Shafin-A/DiscordStorage"
            target="_blank"
            rel="noreferrer"
          >
            <img src={DiscordStorage} alt="DiscordStorage" />
          </a>
          <a
            href="https://github.com/Shafin-A/DiscordStorage"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={32} color="rgb(3, 54, 5)" />
          </a>
        </Details>
        <Details summary="Project 2">Lorem ipsum</Details>
      </div>
    </div>
  );
};
