import favicon from '../asset/favicon.png';
import { IGlobal } from '../component/common/IGlobal';

const title = '권지현 | Resume';
const description = '권지현의 웹 이력서입니다.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      profile: {
        firstName: 'Jihyeon',
        lastName: 'Kwon',
        username: 'kwonjihyeon-dev',
        gender: 'female',
      },
    },
  },
};
