import ArrowLeft from "@/components/icons/ArrowLeft";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/functions/getAllProjects";
import Link from "next/link";
import React from "react";

const ProjectPage = ({ projects }) => {
  console.log(projects);
  return (
    <Layout title={"Portfolio / Projects"} description={"My Projects"}>
      <section className=" h-full max-w-5xl mx-auto mb-16 md:pt-16">
        <Link legacyBehavior href="/">
          <a className=" flex items-center space-x-4 font-semibold pb-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 hover:dark:text-gray-400 text-xl">
            <ArrowLeft className="w-8 h-8 fill-current " />
            <span>Back to Home</span>
          </a>
        </Link>

        <div className=" grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectPage;

export const getStaticProps = async () => {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
};
