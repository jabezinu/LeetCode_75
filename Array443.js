/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function(chars) {
//     // let n = chars.length;
//     let idx = 0;
//     for (let i = 0; i < chars.length; i++) {
//         let ch = chars[i];
//         let count = 0;
//         while (i < chars.length && chars[i] === ch) {
//             count++;
//             i++;
//         }
//         if (count === 1) {
//             chars[idx++] = ch;// put only charactor
//         } else {
//             chars[idx++] = ch;//put the charactor 
//             for (let digit of count.toString()) {//put the amount in a single digit
//                 chars[idx++] = digit;
//             }
//         }
//         // a, a, a, b, b, c, c, c
//         //             i
//         // remember at this point the position of i is here doue to the i++ 
//         // in the for loop so we should decrease it by 1
//         i--;
//         // now it is like this
//         // a, a, a, b, b, c, c, c
//         //          i
//         //where it supposed to be :D
//     }
//     chars.length = idx;
//     return idx;
// };
// console.log(compress(["a","a","b","b","c","c","c"]))
// console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, ["a","2","b","2","c","3"]


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