import { Preset } from '../models/preset';
import { Profile } from '../models/profile';
// import * as _ from 'lodash'

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

export const profileData: Profile = {
  success: false,
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
  levels: {
    magicLvl: 1,
    farmingLvl: 1
  },
  userHasQuestCape: false,
  items: {}
};

const resetProfile = () => {
  profileData.success = false;
  profileData.name = '';
  profileData.quests.maba = false;
  profileData.quests.lunarDiplomacy = false;
  profileData.quests.plaguesEnd = false;
  profileData.quests.fairyTale1 = false;
  profileData.quests.treeGnomeVillage = false;
  profileData.quests.loveStory = false;
  profileData.quests.theLightWithin = false;
  profileData.quests.pog = false;
  profileData.quests.tgbr = false;
  profileData.items = {};
};

export const defaultProfile: Profile = {
  success: false,
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
  levels: {
    magicLvl: 1,
    farmingLvl: 1
  },
  userHasQuestCape: false,
  items: {},
  reset: resetProfile
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
