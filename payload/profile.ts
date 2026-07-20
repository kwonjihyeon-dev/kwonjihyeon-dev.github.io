import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,
  image,
  name: {
    title: '권지현',
    small: '(Jihyeon)',
  },
  contact: [
    {
      title: 'kjh2868@gmail.com',
      link: 'mailto:kjh2868@gmail.com',
      icon: faEnvelope,
    },
    {
      link: 'https://github.com/kwonjihyeon-dev',
      icon: faGithub,
    },
    {
      link: 'https://kwonjihyeon-dev.github.io/TIL/',
      icon: faBlog,
    },
  ],
};

export default profile;
