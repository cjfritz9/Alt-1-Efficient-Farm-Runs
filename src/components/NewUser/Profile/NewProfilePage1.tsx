import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Profile, { Quests } from '../../../models/profile';

const NewProfilePage1: React.FC = () => {
  const [triggerLoading, setTriggerLoading] = useState(false);
  const profileRef = useRef<Profile>();

  const navigate = useNavigate();

  const questsPresetUpdateHandler = (setting: string): void => {
    let questsObj: Quests;
    if (profileRef.current && profileRef.current.quests) {
      questsObj = profileRef.current.quests;

      const element = document.getElementById(setting)!
        .parentElement as HTMLDivElement;
      const cbInput = element.firstChild as HTMLDivElement;

      if (element.classList.contains('cb-selected')) {
        element.classList.remove('cb-selected');
        profileRef.current.quests[cbInput.id as keyof Quests] = false;
      } else {
        element.classList.add('cb-selected');
        questsObj[cbInput.id as keyof Quests] = true;
      }
    }
  };

  const navHandler = (path: string): void => {
    localStorage.setItem(
      'efficient_farm_runs',
      JSON.stringify(profileRef.current)
    );
    navigate(path);
  };

  const getPrevQuests = (dataObj: Profile) => {
    return Object.keys(dataObj.quests).filter(
      (quest) => dataObj.quests[quest as keyof Quests] === true
    );
  };

  useEffect(() => {
    const fetchUserData = localStorage.getItem('efficient_farm_runs');
    if (fetchUserData) {
      profileRef.current = JSON.parse(fetchUserData);
      if (profileRef.current && profileRef.current.quests) {
        const setFormState = (prevData: Profile) => {
          const prevQuestsArr = getPrevQuests(prevData);

          prevQuestsArr.forEach((quest) => {
            questsPresetUpdateHandler(quest);
          });
        };
        setFormState(profileRef.current);
        setTriggerLoading(true);
      }
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      <h3 className='preset-header'>Quests Completed</h3>
      <div id='quests-completed-wrapper' className='selections-wrapper'>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='treeGnomeVillage'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='treeGnomeVillage'>
            Tree Gnome Village
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='maba'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='maba'>
            My Arm's Big Adventure
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='plaguesEnd'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='plaguesEnd'>
            Plague's End
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='lunarDiplomacy'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='lunarDiplomacy'>
            Lunar Diplomacy
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='fairyTale1'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='fairyTale1'>
            Fairy Tale Pt. 1
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='loveStory'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='loveStory'>
            Love Story
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='theLightWithin'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='theLightWithin'>
            The Light Within
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='pog'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='pog'>
            The Prisoner of Glouphrie
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='tgbr'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) => questsPresetUpdateHandler(e.target.id)}
          ></input>
          <label className='checkbox-labels' htmlFor='tgbr'>
            The Great Brain Robbery
          </label>
        </div>
      </div>
      <div className='dbl-btn-wrapper'>
        <button
          className='nis-button nis-button-alt'
          style={{ margin: '20px 0 0 0' }}
          onClick={() => navHandler('/')}
        >
          Back
        </button>
        <button
          className='nis-button'
          style={{ margin: '20px 0 0 0' }}
          onClick={() => navHandler('/new-user/profile/2')}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default NewProfilePage1;
