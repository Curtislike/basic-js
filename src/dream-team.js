const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(typeof(members) == 'undefined' || Array.isArray(members) == false){
    return false;
  }
  let teamName = [];
  for(let i = 0; i<members.length; i++){
    if(typeof(members[i]) != 'string'){
      continue;
    }
    let name = members[i];
    name = name.trim();
    name = name.toUpperCase();
    teamName.push(name[0]);
  }
  teamName.sort();
  teamName = teamName.join('');
  return teamName;
};
