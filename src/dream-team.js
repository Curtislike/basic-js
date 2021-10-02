import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (typeof members == "undefined" || Array.isArray(members) == false) {
    return false;
  }
  let teamName = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] != "string") {
      continue;
    }
    let name = members[i];
    name = name.trim();
    name = name.toUpperCase();
    teamName.push(name[0]);
  }
  teamName.sort();
  teamName = teamName.join("");
  return teamName;
}
