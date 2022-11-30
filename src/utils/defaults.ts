import Preset, { UserPresets } from '../models/preset';
import Profile from '../models/profile';

export const defaultPreset: Preset = {
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

class Profile {
  name = ''
  quests = {
    maba: false,
    lunarDiplomacy: false,
    plaguesEnd: false,
    fairyTale1: false,
    treeGnomeVillage: false,
    loveStory: false,
    theLightWithin: false,
    pog: false,
    tgbr: false
  }
  levels = {
    magicLvl: 1,
    farmingLvl: 1
  }
  userHasQuestCape = false
  items = {},
  presets = {
    preset1: {
      presets: defaultPreset
    },
    preset2: {
      presets: defaultPreset
    },
    preset3: {
      presets: defaultPreset
    }
  }

  constructor() {
    
  }
}

export const profileData: Profile = {
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
  presets: {
    preset1: {
      presets: defaultPreset
    },
    preset2: {
      presets: defaultPreset
    },
    preset3: {
      presets: defaultPreset
    }
  }
};

const resetProfile = () => {
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

const defaultProfile: Profile = {
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
  presets: {
    preset1: {
      presets: defaultPreset
    },
    preset2: {
      presets: defaultPreset
    },
    preset3: {
      presets: defaultPreset
    }
  },
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

export default defaultProfile;
