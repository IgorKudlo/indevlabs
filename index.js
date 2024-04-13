/* Create hash table numberSet.  Then we go through all numbers in the range 
from the minimum to the maximum value in the original array. If a number 
is missing in the hash table, it means that it is missing and we store it 
in missingNumber. */

function getMissingNumber(arr) {
  if (arr.length <= 1) return;
  const numberSet = new Set(arr);
  let missingNumber;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    if (!numberSet.has(i)) {
      missingNumber = i;
      break;
    }
  }
  return missingNumber;
}

module.exports = getMissingNumber;
