import { Quests } from './profile';

export interface LevelObject {
  magicLvl: number;
  farmingLvl: number;
}

export type LevelsArray = LevelObject[];

export interface ProfileData {
  name: string;
  questscomplete: number;
  skillvalues: any[];
}

export interface UserData {
  success: boolean;
  name: string;
  levels: LevelObject;
  userHasQuestCape: boolean;
  quests: Quests;
}

export interface Quest {
  title: string;
  status: string;
  difficulty: number;
  members: boolean;
  questPoints: number;
  userEligible: boolean;
}

export interface QuestData {
  data: {
    quests: Quest[];
  };
}

export type QuestsArray = Quest[];

export interface FetchError {
  error: string;
  loggedIn: boolean;
}
