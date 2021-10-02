import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const str = String(n);
  const arr = Array.from(str);
  const values = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr.slice();
    value.splice(i, 1);
    const joined = value.join("");
    values.push(Number(joined));
  }
  return Math.max.apply(null, values);
}
