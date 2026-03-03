import { getSocialIcon } from '../../utils/iconRegistry';
import { HOME_SOCIAL_LINK_CLASS } from '../../utils/classNames';

function SocialLinkButton({ social }) {
  const Icon = getSocialIcon(social.type);
  const isImageIcon = Boolean(social.image);
  const isHttpLink = /^https?:\/\//i.test(social.url);

  return (
    <a
      href={social.url}
      target={isHttpLink ? '_blank' : undefined}
      rel={isHttpLink ? 'noopener noreferrer' : undefined}
      className={HOME_SOCIAL_LINK_CLASS}
    >
      {isImageIcon ? (
        <img src={social.image} alt={social.name} className="w-4 h-4 md:w-5 md:h-5 rounded-full object-cover" />
      ) : (
        <Icon className="md:text-xl text-sm text-cyan-300 w-4 h-4 md:w-5 md:h-5" />
      )}
      <span className="text-[12px] md:text-sm font-semibold">{social.name}</span>
    </a>
  );
}

export default SocialLinkButton;
