import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Preset } from '../../../../models/preset';
import Profile from '../../../../models/profile';

const HerbPatches: React.FC = () => {
  const [render, setRender] = useState(false);
  const profileRef = useRef<Profile>();

  const navigate = useNavigate();

  const selectionUpdateHandler = (setting: string): void => {
    const preset = profileRef.current?.presets.preset1;

    const element = document.getElementById(setting)!
      .parentElement as HTMLDivElement;

    if (preset && preset.patches) {
      if (element.classList.contains('cb-selected')) {
        element.classList.remove('cb-selected');
        preset.patches[setting] = false;
      } else {
        console.log(setting);
        element.classList.add('cb-selected');
        preset.patches[setting] = true;
      }
    }
  };

  const navHandler = (path: string) => {
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
    const profile = localStorage.getItem('efficient_farm_runs');
    if (profile) {
      profileRef.current = JSON.parse(profile);
      if (profileRef.current && profileRef.current.presets) {
        const presets = profileRef.current.presets;
        if (presets.preset1.patches) {
          const prevSelections = getPrevSelections(presets.preset1.patches);
          prevSelections.forEach((patch) => {
            selectionUpdateHandler(patch);
          });
          setRender(true);
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
        <button
          onClick={() => navHandler('/new-user/presets/3')}
          className='nis-button'
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default HerbPatches;
