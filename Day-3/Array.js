/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  let max = -Infinity; // Initialize max to the smallest possible value
  let secondMax = -Infinity; // Initialize secondMax to the smallest possible value

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secondMax = max; // Update secondMax to the previous max
      max = nums[i]; // Update max to the current number
    } else if (nums[i] > secondMax && nums[i] < max) {
      secondMax = nums[i]; // Update secondMax if the current number is between max and secondMax
    }
  }

  return secondMax; // Return the second largest number
}

const arr = [10, 324, 45, 90, 9808];

console.log(getSecondLargest(arr)); // Output: 324