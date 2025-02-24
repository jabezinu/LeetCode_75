// i did this question with 28 minuites :D

var maxVowels = function(s, k){
    let vwlCount = 0;

    // checker if a charater is vowel
    function isVowel(car){
        if(car == "a" || car == "e" || car == "i" || car == "o" || car == "u"){
            return true;
        }
    }

    // taking the inital vowels in "k" elements of the string.
    for(let i = 0; i < k; i++){
        if(isVowel(s[i])) vwlCount++;
    }

    max = vwlCount;

    // cheking the number of string by sliding the substing 
    // by one ever time and update it if it is is greater.
    for(let j = k; j < s.length; j++){
        if(isVowel(s[j - k]) != true && isVowel(s[j]) == true){
            vwlCount++;
        }else if(isVowel(s[j - k]) == true && isVowel(s[j]) != true){
            vwlCount--;
        }

        max = Math.max(max, vwlCount);
    }

    return max;
};

console.log(maxVowels())

