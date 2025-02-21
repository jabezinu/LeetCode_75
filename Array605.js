var canPlaceFlowers = function(flowerbed, n) {
    // add zero infront and at the end of the array
    flowerbed = [0, ...flowerbed, 0];
    let len = flowerbed.length;
    let possibleOnes = 0;
    
    // make sure there is no one before and after some value i.
    for(let i = 1; i < len - 1; i++){
        if(flowerbed[i] == 0 && flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0){
            possibleOnes++;
            flowerbed[i] = 1;
        }
    }

    let result = (possibleOnes >= n)? true: false;

    return result;
};


console.log(canPlaceFlowers([0], n = 1))