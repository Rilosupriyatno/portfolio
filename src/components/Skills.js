"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skillCategories = [
    {
        title: "Languages",
        icon: "💻",
        color: "cyan",
        skills: ["JavaScript", "PHP", "Go", "Rust"],
    },
    {
        title: "Backend & APIs",
        icon: "⚙️",
        color: "purple",
        skills: [
            "RESTful API Design",
            "JWT & OAuth 2.0",
            "API Performance Optimization",
            "Pagination & Filtering",
            "Redis Caching",
            "Rate Limiting",
            "System Integration",
            "API Testing",
        ],
    },
    {
        title: "Databases",
        icon: "🗄️",
        color: "green",
        skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
        title: "DevOps & Infra",
        icon: "🐳",
        color: "orange",
        skills: [
            "Docker",
            "Podman",
            "VPS Deployment",
            "Environment Management",
            "Linux Server",
        ],
    },
    {
        title: "Frameworks",
        icon: "🧩",
        color: "pink",
        skills: ["Express.js", "Laravel", "CodeIgniter", "Gin"],
    },
    {
        title: "Frontend & Mobile",
        icon: "📱",
        color: "blue",
        skills: ["React", "Flutter", "Next.js", "Kotlin WebView"],
    },
];

export default function Skills() {
    return (
        <section className={`section ${styles.skills}`} id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Skills</span>
                    <h2 className="section-title">
                        My <span className="gradient-text">tech stack</span>
                    </h2>
                    <p className="section-subtitle">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                <div className={styles.skillsGrid}>
                    {skillCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            className={styles.skillCategory}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            <div className={styles.categoryHeader}>
                                <span className={`${styles.categoryIcon} ${styles[cat.color]}`}>
                                    {cat.icon}
                                </span>
                                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                            </div>

                            <div className={styles.skillTags}>
                                {cat.skills.map((skill, j) => (
                                    <span
                                        key={j}
                                        className={`${styles.skillTag} ${styles[cat.color]}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
