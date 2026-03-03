import AnimatedGradientText from '../common/AnimatedGradientText';

function SkillsSection({ data }) {
  return (
    <div id="skills" className="min-h-screen w-full -mt-10 md:mt-0 flex flex-col items-center justify-center gap-8">
      <div className="flex items-center flex-col">
        <div
          className="md:w-24 md:h-24 w-12 h-12 mb-2 relative top-4 right-10 md:-left-20 spin-slow"
          style={{
            backgroundImage: 'linear-gradient(135deg, #364AF7 0%, #85245B 25%, #10b981 50%, #22c55e 75%)',
            WebkitMaskImage: `url(${data.assets.skillMask})`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
            WebkitMaskPosition: 'center',
            maskImage: `url(${data.assets.skillMask})`,
            maskRepeat: 'no-repeat',
            maskSize: 'contain',
            maskPosition: 'center'
          }}
        />

        <AnimatedGradientText
          text={data.skillsHeading}
          duration={8}
          gradient="linear-gradient(135deg, #364AF7 0%, #85245B 25%, #10b981 50%, #22c55e 75%, #364AF7 100%)"
          className="md:text-7xl text-4xl font-semibold lobster-regular"
        />

        <p className="text-lg outfit tracking-wider mt-5 text-slate-400 text-center max-w-xl">{data.skillsSubheading}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {data.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 outfit md:px-4 px-[10px] py-2 rounded-2xl bg-white/10 border border-white/20 text-slate-200 shadow-md transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <img src={skill.image} alt={skill.name} className="md:w-8 md:h-8 w-3 h-3 object-contain" />
            <span className="md:text-sm text-[12px] font-medium tracking-wide">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
