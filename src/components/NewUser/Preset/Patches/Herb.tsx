import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile, { Quests } from '../../../../models/profile';

const HerbPatches: React.FC = () => {
  const [render, setRender] = useState(false);
  const profileRef = useRef<Profile>();

  const navigate = useNavigate();

  const selectionUpdateHandler = (
    setting: string,
    quests: string[] = []
  ): void => {
    const preset = profileRef.current?.presets.preset1;

    if (preset && setting && preset.patches) {
      const element = document.getElementById(setting)!
        .parentElement as HTMLDivElement;
      if (element.classList.contains('cb-selected')) {
        element.classList.remove('cb-selected');
        preset.patches[setting] = false;
      } else {
        element.classList.add('cb-selected');
        preset.patches[setting] = true;
      }
    }
    if (preset && quests.length) {
      if (quests.includes('maba')) {
        document
          .getElementById('trollStronghold')!
          .parentElement!.classList.add('cb-restricted');
      }
      if (quests.includes('plaguesEnd')) {
        document
          .getElementById('prifddinas')!
          .parentElement!.classList.add('cb-restricted');
      }
    }
  };

  const navHandler = (path: string) => {
    if (profileRef.current) {
      profileRef.current.completed = true;
    }
    localStorage.setItem(
      'efficient_farm_runs',
      JSON.stringify(profileRef.current)
    );
    navigate(path);
  };

  const getPrevSelections = (prevData: object) => {
    return Object.keys(prevData).filter(
      (quest) => prevData[quest as keyof object] === true
    );
  };

  useEffect(() => {
    const profileData = localStorage.getItem('efficient_farm_runs');
    if (profileData) {
      profileRef.current = JSON.parse(profileData);
      const profile = profileRef.current;
      if (profile && profile.presets) {
        const presets = profile.presets;
        if (presets.preset1.patches) {
          const prevSelections = getPrevSelections(presets.preset1.patches);
          prevSelections.forEach((patch) => {
            selectionUpdateHandler(patch);
          });
        } else {
          presets.preset1.patches = {
            southFalador: false,
            northCatherby: false,
            northArdy: false,
            kharid: false,
            wilderness: false,
            canifis: false,
            trollStronghold: false,
            prifddinas: false
          };
        }
        const incompleteQuests = Object.keys(profile.quests).filter(
          (quest) => profile.quests[quest as keyof Quests] === false
        );
        selectionUpdateHandler('', incompleteQuests);
        setRender(true);
      }
    }
  }, [render]);

  return (
    <main className='outer-wrapper'>
      <h2 className='preset-header'>Patch Selection</h2>
      <div id='herb-patch-selections'>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='southFalador'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: BaseSyntheticEvent) =>
              selectionUpdateHandler(e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='southFalador'>
            South of Falador
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='northCatherby'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: BaseSyntheticEvent) =>
              selectionUpdateHandler(e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='northCatherby'>
            North of Catherby
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='northArdy'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: BaseSyntheticEvent) =>
              selectionUpdateHandler(e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='northArdy'>
            North of Ardougne
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='kharid'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: BaseSyntheticEvent) =>
              selectionUpdateHandler(e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='kharid'>
            Garden of Kharid
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='wilderness'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: BaseSyntheticEvent) =>
              selectionUpdateHandler(e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='wilderness'>
            Wilderness
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='canifis'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: BaseSyntheticEvent) =>
              selectionUpdateHandler(e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='canifis'>
            East of Canifis
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='trollStronghold'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: BaseSyntheticEvent) =>
              selectionUpdateHandler(e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='trollStronghold'>
            Troll Stronghold
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='prifddinas'
            type='checkbox'
            style={{ display: 'none' }}
            onClick={(e: BaseSyntheticEvent) =>
              selectionUpdateHandler(e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='prifddinas'>
            Prifddinas
          </label>
        </div>
      </div>
      <div className='dbl-btn-wrapper'>
        <button
          onClick={() => navHandler('/new-user/presets/1')}
          className='nis-button nis-button-alt'
        >
          Back
        </button>
        <button onClick={() => navHandler('/home')} className='nis-button'>
          Next
        </button>
      </div>
    </main>
  );
};

export default HerbPatches;
