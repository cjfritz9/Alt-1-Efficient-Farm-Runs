const NewProfilePage3: React.FC = () => {
  return (
    <main className='outer-wrapper'>
      <h3 className='preset-header'>Farming Items</h3>
      <div id='farming-items-wrapper' className='selections-wrapper'>
        <div className='checkbox-label-wrapper'>
          <input
            id='magic-sec'
            type='checkbox'
            style={{ display: 'none' }}
          ></input>
          <img
            className='item-sprites'
            src='https://i.ibb.co/r32FDXz/Magic-Secateurs.png'
            alt='Magic Secateurs'
          />
          <label id='item-labels' className='checkbox-labels' htmlFor='magic-sec'>
            Magic Secateurs
          </label>
        </div>
      </div>
    </main>
  );
};

export default NewProfilePage3;
