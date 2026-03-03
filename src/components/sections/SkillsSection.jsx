import AnimatedGradientText from '../common/AnimatedGradientText';

function SkillsSection({ data }) {
  return (
    <div id="skills" className="min-h-screen w-full -mt-10 md:mt-0 flex flex-col items-center justify-center gap-8">
      <div className="flex items-center flex-col">
        <div
          className="md:w-24 md:h-24 w-12 h-12 mb-2 relative top-4 right-10 md:-left-20 spin-slow"
          style={{
            backgroundImage: 'linear-gradient(135deg, #e2e8f0 0%, #93a9ff 45%, #5b7cfa 100%)',
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
          gradient="linear-gradient(135deg, #dbe5ff 0%, #9db2ff 50%, #7894ff 100%)"
          className="md:text-7xl text-4xl font-semibold"
        />

        <p className="text-lg tracking-wide mt-5 subtle-copy text-center max-w-xl">{data.skillsSubheading}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {data.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 md:px-4 px-[10px] py-2 surface-chip transition-all duration-300 hover:scale-105"
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
