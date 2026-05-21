"use client";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Baraja Coffee",
        companyFull: "PT Sari Coffee Nusantara",
        date: "Oct 2023 – Dec 2025",
        location: "Indonesia",
        description:
            "Worked as a Full Stack Developer responsible for developing, maintaining, and deploying applications across the Baraja Coffee ecosystem, covering customer-facing platforms, internal operational systems, and mobile applications.",
        responsibilities: [
            "Developed and maintained backend services and RESTful APIs using Express.js and MongoDB.",
            "Built cross-platform applications using Flutter for customer and internal operational use.",
            "Implemented authentication and payment integrations using OAuth, JWT, Firebase, and Midtrans.",
            "Managed deployment and maintenance on Linux VPS environments using Docker.",
        ],
        projects: [
            {
                name: "Baraja Amphitheater (Customer Application)",
                description:
                    "Developed customer ordering features including menu browsing, cart, checkout, payment, pickup, delivery, reservation, and table QR scanning for dine-in ordering.",
            },
            {
                name: "GRO Application (Internal Operations System)",
                description:
                    "Designed backend systems enabling on-site order creation, open billing, reservation management, and role-based employee features.",
            },
            {
                name: "Operational Mobile Applications",
                description:
                    "Built Flutter-based applications for kitchen, bar, and operational workstations, supporting remote printing workflows and inventory management.",
            },
        ],
        techs: [
            "Express.js",
            "MongoDB",
            "Flutter",
            "Firebase",
            "Docker",
            "JWT",
            "OAuth",
            "Midtrans",
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
                                        <p className={styles.company}>
                                            {exp.company} – {exp.companyFull}
                                        </p>
                                    </div>
                                    <div className={styles.meta}>
                                        <span className={styles.date}>{exp.date}</span>
                                        <span className={styles.location}>| {exp.location}</span>
                                    </div>
                                </div>

                                <p className={styles.description}>{exp.description}</p>

                                <div className={styles.section}>
                                    <h4 className={styles.sectionTitle}>Responsibilities</h4>
                                    <ul className={styles.bulletList}>
                                        {exp.responsibilities.map((bullet, j) => (
                                            <li key={j}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className={styles.section}>
                                    <h4 className={styles.sectionTitle}>
                                        Key Projects & Achievements
                                    </h4>
                                    {exp.projects.map((project, j) => (
                                        <div key={j} className={styles.project}>
                                            <h5 className={styles.projectName}>{project.name}</h5>
                                            <p className={styles.projectDescription}>
                                                {project.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

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
