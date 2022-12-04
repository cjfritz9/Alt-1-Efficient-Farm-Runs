import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserPresets, { Preset } from '../models/preset';
import Profile from '../models/profile';

const Home: React.FC = () => {
  const [presetData, setPresetData] = useState<UserPresets>();
  const presetCountRef = useRef<number>(0);

  const navigate = useNavigate();

  const navigateHandler = (url: string): void => {
    navigate(url);
  };

  const setCasing = (patchType: string) => {
    console.log(patchType);
    if (patchType === 'fruit-tree') {
      return 'Fruit Tree';
    } else if (patchType.length) {
      return patchType.charAt(0).toUpperCase() + patchType.slice(1);
    } else {
      return;
    }
  };

  const devHelper = () => {
    const data: Profile = JSON.parse(
      localStorage.getItem('efficient_farm_runs')!
    );
    data.presets.preset2.type = 'bush';
    data.presets.preset3.type = 'bush';
    data.presets.preset4.type = 'bush';
    localStorage.setItem('efficient_farm_runs', JSON.stringify(data));
  };

  useEffect(() => {
    const rawPresetData = localStorage.getItem('efficient_farm_runs');
    if (rawPresetData) {
      const parsedUserData: Profile = JSON.parse(rawPresetData);
      setPresetData(parsedUserData.presets);
      presetCountRef.current = Object.values(parsedUserData.presets).filter(
        (preset) => preset.type.length
      ).length;
      console.log(presetCountRef.current);
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      {presetData ? (
        <>
          <h2 className='preset-header'>load a preset</h2>
          {Object.values(presetData).map((preset, idx) => {
            return preset.type.length ? (
              <button key={idx} id='preset-selection-btn' className='nis-button'>{`${setCasing(
                preset.type
              )} Run`}</button>
            ) : null;
          })}
          {presetCountRef.current < 5 ? (
            <button id='presets-add-btn' className='nis-button nis-button-alt'>Add Another</button>
          ) : null}
          <h2 id='options-header' className='preset-header'>options</h2>
          <div id='presets-btn-wrapper' className='dbl-btn-wrapper'>
            <button id='preset-selection-btn' className='nis-button nis-button-alt'>Edit</button>
            <button id='preset-selection-btn' className='nis-button nis-button-alt'>Delete</button>
          </div>
        </>
      ) : (
        <>
          <h2 className='preset-header'>No Profile Found</h2>
          <button
            className='nis-button'
            onClick={() => navigateHandler('/new-preset')}
          >
            Create New Profile
          </button>
        </>
      )}
      <button onClick={devHelper} className='nis-button'>
        Dev Helper
      </button>
    </main>
  );
};

export default Home;
