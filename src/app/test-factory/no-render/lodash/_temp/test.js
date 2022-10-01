import { concat } from "../concat";

const array = [1, 2, 3, 4];
const flattenArray = [1, [2, [3, [4]], 5], [[[6], 7]]];

console.log(concat([1], 2, [3], [[4]]));
