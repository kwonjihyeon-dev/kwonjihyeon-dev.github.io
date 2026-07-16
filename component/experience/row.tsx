import { Badge, Col, Row } from 'reactstrap';

import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import Util from '../common/Util';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT.YYYY_DOT_LL;
  const startedAtDate = DateTime.fromFormat(item.startedAt, Util.LUXON_DATE_FORMAT.YYYY_LL);
  const isCurrentlyEmployed = !item.endedAt;
  const endedAtDate = item.endedAt
    ? DateTime.fromFormat(item.endedAt, Util.LUXON_DATE_FORMAT.YYYY_LL)
    : DateTime.local();

  const periodTitle = isCurrentlyEmployed
    ? `${startedAtDate.toFormat(DATE_FORMAT)} ~`
    : `${startedAtDate.toFormat(DATE_FORMAT)} ~ ${endedAtDate.toFormat(DATE_FORMAT)}`;

  return (
    <div>
      {index > 0 && <hr />}
      <Row>
        {/* 왼쪽: 회사명 + 재직 기간 */}
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={{ ...Style.periodMain, marginBottom: '0.5rem' }}>
            <span
              style={{
                ...Style.companyDot,
                color: isCurrentlyEmployed ? '#2f9e44' : '#A6A6AB',
              }}
            >
              ●
            </span>
            {item.company}
          </h4>
          <div className="mb-2">
            {isCurrentlyEmployed && (
              <Badge pill style={Style.badgeOutlineGreen} className="ml-1">
                재직 중
              </Badge>
            )}
            <Badge pill style={Style.badgeOutlineBlue} className="ml-1">
              {Util.getFormattingDuration(startedAtDate, endedAtDate)}
            </Badge>
          </div>
          <div style={Style.gray}>{periodTitle}</div>
        </Col>

        {/* 오른쪽: 서비스명 + 프로젝트(포지션) 목록 */}
        <Col sm={12} md={9}>
          {item.project && (
            <h4 style={{ ...Style.periodMain, marginBottom: '1rem' }}>{item.project}</h4>
          )}
          {item.positions.map((position, posIndex) => (
            <div key={posIndex.toString()} className={posIndex > 0 ? 'mt-4' : ''}>
              <div style={Style.positionTitle}>{position.title}</div>
              {position.subtitle && <div style={Style.positionSubtitle}>{position.subtitle}</div>}
              <ul className="pt-2">
                {position.descriptions.map((description, descIndex) => (
                  <li key={descIndex.toString()}>{renderDescription(description)}</li>
                ))}
                {createSkillKeywords(position.skill)}
              </ul>
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
}

function renderDescription(text: string) {
  return text.split(/(\*\*[\s\S]+?\*\*)/g).map((part, index) => {
    if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index.toString()}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function createSkillKeywords(skill?: string[]) {
  if (!skill) {
    return null;
  }
  return (
    <li>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
        <strong>Skill</strong>
        {skill.map((keyword, index) => (
          <Badge pill style={Style.badgeOutlineBlue} key={index.toString()}>
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}
