"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navContainer}>
                <ul className={styles.navLinks}>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className={styles.navLink}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className={styles.mobileLink}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
