import "./Footer.css";
import footerlogo from "../../assets/logo.svg";
import facebooklogo from "../../assets/facebook.png";
import instagramlogo from "../../assets/instagram.png";
import youtubelogo from "../../assets/youtube.png";
import xlogo from "../../assets/xlogos.png";
import { Link } from "react-router-dom";

const Social = [
  { logoname: youtubelogo, link: "https://www.youtube.com/" },
  { logoname: instagramlogo, link: "https://www.instagram.com/" },
  { logoname: facebooklogo, link: "https://www.facebook.com/" },
  { logoname: xlogo, link: "https://www.x.com/" },
];

const Container = [
  {
    headingname: "Company",
    subtopic: [
      { topic: "About Us", link: "/aboutus" },
      { topic: "Privacy Policy", link: "/privacypolicy" },
      { topic: "Refund Policy", link: "/refundpolicy" },
      { topic: "Terms and Conditions", link: "/termsconditions" },
      { topic: "Careers", link: "" },
      { topic: "Contact", link: "" },
    ],
  },
  {
    headingname: "Site",
    subtopic: [
      { topic: "Home", link: "/" },
      { topic: "Internship Program", link: "" },
      { topic: "Pro Degree", link: "" },
    ],
  },
];

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-left">
          <div className="footerlogo">
            <a className="logo-link">
              <img className="logo" src={footerlogo} />
              Internsforge
            </a>
            <p className="filler">Seamless learning for Brighter Future</p>
          </div>
        </div>
        <div className="footer-right">
          {Container.map(({ headingname, subtopic }) => (
            <div className="headingContainer" key={headingname}>
              <h2 className="headingname">{headingname}</h2>
              <ul className="headingcomponents">
                {subtopic.map(({ topic, link }) => (
                  <li className="headingitems" key={topic}>
                    {link ? (
                      <Link to={link} className="headinglink">
                        {topic}
                      </Link>
                    ) : (
                      <span>{topic}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="footer-copywrite">
        <p>© 2025. All Rights Reserved.</p>
        <div className="social">
          {Social.map(({ logoname, link }) => (
            <a href={link} key={logoname}>
              <img className="social-logo" src={logoname} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
