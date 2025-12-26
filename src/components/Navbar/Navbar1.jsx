import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/IL logo.jpeg";
import "./Navbar1.css";
import navbar from "../../utils/Navbar.js";

function Navbar1() {
  const [activeMenu, setActiveMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const menuTimeout = useRef(null);

  const handleMenuEnter = (menu) => {
    if (!menu.length) return;
    if (menuTimeout.current) clearTimeout(menuTimeout.current);

    setActiveMenu(menu);
    setSelectedCategory(menu[0].category);
  };

  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => {
      setActiveMenu([]);
      setSelectedCategory("");
    }, 120);
  };

  const handleMegaMenuEnter = () => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
  };

  const handleMegaMenuLeave = () => {
    setActiveMenu([]);
    setSelectedCategory("");
  };

  const selectedCourses =
    activeMenu.find((m) => m.category === selectedCategory)?.courses || [];

  return (
    <div className="navbody">
      <div className="navcontainer" onMouseLeave={handleMenuLeave}>
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <ul className="navcomponents">
          {navbar.map(({ label, menu, link }, index) => (
            <li
              key={index}
              className="navbar"
              onMouseEnter={() => handleMenuEnter(menu)}
            >
              {menu.length ? (
                <span>{label}</span>
              ) : (
                <Link to={link} className="nav-link">
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Contact */}
        <Link to="/contactus" className="contact-link">
          <button className="contact">Contact us</button>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen((p) => !p)}
        >
          <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
            <span />
            <span />
            <span />
          </div>
        </button>

        {/* Desktop Mega Menu */}
        {activeMenu.length > 0 && (
          <div
            className="megamenu show"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="megamenu-container">
              {/* Categories */}
              <div className="megamenu-categories">
                <h3 className="megamenu-title">Categories</h3>
                {activeMenu.map((item, index) => (
                  <div
                    key={index}
                    className={`category-item ${selectedCategory === item.category ? "active" : ""
                      }`}
                    onMouseEnter={() => setSelectedCategory(item.category)}
                  >
                    {item.category}
                  </div>
                ))}
              </div>

              {/* Courses */}
              <div className="megamenu-courses">
                <h3 className="megamenu-title">{selectedCategory}</h3>
                <div className="courses-grid">
                  {selectedCourses.map((course, index) => (
                    <Link
                      key={index}
                      to={`/courses/${course.slug}`}
                      className="course-card"
                    >
                      <div className="course-info">
                        <h4>{course.name}</h4>
                        <p>{course.duration}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={() => {
              setMobileMenuOpen(false);
              setOpenCategory(null);
            }}
          />

          <div className="mobile-menu">
            <ul className="mobile-root">
              {navbar.map(({ label, menu, link }, index) => (
                <li key={index} className="mobile-section">
                  {menu.length ? (
                    <>
                      <div className="mobile-section-title">{label}</div>

                      {menu.map((item, idx) => {
                        const isOpen = openCategory === item.category;

                        return (
                          <div key={idx} className="mobile-category">
                            {/* CATEGORY HEADER */}
                            <div
                              className="mobile-category-header"
                              onClick={() =>
                                setOpenCategory(isOpen ? null : item.category)
                              }
                            >
                              <span>{item.category}</span>
                              <span>{isOpen ? "−" : "+"}</span>
                            </div>

                            {/* COURSES (SCROLLABLE) */}
                            {isOpen && (
                              <div className="mobile-course-list">
                                {item.courses.map((course, cIdx) => (
                                  <Link
                                    key={cIdx}
                                    to={`/courses/${course.name
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="mobile-course-item"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setOpenCategory(null);
                                    }}
                                  >
                                    <span>{course.icon}</span>
                                    <span>{course.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <Link
                      to={link}
                      className="mobile-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}

              <li className="mobile-section">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <button className="mobile-contact">Contact us</button>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar1;
