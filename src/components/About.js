"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./About.module.css";

const cards = [
    { icon: "💼", value: "2+", label: "Years Experience" },
    { icon: "🚀", value: "6+", label: "Projects Built" },
    { icon: "🛠️", value: "10+", label: "Technologies" },
    { icon: "☁️", value: "5+", label: "Deployments" },
];

const highlights = [
    { icon: "⚡", text: "RESTful API Design" },
    { icon: "📱", text: "Android WebView Integration" },
    { icon: "📦", text: "Export-Oriented E-commerce" },
    { icon: "🔐", text: "Payment & Checkout Flows" },
    { icon: "📊", text: "Database Modeling" },
    { icon: "☁️", text: "Production Deployment" },
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
                        Full Stack Developer
                        <span className="gradient-text"> building scalable web applications and business solutions</span>
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
                            I build production-ready backend systems, payment and checkout flows,
                            and enterprise business applications for export-oriented companies.
                        </p>
                        <p>
                            My work is focused on impact: reducing manual operations, stabilizing
                            order processing, and enabling business teams to serve customers more reliably.
                        </p>

                        <div className={styles.achievements}>
                            <h4>Selected Achievements</h4>
                            <ul>
                                <li>Built export-oriented e-commerce platform with payment gateway and international order support.</li>
                                <li>Delivered Android WebView integration for mobile business access.</li>
                                <li>Designed APIs for inventory management, order processing, and reporting.</li>
                                <li>Maintained production systems used by real customers and internal operations teams.</li>
                            </ul>
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
