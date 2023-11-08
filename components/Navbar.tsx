// components/Navbar.tsx
"use client"
export const config = { runtime: 'client' };

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Make sure you have appropriate CSS for styling the navbar and menu

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {/* Icon or text for the hamburger menu */}
        <span>Menu</span>
      </div>

      {/* Conditionally apply a class to show or hide the menu */}
      <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
