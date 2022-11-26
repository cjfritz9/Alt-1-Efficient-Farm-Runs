import axios from 'axios';
import * as Response from '../models/api-responses';
import { questsArray } from '../utils/defaults';

const proxyUrl = 'http://localhost:8010/proxy';

let usersQuestsCompleted = 0;
let questsInRunescape = 0;
let userHasQuestCape = false;
let questData = null;

export const getUserData = async (username: string) => {
  try {
    const profileResponse = await axios.get(
      `${proxyUrl}/runemetrics/profile/profile?user=${username}`
    );
    const questsResponse: Response.QuestData = await axios.get(
      `${proxyUrl}/runemetrics/quests?user=${username}`
    );

    console.log(questsResponse)

    const userDataObj: Response.UserData = {
      success: true,
      name: username,
      levels: {
        magicLvl: 1,
        farmingLvl: 1
      },
      userHasQuestCape,
      quests: {
        maba: false,
        plaguesEnd: false,
        lunarDiplomacy: false,
        fairyTale1: false,
        treeGnomeVillage: false,
        loveStory: false,
        theLightWithin: false,
        pog: false,
        tgbr: false
      }
    };

    if (profileResponse && profileResponse.data) {
      const profileData: Response.ProfileData | Response.FetchError =
        profileResponse.data;

      if ('name' in profileData) {
        userDataObj.name = profileData.name;

        usersQuestsCompleted = profileData.questscomplete;

        if (usersQuestsCompleted === questsInRunescape) {
          userHasQuestCape = true;
        }
        for (const skill of profileData.skillvalues) {
          if (skill.id === 6) {
            userDataObj.levels.magicLvl = skill.level;
          }
          if (skill.id === 19) {
            userDataObj.levels.farmingLvl = skill.level;
          }
        }
      }
      if ('error' in profileData) {
        return profileData.error;
      }
    }

    if (questsResponse) {
      console.log("QR", questsResponse)
      
      if (questsResponse.data.quests.length === 0) {
        return 'NO_PROFILE'
      }
      
      questData = questsResponse.data.quests;
      questsInRunescape = questData.length;

      if (usersQuestsCompleted === questsInRunescape) {
      }

      // the quests array is ordered by completion status... unfortunately.
      // slice the array to remove all quests that aren't completed
      // to make the next parts a little bit faster.
      const questsCompleted = questsResponse.data.quests.slice(
        0,
        usersQuestsCompleted
      );

      const farmingQuests = await questsCompleted.filter(
        (quest: Response.Quest) => {
          return questsArray.includes(quest.title);
        }
      );

      const questTitles = farmingQuests.map((quest: Response.Quest) => {
        return quest.title;
      });

      if (farmingQuests.length > 0) {
        if (questTitles.includes(questsArray[0])) {
          userDataObj.quests.maba = true;
        }
        if (questTitles.includes(questsArray[1])) {
          userDataObj.quests.plaguesEnd = true;
        }
        if (questTitles.includes(questsArray[2])) {
          userDataObj.quests.lunarDiplomacy = true;
        }
        if (questTitles.includes(questsArray[3])) {
          userDataObj.quests.fairyTale1 = true;
        }
        if (questTitles.includes(questsArray[4])) {
          userDataObj.quests.treeGnomeVillage = true;
        }
        if (questTitles.includes(questsArray[5])) {
          userDataObj.quests.loveStory = true;
        }
        if (questTitles.includes(questsArray[6])) {
          userDataObj.quests.theLightWithin = true;
        }
        if (questTitles.includes(questsArray[7])) {
          userDataObj.quests.pog = true;
        }
        if (questTitles.includes(questsArray[8])) {
          userDataObj.quests.tgbr = true;
        }
      }
    }
    console.log('WE DID IT?', userDataObj);

    return userDataObj;
  } catch (error) {
    console.error('ERROR', error);
  }
};
