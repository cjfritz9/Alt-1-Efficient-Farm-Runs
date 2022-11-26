export interface Quests {
  maba: boolean;
  plaguesEnd: boolean;
  lunarDiplomacy: boolean;
  fairyTale1: boolean;
  treeGnomeVillage: boolean;
  loveStory: boolean;
  theLightWithin: boolean;
  pog: boolean;
  tgbr: boolean;
}

//maba = my arms big adventure
//pog = prisoner of glouphrie
//tbbr = the great brain robbery

export interface Items {}

export interface Profile {
  name: string;
  quests: Quests;
  items: Items;
}
