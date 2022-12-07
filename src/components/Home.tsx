import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserPresets from '../models/preset';
import Profile from '../models/profile';

const Home: React.FC = () => {
  const [presetData, setPresetData] = useState<UserPresets>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const presetCountRef = useRef<number>(0);
  // console.log('ED', editMode);
  // console.log('DEL', deleteMode);

  const navigate = useNavigate();

  const navigateHandler = (url: string): void => {
    navigate(url);
  };

  const setCasing = (patchType: string) => {
    // console.log(patchType);
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
    data.presets.preset2.type = 'tree';
    data.presets.preset3.type = '';
    data.presets.preset4.type = '';
    data.presets.preset5.type = '';
    localStorage.setItem('efficient_farm_runs', JSON.stringify(data));
    window.location.reload();
  };

  const modeHandler = (option: string) => {
    if (option === 'edit') {
      if (deleteMode) {
        setDeleteMode(false);
      }
      const editButton = document.getElementById('preset-edit-btn')!;
      // editButton.classList.remove('');
      if (editButton.classList.contains('button-selected')) {
        editButton.classList.remove('button-selected');
      } else {
        editButton.classList.add('button-selected');
      }
      setEditMode((prevEditMode) => !prevEditMode);
    } else {
      if (editMode) {
        setEditMode(false);
      }
      const delButton = document.getElementById('preset-del-btn')!;
      // delButton.classList.remove('');
      if (delButton.classList.contains('button-selected')) {
        delButton.classList.remove('button-selected');
      } else {
        delButton.classList.add('button-selected');
      }
      setDeleteMode((prevDeleteMode) => !prevDeleteMode);
    }
  };

  useEffect(() => {
    const rawPresetData = localStorage.getItem('efficient_farm_runs');
    if (rawPresetData) {
      const parsedUserData: Profile = JSON.parse(rawPresetData);
      setPresetData(parsedUserData.presets);
      presetCountRef.current = Object.values(parsedUserData.presets).filter(
        (preset) => preset.type.length
      ).length;
      // console.log(presetCountRef.current);
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      {presetData ? (
        <>
          {editMode ? (
            <h2 className='preset-header'>edit which preset?</h2>
          ) : deleteMode ? (
            <h2 className='preset-header'>delete which preset?</h2>
          ) : (
            <h2 className='preset-header'>Presets</h2>
          )}
          {Object.values(presetData).map((preset, idx) => {
            return preset.type.length ? (
              <button
                key={idx}
                id='preset-selection-btn'
                className='nis-button'
              >{`${setCasing(preset.type)} Run`}</button>
            ) : null;
          })}
          {presetCountRef.current < 5 ? (
            <button id='presets-add-btn' className='nis-button nis-button-alt'>
              Add Another
            </button>
          ) : null}
          <h2 id='options-header' className='preset-header'>
            options
          </h2>
          <div id='presets-btn-wrapper' className='dbl-btn-wrapper'>
            <button
              id='preset-edit-btn'
              className='nis-button edit-btn'
              onClick={() => modeHandler('edit')}
            >
              Edit
            </button>
            <button
              id='preset-del-btn'
              className='nis-button del-btn'
              onClick={() => modeHandler('delete')}
            >
              Delete
            </button>
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
