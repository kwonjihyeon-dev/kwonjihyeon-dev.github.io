import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IOpenSource {
  export interface Payload extends ICommon.Payload {
    /** ### 오픈소스 활동 리스트 */
    list: Item[];
  }

  /**
   * @todo 기간을 넣을까?
   */
  interface Item {
    /**
     * ### 오픈소스 활동명
     */
    title: string;

    /** ### 오픈소스 활동 설명 */
    descriptions: IRow.Description[];
  }
}
