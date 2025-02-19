import React, { useEffect, useState, useRef } from "react";
import { assets } from "../assets/assets";

const NAV_ITEMS = ["Home", "About", "OurTeam"];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    // if (showMobileMenu && closeButtonRef.current) {
    //   closeButtonRef.current.focus();
    // }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target) // Ensures clicking menu button doesn't close it
      ) {
        setShowMobileMenu(false);
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setShowMobileMenu(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.addEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setShowMobileMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12 lg:px-16">
        {/* Company Logo */}
        <div className="flex items-center gap-2">
          <img
            src="./hero.png"
            alt="SusRecomm Logo"
            className="w-12 h-12 rounded-full"
            aria-hidden="true"
          />
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-gray-800 font-medium text-[15px]">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(/\s+/g, "")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.replace(/\s+/g, ""));
                  }}
                  className="hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1">
                  {item}
                </a>
              </li>
            ))}
            {/* JaGedo Link - Opens in New Tab */}
            <li>
              <a
                href="https://jagedo.co.ke/landing?callbackUrl=https%3A%2F%2Fjagedo.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1">
                JaGedo
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu((last) => !last)}
          ref={buttonRef}
          className="md:hidden p-2 bg-white rounded-lg shadow-sm"
          aria-label="Open menu"
          aria-expanded={showMobileMenu}>
          <img src={assets.menu_bar} alt="Menu icon" className="w-8" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden flex justify-end"
          role="dialog"
          aria-modal="true">
          <div
            ref={menuRef}
            className="bg-white w-full shadow-lg transform transition-transform translate-x-0 p-4">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowMobileMenu(false)}
                aria-label="Close menu"
                className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md">
                <img src={assets.cross_icon} alt="Close menu" className="w-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-2 text-blue-800 font-medium bg-white">
                {NAV_ITEMS.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.replace(/\s+/g, "")}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleScroll(item.replace(/\s+/g, ""));
                      }}
                      className="block px-4 py-3 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="https://jagedo.co.ke/landing?callbackUrl=https%3A%2F%2Fjagedo.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                    JaGedo
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
