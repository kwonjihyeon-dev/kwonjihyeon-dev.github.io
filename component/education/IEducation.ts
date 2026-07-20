import { ICommon } from '../common/ICommon';

export declare namespace IEducation {
  export interface Payload extends ICommon.Payload {
    /** ### 교육 수료 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 수료 교육 명 */
    title: string;

    /** ### 수료 교육 서브 타이틀 */
    subTitle: string;

    /**
     * ### 교육 수료 시작 시점
     *
     * @format YYYY-MM
     * @example '2010-03'
     */
    startedAt: string;

    /**
     * ### 교육 수료 종료 시점
     *
     * @format YYYY-MM
     * @example '2010-03'
     * @description 해당 값이 undefined 일 경우 아직 졸업하지 않은 것으로 판단.
     */
    endedAt?: string;
  }
}
