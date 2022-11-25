import axios from 'axios';

const proxyUrl = 'http://localhost:8010/proxy';

export const getUserLevels = async (username: string) => {
  try {
    const response = await fetch(
      `${proxyUrl}/runemetrics/profile/profile?user=${username}`
    );
    const data = await response.json();
    console.log(data);

    if (data) {
      if (data.skillvalues) {
        return data;
      }
      if (data.error) {
        console.log('FETCH ERROR: ', data.error);
        return data.error;
      }
    }
  } catch (error) {}
};
