import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IPresentation {
  export interface Payload extends ICommon.Payload {
    /** ### 발표 목록 */
    list: Item[];
  }

  export interface Item {
    /** ### 발표명 */
    title: string;

    /** ### 발표 서브 타이틀 */
    subTitle: string;

    /**
     * ### 발표 시점
     *
     * @format YYYY-MM
     * @example '2010-03'
     */
    at: string;

    /** ### 발표 설명 */
    descriptions: IRow.Description[];
  }
}
