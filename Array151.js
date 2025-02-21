var reverseWords = function(s) {
    s = s.replace(/\s+/g, " ").trim();  
    s = s.split(" ");
    let i = 0; 
    let j = s.length - 1;

    while(i < j){
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }

    return s.join(" ");
};
console.log(reverseWords("the sky is blue"))

// Input: s = "the sky is blue"
// Output: "blue is sky the"