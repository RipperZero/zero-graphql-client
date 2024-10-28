import { baseFindIndex } from "./baseFindIndex";
import { baseIsNaN } from "./baseIsNaN";
import { strictIndexOf } from "./strictIndexOf";

/**
 * The base implementation of `indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
export const baseIndexOf = (array, value, fromIndex) => {
  // eslint-disable-next-line no-self-compare
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
};
