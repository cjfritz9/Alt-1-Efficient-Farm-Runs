import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const userData = localStorage.getItem('efficient_farm_runs')

  const newPresetHandler = () => {
    navigate('/new-preset');
  };

  useEffect(() => {
    if (userData) {
      navigate('/home')
    } else {

    }
  })

  return (
    <main className='outer-wrapper'>
      <div>
        <button className='nis-button' onClick={newPresetHandler}>
          Create New Preset
        </button>
      </div>
    </main>
  );
};

export default Landing;
