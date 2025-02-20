var productExceptSelf = function(nums) {
    let answer = [];

    for(let i = 0; i < nums.length; i++){
        let prodt = 1;
        for(let j = 0; j < nums.length; j++){
            if(j == i){
                continue;
            }else{
                prodt *= nums[j];
            }
        }
        if(prodt == -0 ){
            prodt = 0;
        }
        answer.push(prodt);
    }

    return answer;
};

// console.log(productExceptSelf([1,2,3,4]));
// console.log(productExceptSelf([-1,1,0,-3,3]));

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// var productExceptSelf = function(nums) {
//     let prodt = 1;
//     let answer = [];

//     for(let i = 0; i < nums.length; i++){
//         prodt *= nums[i];
//     }
//     for(let j = 0; j < nums.length; j++){
//         answer.push(prodt / nums[j]);
//     }

//     return answer;
// };

// console.log(productExceptSelf([1,2,3,4]));
// console.log(productExceptSelf([-1,1,0,-3,3]));

// var productExceptSelf = function(nums) {
//     let prefx = [];
//     let pre = 1;

//     for(let i = 0; i < nums.length; i++){
//         prefx[i] = pre;
//         pre *= nums[i];
//     }
//     let sufx = [];
//     let suf = 1;

//     for(let j = nums.length - 1; j >= 0; j--){
//         sufx[j] = suf;
//         suf *= nums[j];
//     }
//     let answer = [];

//     for(let k = 0; k < nums.length; k++){
//         answer[k] = prefx[k] * sufx[k]
//     }

//     return answer;

// };

// console.log(productExceptSelf([1, 2, 3, 4]))




// var productExceptSelf = function(nums) {
//     let prefx = [];
//     let pre = 1;
//     let sufx = [];
//     let suf = 1;
//     let answer = [];

//     for(let i = 0; i < nums.length; i++){
//         pre *= nums[i]
//         prefx[i] = pre;
//     }

//     for(let j = nums.length - 1; j >= 0; j--){
//         suf *= nums[j];
//         sufx[j] = suf;
//     }

//     for(let k = 0; k < nums.length; k++){
//         if(prefx[k - 1] == undefined){
//             answer[k] = sufx[k + 1];
//         }else if(sufx[k + 1] == undefined){
//             answer[k] = prefx[k - 1];
//         }else{
//             answer[k] = prefx[k - 1] * sufx[k + 1]
//         }
        
//     }

//     return answer;

// };

// console.log(productExceptSelf([1, 2, 3, 4]))




// var productExceptSelf = function(nums) {
//     let pre = 1;
//     let prefx = [];
//     let suf = 1;
//     let sufx = [];
//     let answer = [];


//     for(let i = 0; i < nums.length; i++){
//         pre *= nums[i];
//         prefx[i] = pre;
//     }

//     for(let j = nums.length - 1; j > -1; j--){
//         suf *= nums[j];
//         sufx[j] = suf;
//     }

//     for(let k = 0; k < nums.length; k++){
//         if(prefx[k - 1] == undefined){
//             answer[k] = sufx[k + 1];
//         }else if(sufx[k + 1] == undefined){
//             answer[k] = prefx[k - 1];
//         }else{
//             answer[k] = prefx[k - 1] * sufx[k + 1];
//         }
//     }
//     return answer;
// };

// console.log(productExceptSelf([1, 2, 3, 4]))
// console.log(productExceptSelf([-1,1,0,-3,3]))

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


