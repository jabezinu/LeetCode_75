var uniqueOccurrences = function(arr) {
    let i = 0;
    let j = 0;
    let count = 0;
    let tester = [];

    //sort the given array
    arr.sort();

    //count the accurance of one element and add the amount
    // in to another array check their is no duplicate of that occurrences.
    while(j < arr.length + 1){
        if(arr[i] == arr[j]){
            count++;
            j++;
        }else{
            if(tester.includes(count)){
                return false;
            }else{
                tester.push(count);
            }
            i = j;
            count = 0
        }
    }
    return true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3, 3]))