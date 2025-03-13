import React from "react";
import "./Details.css";

interface DetailsProps {
  summary: string;
  children: React.ReactNode;
}

export const Details: React.FC<DetailsProps> = ({ summary, children }) => {
  return (
    <details>
      <summary>{summary}</summary>
      <div className="details-children">{children}</div>
    </details>
  );
};
