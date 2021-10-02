import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  const arr = n.split("-").join("");
  const arr1 = arr.split("");
  for (let i = 0; i < arr1.length; ) {
    if (
      (typeof arr1[i] === "number" && arr1[i] <= 9) ||
      (typeof arr1[i] === "string" && arr1[i] <= "F")
    ) {
      ++i;
    } else {
      return false;
    }
  }
  return true;
}
