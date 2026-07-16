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
            '레거시 Vue/Laravel 구조로 인증 · JS 다운로드 · 실행 · 데이터 페칭 이후에 화면이 렌더되는 홈 화면을 Next.js SSR/RSC로 재구축',
            'SSR로 초기 HTML을 확보하고 번들 축소 · 이미지 · 폰트 최적화와 진입 시 필요한 7종 데이터의 서버 컴포넌트 병렬 prefetch를 적용해 초기 로딩 최적화',
            '**Lighthouse Performance 68 → 96, 페이지 용량 4.8MB → 2.0MB(-58%), LCP 3.1s → 1.0s(-68%) 개선**',
          ],
          skill: ['Next.js', 'Tanstack Query', 'Zustand', 'TypeScript', 'Lighthouse'],
        },
        {
          title: 'WebView · 모바일웹 관심 매물 관리 기능 개발 및 SSR 성능 최적화',
          subtitle:
            '사용자의 관심 매물(찜한 방 · 최근 본 방 · 문의한 방)을 한 곳에서 관리하는 기능 개발',
          descriptions: [
            '모바일웹에서는 앱 설치를 유도하고, 관심 매물 관리 화면을 앱 전용으로 새로 개발해 **App 진입률 62.59%, 모바일웹 → 앱 설치 전환율 5.69% 증가**에 기여',
            '화면 로드 시까지 평균 3~7초 지연되는 문제를 확인하고 서버 · 클라이언트 Query Key 불일치를 원인으로 진단, Key를 일치시켜 초기 콘텐츠가 즉시 노출되도록 보완',
            'iOS WebView에서 레이아웃 시프트 방지용 Suspense fallback UI가 뜨지 않는 현상을, WebKit 최소 바이트 미달이 원인임을 확인하고 초기 응답 바이트를 보강해 fallback이 즉시 노출되도록 수정',
          ],
          skill: ['Next.js', 'Tanstack Query', 'Zustand', 'TypeScript'],
        },
        {
          title: '모바일웹 개인회원 매물 광고 퍼널 개선',
          subtitle:
            '사용자가 매물을 피터팬 · 네이버페이 부동산 · 네이버 카페 등 내 · 외부 채널에 광고할 수 있는 기능',
          descriptions: [
            '매물 광고 전송 퍼널을 개선해 **네이버 카페 전송 성공률 91.7%, 결제 관련 CS 인입 0건** 등 팀 성과에 기여',
            '개선 과정에서 뒤로가기 · 재방문 시 입력 데이터가 유실되던 문제를, 파편화된 IndexedDB 접근 로직이 원인임을 확인 → IndexedDB 접근을 단일 Class로 캡슐화하고 Vuex store에서만 호출하도록 단일화해 데이터 보존 · 일관성 확보',
          ],
          skill: ['IndexedDB', 'Vue', 'Vuex'],
        },
        {
          title: '서버 드리븐 UI(SDUI) 기반 팝업 시스템 제안 · 구축',
          subtitle: '중개사 전용 관리 대시보드에 노출되는 팝업 작업에 대한 비효율 개선',
          descriptions: [
            '중개사 전용 관리 대시보드에 노출되는 팝업이 매번 기획 → 디자인 → 개발 → 검수 → 배포 과정이 반복되던 문제를 직접 제안해 채택 · 적용',
            '클라이언트에서는 서버가 내려준 JSON을 컴포넌트 타입별로 동적 렌더링하도록 구현, 노출 판정은 서버에 위임하는 방식으로 변경',
            '기획파트가 어드민에 입력만으로 팝업을 제어할 수 있게 되어, 긴급 공지 · 마케팅 대응 등을 **배포 단위(1~2일)에서 분 단위로 단축**',
          ],
          skill: ['Next.js', 'Tanstack Query', 'TypeScript'],
        },
        {
          title: '디자인 토큰 자동화 파이프라인 및 디자인 시스템 구축',
          subtitle:
            'React/Vue/PHP 6개 프로젝트의 스타일을 Figma 토큰 변경만으로 자동 반영되도록 디자인 토큰 자동화 구축',
          descriptions: [
            '6개 프로젝트가 스타일 값을 각자 하드코딩 · 개별 관리해 토큰 변경 시 수동 동기화와 불일치가 반복되던 문제를 해결하고자, Figma 토큰을 @tokens-studio/sd-transforms + Style Dictionary로 변환해 환경별 출력물(TailwindCSS, SCSS)을 자동 생성하는 파이프라인 구축',
            'Figma 토큰 변경만으로 6개 프로젝트 스타일이 일괄 반영되어, 수동 동기화 작업과 스타일 불일치 제거',
            '디자인 시스템 UI 컴포넌트 일부를 분담 구현하고 Storybook으로 문서화, 프론트 4명 · 디자이너 3명 협업 환경에서 재사용성 · 일관성 확보에 기여',
          ],
          skill: ['GitHub Actions', 'TailwindCSS', 'SCSS', 'Style Dictionary', 'Storybook'],
        },
        // {
        //   title: 'AI 사주·풍수 매물 분석 (PoC)',
        //   subtitle:
        //     '생년월일 · 출생시간 · 성별로 사주 오행을 분석해 이용자에게 잘 맞는 매물 · 동네를 추천하는 서비스',
        //   descriptions: [
        //     'AI 응답 타이핑 UI를 useRef DOM 직접 조작으로 구현해 리렌더 회피',
        //     '검색 API 응답을 chunk로 받아 첫 50건 즉시 노출, 나머지는 IntersectionObserver 점진 렌더링 처리, 검색어 변경 시 AbortController로 이전 요청 취소 처리',
        //     '낮은 CTR(0.06%)에 대한 원인을 파악하기 위해 진입 배너 노출 위치에 대한 A/B 테스트를 진행하고 사용자 액션 분석을 위해 "노출 부족 vs 인지 후 미클릭"으로 이벤트 추가 제안 및 측정',
        //   ],
        //   skill: ['Next.js', 'Tanstack Query', 'Zustand', 'TypeScript'],
        // },
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
