// var maxArea = function(height) {
//     let i = 0;
//     let j = height.length - 1;
//     let max = 0;

//     while(i != j){
//         let len = 0;
//         if(height[i] > height[j]){
//             len = height[j];
//         }else{
//             len = height[i]
//         }
//         let wid = j - i;
//         let product = wid * len;

//         if(max < product){
//             max = product;
//         }
//         i++;
//     }
//     while(i != j){
//         let len = 0;
//         if(height[i] > height[j]){
//             len = height[j];
//         }else{
//             len = height[i]
//         }
//         let wid = j - i;
//         let product = wid * len;

//         if(max < product){
//             max = product;
//         }
//         j--;
//     }
//     return max;
// };


var maxArea = function(height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;

    while (i < j) {
        // Calculate the width between the two lines
        let width = j - i;
        
        // Determine the height of the shorter line
        let minHeight = Math.min(height[i], height[j]);
        
        // Calculate the area
        let area = width * minHeight;
        
        // Update the maximum area if the current area is greater
        max = Math.max(max, area);
        
        // Move the pointer pointing to the shorter line inward
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([8,7,2,1]));