var moveZeroes = function(nums) {
    let loc = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            nums[loc++] = nums[i];
        }
    }
    while(loc < nums.length){
        nums[loc++] = 0;
    }

    return nums
};

console.log(moveZeroes([0,1,0,3,12]))

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]