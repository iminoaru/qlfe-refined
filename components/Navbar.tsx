'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/NavBar.module.css';

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <Link href="/" className={styles.navBrand}>
                    <img src="/images/logo.svg" alt="Factory Logo" className={styles.navLogo} />
                </Link>
                <div className={styles.navSpacer}></div>
                <div className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <Link href="/droids" className={styles.navLink}>QUESTIONS</Link>
                    <Link href="/security" className={styles.navLink}>REVIEWS</Link>
                    <Link href="/careers" className={styles.navLink}>PRICING</Link>
                    <Link href="/contact" className={`${styles.navLink} ${styles.join}`}>JOIN US</Link>
                </div>
                <button className={styles.navToggle} onClick={toggleMenu} aria-label="Toggle menu">
                    <div className={styles.navBurgerWrap}>
                        <div className={`${styles.navBurgerLine} ${styles.top}`}></div>
                        <div className={`${styles.navBurgerLine} ${styles.mid}`}></div>
                        <div className={`${styles.navBurgerLine} ${styles.bottom}`}></div>
                    </div>
                </button>
            </div>
        </nav>
    );
};

export default NavBar;