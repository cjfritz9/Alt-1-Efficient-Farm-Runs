import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { enterSubmitHandler } from '../../../utils/helpers';

const NewProfilePage2: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const navHandler = (path: string) => {
    const { value: inputMagicLvl } = document.getElementById(
      'magic-lvl-input'
    )! as HTMLInputElement;
    const { value: inputFarmingLvl } = document.getElementById(
      'farming-lvl-input'
    )! as HTMLInputElement;
    if (
      inputMagicLvl &&
      inputFarmingLvl &&
      +inputMagicLvl &&
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

  return (
    <main className='outer-wrapper'>
      <h3 className='preset-header'>
        <img
          id='qc-bubble'
          src='https://i.ibb.co/XkzpY53/Quick-chat-button.webp'
          alt='Quick Chat Icon'
        />
        What is your level in ...
      </h3>
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
          placeholder='1'
          maxLength={2}
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
          placeholder='1'
          maxLength={3}
          // onKeyDown={(e) => enterSubmitHandler(e)}
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
          onClick={() => navHandler('/new-user/profile/3')}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default NewProfilePage2;
