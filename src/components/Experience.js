"use client";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
    {
        role: "Full Stack Developer",
        company: "SCN Group (Rattan Forlife & Baraja Coffee)",
        date: "Nov 2023 – Dec 2025",
        location: "Indonesia",
        bullets: [
            "Developed and maintained core features of an export-oriented e-commerce platform using Laravel, including menu display, cart management, checkout, payment processing, and advanced filtering. Integrated Kotlin WebView for mobile experience.",
            "Internally transferred to Baraja Coffee following company-wide IT team consolidation, continuing responsibilities across business units.",
            "Built Baraja Amphitheater — a customer-facing app with menu selection, cart, checkout, table scanning for dine-in, pickup, delivery, and reservations using Express.js, MongoDB, Flutter, Firebase, OAuth, JWT, and Midtrans.",
            "Designed and implemented backend services and RESTful APIs for the GRO app, supporting on-site ordering, open billing, reservation management with role-based access control.",
            "Built cross-platform workstation apps (kitchen, bar, etc.) using Flutter for remote printing, raw material tracking, and inventory management.",
            "Deployed and maintained the entire Baraja Coffee ecosystem on Linux-based VPS environments using Docker, ensuring consistent and scalable deployment.",
        ],
        techs: [
            "Express.js",
            "MongoDB",
            "Flutter",
            "Firebase",
            "Laravel",
            "Docker",
            "JWT",
            "OAuth",
            "Midtrans",
            "Kotlin",
        ],
    },
];

export default function Experience() {
    return (
        <section className={`section ${styles.experience}`} id="experience">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">
                        Where I&apos;ve{" "}
                        <span className="gradient-text">worked</span>
                    </h2>
                    <p className="section-subtitle">
                        Building production-ready systems across multiple business units
                    </p>
                </motion.div>

                <div className={styles.timeline}>
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                        >
                            <div className={styles.timelineDot} />
                            <div className={styles.timelineCard}>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <p className={styles.company}>{exp.company}</p>
                                    </div>
                                    <div className={styles.meta}>
                                        <span className={styles.date}>{exp.date}</span>
                                        <span className={styles.location}>{exp.location}</span>
                                    </div>
                                </div>

                                <ul className={styles.bulletList}>
                                    {exp.bullets.map((bullet, j) => (
                                        <li key={j}>{bullet}</li>
                                    ))}
                                </ul>

                                <div className={styles.techTags}>
                                    {exp.techs.map((tech, j) => (
                                        <span key={j} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
