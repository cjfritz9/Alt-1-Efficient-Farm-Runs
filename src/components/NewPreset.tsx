import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { PatchTypes } from '../models/preset';
import { defaultPresets } from '../utils/defaults';

const NewPreset: React.FC = () => {
  const presetRef = useRef(defaultPresets);

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

  const patchPresetUpdateHandler = (
    toggleActive: boolean,
    setting: string
  ): void => {
    Object.keys(presetRef.current.patchTypes).forEach((type) => {
      if (setting === type) {
        presetRef.current.patchTypes[type as keyof PatchTypes] = toggleActive;

        console.log(presetRef.current.patchTypes);
      }
    });
  };

  const questsPresetUpdateHandler = (
    toggleActive: boolean,
    setting: string
  ): void => {
    console.log(toggleActive, setting);
    
  }

  return (
    <main className='outer-wrapper'>
      <h3 className='preset-header'>Patch Types</h3>
      <div id='patch-types-wrapper'>
        <div className='checkbox-label-wrapper'>
          <input
            id='allotment'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='allotment'>
            Allotment
          </label>
        </div>
        <div className='checkbox-label-wrapper'>
          <input
            id='flower'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='flower'>
            Flower
          </label>
        </div>
        <div className='checkbox-label-wrapper'>
          <input
            id='herb'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='herb'>
            Herb
          </label>
        </div>
        <div className='checkbox-label-wrapper'>
          <input
            id='hops'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='hops'>
            Hops
          </label>
        </div>
        <div className='checkbox-label-wrapper'>
          <input
            id='bush'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='bush'>
            Bush
          </label>
        </div>
        <div className='checkbox-label-wrapper'>
          <input
            id='trees'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='trees'>
            Trees
          </label>
        </div>
        <div className='checkbox-label-wrapper'>
          <input
            id='fruitTrees'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='fruitTrees'>
            Fruit Trees
          </label>
        </div>
        <div className='checkbox-label-wrapper'>
          <input
            id='cactus'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='cactus'>
            Cactus
          </label>
        </div>
        <div className='checkbox-label-wrapper'>
          <input
            id='mushroom'
            type='checkbox'
            onClick={(e: any) =>
              patchPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='mushroom'>
            Mushroom
          </label>
        </div>
      </div>
      <h3 className='preset-header'>Quests Completed</h3>
      <div id='quests-completed-wrapper'>
      <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='maba'
            type='checkbox'
            onClick={(e: any) =>
              questsPresetUpdateHandler(e.target.checked, e.target.id)
            }
          ></input>
          <label className='checkbox-labels' htmlFor='maba'>
            My Arm's Big Adventure
          </label>
        </div>
      </div>
      <button className='nis-button' onClick={testHandler}>
        Generate User Data
      </button>
    </main>
  );
};

export default NewPreset;
