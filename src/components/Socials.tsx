import "./Socials.css";
import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/Shafin-A/" target="_blank" rel="noreferrer">
        <GithubLogo size={28} weight="fill" color="rgb(251, 250, 218)" />
      </a>
      <a
        href="https://www.linkedin.com/in/shafin-ahmed0/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinLogo size={36} weight="fill" color="rgb(3, 54, 5)" />
      </a>
      <a href="mailto:s.ahmed.dev99@gmail.com" target="_blank" rel="noreferrer">
        <Envelope size={36} color="rgb(3, 54, 5)" />
      </a>
    </div>
  );
};
