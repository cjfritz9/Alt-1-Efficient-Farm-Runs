import { Preset } from '../models/preset';
import { Profile } from '../models/profile';

export const defaultPresets: Preset = {
  name: '',
  patchTypes: {
    allotment: false,
    flower: false,
    herb: false,
    hops: false,
    bush: false,
    trees: false,
    fruitTrees: false,
    cactus: false,
    mushroom: false
  }
};

export const defaultProfile: Profile = {
  name: '',
  quests: {
    maba: false,
    lunarDiplomacy: false,
    plaguesEnd: false,
    fairyTale1: false,
    treeGnomeVillage: false,
    loveStory: false,
    theLightWithin: false,
    pog: false,
    tgbr: false
  },
  items: {}
};

export const questsArray = [
  "My Arm's Big Adventure",
  "Plague's End",
  'Lunar Diplomacy',
  'A Fairy Tale I - Growing Pains',
  'Tree Gnome Village',
  'Love Story',
  'The Light Within',
  'The Prisoner of Glouphrie',
  'The Great Brain Robbery'
];
