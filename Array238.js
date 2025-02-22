var productExceptSelf = function(nums) {
    let ford = 1;
    let answer = [];
    let backd = 1;

    for(let i = 0; i < nums.length; i++){
        answer[i] = ford;
        ford *= nums[i];
    }

    for(let j = nums.length - 1; j > -1; j--){
        answer[j] *= backd;
        backd *= nums[j];
    }
    return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]))


