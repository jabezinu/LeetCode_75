var pivotIndex = function(nums) {
    let tot = nums.reduce((x, y) => x + y, 0);
    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < nums.length; i++){
        rightSum = tot - leftSum - nums[i];
        if(rightSum == leftSum) return i;
        leftSum += nums[i]
    }

    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]))