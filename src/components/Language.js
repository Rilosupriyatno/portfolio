"use client";
import { motion } from "framer-motion";
import styles from "./Education.module.css";


export default function Language() {
    return (
        <section className={`section ${styles.language}`} id="language">
            <div className="container">
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
                            <span className={styles.langFlag}>🇺🇸</span>
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
