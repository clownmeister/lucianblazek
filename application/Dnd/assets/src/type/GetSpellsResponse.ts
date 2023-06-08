export type GetSpellsResponse = {
  count: number;
  results: Spell[];

}

export type Spell = {
  index: string;
  name: string;
  url: string;
}
