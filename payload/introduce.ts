import { IIntroduce } from '../component/introduce/IIntroduce';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '사용자가 기다리는 1초를 줄이는 일이 서비스의 성과로 이어진다고 믿는 5년차 프론트엔드 엔지니어입니다.',
    'Next.js SSR/RSC로 마이그레이션하여 Lighthouse로 측정 및 검증한 결과, LCP를 3.1초에서 1초로 줄여 초기 진입 속도를 개선했습니다. iOS WebView에서만 발생하던 렌더링 이슈를 추적해 WebKit의 바이트 제한이 원인임을 밝혔고, 퍼널 이동 시 입력값이 사라지던 문제 역시 분산돼 있던 IndexedDB 로직을 단일 Class로 응집해 제거했습니다.',
    '사용자가 겪는 문제를 좇다 보니, 팀 내부의 비효율도 개선 대상으로 삼았습니다. 팝업을 바꿀 때마다 필요하던 배포를 서버 설정만으로 대응할 수 있도록 대체했고, 디자인 토큰을 자동화해 여러 프로젝트가 동일한 기준을 공유하도록 만들었습니다.',
    '기능 구현을 넘어 화면 뒤의 견고한 구조를 고민하고 지표 중심의 개선을 리드하는 것, 제가 추구하는 프론트엔드 엔지니어의 핵심 가치입니다.',
  ],
};

export default introduce;
