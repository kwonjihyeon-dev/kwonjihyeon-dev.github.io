import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Kroad',
      link: 'https://github.com/kwonjihyeon-dev/kroad',
      startedAt: '2026-02',
      endedAt: '2026-05',
      where: '개인 프로젝트 / 실시간 GPS 추적 및 경로 안내 기능을 갖춘 무료 내비게이션 웹 서비스',
      descriptions: [
        {
          content:
            'GPS 노이즈 보정을 위해 칼만 필터를 도입, 배치 수집된 좌표를 OSRM Map Matching API로 도로 스냅하는 3단계 위치 처리 파이프라인 설계 (Geolocation → Kalman Filter → Map Matching)',
        },
        {
          content:
            'Docker 기반 OSRM 라우팅 엔진을 자체 호스팅하여 유료 경로 탐색 API 없이 경로 탐색 · 이탈 재탐색 기능 구현',
        },
        {
          content:
            'Feature-Sliced Design 아키텍처를 적용하고, ESLint로 레이어 간 역방향 import를 빌드 타임에 차단하도록 설계해 구조적 일관성 확보',
        },
      ],
    },
    {
      title: 'shopping-mall',
      link: 'https://github.com/kwonjihyeon-dev/shopping-mall',
      startedAt: '2025-09',
      endedAt: '2026-02',
      where: '개인 프로젝트 / 쇼핑몰 컨셉으로 Vanilla JS로 SPA 구현 프로젝트',
      descriptions: [
        {
          content:
            'Hash / History API 기반 라우터, Observer 패턴 상태 관리, 컴포넌트 라이프 사이클(create/mount/unmount)을 직접 설계',
        },
      ],
    },
  ],
};

export default project;
