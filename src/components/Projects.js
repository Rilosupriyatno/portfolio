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
        role: "Full Stack Developer",
        image: "/Academic Logo/UTY.jpg",
        description:
            "Led the design and implementation of a QR-based attendance platform with an admin dashboard and student mobile app. Delivered automated attendance reports, real-time scanning, and analytics to improve tracking accuracy.",
        techs: ["CodeIgniter", "PHP", "Bootstrap", "QR Code", "MySQL", "Kotlin"],
        repoUrl: "https://github.com/Rilosupriyatno/sistem-presensi",
    },
    {
        title: "Fullstack Developer Bootcamp",
        institution: "harisenin.com",
        date: "2023",
        location: "Online",
        type: "Bootcamp",
        role: "Developer",
        image: "/Academic Logo/harisenin_com_logo.jpg",
        description:
            "Completed a hands-on fullstack bootcamp by building production-ready web applications. Practiced modern API design, database modeling, frontend state management, and deployment-ready workflows.",
        techs: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL"],
        repoUrl: "https://github.com/Rilosupriyatno/games-store",
    },
    {
        title: "Rattan Forlife",
        institution: "Team Project",
        date: "2023",
        location: "Cirebon - Indonesia",
        type: "E-commerce",
        role: "Backend & Mobile Developer",
        image: "/Academic Logo/rfl.webp",
        description:
            "Built an e-commerce platform for rattan products with Laravel backend and Kotlin WebView mobile access. Helped launch product listing, order management, and customer checkout workflows for artisan sellers.",
        techs: ["Laravel", "Kotlin", "WebView", "MySQL", "PHP"],
        repoUrl: "https://github.com/Rilosupriyatno/rattanforlife",
    },
    {
        title: "JualBU",
        institution: "Team Project",
        date: "2024",
        location: "Cirebon - Indonesia",
        type: "Auction Platform",
        role: "Full Stack Developer",
        image: "/Academic Logo/jbu.webp",
        description:
            "Developed a partner-facing auction marketplace using Express.js and Flutter. Implemented bid posting, real-time bidding flows, and partner listing management to speed up smartphone resale transactions.",
        techs: ["Express.js", "Flutter", "Node.js", "Firebase"],
        repoUrl: "https://github.com/Rilosupriyatno/jual_bu",
    },
    {
        title: "Web-Based Personnel Administration System",
        institution: "Universitas Teknologi Yogyakarta",
        date: "2021",
        location: "Yogyakarta - Indonesia",
        type: "Practical Work",
        role: "Web Developer",
        image: "/Academic Logo/UTY.jpg",
        description:
            "Delivered a personnel administration system with full CRUD, position management, and company decree-based updates. Built a role-aware UI and data workflows that supported HR operations and employee record tracking.",
        techs: ["CodeIgniter", "PHP", "Bootstrap", "MySQL"],
        repoUrl: "https://github.com/Rilosupriyatno/Sistem-Admin",
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
                    <a
                        href="https://github.com/Rilosupriyatno"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        View full GitHub portfolio
                    </a>
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
                                    <p className={styles.projectRole}>{project.role}</p>
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

                                <div className={styles.projectActions}>
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.projectActionBtn}
                                    >
                                        View Code
                                    </a>
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
