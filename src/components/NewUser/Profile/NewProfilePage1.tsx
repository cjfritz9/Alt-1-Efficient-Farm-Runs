import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import Profile, { Quests } from '../../../models/profile';

const NewProfilePage1: React.FC = () => {
  const profileRef = useRef<Profile>(
    JSON.parse(localStorage.getItem('efficient_farm_runs')!)
  );

  const navigate = useNavigate();

  const questsPresetUpdateHandler = (
    toggleActive: boolean,
    setting: string
  ): void => {
    const element = document.getElementById(setting)!
      .parentElement as HTMLDivElement;

    if (element.classList.contains('cb-selected')) {
      element.classList.remove('cb-selected');
    } else {
      element.classList.add('cb-selected');
    }
    profileRef.current.quests[setting as keyof Quests] = toggleActive;
  };

  const navHandler = (path: string): void => {
    localStorage.setItem(
      'efficient_farm_runs',
      JSON.stringify(profileRef.current)
    );
    navigate(path);
  };

  return (
    <main className='outer-wrapper'>
      <h3 className='preset-header'>Quests Completed</h3>
      <div id='quests-completed-wrapper' className='selections-wrapper'>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='treeGnomeVillage'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
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
