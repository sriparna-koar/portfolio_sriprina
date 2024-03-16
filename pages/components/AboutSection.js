// components/AboutSection.js
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import styles from "../styles/AboutSection.module.css"; // Import the CSS file

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className={styles.tabContentList}>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className={styles.tabContentList}>
        <li>Fullstack Academy of Code</li>
        <li>Techno India University, Kolkata</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className={styles.tabContentList}>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        {/* <div className={styles.imageContainer}>
          <Image src="/about-image.png" width={500} height={500} />
        </div> */}
        <div className={styles.aboutText}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <p className={styles.aboutDescription}>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className={styles.tabButtons}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className={styles.tabContent}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
