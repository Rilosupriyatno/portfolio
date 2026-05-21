"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Projects.module.css";

const projects = [
    {
        title: "Web and Mobile Based Attendance System Using QR Code",
        institution: "Universitas Teknologi Yogyakarta",
        date: "2022",
        location: "Yogyakarta - Indonesia",
        type: "Final Project",
        image: "/Academic Logo/UTY.jpg",
        description:
            "Built a comprehensive attendance tracking system with real-time QR code scanning capabilities. Features include web dashboard for administrators, mobile app for students, attendance analytics, and automated reporting.",
        techs: ["Codeigniter", "Bootstrap", "QR Code", "MySQL", "Kotlin"],
    },
    {
        title: "Fullstack Developer Bootcamp",
        institution: "harisenin.com",
        date: "2023",
        location: "Online",
        type: "Bootcamp",
        image: "/Academic Logo/harisenin_com_logo.jpg",
        description:
            "Completed comprehensive fullstack development bootcamp covering modern web technologies, backend architecture, RESTful APIs, database design, and deployment best practices. Gained practical experience building production-ready applications.",
        techs: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
        title: "Rattan Forlife",
        institution: "Team Project",
        date: "2023",
        location: "Cirebon - Indonesia",
        type: "E-commerce",
        image: "/Academic Logo/rfl.webp",
        description:
            "Built an ecommerce platform for rattan products, crafts, and artisan services with Laravel. Integrated a Kotlin Android WebView so users can access the system through both web and mobile, backed by a MySQL database.",
        techs: ["Laravel", "Kotlin", "WebView", "MySQL", "PHP"],
    },
    {
        title: "JualBU",
        institution: "Team Project",
        date: "2024",
        location: "Cirebon - Indonesia",
        type: "Auction Platform",
        image: "/Academic Logo/jbu.webp",
        description:
            "Created a bidding-based marketplace for selling smartphones quickly to nearby partners. Developed the backend with Express.js and the mobile experience with Flutter, enabling partner postings and auction-style bids.",
        techs: ["Express.js", "Flutter", "Node.js", "Auction", "Firebase"],
    },
    {
        title: "Web-Based Personnel Administration System",
        institution: "Universitas Teknologi Yogyakarta",
        date: "2021",
        location: "Yogyakarta - Indonesia",
        type: "Practical Work",
        image: "/Academic Logo/UTY.jpg",
        description:
            "Implemented a web-based personnel administration system with full CRUD, position management, and position changes according to company decrees. Built the application using libraries and frameworks with template-based UI, delivering a solution aligned to company administration processes.",
        techs: ["Codeigniter", "Bootstrap", "MySQL"],
    },
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <section className={`section ${styles.projects}`} id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Projects</span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Independent and team projects including ecommerce, auction, and bootcamp work
                    </p>
                </motion.div>

                <div className={styles.sliderContainer}>
                    <div className={styles.slider}>
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                className={styles.projectCard}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: i === currentIndex ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                style={{ display: i === currentIndex ? "block" : "none" }}
                            >
                                <div className={styles.projectHeader}>
                                    <div className={styles.projectImage}>
                                        <Image
                                            src={project.image}
                                            alt={project.institution}
                                            width={60}
                                            height={60}
                                            className={styles.logoImage}
                                        />
                                    </div>
                                    <div className={styles.projectMeta}>
                                        <span className={styles.projectType}>
                                            {project.type}
                                        </span>
                                        <span className={styles.projectDate}>
                                            {project.date}
                                        </span>
                                    </div>
                                </div>

                                <div className={styles.projectContent}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectInstitution}>
                                        {project.institution}
                                    </p>
                                    <p className={styles.projectLocation}>
                                        📍 {project.location}
                                    </p>
                                    <p className={styles.projectDescription}>
                                        {project.description}
                                    </p>
                                </div>

                                <div className={styles.techTags}>
                                    {project.techs.map((tech, j) => (
                                        <span key={j} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={prevProject}
                        aria-label="Previous project"
                    >
                        ←
                    </button>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={nextProject}
                        aria-label="Next project"
                    >
                        →
                    </button>

                    <div className={styles.dotsContainer}>
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                className={`${styles.dot} ${i === currentIndex ? styles.activeDot : ""
                                    }`}
                                onClick={() => goToSlide(i)}
                                aria-label={`Go to project ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
