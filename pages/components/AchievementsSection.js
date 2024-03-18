
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Achivementsection.module.css";

const projectsData = [
  {
    id: 2,
    title: "Fitness Tracking App",
    description: "Here user can add their own username and add sports activities and target achieved. They can also set the goal for any particular sports and after performing they can see how much they have achieved and target goal. Every Player should have unique username . Die Chart plan are also available so that they can track their entire day. Timer option to track the entire day. And nutrients value for every food is available.",
    image: "/fit.jpeg",
    tag: ["All", "Web"],
    githubUrl: "https://github.com/sriparna-koar/fitness_tracking_app",
    previewUrl: "https://github.com/sriparna-koar/fitness_tracking_app",
  },
  {
    id: 3,
    title: "Library Book Management System",
    description: "It's a library book store project where user can see different types of book names and can store their preferred choice and store in their own folder for future reference if they search by folder name they can see all their books.They can see different varities of books available in the library.",
    image: "/book.jpeg",
    tag: ["All", "Web"],
    githubUrl: "https://github.com/sriparna-koar/Library_management",
    previewUrl: "https://github.com/sriparna-koar/Library_management",
  },
  {
    id: 4,
    title: "Vendor Shop Calculator",
    description: "This a vendor shop calculator where in the calculator there is various options when vendor can calcualte the total amount of customer and shopkeeper can dd the name,location, time, total price and date of the purchase and he can download the bill and send bill to the customer. ",
    image: "/vendor.jpeg",
    tag: ["All", "Mobile"],
    githubUrl: "https://github.com/sriparna-koar/shop_calculator",
    previewUrl: "https://shop-calculator.vercel.app/",
  },
  {
    id: 5,
    title: "Car Showroom Project",
    description: "It''s a NEXT JS nd Mongo Db project where user can add different car, location, color andyear in shop and add it and to see which year which car was added and what model in a car showroom.",
    image: "/car.jpeg",
    tag: ["All", "Web"],
    githubUrl: "https://github.com/sriparna-koar/car_showroom",
    previewUrl: "https://car-showroom-two.vercel.app/",
  },
  {
    id: 6,
    title: "File summarizer and text to speech",
    description: "It's a text to speech project in NEXT JS where user can paste any news of any langiuage and while we click speak we can hear the news and if we upload any files we can see the summarize text what's there in the pdf.",
    image: "/text.jpeg",
    tag: ["All", "Web"],
    githubUrl: "https://github.com/sriparna-koar/textspeech",
    previewUrl: "https://sriparna-koar.github.io/textspeech",
  },
];

const AchievementsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const [expandedImageId, setExpandedImageId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedImageId(expandedImageId === id ? null : id);
  };

  return (
    <section id="projects">
      <h2 className={styles.aboutTitle}>My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <button
          onClick={() => handleTagChange("All")}
          className={`${styles.projectButton} ${
            tag === "All" ? "text-blue-500" : "text-gray-400"
          }`}
        >
   
        </button>
        <button
          onClick={() => handleTagChange("Web")}
          className={`${styles.projectButton} ${
            tag === "Web" ? "text-blue-500" : "text-gray-400"
          }`}
        >
  
        </button>
        <button
          onClick={() => handleTagChange("Mobile")}
          className={`${styles.projectButton} ${
            tag === "Mobile" ? "text-blue-500" : "text-gray-400"
          }`}
        >
  
        </button>
      </div>
      <ul className={`grid md:grid-cols-3 gap-8 md:gap-12 ${styles.projectsContainer}`}>
        {filteredProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3 }}
            className={styles.projectCard}
          >
            <div
              className={`${styles.projectImageContainer} ${
                expandedImageId === project.id ? styles.expanded : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`${styles.projectImage} ${styles.minimizedImage}`} // Added minimizedImage class
                onClick={() => toggleExpand(project.id)}
              />
            </div>
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.description.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br /> {/* Add <br /> after each line */}
                  </React.Fragment>
                ))}
              </p>
              <div className={styles.projectLinks}>
                <a
                  href={project.githubUrl}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.previewUrl}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Preview 
                </a>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default AchievementsSection;

