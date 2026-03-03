import type { ComponentType } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from '../components/icons';

export type SocialIconType = 'github' | 'linkedin' | 'email' | 'phone';

type IconProps = {
  className?: string;
};

type IconComponent = ComponentType<IconProps>;

const ICON_REGISTRY: Record<SocialIconType, IconComponent> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
  phone: PhoneIcon
};

const DEFAULT_ICON: IconComponent = MailIcon;

export function getSocialIcon(type: string | undefined): IconComponent {
  if (!type) {
    return DEFAULT_ICON;
  }

  return ICON_REGISTRY[type as SocialIconType] ?? DEFAULT_ICON;
}
