// import Link from "next/link";

// const NavLink = ({ href, title }) => {
//   return (
//     <>
//       {href ? (
//         <Link
//           href={href}
//           className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
//         >
//           {title}
//         </Link>
//       ) : (
//         <span className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
//           {title}
//         </span>
//       )}
//     </>
//   );
// };

// export default NavLink;


// import React from "react";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center bg-[#1F1F1F] py-4 px-12 sticky top-0 z-10">
//       <div className="flex items-center space-x-4">
//         <Link href="/#content">
//           <a>
//             <span className="text-white text-xl font-bold">Home</span>
//           </a>
//         </Link>
//         <Link href="/#achievements">
//           <a>
//             <span className="text-white text-xl font-bold">Projects</span>
//           </a>
//         </Link>
//         <Link href="/#about">
//           <a>
//             <span className="text-white text-xl font-bold">About</span>
//           </a>
//         </Link>
//         <Link href="/#contact">
//           <a>
//             <span className="text-white text-xl font-bold">Contact</span>
//           </a>
//         </Link>
//       </div>
//       {/* Add other navbar elements if needed */}
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center bg-[#1F1F1F] py-4 px-12 sticky top-0 z-10">
//       <div className="flex items-center space-x-4">
//         <a href="#content">
//           <span className="text-white text-xl font-bold">Home</span>
//         </a>
//         <a href="#achievements">
//           <span className="text-white text-xl font-bold">Achievements</span>
//         </a>
//         <a href="#about">
//           <span className="text-white text-xl font-bold">About</span>
//         </a>
//         {/* <a href="#projects">
//           <span className="text-white text-xl font-bold">Projects</span>
//         </a> */}
//         <a href="#contact">
//           <span className="text-white text-xl font-bold">Contact</span>
//         </a>
//       </div>
//       {/* Add other navbar elements if needed */}
//     </nav>
//   );
// };

// export default Navbar;
// components/Navbar.js



// import React from "react";
// import Link from "next/link";
// import styles from "../styles/Navbar.module.css"; // Import the CSS file

// const Navbar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.navLinks}>
//         <Link href="/#content">
//           <a className={styles.navLink}>Home</a>
//         </Link>
//         <Link href="/#achievements">
//           <a className={styles.navLink}>Projects</a>
//         </Link>
//         <Link href="/#about">
//           <a className={styles.navLink}>About</a>
//         </Link>
//         <Link href="/contact">
//           <a className={styles.navLink}>Contact</a>
//         </Link>
//       </div>
//       {/* Add other navbar elements if needed */}
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const iconVariant = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#14b8a6",
    },
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <AnimatePresence>
          <motion.svg
            key="logo"
            viewBox="0 0 450 450"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.logo}
          >
            <motion.path
              d="M321.955 420L179.465 127.143L224.998 36.1755L416.91 420H321.955ZM204.867 263.253L128.055 420H33.0897L158.769 168.608L204.867 263.253Z"
              strokeWidth="15"
              variants={iconVariant}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 3, ease: "easeInOut" },
                fill: { duration: 3, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </AnimatePresence>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/#content">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/#achievements">
              <a>Projects</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/#about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
