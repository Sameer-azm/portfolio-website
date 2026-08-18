import { useState, useEffect } from "react";
import { motion } from "motion/react"

const NAV_LINKS = ["home", "about", "projects", "skills", "contact"];
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (link) => {
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-17 px-[5%] flex items-center justify-between transition-all duration-300 ${scrolled
          ? "bg-[rgba(22, 38, 86, 0.72)] backdrop-blur-md border-b border-[rgba(0,245,212,0.1)]"
          : "bg-black"
          }`}
      >
        {/* Logo */}
        <div className="font-mono text-[#00f5d4] text-[17px] font-bold tracking-[0.04em] select-none">
          {"<SAMEER />"}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className={`font-mono text-[12px] tracking-[0.08em] pb-0.5 bg-transparent border-0 border-b cursor-pointer transition-colors duration-200 hover:text-[#00f5d4] ${activeLink === link
                ? "text-[#00f5d4] border-b border-[#00f5d4]"
                : "text-white border-b border-transparent"
                }`}
            >
              {link.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.25 bg-transparent border-none cursor-pointer p-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[#00f5d4] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
          />
          <span
            className={`block h-[1.5px] bg-[#00f5d4] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-6"
              }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[#00f5d4] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`fixed top-[68px] left-0 right-0 z-40 md:hidden bg-[rgba(10,14,26,0.97)] backdrop-blur-md border-b border-[rgba(0,245,212,0.1)] overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0" }`}
      >
        <div className="flex flex-col px-[5%] py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleClick(link)}
              className={`font-mono text-[12px] tracking-[0.1em] text-left py-3 px-0 bg-transparent border-0 border-b cursor-pointer w-full transition-colors duration-200 ${activeLink === link
                ? "text-[#00f5d4] border-b border-[rgba(0,245,212,0.25)]"
                : "text-slate-400 border-b border-[rgba(255,255,255,0.05)]"
                }`}
            >
              {link.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
export default Nav;
