"use client";
import { motion } from "framer-motion";
import styles from "./Education.module.css";

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
                    <motion.div
                        className={styles.eduCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.eduIcon}>🎓</div>
                        <div className={styles.eduType}>Degree</div>
                        <h3 className={styles.eduTitle}>Bachelor&apos;s Degree</h3>
                        <p className={styles.eduInstitution}>
                            Universitas Teknologi Yogyakarta
                        </p>
                        <p className={styles.eduDate}>📍 Yogyakarta — Aug 2022</p>
                        <p className={styles.eduDescription}>
                            Final Project: Web and mobile based attendance system using QR
                            code. Built a comprehensive system for tracking attendance with
                            real-time QR scanning capabilities.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.eduCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className={styles.eduIcon}>📜</div>
                        <div className={styles.eduType}>Certification</div>
                        <h3 className={styles.eduTitle}>Fullstack Developer</h3>
                        <p className={styles.eduInstitution}>haisenin.com</p>
                        <p className={styles.eduDate}>🗓️ Mar 2023</p>
                        <p className={styles.eduDescription}>
                            Completed comprehensive fullstack development certification
                            covering modern web technologies, backend architecture, and
                            deployment best practices.
                        </p>
                    </motion.div>
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
