import React from "react";
import "../css/Footer.css"

function Footer() {
  return (
    <div>
      <footer>
        <div className="social-media">
          <i className="bi bi-linkedin social-icons">
            <a
              href="https://www.linkedin.com/in/akshatgupta30/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </i>
          {/* //TODO : Add Links to Items */}
          <i className="bi bi-github social-icons">
            <a
              href="https://github.com/AkshatGupta-30"
              target="_blank"
              rel="noreferrer"
            ></a>
          </i>
          <i className="bi bi-facebook social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61559896502968"
              target="_blank"
              rel="noreferrer"
            ></a>
          </i>
          <i className="bi bi-instagram social-icons">
            <a
              href="https://www.instagram.com/_._akshat.gupta_._/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </i>
          <i className="bi bi-twitter-x social-icons">
            <a
              href="https://x.com/Akshat_Gupta_30"
              target="_blank"
              rel="noreferrer"
            ></a>
          </i>
        </div>
      </footer>
      <div className="copyright">
        Copyright &#169; 2024; Designed by <b>Akshat Gupta</b>
      </div>
    </div>
  );
}

export default Footer;
