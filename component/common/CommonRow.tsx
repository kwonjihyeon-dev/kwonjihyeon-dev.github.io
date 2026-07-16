import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

export function CommonRows({
  index,
  payload,
}: PropsWithChildren<{ payload: IRow.Payload; index: number }>) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <Row>
            <Col md={12}>
              <h4 style={{ ...Style.gray, fontSize: '1rem' }}>{left.title}</h4>
            </Col>
            {left.subTitle ? <Col md={12}>{left.subTitle}</Col> : ''}
          </Row>
        </Col>
        <Col sm={12} md={9}>
          {right.title ? (
            <h4>
              {right.title}
              {right.link ? (
                <a
                  href={right.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2"
                  style={{ color: 'inherit', fontSize: '0.8em' }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              ) : (
                ''
              )}
            </h4>
          ) : (
            ''
          )}
          {right.subTitle ? (
            <div style={{ ...Style.gray, fontSize: '0.95rem' }}>{right.subTitle}</div>
          ) : (
            ''
          )}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  );
}
