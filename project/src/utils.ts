import { MINUTES_IN_HOUR, MONTH_NAMES, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from './const';
import { DurationTypes } from './types/film-duration';

const getFilmRuntime = (filmRuntime: number) => {
  const hours = Math.floor(filmRuntime / MINUTES_IN_HOUR);
  const minutes = filmRuntime % MINUTES_IN_HOUR;

  return { hours, minutes };
};

const getRgbaColor = (color: string, opacity: number) => {
  const first = parseInt(color.slice(1, 3), 16) * opacity;
  const second = parseInt(color.slice(3, 5), 16) * opacity;
  const third = parseInt(color.slice(5), 16) * opacity;

  return (`rgba(${first},${second},${third},${opacity})`);
};

const getFilmDuration = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / SECONDS_IN_HOUR);
  const minutes = Math.floor((timeInSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const seconds = (timeInSeconds % SECONDS_IN_HOUR) % SECONDS_IN_MINUTE;
  return { hours, minutes, seconds };
};

const getDurationString = ({ hours, minutes, seconds }: DurationTypes) => {
  let hourString = (hours < 10) && hours ? '0' : '';
  let minuteString = minutes < 10 ? '0' : '';
  let secondString = seconds < 10 ? '0' : '';
  hourString += hours ? hours : '';
  minuteString += minutes ? minutes : '0';
  secondString += seconds ? seconds : '0';

  return `-${hourString}${hourString ? ':' : ''}${minuteString}:${secondString}`;
};

const getCommentDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = MONTH_NAMES[date.getMonth()];
  const dayNumber = date.getDay();
  const day = dayNumber < 10 ? `0${dayNumber}` : `${dayNumber}`;

  return `${month} ${day}, ${date.getFullYear()}`;
};

export { getFilmRuntime, getRgbaColor, getFilmDuration, getDurationString, getCommentDate };
