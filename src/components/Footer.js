import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLeft}>
                    {/* <span className={styles.footerLogo}>RS.</span> */}
                    <span className={styles.footerCopy}>
                        © {new Date().getFullYear()} Rilo Supriyatno. All rights reserved.
                    </span>
                </div>

                <a href="#hero" className={styles.backToTop}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="18 15 12 9 6 15" />
                    </svg>
                    Back to top
                </a>
            </div>
        </footer>
    );
}
