import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Quests } from '../../../models/profile';
import { defaultProfile } from '../../../utils/defaults';

const NewProfilePage1: React.FC = () => {
  const profileRef = useRef(defaultProfile);

  const navigate = useNavigate();

  const testHandler = () => {
    localStorage.setItem(
      'efficient_farm_runs',
      JSON.stringify({
        previousUser: true
      })
    );

    localStorage.setItem(
      'efr_presets',
      JSON.stringify({
        preset1: {
          name: 'Tree Run'
        },
        preset2: {
          name: 'Herb Run'
        },
        preset3: {
          name: 'Full Run'
        }
      })
    );
    navigate('/');
  };

  const questsPresetUpdateHandler = (
    toggleActive: boolean,
    setting: string
  ): void => {
    const element = document.getElementById(setting)!
      .parentElement as HTMLDivElement;

    if (element.classList[1]) {
      element.classList.remove('cb-selected');
    } else {
      element.classList.add('cb-selected');
    }

    Object.keys(profileRef.current.quests).forEach((quest) => {
      if (setting === quest) {
        profileRef.current.quests[quest as keyof Quests] = toggleActive;

        console.log(profileRef.current.quests);
      }
    });
    console.log(toggleActive, setting);
  };

  const navHandler = (path: string): void => {
    localStorage.setItem('efr_profile_1', JSON.stringify(profileRef.current));
    navigate(path);
  };

  return (
    <main className='outer-wrapper'>
      <h3 className='preset-header'>Quests Completed</h3>
      <div id='quests-completed-wrapper' className='selections-wrapper'>
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
      <button
        className='nis-button'
        style={{ margin: '20px 0 0 0' }}
        onClick={() => navHandler('/new-user/profile/2')}
      >
        Next
      </button>
      <button
        className='nis-button'
        style={{ margin: '60px 0 0 0' }}
        onClick={testHandler}
      >
        Generate User Data
      </button>
    </main>
  );
};

export default NewProfilePage1;
