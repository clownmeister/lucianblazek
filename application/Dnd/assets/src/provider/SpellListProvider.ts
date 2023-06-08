import axios from 'axios';
import {GetSpellsRequest} from '../type/GetSpellsRequest';
import {GetSpellsResponse} from "../type/GetSpellsResponse";

export default class SpellListProvider{
  readonly host: string;

  constructor(host: string) {
    this.host = host;
  }

  async fetchSpells(data: GetSpellsRequest): Promise<GetSpellsResponse> {
    console.log(data)
    return axios.post(`${this.host}/spells`, data)
      .then(function (response) {
        return response.data as GetSpellsResponse;
      })
      .catch(function (error) {
        throw new Error(`Could not fetch: ${error.message}`);
      });
  }
}
