var increasingTriplet = function(nums) {
    let lowestpt = Infinity;
    let middlept = Infinity;

    // Greedy aproach
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < lowestpt) {
            lowestpt = nums[i];
        }else if(nums[i] < middlept){
            middlept = nums[i];
        }else{
            return true;
        }
    }
    return false;
};


console.log(increasingTriplet([1,2,3]))
console.log(increasingTriplet([2,1,5,0,4,6]))
console.log(increasingTriplet([20, 100, 10, 5, 13]))