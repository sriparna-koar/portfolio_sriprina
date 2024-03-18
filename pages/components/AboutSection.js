// components/AboutSection.js
import React, { useTransition, useState } from "react";

import TabButton from "./TabButton";
import styles from "../styles/AboutSection.module.css"; // Import the CSS file

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className={styles.tabContentList} style={{ color: 'white' ,fontSize: '25px' }}>
        <li>Node.js</li>
        <li>Express</li>
        <li>MERN</li>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
        <li>Flask</li>
        <li>AWS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className={styles.tabContentList}>
         <li>Persuing Btech CSE_AI from <br/>Techno India University, Kolkata</li>
        <li>Class 12:
          <br/> Delhi Public School,Ruby Park
        </li>
       
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className={styles.tabContentList}>
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
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
          <p className={styles.aboutDescription} style={{ color: 'white' ,fontSize: '25px' }}>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, MERN, Node.js, Express, Python, Flask
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
              {/* Certifications */}
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
