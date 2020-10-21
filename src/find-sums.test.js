// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Examples:
// Input: integers = [2,7,11,15], target = 9
// Output: [0,1]

// Input: integers = [3,2,4], target = 6
// Output: [1,2]

// Input: integers = [3,3], target = 6
// Output: [0,1]



// Please complete your solution here:
const findSums = (integers, target) => {
  return;
};

describe('findSums tests', function() {
  it('should pass test suite', () => {
    expect(findSums([9, 4, 5, 2], 6)).toEqual([4, 2]);
    expect(findSums([3, 5, 4, 13, 7], 9)).toEqual([5, 4]);
    expect(findSums([4, 2], 8)).toEqual(undefined);
    expect(findSums([9, 5, 2, 4, 8], 17)).toEqual([9, 8]);
    expect(findSums([3, 1, 4, 7, 12], 13)).toEqual([1, 12]);
    expect(findSums([2, 3, 7, 5, 9], 8)).toEqual([3, 5]);
  });
});