// // pages/index.js
// import Link from 'next/link';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to My Portfolio</h1>
//       <Link href="/about"><a>About</a></Link>
//       <Link href="/skills"><a>Skills</a></Link>
//       <Link href="/education"><a>Education</a></Link>
//       <Link href="/projects"><a>Projects</a></Link>
//       <Link href="/contact"><a>Contact</a></Link>
//     </div>
//   );
// };

// export default Home;



// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import AboutSection from "./components/AboutSection";
// // import ProjectsSection from "./components/ProjectsSection";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";

// const Home=()=> {
//   return (
//     <main className="flex min-h-screen flex-col bg-[#121212]">
//       <Navbar />
//       <div className="container mt-24 mx-auto px-12 py-4">
//         <HeroSection /> 
//          <AchievementsSection />
//         <AboutSection />
//         {/* <ProjectsSection /> */}
//         <Contact />
//       </div>
//       <Footer />
//     </main>
//   );
// }
// export default Home;









import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
// import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4" id="content">
        <HeroSection />
        <AboutSection id="about" />
        <AchievementsSection id="achievements" />

        {/* <AboutSection id="about" />
        <AchievementsSection id="achievements" /> */}
        {/* <ProjectsSection id="projects" /> */}
        <Contact id="contact" />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
