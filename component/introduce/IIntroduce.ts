import { ICommon } from '../common/ICommon';

export declare namespace IIntroduce {
  export interface Payload extends ICommon.Payload {
    /**
     * ### 자기소개 내용
     *
     * @description `string` 배열이다. 요소 하나가 하나의 `<p>` 태그가 된다.
     */
    contents: string[];
  }
}
