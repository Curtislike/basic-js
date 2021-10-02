import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error();
  }
  let month = date.getMonth();
  let currentSeason;
  switch (month) {
    case (11, 0, 1):
      currentSeason = "winter";
      break;
    case (2, 3, 4):
      currentSeason = "spring";
      break;
    case (5, 6, 7):
      currentSeason = "summer";
      break;
    case (8, 9, 10):
      currentSeason = "autumn";
      break;
  }
  return currentSeason;
}
