"use client";

import Link from "next/link";
import AppData from "@data/app.json";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const DefaultHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const asPath = usePathname();

  const isPathActive = (path) => {
    return (asPath.indexOf(path) !== -1 && path !== "/") || asPath === path;
  };

  const handleSubMenuClick = (index, e) => {
    e.preventDefault();
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // close mobile menu
    setToggle(false);
  }, [asPath]);

  return (
    <>
      {/* top bar */}
      <div className={`mil-top-panel ${isScrolled ? 'mil-scrolled' : ''}`}>
        <div className="container-fluid">
          <div className="mil-top-panel-content">
            <Link href="/" className="mil-logo">
              <img
                src={AppData.header.logo.image}
                alt={AppData.header.logo.alt}
                style={{
                  width: "350px",
                  height: "auto",
                  objectFit: "contain",
                  maxWidth: "100%",
                }}
              />
            </Link>

            <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
              <nav>
                <ul>
                  {AppData.header.menu.map((item, index) => (
                    <li
                      className={`mil-has-children ${isPathActive(item.link) ? "mil-active" : ""}`}
                      key={`header-menu-item-${index}`}
                    >
                      <Link
                        href={item.link}
                        onClick={
                          item.children?.length > 0
                            ? (e) => handleSubMenuClick(index, e)
                            : null
                        }
                      >
                        {item.label}
                      </Link>
                      {item.children?.length > 0 && (
                        <ul
                          className={
                            activeSubMenu === index ? "mil-active" : ""
                          }
                        >
                          {item.children.map((subitem, subIndex) => (
                            <li
                              key={`header-submenu-item-${subIndex}`}
                              className={
                                isPathActive(subitem.link) ? "mil-active" : ""
                              }
                            >
                              <Link href={subitem.link}>{subitem.label}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                  {/* Mobile-only Join Us button */}
                  <li className="mil-mobile-only">
                    <Link href="/join" className="mil-link-hover">
                      JOIN US
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* right buttons */}
            <div className="mil-top-panel-buttons">
              <Link href="/join" className="mil-button mil-sm">
                JOIN US
              </Link>

              <div
                className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
                onClick={() => setToggle(!toggle)}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top bar end */}
    </>
  );
};

export default DefaultHeader;
