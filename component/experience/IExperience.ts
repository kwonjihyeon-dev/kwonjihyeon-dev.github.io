import { ICommon } from '../common/ICommon';

export declare namespace IExperience {
  export interface Payload extends ICommon.Payload {
    /** ### Experience 데이터 목록 */
    list: Item[];
  }

  export interface Item {
    /** ### (직장)회사 명 */
    company: string;

    /**
     * ### (직장)서비스/프로젝트 명
     *
     * @description 값이 존재하면 프로젝트(포지션) 목록 위에 서비스명으로 표시된다.
     */
    project?: string;

    /**
     * ### (직장)재직 시작 일
     *
     * @format YYYY-MM
     * @example "2018-02"
     */
    startedAt: string;

    /**
     * ### (직장)재직 종료 일
     *
     * @format YYYY-MM
     * @example "2021-02"
     * @description 해당 값이 undefined 일 경우 **"재직 중"** 뱃지가 추가로 나타난다.
     */
    endedAt?: string;

    /**
     * ### 인쇄 보정용 클래스
     *
     * @description 값이 존재하면 해당 경력 행 루트에 클래스로 부여된다.
     * `styles/print.css`의 `@media print` 규칙과 조합해 인쇄 시 위치를 보정할 때 사용한다.
     */
    printClassName?: string;

    /** ### (직장)수행한 직위/직책 포지션 정보 */
    positions: Position[];
  }

  export interface Position {
    /**
     * ### (직장)프로젝트 명
     *
     * @description 값이 없으면 제목 없이 설명 목록만 표시된다.
     */
    title?: string;

    /**
     * ### (직장)프로젝트 부제/설명
     *
     * @description `title` 아래에 타이틀과 비슷하지만 조금 더 작은 크기로 표시된다.
     */
    subtitle?: string;

    /**
     * ### (직장)경험 설명
     *
     * @description 하나의 `string` 요소가 `<ul>` 태그 안의 `<li>` 가 된다.
     * `**볼드**` 형태로 감싼 구간은 굵게 표시된다.
     * @todo `IRow.Description[]` 으로 변경
     */

    descriptions: string[];
    /**
     * ### (직장)경험의 키워드
     *
     * @description undefined 가 아닐 경우 해당 경험 하단에 **Skill Keywords** 목록이 추가된다.
     */

    skill?: string[];
  }
}
