var compress = function(chars) {
    let loc = 0;
    for(let i = 0; i< chars.length; ){
        let tester = chars[i];
        let count = 0;
        while(i < chars.length && tester == chars[i]){
            count++;
            i++;
        }
        if(count == 1){
            chars[loc] = tester;
            loc++;
        }else{
            chars[loc] = tester;
            loc++;
            count = count.toString();
            for(let digit of count){
                chars[loc] = digit;
                loc++;
            }
        }
    }
    chars.length = loc
    return loc;
};
console.log(compress(["a","a","b","b","c","c","c"]))
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))