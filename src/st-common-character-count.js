import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  if (s1.length === 0 || s2.length === 0) {
    return 0;
  }
  const arr1 = Array.from(s1);
  const arr2 = Array.from(s2);
  arr1.sort();
  arr2.sort();
  const result = [];
  for (let i = 0; i < arr1.length; ) {
    for (let j = 0; j < arr2.length; ) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        i += 1;
        j += 1;
      } else if (arr1[i] < arr2[j]) {
        i += 1;
      } else {
        j += 1;
      }
    }
  }
  return result.length;
}
