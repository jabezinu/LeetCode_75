var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    let count = 0;

    while(j < t.length){
        if(s[i] == t[j]){
            count++;
            i++;
        }
        j++;
    }

    return count == s.length;
};

console.log(isSubsequence("abc", "ahbgdc"))

// Input: s = "abc", t = "ahbgdc"
// Output: true