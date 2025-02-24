var findDifference = function(nums1, nums2) {
    // create a set which we are going to stor the difference elementes
    // we make it set to avoid duplicate
    let st1 = new Set();
    let st2 = new Set();

    // add "i" in nums1 if it isn't found in nums2
    for (let i of nums1){
        if(!nums2.includes(i)){
            st1.add(i);
        }
    }

    // add "i" in nums2 if it isn't found in nums1
    for (let i of nums2){
        if(!nums1.includes(i)){
            st2.add(i);
        }
    }

    return [[...st1], [...st2]];
};

console.log(findDifference([1,2,3], [2,4,6]))