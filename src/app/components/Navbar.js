"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

import LogoImage from "../../../public/logo.png";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger navbar fade-in on mount
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking overlay
  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navbarOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : -20,
        }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-morphism shadow-lg shadow-purple-500/10 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex flex-wrap items-center justify-end mx-auto px-4 sm:px-8 py-4">
          {/* Hamburger Menu Button - Always Visible */}
          <div className="relative z-50">
            <motion.button
              whileTap={{ scale: 0.9 }}
              id="nav-toggle"
              className="relative flex flex-col items-center justify-center w-12 h-12 rounded-lg glass-morphism border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group"
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="Toggle Menu"
            >
              {/* Sparkle Effect */}
              <motion.div
                className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Hamburger Lines */}
              <div className="relative w-6 h-5 flex flex-col justify-between items-center">
                <motion.span
                  animate={{
                    rotate: navbarOpen ? 45 : 0,
                    y: navbarOpen ? 8 : 0,
                    backgroundColor: navbarOpen ? "#22d3ee" : "#a78bfa",
                  }}
                  transition={{ duration: 0.3 }}
                  className="block w-full h-0.5 rounded-full"
                />
                <motion.span
                  animate={{
                    opacity: navbarOpen ? 0 : 1,
                    x: navbarOpen ? -20 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="block w-full h-0.5 bg-purple-400 rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: navbarOpen ? -45 : 0,
                    y: navbarOpen ? -8 : 0,
                    backgroundColor: navbarOpen ? "#22d3ee" : "#a78bfa",
                  }}
                  transition={{ duration: 0.3 }}
                  className="block w-full h-0.5 rounded-full"
                />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 rounded-lg transition-all duration-300" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {navbarOpen && (
          <MenuOverlay
            links={navLinks}
            closeMenu={() => setNavbarOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
