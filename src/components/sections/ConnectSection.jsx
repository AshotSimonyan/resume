import { CONNECT_ACTION_BUTTON_CLASS } from '../../utils/classNames';
import AnimatedGradientText from '../common/AnimatedGradientText';
import { DownloadIcon, HeartIcon } from '../icons';

function ConnectSection({ data }) {
  return (
    <div id="connect" className="min-h-screen -mt-14 md:mt-0 w-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <div className="text-3xl capitalize relative flex flex-col items-center text-center">
          <img src={data.assets.connectMark} alt="mark" className="md:w-32 md:h-32 w-24 h-24" />
          <div className="absolute -top-20 justify-center items-center w-44 h-44 bg-gradient-to-br from-red-400/30 to-transparent blur-3xl" />

          <AnimatedGradientText
            text={data.connect.headingTop}
            duration={8}
            gradient="linear-gradient(135deg, #364AF7 0%, #85245B 25%, #10b981 50%, #22c55e 75%, #364AF7 100%)"
            className="md:text-6xl text-3xl font-semibold lobster-regular"
          />

          <AnimatedGradientText
            text={data.connect.headingBottom}
            duration={8}
            gradient="linear-gradient(135deg, #d62828 0%, #85245B 25%, #10b981 50%, #219ebc 75%, #f72585 100%)"
            className="md:text-3xl text-2xl font-bold mt-2 caveat"
          />
        </div>

        <div className="flex justify-center items-center gap-4">
          <a href={`mailto:${data.connect.email}`} className={CONNECT_ACTION_BUTTON_CLASS}>
            <span className="pl-3 lobster-regular tracking-wider text-[12px] md:text-lg text-slate-300 group-hover:text-black">
              Let's Connect
            </span>
            <HeartIcon className="md:w-12 md:h-12 w-8 h-8 text-[12px] md:text-lg p-2 rounded-full text-pink-500 group-hover:text-red-500" />
          </a>

          <a href={data.connect.resumeUrl} download className={CONNECT_ACTION_BUTTON_CLASS}>
            <span className="pl-3 lobster-regular text-slate-300 text-[12px] md:text-lg tracking-wider group-hover:text-black">
              Resume
            </span>
            <DownloadIcon className="md:w-12 md:h-12 w-8 h-8 text-[12px] md:text-lg p-2 rounded-full text-pink-500 group-hover:text-red-500" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl my-2 roboto">{data.connect.availabilityLine}</p>
          <p className="text-sm px-4 md:px-0 tracking-widest md:text-xl lobster-regular">{data.connect.focusLine}</p>
        </div>
      </div>
    </div>
  );
}

export default ConnectSection;
