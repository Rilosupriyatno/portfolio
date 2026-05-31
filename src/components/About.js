"use client";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const cards = [
    { icon: "💼", value: "2+", label: "Years Experience" },
    { icon: "🚀", value: "6+", label: "Projects Built" },
    { icon: "🛠️", value: "10+", label: "Technologies" },
    { icon: "☁️", value: "5+", label: "Deployments" },
];

const highlights = [
    { icon: "⚡", text: "RESTful API Design" },
    { icon: "📱", text: "Cross-Platform Mobile" },
    { icon: "🐳", text: "Docker & DevOps" },
    { icon: "🔐", text: "Auth & Security" },
    { icon: "📊", text: "Database Design" },
    { icon: "🔄", text: "CI/CD Pipelines" },
];

export default function About() {
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">
                        Passionate about building{" "}
                        <span className="gradient-text">digital solutions</span>
                    </h2>
                </motion.div>

                <div className={styles.aboutGrid}>
                    <motion.div
                        className={styles.aboutText}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>
                            Full Stack Developer with over 2 years of experience building
                            web and mobile applications for academic and commercial use. I
                            focus on delivering stable backend services, clean REST APIs,
                            and user-friendly interfaces that solve real business problems.
                        </p>
                        <p>
                            Skilled in Docker-based deployment, database design, and
                            production-ready workflows. I build solutions that improve
                            operational efficiency, lower manual effort, and support fast
                            decision-making.
                        </p>

                        <div className={styles.aboutHighlights}>
                            {highlights.map((h, i) => (
                                <div key={i} className={styles.highlight}>
                                    <span className={styles.highlightIcon}>{h.icon}</span>
                                    {h.text}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.aboutCards}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        {cards.map((card, i) => (
                            <div key={i} className={styles.aboutCard}>
                                <span className={styles.aboutCardIcon}>{card.icon}</span>
                                <div className={styles.aboutCardValue}>{card.value}</div>
                                <div className={styles.aboutCardLabel}>{card.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
