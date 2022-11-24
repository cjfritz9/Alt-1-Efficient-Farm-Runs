import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const userData = localStorage.getItem('efficient_farm_runs')

  const newUserHandler = () => {
    navigate('/new-user/profile');
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
        <button className='nis-button' onClick={newUserHandler}>
          Create New Profile
        </button>
      </div>
    </main>
  );
};

export default Landing;
