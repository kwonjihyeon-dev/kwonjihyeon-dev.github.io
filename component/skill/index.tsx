import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { ISkill } from './ISkill';
import SkillRow from './row';
import { EmptyRowCol } from '../common';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISkill.Payload;

export const Skill = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <div className="mt-5">
      <EmptyRowCol>
        <Row>
          <Col>
            <h2 style={Style.sectionHeaderWide}>SKILL</h2>
          </Col>
        </Row>
        {payload.skills.map((skill, index) => (
          <SkillRow key={index.toString()} skill={skill} index={index} />
        ))}
      </EmptyRowCol>
    </div>
  );
}
