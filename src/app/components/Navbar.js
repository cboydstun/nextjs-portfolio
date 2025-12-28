"use client";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-morphism shadow-lg shadow-purple-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 sm:px-8 py-4">
        <Link
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold group"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={LogoImage}
              width={50}
              height={50}
              className="rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-1 shadow-lg shadow-purple-500/50"
              alt="Logo"
            />
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded-lg glass-morphism text-purple-400 border-purple-500 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <AnimatePresence mode="wait">
              {!navbarOpen ? (
                <motion.div
                  key="bars"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="x"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex p-4 md:p-0 rounded-lg flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink title={link.title} href={link.path} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && <MenuOverlay links={navLinks} />}
      </AnimatePresence>
    </motion.nav>
  );
}
