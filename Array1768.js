// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
var mergeAlternately = function(word1, word2) {
    let x = 0;
    let merged = [];

    if(word1.length > word2.length){
        x = word1.length;
    }else{
        x = word2.length;
    }

    for(let i = 0; i < x; i++){
        if(word1[i] != undefined){
            merged.push(word1[i]);
        }
        if(word2[i] != undefined){
            merged.push(word2[i]);
        }
            

    }

    return merged.join("");
};

console.log(mergeAlternately("abc", "pqrtu"))

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

// let str = ["a", "b", "c"]

// console.log(str[6])