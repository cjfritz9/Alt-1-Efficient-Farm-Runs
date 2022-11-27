import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserData } from '../../../models/api-responses';

const NewProfilePage2: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const navHandler = (path: string) => {
    const inputMagicLvl = (
      document.getElementById('magic-lvl-input')! as HTMLInputElement
    ).value;
    const inputFarmingLvl = (
      document.getElementById('farming-lvl-input')! as HTMLInputElement
    ).value;
    if (inputMagicLvl && inputFarmingLvl) {
      const userData: UserData = JSON.parse(
        localStorage.getItem('efr_user_data')!
      );
      userData.levels.magicLvl = +inputMagicLvl;
      userData.levels.farmingLvl = +inputFarmingLvl;
      localStorage.setItem('efr_user_data', JSON.stringify(userData));
      navigate(path);
    } else {
      setError('Enter Your Levels!');
    }
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
      <div id='error-msg'>{error}</div>
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
        ></input>
      </div>
      <button
        className='nis-button'
        onClick={() => navHandler('/new-user/profile/3')}
      >
        Next
      </button>
    </main>
  );
};

export default NewProfilePage2;
