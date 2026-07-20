import { ICommon } from '../common/ICommon';
import { IRow } from '../common/IRow';

export declare namespace IArticle {
  interface Payload extends ICommon.Payload {
    /** 아티클 리스트 */
    list: IRow.Description[];
  }
}
