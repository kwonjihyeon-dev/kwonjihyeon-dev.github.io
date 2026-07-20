import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IProject {
  export interface Payload extends ICommon.Payload {
    /** ### 프로젝트 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 프로젝트 제목 */
    title: string;

    /**
     * ### 프로젝트 저장소/링크 (GitHub 등)
     *
     * @description 값이 존재하면 `title` 옆에 GitHub 아이콘 링크가 표시된다.
     */
    link?: string;

    /** ### 어디서 수행했는지 (or subtitle) */
    where: string;

    /**
     * ### 프로젝트 시작일
     *
     * @format YYYY-MM
     * @example "2018-02"
     */
    startedAt: string;

    /**
     * ### 프로젝트 종료일
     *
     * @format YYYY-MM
     * @example "2021-02"
     * @description `undefined` 일 경우 나타나지 않는다.
     */
    endedAt?: string;

    /**
     * ### 프로젝트 설명
     */
    descriptions: IRow.Description[];
  }
}
