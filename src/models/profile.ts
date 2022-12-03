import UserPresets from './preset';

export interface Quests {
  treeGnomeVillage: boolean;
  maba: boolean;
  plaguesEnd: boolean;
  lunarDiplomacy: boolean;
  fairyTale1: boolean;
  loveStory: boolean;
  theLightWithin: boolean;
  pog: boolean;
  tgbr: boolean;
}

//maba = my arms big adventure
//pog = prisoner of glouphrie
//tbbr = the great brain robbery

export interface Items {}

export default interface Profile {
  name: string;
  levels: {
    magicLvl: number;
    farmingLvl: number;
  };
  quests: Quests;
  items: Items;
  presets: UserPresets;
  reset?: any;
  completed: boolean;
}
