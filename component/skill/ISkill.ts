import { ICommon } from '../common/ICommon';

export declare namespace ISkill {
  export interface Payload extends ICommon.Payload {
    /**
     * ### 보유 기술 목록
     */
    skills: Skill[];
  }

  export interface Skill {
    /** ### 대분류 */
    category: string;

    /** ### 해당 분류 내 항목들 */
    items: string[];
  }
}
