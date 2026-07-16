import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { EmptyRowCol } from '.';
import { Style } from './Style';

export function CommonSection({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row>
          <Col>
            <h2 style={Style.sectionHeaderWide}>{title}</h2>
          </Col>
        </Row>
        {children}
      </EmptyRowCol>
    </div>
  );
}
