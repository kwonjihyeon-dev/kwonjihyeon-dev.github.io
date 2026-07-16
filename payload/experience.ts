import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      company: '두꺼비세상',
      project: '피터팬의 좋은방 구하기',
      startedAt: '2023-10',
      positions: [
        {
          title: '중개사 전용 관리 대시보드(B2B) 홈 개편 · Next.js SSR/RSC 마이그레이션',
          subtitle:
            '입점 중개사가 매물 광고를 등록 · 결제하고 성과를 확인하는 전용 대시보드 홈 화면 전면 개편 작업',
          descriptions: [
            'Lighthouse를 활용한 성능 진단 · 구현 · 측정, 운영 안정화까지 프론트엔드 파트 전담, **LCP 3.1s→1.0s (-68%) · TTI -80% 개선**',
            '홈 화면 진입 시 필요한 7종 데이터를 서버 컴포넌트에서 Promise.all로 병렬 prefetch → 하이드레이션하여 초기 로딩 및 waterfall 최소화',
            'chart.js 라인 차트로 광고 매물의 조회수 · 문의 수 등을 일자별로 시각화',
          ],
          skill: ['Next.js', 'Tanstack Query', 'Zustand', 'TypeScript', 'Lighthouse'],
        },
        {
          title: 'WebView 서비스 아키텍처 설계 · SSR 성능 최적화',
          subtitle: '사용자의 관심 매물 관리 기능(찜한 방·최근 본 방·문의한 방) 개선 작업',
          descriptions: [
            'iOS WebView 초기 콘텐츠 로드 지연(3~7s)을 WebKit 최소 바이트 미달 문제로 확인하고 Suspense Fallback UI가 정상 노출되도록 보완',
            '초기 로드 속도 개선을 위해 데이터 prefetch를 도입, hydration 시 캐시된 데이터를 찾지 못하는 문제를 서버 - 클라이언트 Query Key 불일치로 진단 · 수정',
            '**App 진입 62.59% · 모바일웹 → 앱 설치 전환율 5.69% 증가**에 기여',
          ],
          skill: ['Next.js', 'Tanstack Query', 'Zustand', 'TypeScript'],
        },
        {
          title: '모바일웹 개인회원 매물 광고 퍼널 개선',
          subtitle:
            '사용자가 매물을 피터팬 및 네이버페이 부동산 · 네이버 카페 등 내 · 외부 채널에 광고할 수 있는 기능',
          descriptions: [
            '뒤로가기 · 재방문과 같은 단계에서 입력한 데이터가 유실되는 문제의 원인이 파편화된 IndexedDB 접근 로직에 있다는 점을 확인하고 이를 단일 Class로 캡슐화하고 store를 통해서만 접근하도록 제한하여 데이터 보존 및 접근 일관성 확보',
            '**네이버 카페 전송 성공률 31.3% → 91.7%, 결제 관련 CS 인입 0건** 등 팀 성과에 기여',
          ],
          skill: ['IndexedDB', 'Vue', 'Vuex'],
        },
        {
          title: '서버 드리븐 UI(SDUI) 기반 팝업 시스템 제안 · 구축',
          subtitle: '중개사 전용 관리 대시보드에 노출되는 팝업 작업에 대한 비효율 개선',
          descriptions: [
            '중개사 전용 관리 대시보드에 노출되는 팝업이 매번 기획 → 디자인 → 개발 → 검수 → 배포 과정이 반복되던 문제를 직접 제안해 채택 · 적용',
            '클라이언트에서는 서버가 내려준 JSON을 컴포넌트 타입별로 동적 렌더링하도록 구현, 노출 판정은 서버에 위임하는 방식으로 변경',
            '기획파트가 어드민에 입력만으로 팝업 제어가 가능해져 긴급 공지 · 마케팅 대응 등을 **배포 단위(1~2일)에서 분 단위로 단축**',
          ],
          skill: ['Next.js', 'Tanstack Query', 'TypeScript'],
        },
        {
          title: '디자인 토큰 자동화 파이프라인 및 디자인 시스템 구축',
          subtitle:
            'React/Vue/PHP 6개 프로젝트를 대상으로, Figma 토큰 변경만으로 전 프로젝트 스타일이 자동 반영되도록 디자인 토큰 자동화 구축',
          descriptions: [
            'Figma 토큰을 @tokens-studio/sd-transforms + Style Dictionary로 변환해 환경별 출력물(Tailwind, Vue/PHP용 SCSS)을 자동으로 생성하는 파이프라인 구축, Figma 변경만으로 6개 프로젝트에 스타일 자동 반영',
            '디자인 시스템 UI 컴포넌트 구현에 참여하고 Storybook으로 문서화해, 프론트 4명 · 디자이너 3명이 협업 환경에서 재사용성과 일관성 확보',
          ],
          skill: ['GitHub Actions', 'TailwindCSS', 'SCSS', 'Style Dictionary', 'Storybook'],
        },
        {
          title: 'AI 사주·풍수 매물 분석 (PoC)',
          subtitle:
            '생년월일 · 출생시간 · 성별로 사주 오행을 분석해 이용자에게 잘 맞는 매물 · 동네를 추천하는 서비스',
          descriptions: [
            'AI 응답 타이핑 UI를 useRef DOM 직접 조작으로 구현해 리렌더 회피',
            '검색 API 응답을 chunk로 받아 첫 50건 즉시 노출, 나머지는 IntersectionObserver 점진 렌더링 처리, 검색어 변경 시 AbortController로 이전 요청 취소 처리',
            '낮은 CTR(0.06%)에 대한 원인을 파악하기 위해 진입 배너 노출 위치에 대한 A/B 테스트를 진행하고 사용자 액션 분석을 위해 "노출 부족 vs 인지 후 미클릭"으로 이벤트 추가 제안 및 측정',
          ],
          skill: ['Next.js', 'Tanstack Query', 'Zustand', 'TypeScript'],
        },
      ],
    },
    {
      company: '리버블',
      project: '오피스너',
      endedAt: '2023-10',
      startedAt: '2022-07',
      positions: [
        {
          title: 'React 기반 서비스 초기 구조 설계 및 성능 최적화',
          subtitle: '건물 관리 플랫폼 "오피스너" 초기 세팅부터 운영 안정화까지 전담',
          descriptions: [
            'Code Splitting, 외부 스크립트 호출 순서 변경으로 Lighthouse 점수 평균 70점대 → 87점 상향시켜 성능 최적화에 기여',
            'GitHub Actions 기반 배포 파이프라인 구성으로 배포 자동화 환경 구축',
          ],
          skill: ['React', 'GitHub Actions', 'Lighthouse'],
        },
        {
          title: 'Data Fetching 병목 현상 개선',
          descriptions: [
            'useSuspenseQuery 사용 시 컴포넌트 트리 상단에서 모든 API 호출을 대기하며 발생하는 waterfall 현상을 확인하여 API 호출 책임을 각 컴포넌트로 위임하는 구조로 재설계하고 Suspense 경계 재배치를 통해 네트워크 병렬성 확보',
          ],
          skill: ['React Suspense', 'Tanstack Query'],
        },
      ],
    },
  ],
};

export default experience;
