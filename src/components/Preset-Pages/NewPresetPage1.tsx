import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { PatchTypes } from '../../models/preset';
import { defaultPresets } from '../../utils/defaults';

const NewPreset1: React.FC = () => {
  const presetRef = useRef(defaultPresets);

  const navigate = useNavigate();

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

  const navigateHandler = () => {
    navigate('/new-preset/2')
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
      <button className='nis-button' onClick={navigateHandler}>Next</button>
    </main>
  )
};

export default NewPreset1;
