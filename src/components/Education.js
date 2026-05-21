"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Education.module.css";

const educationEntries = [
    {
        logo: "/Academic%20Logo/UTY.jpg",
        alt: "UTY logo",
        type: "Degree",
        title: "Bachelor's Degree",
        institution: "Universitas Teknologi Yogyakarta",
        date: "📍 Yogyakarta — Aug 2022",
    },
    {
        logo: "/Academic%20Logo/SAWAL.png",
        alt: "SAWAL logo",
        type: "High School",
        title: "SMAN 1 Waled",
        institution: "Senior High School",
        date: "📍 Cirebon — Graduated 2018",
    },
];

export default function Education() {
    return (
        <section className={`section ${styles.education}`} id="education">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Education</span>
                    <h2 className="section-title">
                        Academic <span className="gradient-text">background</span>
                    </h2>
                </motion.div>

                <div className={styles.educationGrid}>
                    {educationEntries.map((entry, index) => (
                        <motion.div
                            key={entry.type}
                            className={styles.eduCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.eduLogoWrapper}>
                                <Image
                                    src={entry.logo}
                                    alt={entry.alt}
                                    width={56}
                                    height={56}
                                    className={styles.eduLogo}
                                />
                            </div>
                            <div className={styles.eduType}>{entry.type}</div>
                            <h3 className={styles.eduTitle}>{entry.title}</h3>
                            <p className={styles.eduInstitution}>{entry.institution}</p>
                            <p className={styles.eduDate}>{entry.date}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.langSection}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className="section-label">Languages</span>
                    <div className={styles.langGrid}>
                        <div className={styles.langCard}>
                            <span className={styles.langFlag}>🇬🇧</span>
                            <div>
                                <div className={styles.langName}>English</div>
                                <div className={styles.langLevel}>Professional</div>
                            </div>
                        </div>
                        <div className={styles.langCard}>
                            <span className={styles.langFlag}>🇮🇩</span>
                            <div>
                                <div className={styles.langName}>Indonesia</div>
                                <div className={styles.langLevel}>Native</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
