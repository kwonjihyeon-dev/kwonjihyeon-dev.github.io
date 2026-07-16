import { ICommon } from '../common/ICommon';

export declare namespace ISkill {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78029577-cf1b0100-739b-11ea-9c2c-a41acbe9125c.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/skill.ts
   */
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
