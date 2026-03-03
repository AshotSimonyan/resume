import ProjectCard from './ProjectCard';

function ProjectsSection({ data }) {
  return (
    <section id="project" className="min-h-screen md:px-20 md:my-10 my-20 text-white">
      <div className="flex relative flex-col justify-center items-center mb-5 md:mb-16">
        <div className="absolute flex justify-center w-72 h-24 section-halo blur-3xl" />
        <p className="text-sm uppercase tracking-wider subtle-copy">{data.projectSection.kicker}</p>
        <h1 className="md:text-7xl text-3xl uppercase tracking-wide">
          <span>{data.projectSection.title} </span>
          <span className="italic accent-copy">{data.projectSection.accent}</span>
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
