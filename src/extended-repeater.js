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

  if (!options.addition) {
    options.addition = "";
  } else {
    if (typeof options.addition !== "string")
      options.addition = String(options.addition);
  }
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "";
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

  let repeatedAddition = (options.addition + options.additionSeparator).repeat(
    options.additionRepeatTimes
  );

  let transformedStr = str + repeatedAddition;

  let repeatedStr =
    (transformedStr + options.separator).repeat(options.repeatTimes - 1) +
    transformedStr;

  // let repeatedStr =
  //   (transformedStr + (options.repeatTimes - 1)
  //     ? options.separator
  //     : ""
  //   ).repeat(options.repeatTimes - 1) + transformedStr;
  return repeatedStr;
}
