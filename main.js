import { createContent } from "./create.js";

async function getTeams() {
  const RESPONSE = await fetch("https://stryk.herokuapp.com/strycket2022");
  const DATA = await RESPONSE.json();

  for (let i = 0; i < DATA.playedGames.length; i++) {
    createContent(
      DATA.playedGames[i].gameNumber,
      DATA.playedGames[i].teams[1].name,
      DATA.playedGames[i].teams[2].name,
      DATA.playedGames[i].teams[1].homepage,
      DATA.playedGames[i].teams[2].homepage,
      DATA.playedGames[i].outcome
    );
  }
}

getTeams();
