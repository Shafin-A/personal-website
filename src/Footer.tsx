import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Shafin Ahmed. All rights reserved.
      </p>
    </footer>
  );
};
