import {School} from "../enums/School";

export type GetSpellsRequest = {
  levels: number[];
  school: School[] | string[];
}
