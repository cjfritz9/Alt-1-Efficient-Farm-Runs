import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import defaultProfile from '../utils/defaults';

const Landing: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const newUserHandler = (path: string, manualEntry: boolean) => {
    const { value: profileName } = document.getElementById(
      'username-input'
    )! as HTMLInputElement;

    if (!profileName) {
      return setError('Enter A Valid Name');
    } else {
      const newProfile = defaultProfile;
      newProfile.name = profileName;
      localStorage.setItem('efficient_farm_runs', JSON.stringify(newProfile));
    }

    navigate(path);
  };

  useEffect(() => {
    const prevData = localStorage.getItem('efficient_farm_runs');
    if (prevData) {
      navigate('/home');
    }
  });

  return (
    <main className='outer-wrapper'>
      <h3 className='preset-header'>Create New Profile</h3>
      <div id='levels-wrapper' className='selections-wrapper'>
        <label htmlFor='username-input'>Look Me Up! </label>
        <input
          id='username-input'
          placeholder='Username'
          maxLength={12}
        ></input>
        <div id='error-msg'>{error}</div>
      </div>
      <div className='dbl-button-wrapper'>
        <button
          className='nis-button nis-button-alt'
          onClick={() => newUserHandler('/new-user/profile/1', true)}
        >
          Manual Entry
        </button>
        <button
          className='nis-button'
          onClick={() => newUserHandler('/new-user/profile/3', false)}
        >
          Submit
        </button>
      </div>
    </main>
  );
};

export default Landing;
