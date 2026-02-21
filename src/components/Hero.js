"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            {/* Floating orbs */}
            <div className={`${styles.orb} ${styles.orb1}`} />
            <div className={`${styles.orb} ${styles.orb2}`} />
            <div className={`${styles.orb} ${styles.orb3}`} />

            <div className={styles.heroContent}>
                <motion.p
                    className={styles.greeting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span>👋</span> Hello, I&apos;m
                </motion.p>

                <motion.h1
                    className={styles.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Rilo Supriyatno
                </motion.h1>

                <motion.p
                    className={styles.titleLine}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="gradient-text">Full Stack Developer</span>
                </motion.p>

                <motion.p
                    className={styles.description}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Building scalable web &amp; mobile applications with modern
                    technologies. Specialized in JavaScript, Flutter, and cloud-native
                    architectures.
                </motion.p>

                <motion.div
                    className={styles.heroCta}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <a href="#contact" className="btn btn-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Contact Me
                    </a>
                    <a
                        href="https://github.com/Rilosupriyatno"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </motion.div>

                <motion.div
                    className={styles.heroStats}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>2+</div>
                        <div className={styles.statLabel}>Years Experience</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>6+</div>
                        <div className={styles.statLabel}>Projects Delivered</div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>4+</div>
                        <div className={styles.statLabel}>Tech Stacks</div>
                    </div>
                </motion.div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll</span>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}
