import TypeCycle from '../common/TypeCycle';
import { HeartIcon } from '../icons';

function AboutSection({ data }) {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center lg:px-6 mt-10 lg:mt-0">
      <div className="relative w-full lg:max-w-[1100px] h-auto rounded-2xl bg-white/10 border border-white/20 shadow-lg shadow-black/40 lg:p-6">
        <div className="absolute -top-20 -left-20 w-56 h-56 bg-gradient-to-br from-cyan-400/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -right-5 w-44 h-44 bg-gradient-to-tl from-blue-500/30 to-transparent blur-3xl" />

        <div className="w-full h-auto rounded-xl lg:flex-row flex-col border border-white/15 bg-black/30 lg:p-8 flex gap-3 lg:gap-8">
          <div className="w-[280px] mx-auto flex-shrink-0 flex flex-col md:py-10 lg:py-10 gap-2 items-center mt-5 lg:mt-0 justify-center lg:mx-0">
            <div className="w-48 h-48 rounded-xl p-5 bg-white/20">
              <img src={data.assets.profile} className="rounded-lg" alt={data.about.profileName} />
            </div>

            <h1 className="roboto font-bold text-2xl bg-gradient-to-l from-cyan-400 to-green-400 bg-clip-text text-transparent">
              {data.about.profileName}
            </h1>

            <div className="h-12 -mt-3 lg:mt-0 flex items-center">
              <TypeCycle
                texts={data.about.statusCycle}
                className="text-lg font-bold text-transparent bg-gradient-to-r from-red-500 to-orange-300 bg-clip-text"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-2 lg:gap-3 text-white px-4 md:px-10 lg:px-0">
            <h2 className="lg:text-3xl text-xl font-semibold">{data.about.heading}</h2>

            <p className="roboto text-white/70 leading-relaxed text-[12px] md:text-lg lg:text-lg">
              I'm a{' '}
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text">
                {data.about.introRole}
              </span>{' '}
              {data.about.paragraph1}
            </p>

            <p className="roboto text-white/70 leading-relaxed text-[12px] md:text-lg lg:text-lg">{data.about.paragraph2}</p>

            <p className="roboto text-white/70 leading-relaxed text-[12px] md:text-lg lg:text-lg">{data.about.paragraph3}</p>

            <p className="flex items-baseline gap-2 roboto">
              <HeartIcon className="text-red-500 w-5 h-5 translate-y-[2px]" />
              <span className="bg-gradient-to-b from-red-400 to-blue-400 bg-clip-text text-transparent text-sm md:text-lg lg:text-lg">
                Interest
              </span>
              <span className="text-slate-400 text-[12px] lg:text-lg md:text-lg">- {data.about.interest}</span>
            </p>

            <p className="roboto text-slate-400 text-[12px] md:text-lg mb-3 lg:mb-0 lg:text-[16px] leading-relaxed flex lg:items-center gap-3">
              <HeartIcon className="w-4 h-4 text-pink-500 shrink-0" />
              {data.about.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;