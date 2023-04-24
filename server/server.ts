require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/api/rs3/skills/:username', async (req, res) => {
  const { username } = req.params;
  console.log('username: ', username);

  await axios
    .get(
      `https://apps.runescape.com/runemetrics/profile/profile?user=${encodeURI(
        username
      )}&activities=0`,
      {
        headers: {
          'content-type': 'Application/json',
          'accept-encoding': '*'
        }
      }
    )
    .then((response) => {
      console.log(response.data);
      if (response.data.error) return res.send(response.data);
      const skills = response.data.skillvalues;
      const hasQuestCape =
        response.data.questsnotstarted === 0 &&
        response.data.questsstarted === 0
          ? true
          : false;
      console.log('tq: ', hasQuestCape, response.data.questscomplete);
      const desiredSkills = skills.filter((skill: any) => {
        return skill.id === 19 || skill.id === 6;
      });
      desiredSkills.forEach((skill: any) => {
        skill.skill = skill.id === 19 ? 'Farming' : 'Magic';
      });
      res.send({
        name: response.data.name,
        hasQuestCape,
        levels: desiredSkills
      });
    })
    .catch((err) => {
      console.error('error: ', err);
      res.send({ error: 'Unknown error, try again' });
    });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = { app };
