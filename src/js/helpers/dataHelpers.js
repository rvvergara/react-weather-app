import {
  format,
} from 'date-fns';

const tempToDisplay = (unit, temp) => {
  const resultTemp = unit === 'C' ? temp : 9 / 5 * (temp) + 32;
  return Math.round(resultTemp, 0);
};

const parseDate = (date, today) => {
  const weatherDate = today ? format(new Date(date), "dddd MMMM DD, YYYY") : format(new Date(date), "dddd");
  return weatherDate;
};

export { tempToDisplay, parseDate };