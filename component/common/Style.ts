import { CSSProperties } from 'react';

/** Style 추론을 위하여.. */
type TStyleKey =
  | 'blue'
  | 'gray'
  | 'global'
  | 'sign'
  | 'sectionHeader'
  | 'sectionHeaderWide'
  | 'badgeOutlineGreen'
  | 'badgeOutlineBlue'
  | 'periodMain'
  | 'companyDot'
  | 'positionTitle'
  | 'positionSubtitle'
  | 'profileImg'
  | 'footerCover'
  | 'footer'
  | 'skillKeywordBadge';

export const Style: Record<TStyleKey, CSSProperties> = {
  blue: {
    color: '#3c78d8',
  },

  gray: {
    color: 'gray',
  },

  global: {
    fontFamily: 'Pretendard, sans-serif',
    fontWeight: 300,
    wordWrap: 'break-word',
    wordBreak: 'keep-all',
    lineHeight: 1.8,
  },

  sign: {
    fontFamily: "'Parisienne', cursive",
    fontSize: '1.5em',
  },

  sectionHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#3c78d8',
    fontSize: '1.25rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    paddingBottom: '0.4rem',
    borderBottom: '1px solid #A6A6AB',
  },

  sectionHeaderWide: {
    color: '#3c78d8',
    fontSize: '1.5rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    paddingBottom: '0.5rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid #A6A6AB',
  },

  badgeOutlineGreen: {
    backgroundColor: 'transparent',
    color: '#2f9e44',
    border: '1px solid #2f9e44',
    fontWeight: 400,
    padding: '0.35em 0.7em',
  },

  badgeOutlineBlue: {
    backgroundColor: 'transparent',
    color: '#3c78d8',
    border: '1px solid #3c78d8',
    fontWeight: 400,
    padding: '0.35em 0.7em',
  },

  periodMain: {
    color: '#212529',
    fontWeight: 700,
  },

  companyDot: {
    color: '#2f9e44',
    fontSize: '0.7em',
    marginRight: '0.4rem',
    verticalAlign: 'middle',
  },

  // 프로젝트명: description(1rem)과 project(1.5rem) 사이 크기, 이탤릭 없음
  positionTitle: {
    fontSize: '1.25rem',
    fontWeight: 500,
  },

  // 프로젝트 부제: 타이틀 스타일 유지하되 조금 더 작게
  positionSubtitle: {
    color: 'gray',
    fontSize: '0.95rem',
  },

  profileImg: {
    maxHeight: '320px',
  },

  footerCover: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: '50px',
    height: '80px',
  },

  footer: {
    // paddingTop: '10px',
  },

  skillKeywordBadge: {
    fontWeight: 400,
  },
};
