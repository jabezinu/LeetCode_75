var longestOnes = function (nums, k) {
    let i = 0;
    let j = 0;
    let max = 0;
    let sum = 0;

    // createing subarray with only "k" amounts of zero.
    while(j < nums.length + 1){
        if(k < 0){
            if(nums[i] == 0){
                i++;
                k++;
                continue;
            }else{
                i++;
                continue;
            }
            
        }
        sum = j - i;
        max = Math.max(sum, max);
        if(nums[j] == 1){
            j++;
        }else{
            k--;
            j++;
        }
    }

    return max;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))




