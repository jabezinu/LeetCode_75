// var maxOperations = function(nums, k) {
//     let count = 0;

//     for(let i = 0; i < nums.length; i++){
//         for(let j = 1 + i; j < nums.length; j++){
//             if(nums[i] + nums[j] == k) {
//                 count++;
//                 nums[i] = null;
//                 nums[j] = null;
//             }
//         }
//     }

//     return count;
// };

var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);

    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum == k){
            count++;
            left++;
            right--;
        }else if(sum > k){
            right--;
        }else{
            left++;
        }
    }

    return count;
};
Maximum Average Subarray I
console.log(maxOperations([3,1,3,4,3], 6))

// Input: nums = [1,2,3,4], k = 5
// Output: 2

// let dem0 = [1, 2, 3, null, 4, 5];
// let demo1 = 3;

// console.log(dem0 );