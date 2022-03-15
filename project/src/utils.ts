import { MINUTES_IN_HOUR } from './const';

const getFilmRuntime = (filmRuntime: number) => {
  const hours = Math.floor(filmRuntime / MINUTES_IN_HOUR);
  const minutes = filmRuntime % MINUTES_IN_HOUR;

  return [hours, minutes];
};

const getRgbaColor = (color: string, opacity: number) => {
  const first = parseInt(color.slice(1, 3), 16) * opacity;
  const second = parseInt(color.slice(3, 5), 16) * opacity;
  const third = parseInt(color.slice(5), 16) * opacity;

  return (`rgba(${first},${second},${third},${opacity})`);
};

export { getFilmRuntime, getRgbaColor };
