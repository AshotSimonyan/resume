import { CONNECT_PRIMARY_BUTTON_CLASS, CONNECT_SECONDARY_BUTTON_CLASS } from '../../utils/classNames';
import AnimatedGradientText from '../common/AnimatedGradientText';
import { DownloadIcon, HeartIcon } from '../icons';

function ConnectSection({ data }) {
  return (
    <div id="connect" className="min-h-screen -mt-14 md:mt-0 w-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-8">
        <div className="text-3xl capitalize relative flex flex-col items-center text-center">
          <img src={data.assets.connectMark} alt="mark" className="md:w-32 md:h-32 w-24 h-24" />
          <div className="absolute -top-20 justify-center items-center w-44 h-44 section-halo blur-3xl" />

          <AnimatedGradientText
            text={data.connect.headingTop}
            duration={8}
            gradient="linear-gradient(135deg, #dbe5ff 0%, #9db2ff 50%, #7894ff 100%)"
            className="md:text-6xl text-3xl font-semibold"
          />

          <AnimatedGradientText
            text={data.connect.headingBottom}
            duration={8}
            gradient="linear-gradient(135deg, #c7d6ff 0%, #92aaff 50%, #5b7cfa 100%)"
            className="md:text-3xl text-2xl font-semibold mt-2"
          />
        </div>

        <div className="flex justify-center items-center gap-4">
          <a href={`mailto:${data.connect.email}`} className={CONNECT_PRIMARY_BUTTON_CLASS}>
            <span className="pl-3 action-label text-[12px] md:text-lg">
              Let's Connect
            </span>
            <HeartIcon className="md:w-12 md:h-12 w-8 h-8 text-[12px] md:text-lg p-2" />
          </a>

          <a href={data.connect.resumeUrl} download className={CONNECT_SECONDARY_BUTTON_CLASS}>
            <span className="pl-3 action-label text-[12px] md:text-lg tracking-wide">
              Resume
            </span>
            <DownloadIcon className="md:w-12 md:h-12 w-8 h-8 text-[12px] md:text-lg p-2" />
          </a>
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl my-2 roboto muted-copy">{data.connect.availabilityLine}</p>
          <p className="text-sm px-4 md:px-0 tracking-wide md:text-xl subtle-copy">{data.connect.focusLine}</p>
        </div>
      </div>
    </div>
  );
}

export default ConnectSection;