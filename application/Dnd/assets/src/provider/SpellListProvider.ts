import axios from 'axios';

export default class SpellListProvider{
  readonly host: string;

  constructor(host: string) {
    this.host = host;
  }

  async fetchSpells(data: GetSpellsRequest): Promise<GetSpellsResponse> {
    console.log(data)
    return axios.post(`${this.host}/order/proto`, data)
      .then(function (response) {
        return response.data as OrderProtoResponse;
      })
      .catch(function (error) {
        throw new Error(`Could not fetch order data: ${error.message}`);
      });
  }
}
