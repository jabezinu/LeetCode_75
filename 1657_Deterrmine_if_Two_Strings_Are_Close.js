function closeStrings(word1, word2) {
    const map1 = helper(word1);
    const map2 = helper(word2);

    
    // check the strings have the same set of elements.
    for(let i = 0; i < map1.length; i++){
        if((map1[i] == 0 && map2[i] != 0) || (map1[i] != 0 && map2[i] == 0)){
            return false;
        }
    }

    // check the frequency and length of each strings.
    [map1, map2].forEach(m => m.sort((a, b) => a - b));

    return map1.join("") == map2.join("");
};

function helper(input){
    let map = Array(26).fill(0);
    for(let i = 0; i < input.length; i++){
        map[input.charCodeAt(i) - "a".charCodeAt(0)]++;
    }
    return map
}

console.log(closeStrings("abcc", "bcaz"))