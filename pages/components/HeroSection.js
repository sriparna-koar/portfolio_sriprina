import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Importing icons
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className={styles.heroTitle}>
            <span className={styles.textGradient}>
              Hello, I&apos;m{" "} Sriparna Koar
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={`${styles.heroSubTitle} ${styles.textGray}`}style={{ color: 'white' ,fontSize: '25px' }}>
                 I enjoy building sites & apps. Let&apos;s create something extraordinary.I am self-driven,
                 <br/>  quick starter,passionate programmer with a curious mind who enjoys solving a 
                 <br/> complex and challenging real-world problems.
          </p>
          <div className={`${styles.linkButton}`}>
            <Link href="/contact" className={`${styles.linkButton} ${styles.linkButtonPrimary} mr-4`}>
      
            </Link>
            {/* <Link href="/" className={`${styles.linkButton} ${styles.linkButtonSecondary}`}>
              <span className={`${styles.bgSlate800} rounded-full px-5 py-2`}>
                Download CV
              </span>
            </Link> */}
          </div>
          <div className={`${styles.socialMediaIcons}`}>
            <a href="https://www.linkedin.com/in/sriparna-koar-2a4415289/" className={`${styles.socialMediaIcon}`}>
              <FaLinkedin size={32} color="#0e76a8" />
            </a>
            <a href="https://github.com/sriparna-koar" className={`${styles.socialMediaIcon}`}>
              <FaGithub size={32} color="#333" />
            </a>
            <a href="https://www.twitter.com" className={`${styles.socialMediaIcon}`}>
              <FaTwitter size={32} color="#1da1f2" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className={`${styles.bgSlate800} ${styles.heroImageContainer} rounded-full`}>
            <Image
              // src="/hero-image.png"
              alt="hero image"
              className={`${styles.heroImage} absolute transform -translate-y-1/2`}
              width={330}
              height={330}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
