import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../../../models/profile';

const NewProfilePage2: React.FC = () => {
  const [triggerLoading, setTriggerLoading] = useState(false);
  const [magicInput, setMagicInput] = useState('');
  const [farmingInput, setFarmingInput] = useState('');
  const [error, setError] = useState('');
  const profileRef = useRef<Profile>();

  const navigate = useNavigate();

  const navHandler = (path: string) => {
    const { value: inputMagicLvl } = document.getElementById(
      'magic-lvl-input'
    )! as HTMLInputElement;
    const { value: inputFarmingLvl } = document.getElementById(
      'farming-lvl-input'
    )! as HTMLInputElement;
    if (inputMagicLvl && inputFarmingLvl && +inputFarmingLvl > 120) {
      return setError('Enter a valid level!');
    } else if (
      inputMagicLvl &&
      +inputMagicLvl &&
      inputFarmingLvl &&
      +inputFarmingLvl
    ) {
      const userData = JSON.parse(localStorage.getItem('efficient_farm_runs')!);
      userData.levels.magicLvl = +inputMagicLvl;
      userData.levels.farmingLvl = +inputFarmingLvl;

      localStorage.setItem('efficient_farm_runs', JSON.stringify(userData));
    } else {
      return setError('Enter Your Levels!');
    }
    navigate(path);
  };

  const setFormState = (magicLvl: string, farmingLvl: string) => {
    setMagicInput(magicLvl);
    setFarmingInput(farmingLvl);
  };

  const levelInputHandler = (value: string, skill: string) => {
    if (skill === 'm') {
      setMagicInput(value);
    } else {
      setFarmingInput(value);
    }
  };

  const enterSubmitHandler = (e: any) => {
    setError('');
    if (e.key === 'Enter' && e.shiftKey === false) {
      navHandler('/new-user/presets/1');
    }
  };

  useEffect(() => {
    const fetchUserData = localStorage.getItem('efficient_farm_runs');
    if (fetchUserData) {
      profileRef.current = JSON.parse(fetchUserData);
      if (profileRef.current && profileRef.current.levels)
        if (
          profileRef.current.levels.farmingLvl &&
          profileRef.current.levels.magicLvl
        ) {
          const farmLvl = profileRef.current.levels.farmingLvl.toString();
          const magicLvl = profileRef.current.levels.magicLvl.toString();
          if (+farmLvl && +magicLvl > 1) {
            setFormState(magicLvl, farmLvl);
          }
        }
      setTriggerLoading(true);
    }
  }, []);

  return (
    <main className='outer-wrapper'>
      <h2 className='preset-header'>
        <img
          id='qc-bubble'
          src='https://i.ibb.co/XkzpY53/Quick-chat-button.webp'
          alt='Quick Chat Icon'
        />
        What is your level in ...
      </h2>
      <div className='selections-wrapper'></div>
      <div id='levels-wrapper'>
        <img
          id='magic-icon'
          className='skill-icons'
          src='https://runescape.wiki/images/Magic.png?b0aca'
          alt=''
        />
        <input
          id='magic-lvl-input'
          className='level-input'
          value={magicInput}
          placeholder='1'
          maxLength={2}
          onChange={(e) => levelInputHandler(e.target.value, 'm')}
          onKeyDown={(e) => enterSubmitHandler(e)}
        ></input>
      </div>
      <div id='levels-wrapper'>
        <img
          id='farming-icon'
          className='skill-icons'
          src='https://runescape.wiki/images/Farming.png?fa1cf'
          alt=''
        />
        <input
          id='farming-lvl-input'
          className='level-input'
          value={farmingInput}
          placeholder='1'
          maxLength={3}
          onChange={(e) => levelInputHandler(e.target.value, 'f')}
          onKeyDown={(e) => enterSubmitHandler(e)}
        ></input>
      </div>
      <div id='error-msg'>{error}</div>
      <div className='dbl-btn-wrapper'>
        <button
          className='nis-button nis-button-alt'
          onClick={() => navigate('/new-user/profile/1')}
        >
          Back
        </button>
        <button
          className='nis-button'
          onClick={() => navHandler('/new-user/presets/1')}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default NewProfilePage2;
