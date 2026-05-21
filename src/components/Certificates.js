"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Certificates.module.css";

const certificates = [
    {
        id: 1,
        title: "DQLab Data Science Fundamentals",
        issuer: "DQLab",
        image: "/Sertifikat JPG/certificate-DQLABINTP1ABPKVM_page-0001.jpg",
    },
    {
        id: 2,
        title: "DQLab Python for Data Science",
        issuer: "DQLab",
        image: "/Sertifikat JPG/certificate-DQLABINTP1KITNCC_page-0001.jpg",
    },
    {
        id: 3,
        title: "Fullstack Developer",
        issuer: "harisenin.com",
        image: "/Sertifikat JPG/Harisenin_page-0001.jpg",
    },
    {
        id: 4,
        title: "Fullstack Developer Transcript",
        issuer: "harisenin.com",
        image: "/Sertifikat JPG/Harisenin_page-0002.jpg",
    },
    {
        id: 5,
        title: "Microsoft Office Specialist",
        issuer: "Microsoft",
        image: "/Sertifikat JPG/MOS.jpg",
    },
    {
        id: 6,
        title: "Web Programming",
        issuer: "Hacktiv8 (Prakerja)",
        image: "/Sertifikat JPG/Prakerja.jpg",
    },
    {
        id: 7,
        title: "Golang Programming",
        issuer: "Udemy",
        image: "/Sertifikat JPG/Sertifikat Golang_page-0001.jpg",
    },
];

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section className={`section ${styles.certificates}`} id="certificates">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">
                        Professional <span className="gradient-text">certificates</span>
                    </h2>
                    <p className="section-subtitle">
                        Certifications and achievements from professional courses and platforms
                    </p>
                </motion.div>

                <div className={styles.certificatesGrid}>
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={cert.id}
                            className={styles.certCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    width={300}
                                    height={200}
                                    className={styles.certImage}
                                />
                                <div className={styles.overlay}>
                                    <span className={styles.viewText}>View Certificate</span>
                                </div>
                            </div>
                            <div className={styles.certInfo}>
                                <h3 className={styles.certTitle}>{cert.title}</h3>
                                <p className={styles.certIssuer}>{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedCert && (
                <motion.div
                    className={styles.modal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedCert(null)}
                >
                    <motion.div
                        className={styles.modalContent}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedCert(null)}
                        >
                            ✕
                        </button>
                        <Image
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            width={800}
                            height={600}
                            className={styles.modalImage}
                        />
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
