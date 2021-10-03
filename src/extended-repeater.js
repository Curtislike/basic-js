import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (typeof str !== "string") str = String(str);
  if (options.addition === undefined) {
    options.addition = "";
  } else {
    if (typeof options.addition !== "string")
      options.addition = String(options.addition);
  }
  if (options.separator === undefined) options.separator = "+";
  if (options.additionSeparator === undefined) options.additionSeparator = "";
  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;
  let repeatedAddition =
    (options.addition + options.additionSeparator).repeat(
      options.additionRepeatTimes
    ) + options.addition;
  let transformedStr = str + repeatedAddition;
  let repeatedStr =
    (transformedStr + options.separator).repeat(options.repeatTimes - 1) +
    transformedStr;
  return repeatedStr;
}
