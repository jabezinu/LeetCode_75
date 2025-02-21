var reverseVowels = function(s) {
    s = s.split("");
    let i = 0;
    let j = s.length - 1;
    let vowel = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

    // move pointer i and j until you get vowel.
    // once you get swap them.
    while(i < j){
        if(!vowel.has(s[i])) {
            i++;
        }else if(!vowel.has(s[j])) {
            j--;
        }else{
            [s[i], s[j]] = [s[j], s[i]];
            i++;
            j--;
        }
    }
    return s.join("");
  };

console.log(reverseVowels("IceCreAm"))

// Input: s = "IceCreAm"

// Output: "AceCreIm"