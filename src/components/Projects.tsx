import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl mb-4 relative z-20">Projects</h2>
      <div className="group/list">
        {projectsData.map((project, idx) => (
          <ProjectCard
            key={idx}
            name={project.name}
            description={project.description}
            tags={project.tags}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;