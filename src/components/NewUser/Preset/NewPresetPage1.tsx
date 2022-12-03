import { BaseSyntheticEvent, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Preset } from '../../../models/preset';
import Profile from '../../../models/profile';

const NewPresetPage1: React.FC = () => {
  const prevEleRef = useRef<string>('');
  const profileRef = useRef<Profile>();

  const navigate = useNavigate();

  const selectHandler = (clickTarget: HTMLInputElement) => {
    if (prevEleRef.current) {
      const prevSelection = document.getElementById(
        prevEleRef.current
      )! as HTMLInputElement;
      prevSelection.parentElement!.classList.remove('cb-selected');
    }
    profileRef.current!.presets.preset1.type = clickTarget.id as Preset;
    localStorage.setItem(
      'efficient_farm_runs',
      JSON.stringify(profileRef.current)
    );
    prevEleRef.current = clickTarget.id;
    clickTarget.parentElement!.classList.add('cb-selected');
  };

  const navHandler = (path: string, selection: Preset) => {
    navigate(path + '/' + selection);
  };

  useEffect(() => {
    const profile = localStorage.getItem('efficient_farm_runs');
    if (profile) {
      profileRef.current = JSON.parse(profile);
      if (profileRef.current) {
        const prevSelection = profileRef.current.presets.preset1.type;
        if (prevSelection) {
          const selectedEle = document.getElementById(prevSelection)!;
          selectedEle.parentElement!.classList.add('cb-selected');
          prevEleRef.current = selectedEle.id;
        }
      }
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      <h2 className='preset-header'>Select Run Type</h2>
      <div id='run-type-wrapper'>
        <div
          id='checkbox-quests-wrapper'
          className='checkbox-label-wrapper test'
        >
          <input
            id='herb'
            type='radio'
            name='type-answer'
            onClick={(e: BaseSyntheticEvent) => selectHandler(e.target)}
            style={{ display: 'none' }}
          ></input>
          <label className='checkbox-labels' htmlFor='herb'>
            Herb
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='tree'
            type='radio'
            name='type-answer'
            onClick={(e: BaseSyntheticEvent) => selectHandler(e.target)}
            style={{ display: 'none' }}
          ></input>
          <label className='checkbox-labels' htmlFor='tree'>
            Tree
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='fruit-tree'
            type='radio'
            name='type-answer'
            onClick={(e: BaseSyntheticEvent) => selectHandler(e.target)}
            style={{ display: 'none' }}
          ></input>
          <label className='checkbox-labels' htmlFor='fruit-tree'>
            Fruit Tree
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='bush'
            type='radio'
            name='type-answer'
            onClick={(e: BaseSyntheticEvent) => selectHandler(e.target)}
            style={{ display: 'none' }}
          ></input>
          <label className='checkbox-labels' htmlFor='bush'>
            Bush
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='cactus'
            type='radio'
            name='type-answer'
            onClick={(e: BaseSyntheticEvent) => selectHandler(e.target)}
            style={{ display: 'none' }}
          ></input>
          <label className='checkbox-labels' htmlFor='cactus'>
            Cactus
          </label>
        </div>
        <div id='checkbox-quests-wrapper' className='checkbox-label-wrapper'>
          <input
            id='mushroom'
            type='radio'
            name='type-answer'
            onClick={(e: BaseSyntheticEvent) => selectHandler(e.target)}
            style={{ display: 'none' }}
          ></input>
          <label className='checkbox-labels' htmlFor='mushroom'>
            Mushroom
          </label>
        </div>
      </div>
      <div className='dbl-btn-wrapper'>
        <button
          onClick={() => navHandler('/new-user/profile/2', '')}
          className='nis-button nis-button-alt'
        >
          Back
        </button>
        <button
          onClick={() =>
            navHandler(
              '/new-user/presets/2',
              profileRef.current!.presets.preset1.type
            )
          }
          className='nis-button'
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default NewPresetPage1;
