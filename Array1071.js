// vhttps://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
var gcdOfStrings = function(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;

    if(str1 + str2 != str2 + str1){
        return "";
    }

    // Euclidean Algorithm
    const GCD = (a, b) => {
        if(a < b){
            [a, b] = [b, a]
        }
        while(b != 0){
            [a, b] = [b, a % b];
        }
        return a;
    }
    let gcdLength = GCD(len1, len2);

    return str1.substring(0, gcdLength)

};

console.log(gcdOfStrings("ABABAB", "AB"));