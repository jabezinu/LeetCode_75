var findMaxAverage = function(nums, k) {
    let sum = 0;
    let max = 0

    // getting the sum of the first "k" elements.
    for(let i = 0; i < k; i++){
        sum += nums[i];
    }

    max = sum;

    // adding one element from the right to "sum" and subtructing 
    // the first element from the left to "sum"
    for(let j = k; j < nums.length; j++){
        sum += nums[j] - nums[j - k];
        max = Math.max(sum, max)
    }

    return max / k;

};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000