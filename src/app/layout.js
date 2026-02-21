import "./globals.css";

export const metadata = {
  title: "Rilo Supriyatno | Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience building scalable web and mobile applications. Skilled in JavaScript, Flutter, MongoDB, Express.js, and Docker.",
  keywords: [
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Flutter",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
    "Rilo Supriyatno",
  ],
  authors: [{ name: "Rilo Supriyatno" }],
  openGraph: {
    title: "Rilo Supriyatno | Full Stack Developer",
    description:
      "Full Stack Developer with 2+ years of experience building scalable web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
