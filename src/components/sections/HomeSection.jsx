import { useScrollCueVisibility } from '../../hooks/useScrollCueVisibility';
import AnimatedGradientText from '../common/AnimatedGradientText';
import ScrollCue from '../common/ScrollCue';
import SocialLinkButton from '../common/SocialLinkButton';
import TypeCycle from '../common/TypeCycle';

function HomeSection({ data }) {
  const { sectionRef, showCue } = useScrollCueVisibility(50);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex justify-center items-center min-h-screen w-full mt-18 px-5 md:px-0 md:mt-0"
    >
      <div className="flex flex-col text-center justify-center items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute -top-10 w-56 h-56 bg-gradient-to-br from-cyan-400/30 to-purple-400/20 blur-3xl" />
          <img src={data.assets.heroIllustration} className="w-44 h-44 object-contain z-10" alt="illustration" />
        </div>

        <h1 className="text-2xl text-wrap md:text-6xl font-semibold capitalize leading-tight">
          {data.heroTitlePrefix}
          <br />
          <AnimatedGradientText
            as="span"
            text={data.heroTitleGradient}
            duration={8}
            gradient="linear-gradient(135deg, #364AF7 0%, #57cc99 25%, #560bad 50%, #a53860 75%, #f94144 100%)"
            className="text-4xl md:text-6xl capitalize mt-2 md:mt-3 font-semibold lobster-regular inline-block"
          />
        </h1>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl tracking-tighter md:text-3xl text-[#9D9B9B]">{data.greeting}</h2>
          <div className="h-12">
            <TypeCycle
              texts={data.roleCycle}
              className="text-2xl font-medium bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent"
            />
          </div>
        </div>

        <div className="flex justify-center gap-5 md:mb-3 w-full">
          {data.socialLinks.map((social) => (
            <SocialLinkButton key={`${social.name}-${social.url}`} social={social} />
          ))}
        </div>
      </div>

      {showCue && <ScrollCue />}
    </section>
  );
}

export default HomeSection;
