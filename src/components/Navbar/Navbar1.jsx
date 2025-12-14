import { useState } from "react";
import logo from "./../../assets/logo.svg";
import "./Navbar1.css";
import { Link } from "react-router-dom";

const navbar = [
  {
    label: "Courses",
    menu: ["Android Development", "Web Development", "Data Science"],
    link: "",
  },
  { label: "Projects", menu: ["Full Stack", "React", "Node"], link: "" },
  { label: "About", menu: [], link: "/aboutus" },
  { label: "Help", menu: [], link: "" },
];

function Navbar1() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="navbody">
      <div className="navcontainer">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="navcomponents">
          {navbar.map(({ label, menu, link }) => (
            <li
              key={label}
              className="navbar"
              onMouseEnter={() => menu.length > 0 && setActiveMenu(menu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {menu.length > 0 ? (
                <span>{label}</span>
              ) : (
                <Link to={link} className="nav-link">
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link to="/" className="contact-link">
          <button className="contact">Contact us</button>
        </Link>

        {activeMenu && (
          <div
            className="megamenu"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <ul className="megamenuitems">
              {activeMenu.map((item) => (
                <li key={item} className="menuitem">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar1;
