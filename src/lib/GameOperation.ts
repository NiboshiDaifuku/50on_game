import { game_theme } from "./Database";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const getGameTheme = () => {
  const index = getRandomInt(game_theme.length);
  return game_theme[index];
};
