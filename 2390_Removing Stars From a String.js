var removeStars = function(s) {
    let result = "";
    let count = 0;

    // identify the factors (s[i] (* or !*)) && count(0 or >0)
    // s[i](*) count(0)
    //   T        T   (if)
    //   T        F   (if)
    //   F        T   (else if)
    //   F        F   (else)
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] == "*"){
            count++;
        }else if(count == 0){
            result = s[i] + result
        }else{
            count--;
        }
    }

    return result;
};

console.log(removeStars("leet**cod*e"))