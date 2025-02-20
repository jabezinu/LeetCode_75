// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;

    for(let i = 0; i < candies.length; i++){
        if(candies[i] > max){
            max = candies[i];
        }
    }
    let result = [];
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= max){
            result.push(true);//since it is boolean you shouldn't say "true"
        }else{
            result.push(false);
        }
    }

    return result;
};
console.log(kidsWithCandies([2,3,5,1,3], 3))

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true] 