import ProjectCard from './ProjectCard';

function ProjectsSection({ data }) {
  return (
    <section id="project" className="min-h-screen md:px-20 md:my-10 my-20 text-white">
      <div className="flex relative flex-col justify-center items-center mb-5 md:mb-16">
        <div className="absolute flex justify-center w-72 h-24 bg-gradient-to-br from-red-300/30 to-transparent blur-3xl" />
        <p className="text-md uppercase caveat tracking-wider text-[#C9CDD3]">{data.projectSection.kicker}</p>
        <h1 className="md:text-7xl text-3xl uppercase tracking-wider">
          <span className="bebas-neue-regular">{data.projectSection.title} </span>
          <span className="italic bg-gradient-to-r from-purple-700 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_4px_rgba(255,255,255,0.6)] drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]">
            {data.projectSection.accent}
          </span>
        </h1>
      </div>

      <div className="flex gap-12 flex-col lg:grid-cols-3 pt-5">
        {data.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
