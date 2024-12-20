import React from "react";
// import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const ProjectList = ({ projects }) => {
  return (
    <div
      initial="hidden"
      animate="show"
      className="w-full max-w-auto  xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center"
    >
      <h1 className="text-accent font-semibold text-center text-4xl capitalize">
        Projects
      </h1>
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;
