function ProjectCard({ project }) {
  return (
    <div className="flex gap-3 flex-col lg:flex-row lg:gap-12 items-center">
      <div className="group relative lg:h-[430px] w-full h-[300px] lg:w-[600px] rounded-2xl overflow-hidden surface-card">
        <a
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} website`}
          className="block h-full"
        >
          <div className="absolute inset-2 lg:inset-4 rounded-xl backdrop-blur-md project-media-overlay overflow-hidden">
            <div className="absolute top-4 left-4 z-30">
              <p className="lg:text-lg text-sm tracking-wide muted-copy">{project.tagline}</p>
            </div>

            <div className="relative h-full flex items-end justify-center pb-6">
              <img
                src={project.images.img1}
                alt={project.title}
                className="relative z-10 w-[80%] h-[75%] rounded-lg transition-transform duration-500 ease-out group-hover:-rotate-3 group-hover:-translate-x-10 group-hover:-translate-y-6"
              />
              <img
                src={project.images.img2}
                alt={`${project.title} preview`}
                className="absolute z-20 w-[75%] h-[70%] rounded-lg shadow-2xl opacity-0 scale-75 origin-center group-hover:rotate-3 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-10"
              />
            </div>
          </div>
        </a>
      </div>

      <div className="flex flex-col justify-center max-w-xl">
        <h3 className="text-xl lg:text-2xl font-semibold mb-4">{project.title}</h3>
        <p className="muted-copy mb-4 lg:text-lg leading-relaxed">{project.description}</p>

        {project.points?.length > 0 && (
          <ul className="space-y-2 mb-2">
            {project.points.map((point, index) => (
              <li key={`${project.id}-point-${index}`} className="flex items-start gap-3 lg:text-lg text-sm muted-copy">
                <span className="accent-copy mt-1">*</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 lg:gap-4 my-3">
          {project.tech.map((tech, index) => (
            <div
              key={`${project.id}-tech-${index}-${tech.name}`}
              className="flex py-1 lg:py-2 px-[8px] lg:px-3 items-center gap-1 md:my-1 lg:my-0 md:gap-2 surface-chip"
            >
              <img src={tech.image} alt={tech.name} className="w-4 h-3" />
              <span className="lg:text-sm text-[12px] tracking-tight">{tech.name}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;
