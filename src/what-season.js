const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
    return 'Unable to determine the time of year!';
  }
  if(Object.prototype.toString.call(date) !== '[object Date]'){
    throw new Error();
  }
  let month = date.getMonth();
  let currentSeason;
  switch(month){
    case 11:
    case 0:
    case 1:
      currentSeason = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      currentSeason = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      currentSeason = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      currentSeason = 'autumn';
      break;
  }
  return currentSeason;
};
