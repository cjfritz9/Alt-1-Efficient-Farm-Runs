import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Landing: React.FC = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const userData = localStorage.getItem('efficient_farm_runs');

  const newUserHandler = (path: string, manualEntry: boolean) => {
    const { value: username } = document.getElementById(
      'username-input'
    )! as HTMLInputElement;

    if (!manualEntry) {
      if (!username) {
        return setError('Enter A Valid Username');
      } else {
        localStorage.setItem('efr_api_username', username);
        localStorage.setItem('efr_user_data_pref', 'automate_entry');
      }
    } else {
      localStorage.setItem('efr_user_data_pref', 'manual_entry');
    }
    navigate(path);
  };

  useEffect(() => {
    if (userData) {
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
