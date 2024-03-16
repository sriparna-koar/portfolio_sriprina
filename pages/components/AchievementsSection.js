// "use client";
// import React from "react";
// import dynamic from "next/dynamic";

// const AnimatedNumbers = dynamic(
//   () => {
//     return import("react-animated-numbers");
//   },
//   { ssr: false }
// );

// const projectList = [
//   {
//     name: "Project 1",
//     metric: "Projects",
//     value: "100",
//     postfix: "+",
//     url: "https://example.com/project1",
//     image: "project1.jpg",
//     pr: "https://github.com/example/project1/pulls",
//   },
//   {
//     name: "Project 2",
//     prefix: "~",
//     metric: "Users",
//     value: "100,000",
//     url: "https://example.com/project2",
//     image: "project2.jpg",
//     pr: "https://github.com/example/project2/pulls",
//   },
//   {
//     name: "Project 3",
//     metric: "Awards",
//     value: "7",
//     url: "https://example.com/project3",
//     image: "project3.jpg",
//     pr: "https://github.com/example/project3/pulls",
//   },
//   {
//     name: "Project 4",
//     metric: "Years",
//     value: "5",
//     url: "https://example.com/project4",
//     image: "project4.jpg",
//     pr: "https://github.com/example/project4/pulls",
//   },
// ];

// const AchievementsSection = () => {
//   return (
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {projectList.map((project, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
//             >
//               <h2 className="text-white text-4xl font-bold flex flex-row">
//                 {project.prefix}
//                 <AnimatedNumbers
//                   includeComma
//                   animateToNumber={parseInt(project.value)}
//                   locale="en-US"
//                   className="text-white text-4xl font-bold"
//                   configs={(_, index) => {
//                     return {
//                       mass: 1,
//                       friction: 100,
//                       tensions: 140 * (index + 1),
//                     };
//                   }}
//                 />
//                 {project.postfix}
//               </h2>
//               <p className="text-[#ADB7BE] text-base">{project.metric}</p>
//               <a href={project.url}>
//                 <img src={project.image} alt={project.name} className="mt-4 w-32 h-32" />
//               </a>
//               <p>
//                 <a href={project.pr} className="text-blue-500 hover:underline">
//                   Pull Requests
//                 </a>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;
"use client";
import React from "react";

const projectList = [
  {
    name: "Project 1",
    url: "https://github.com/example/project1",
    image: "project1.jpg",
  },
  {
    name: "Project 2",
    url: "https://github.com/example/project2",
    image: "project2.jpg",
  },
  {
    name: "Project 3",
    url: "https://github.com/example/project3",
    image: "project3.jpg",
  },
  {
    name: "Project 4",
    url: "https://github.com/example/project4",
    image: "project4.jpg",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-white text-2xl font-bold mb-6">Projects</h2>
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {projectList.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {project.name}
              </h2>
              <a href={project.url}>
                <img src={project.image} alt={project.name} className="mt-4 w-32 h-32" />
              </a>
              <p>
                <a href={project.url} className="text-blue-500 hover:underline">
                  <svg
                    // xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block mb-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;


// "use client";
// import React from "react";

// const projectList = [
//   {
//     name: "Project 1",
//     url: "https://github.com/example/project1",
//     image: "project1.jpg",
//   },
//   {
//     name: "Project 2",
//     url: "https://github.com/example/project2",
//     image: "project2.jpg",
//   },
//   {
//     name: "Project 3",
//     url: "https://github.com/example/project3",
//     image: "project3.jpg",
//   },
//   {
//     name: "Project 4",
//     url: "https://github.com/example/project4",
//     image: "project4.jpg",
//   },
// ];

// const AchievementsSection = () => {
//   return (
   
//     <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//       <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
//         {projectList.map((project, index) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
//             >
//               <h2 className="text-white text-4xl font-bold flex flex-row">
//                 {project.name}
//               </h2>
//               <a href={project.url}>
//                 <img src={project.image} alt={project.name} className="mt-4 w-32 h-32" />
//               </a>
//               <p>
//                 <a href={project.url} className="text-blue-500 hover:underline">
//                   <svg
//                     // xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 inline-block mb-1"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
               
//                 </a>
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AchievementsSection;
