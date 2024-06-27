'use client'

import React from 'react';
import styles from '@/styles/Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.sectionHero}>
            <div className={styles.background}>
                <img
                    src="/images/hero-background.png"
                    alt="Heroic background"
                    className={styles.backgroundImage}
                />
                <div className={styles.radialOverlay}></div>
            </div>
            <div className={styles.content}>
                <div className={styles.logoSection}>
                    <img src="/images/factory-logo.svg" alt="Factory Logo" className={styles.heroLogo} />
                </div>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Bringing Autonomy to Software Engineering</h2>
                    <p className={styles.description}>
                        Factory helps organizations automate and optimize their software development lifecycle
                        with autonomous, AI-powered systems called Droids.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;